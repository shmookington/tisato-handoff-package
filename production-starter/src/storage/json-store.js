import { promises as fs } from "node:fs";
import { dirname } from "node:path";

const writeQueues = new Map();

export async function readJsonFile(filePath, fallback) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") return structuredClone(fallback);
    throw error;
  }
}

export async function writeJsonFile(filePath, value) {
  await fs.mkdir(dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await fs.rename(tempPath, filePath);
}

export async function mutateJsonFile(filePath, fallback, mutator) {
  const previous = writeQueues.get(filePath) || Promise.resolve();
  const operation = previous
    .catch(() => undefined)
    .then(async () => {
      const current = await readJsonFile(filePath, fallback);
      const mutation = await mutator(current);
      await writeJsonFile(filePath, mutation.nextValue);
      return mutation.result;
    });

  writeQueues.set(filePath, operation);
  return operation;
}

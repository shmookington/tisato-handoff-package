import { promises as fs } from "node:fs";
import { join } from "node:path";
import { config } from "../config.js";
import { createId, formatTimestampForFile } from "../utils/ids.js";
import { mutateJsonFile, readJsonFile } from "./json-store.js";

const emailLogPath = join(config.dataDir, "email-log.json");
const outboxDir = join(config.dataDir, "outbox");

export async function getEmailLog() {
  return readJsonFile(emailLogPath, []);
}

export async function addOutboxMessage(message) {
  await fs.mkdir(outboxDir, { recursive: true });

  const id = createId("email");
  const safeTemplate = String(message.template || "message").replace(/[^a-z0-9-]/gi, "-");
  const fileName = `${formatTimestampForFile()}-${safeTemplate}-${id}.html`;
  const filePath = join(outboxDir, fileName);

  await fs.writeFile(filePath, message.html, "utf8");

  const record = {
    id,
    to: message.to,
    subject: message.subject,
    template: message.template,
    bookingId: message.bookingId || null,
    fileName,
    status: "queued",
    createdAt: new Date().toISOString(),
  };

  await mutateJsonFile(emailLogPath, [], async (messages) => ({
    nextValue: [record, ...messages].slice(0, 2000),
    result: record,
  }));

  return record;
}

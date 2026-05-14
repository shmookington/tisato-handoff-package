import { join } from "node:path";
import { config } from "../config.js";
import { createId } from "../utils/ids.js";
import { mutateJsonFile, readJsonFile } from "./json-store.js";

const auditPath = join(config.dataDir, "audit-log.json");

export async function getAuditEvents() {
  return readJsonFile(auditPath, []);
}

export async function recordAuditEvent(type, details = {}) {
  const event = {
    id: createId("audit"),
    type,
    details,
    createdAt: new Date().toISOString(),
  };

  await mutateJsonFile(auditPath, [], async (events) => ({
    nextValue: [event, ...events].slice(0, 2000),
    result: event,
  }));

  return event;
}

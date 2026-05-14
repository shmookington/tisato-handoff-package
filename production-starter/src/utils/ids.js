import { randomUUID } from "node:crypto";

export function createId(prefix = "id") {
  const timestamp = Date.now().toString(36).toUpperCase();
  const entropy = randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `${prefix}_${timestamp}_${entropy}`;
}

export function formatTimestampForFile(date = new Date()) {
  return date.toISOString().replaceAll(":", "-").replaceAll(".", "-");
}

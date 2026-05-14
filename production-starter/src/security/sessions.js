import { createHmac, timingSafeEqual } from "node:crypto";
import { config } from "../config.js";

function encodeJson(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function decodeJson(value) {
  return JSON.parse(Buffer.from(value, "base64url").toString("utf8"));
}

function sign(value) {
  return createHmac("sha256", config.adminSessionSecret).update(value).digest("base64url");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left || ""));
  const rightBuffer = Buffer.from(String(right || ""));
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function createSession(admin) {
  const payload = encodeJson({
    sub: admin.email,
    role: "admin",
    iat: Date.now(),
    exp: Date.now() + config.adminSessionTtlMs,
  });
  return `${payload}.${sign(payload)}`;
}

export function verifySession(token) {
  if (!token || !token.includes(".")) return null;
  const [payload, signature] = token.split(".");
  if (!safeEqual(sign(payload), signature)) return null;

  try {
    const decoded = decodeJson(payload);
    if (!decoded.exp || decoded.exp < Date.now()) return null;
    return {
      email: decoded.sub,
      role: decoded.role,
    };
  } catch {
    return null;
  }
}

import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "tisato_admin_session";

function getJwtSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  return new TextEncoder().encode(secret);
}

export async function verifyAdminPassword(password) {
  if (!process.env.ADMIN_PASSWORD_HASH) {
    throw new Error("ADMIN_PASSWORD_HASH is not configured.");
  }

  throw new Error(
    "Connect verifyAdminPassword to bcrypt, Argon2, Supabase Auth, Clerk, or another approved auth provider."
  );
}

export async function createAdminSession() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getJwtSecret());
}

export async function readAdminSession(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const token = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    return payload.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}

export function buildAdminCookie(token) {
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;
}

export function buildLogoutCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}


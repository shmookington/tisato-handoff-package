import { config } from "../config.js";
import { parseCookies, setCookie } from "../http/cookies.js";
import { checkRateLimit, getClientIp } from "../security/rate-limit.js";
import { createSession, verifySession } from "../security/sessions.js";
import { safeCompareText, verifyPassword } from "../security/passwords.js";
import { cleanText } from "../utils/sanitize.js";

function verifyAdminPassword(password) {
  if (config.adminPasswordHash) return verifyPassword(password, config.adminPasswordHash);
  if (config.adminPassword) return safeCompareText(password, config.adminPassword);
  return false;
}

export async function loginAdmin(request, response, input = {}) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`admin-login:${ip}`, {
    limit: 10,
    windowMs: 1000 * 60 * 15,
  });

  if (!limit.allowed) {
    return {
      status: 429,
      body: {
        success: false,
        error: "Too many admin login attempts. Wait before trying again.",
      },
    };
  }

  if (!config.adminPasswordHash && !config.adminPassword) {
    return {
      status: 503,
      body: {
        success: false,
        error: "Admin password is not configured. Set ADMIN_PASSWORD_HASH before launch.",
      },
    };
  }

  const email = cleanText(input.email, 254).toLowerCase();
  const password = String(input.password || "");

  if (email !== config.adminEmail.toLowerCase() || !verifyAdminPassword(password)) {
    return {
      status: 401,
      body: {
        success: false,
        error: "Invalid admin credentials.",
      },
    };
  }

  const admin = {
    email: config.adminEmail,
    role: "admin",
  };

  setCookie(response, config.cookieName, createSession(admin), {
    httpOnly: true,
    sameSite: "Lax",
    secure: config.publicOrigin.startsWith("https://"),
    path: "/",
    maxAge: Math.floor(config.adminSessionTtlMs / 1000),
  });

  return {
    status: 200,
    body: {
      success: true,
      admin,
    },
  };
}

export function logoutAdmin(response) {
  setCookie(response, config.cookieName, "", {
    httpOnly: true,
    sameSite: "Lax",
    secure: config.publicOrigin.startsWith("https://"),
    path: "/",
    maxAge: 0,
  });
}

export async function requireAdmin(request) {
  const cookies = parseCookies(request);
  const session = verifySession(cookies[config.cookieName]);
  if (!session || session.email.toLowerCase() !== config.adminEmail.toLowerCase()) return null;
  return session;
}

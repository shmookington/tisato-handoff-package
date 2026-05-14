import { NextResponse } from "next/server";
import {
  buildAdminCookie,
  createAdminSession,
  verifyAdminPassword,
} from "../../../../lib/auth.js";
import { checkRateLimit } from "../../../../lib/rate-limit.js";

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const rate = checkRateLimit(`admin-login:${ip}`, {
    max: 8,
    windowMs: 30 * 60 * 1000,
  });

  if (!rate.allowed) {
    return NextResponse.json(
      { success: false, error: "Too many login attempts." },
      { status: 429 }
    );
  }

  const { password } = await request.json();
  const valid = await verifyAdminPassword(password);

  if (!valid) {
    return NextResponse.json(
      { success: false, error: "Invalid credentials." },
      { status: 401 }
    );
  }

  const token = await createAdminSession();
  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", buildAdminCookie(token));
  return response;
}


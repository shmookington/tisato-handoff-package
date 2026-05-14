import { NextResponse } from "next/server";
import { readAdminSession } from "../../../../lib/auth.js";
import { listBookingRecords } from "../../../../lib/database.js";

export async function GET(request) {
  const session = await readAdminSession(request);

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  const bookings = await listBookingRecords();
  return NextResponse.json({ success: true, bookings });
}


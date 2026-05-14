import { NextResponse } from "next/server";
import { readAdminSession } from "../../../../../lib/auth.js";
import { updateBookingRecord } from "../../../../../lib/database.js";
import { recordBookingStatusChange } from "../../../../../lib/audit-log.js";

const ALLOWED_STATUSES = new Set([
  "pending",
  "reviewed",
  "confirmed",
  "needs_information",
  "cancelled",
  "completed",
]);

export async function PATCH(request, context) {
  const session = await readAdminSession(request);

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  const { id } = context.params;
  const payload = await request.json();
  const status = String(payload.status || "").trim();
  const internalNote = String(payload.internalNote || "").trim();

  if (!ALLOWED_STATUSES.has(status)) {
    return NextResponse.json(
      { success: false, error: "Invalid booking status." },
      { status: 400 }
    );
  }

  const updated = await updateBookingRecord(id, {
    status,
    internalNote,
    reviewedAt: new Date().toISOString(),
    reviewedBy: session.sub || "admin",
  });

  await recordBookingStatusChange({
    bookingId: id,
    status,
    adminId: session.sub || "admin",
    note: internalNote,
  });

  return NextResponse.json({ success: true, booking: updated });
}


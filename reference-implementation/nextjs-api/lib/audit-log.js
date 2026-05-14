import { appendAuditEvent } from "./database.js";

export async function recordBookingStatusChange({ bookingId, status, adminId, note }) {
  return appendAuditEvent({
    type: "booking.status_changed",
    bookingId,
    status,
    adminId,
    note: note || "",
    createdAt: new Date().toISOString(),
  });
}


import { NextResponse } from "next/server";
import { createBookingId } from "../../../lib/booking-ids.js";
import { validateBookingPayload } from "../../../lib/booking-validation.js";
import { createBookingRecord } from "../../../lib/database.js";
import {
  sendDispatchNewBooking,
  sendPassengerConfirmation,
} from "../../../lib/email-service.js";
import { checkRateLimit } from "../../../lib/rate-limit.js";

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const rate = checkRateLimit(`booking:${ip}`);
  if (!rate.allowed) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please call dispatch for help." },
      { status: 429 }
    );
  }

  const payload = await request.json();
  const validation = validateBookingPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      { success: false, errors: validation.errors },
      { status: 400 }
    );
  }

  const now = new Date().toISOString();
  const booking = {
    id: createBookingId(),
    status: "pending",
    source: "website",
    passenger: {
      name: validation.data.name,
      phone: validation.data.phone,
      email: validation.data.email,
      mobility: validation.data.mobility,
    },
    trip: {
      pickup: validation.data.pickup,
      destination: validation.data.destination,
      date: validation.data.date,
      time: validation.data.time,
      type: validation.data.tripType,
    },
    insurance: validation.data.insurance,
    notes: validation.data.notes,
    consent: {
      sms: validation.data.smsConsent,
      email: true,
      capturedAt: now,
      source: "website booking form",
    },
    createdAt: now,
    updatedAt: now,
  };

  await createBookingRecord(booking);

  const emailResults = await Promise.allSettled([
    sendDispatchNewBooking(booking),
    sendPassengerConfirmation(booking),
  ]);

  const failedEmailCount = emailResults.filter((result) => result.status === "rejected").length;

  return NextResponse.json({
    success: true,
    bookingId: booking.id,
    message: "Ride request received. Dispatch will confirm availability.",
    notifications: {
      attempted: emailResults.length,
      failed: failedEmailCount,
    },
  });
}


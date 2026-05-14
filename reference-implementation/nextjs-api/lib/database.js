export async function createBookingRecord(booking) {
  throw new Error("Implement createBookingRecord with the client's chosen database.");
}

export async function listBookingRecords() {
  throw new Error("Implement listBookingRecords with the client's chosen database.");
}

export async function updateBookingRecord(id, updates) {
  throw new Error("Implement updateBookingRecord with the client's chosen database.");
}

export async function appendAuditEvent(event) {
  throw new Error("Implement appendAuditEvent with the client's chosen database.");
}

export function mapBookingToDatabaseRow(booking) {
  return {
    id: booking.id,
    status: booking.status,
    source: booking.source,
    passenger_name: booking.passenger.name,
    passenger_phone: booking.passenger.phone,
    passenger_email: booking.passenger.email,
    mobility_needs: booking.passenger.mobility,
    pickup_address: booking.trip.pickup,
    destination_address: booking.trip.destination,
    ride_date: booking.trip.date,
    ride_time: booking.trip.time,
    trip_type: booking.trip.type,
    insurance: booking.insurance,
    notes: booking.notes,
    sms_consent: booking.consent.sms,
    email_consent: booking.consent.email,
    consent_captured_at: booking.consent.capturedAt,
    created_at: booking.createdAt,
    updated_at: booking.updatedAt,
  };
}


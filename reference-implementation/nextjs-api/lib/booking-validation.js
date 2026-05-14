const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function cleanString(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim();
}

export function validateBookingPayload(payload) {
  const errors = {};
  const normalized = {
    name: cleanString(payload.name),
    phone: cleanString(payload.phone),
    email: cleanString(payload.email).toLowerCase(),
    mobility: cleanString(payload.mobility) || "Not specified",
    pickup: cleanString(payload.pickup),
    destination: cleanString(payload.destination),
    date: cleanString(payload.date),
    time: cleanString(payload.time),
    tripType: cleanString(payload.tripType) || "One-way",
    insurance: cleanString(payload.insurance) || "Not specified",
    notes: cleanString(payload.notes),
    smsConsent: Boolean(payload.smsConsent),
  };

  if (!normalized.name) errors.name = "Full name is required.";
  if (!normalized.phone) errors.phone = "Phone number is required.";
  if (!normalized.email) errors.email = "Email is required.";
  if (normalized.email && !EMAIL_PATTERN.test(normalized.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!normalized.pickup) errors.pickup = "Pickup address is required.";
  if (!normalized.destination) errors.destination = "Destination address is required.";
  if (!normalized.date) errors.date = "Ride date is required.";
  if (!normalized.time) errors.time = "Ride time is required.";

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    data: normalized,
  };
}


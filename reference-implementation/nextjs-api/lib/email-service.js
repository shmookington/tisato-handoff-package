export async function sendDispatchNewBooking(booking) {
  return sendEmail({
    to: process.env.DISPATCH_EMAIL,
    subject: `New Ride Request: ${booking.id}`,
    template: "dispatch-new-booking",
    data: booking,
  });
}

export async function sendPassengerConfirmation(booking) {
  return sendEmail({
    to: booking.passenger.email,
    subject: `TISATO received your ride request ${booking.id}`,
    template: "passenger-confirmation",
    data: booking,
  });
}

export async function sendEmail(message) {
  if (!process.env.EMAIL_API_KEY) {
    throw new Error("EMAIL_API_KEY is not configured.");
  }

  throw new Error(
    `Connect sendEmail to the selected provider before production. Pending template: ${message.template}`
  );
}


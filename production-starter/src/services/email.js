import { config } from "../config.js";
import { addOutboxMessage } from "../storage/outbox-store.js";
import {
  dispatchBookingTemplate,
  passengerConfirmationTemplate,
  statusUpdateTemplate,
} from "../templates/email-templates.js";

async function queueTemplate({ booking, to, template, rendered }) {
  return addOutboxMessage({
    to,
    template,
    bookingId: booking.id,
    subject: rendered.subject,
    html: rendered.html,
  });
}

export async function sendBookingCreatedEmails(booking) {
  const queued = [];

  queued.push(
    await queueTemplate({
      booking,
      to: config.dispatchEmail,
      template: "dispatch-booking-created",
      rendered: dispatchBookingTemplate(booking),
    })
  );

  if (booking.passenger.email) {
    queued.push(
      await queueTemplate({
        booking,
        to: booking.passenger.email,
        template: "passenger-booking-confirmation",
        rendered: passengerConfirmationTemplate(booking),
      })
    );
  }

  return queued;
}

export async function sendBookingStatusEmail(booking) {
  if (!booking.passenger.email) return null;

  return queueTemplate({
    booking,
    to: booking.passenger.email,
    template: "passenger-status-update",
    rendered: statusUpdateTemplate(booking),
  });
}

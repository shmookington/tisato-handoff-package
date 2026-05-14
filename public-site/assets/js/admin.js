const STORAGE_KEY = "tisato_demo_bookings";

function readBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

function render() {
  const bookings = readBookings();
  const tbody = document.querySelector("#bookingRows");
  const total = document.querySelector("#metricTotal");
  const pending = document.querySelector("#metricPending");
  const recurring = document.querySelector("#metricRecurring");

  total.textContent = bookings.length;
  pending.textContent = bookings.filter((booking) => booking.status === "Pending").length;
  recurring.textContent = bookings.filter((booking) => booking.tripType === "Recurring").length;

  if (!bookings.length) {
    tbody.innerHTML = `<tr><td colspan="7">No demo bookings yet. Submit the public booking form or seed a sample request.</td></tr>`;
    return;
  }

  tbody.innerHTML = bookings.map((booking) => `
    <tr>
      <td>${booking.id}</td>
      <td>${booking.name}<br><small>${booking.email}</small></td>
      <td>${booking.phone}</td>
      <td>${booking.date} ${booking.time}</td>
      <td>${booking.pickup}</td>
      <td>${booking.destination}</td>
      <td>${booking.status}</td>
    </tr>
  `).join("");
}

document.querySelector("#seedDemo")?.addEventListener("click", () => {
  const bookings = readBookings();
  bookings.unshift({
    id: `TSC-${Math.floor(10000 + Math.random() * 90000)}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
    name: "Sample Passenger",
    phone: "(844) 884-7286",
    email: "info@tisatotransportationservices.com",
    mobility: "Wheelchair",
    pickup: "4071 LB McLeod Rd, Orlando, FL",
    destination: "Central Florida Medical Center",
    date: new Date().toISOString().slice(0, 10),
    time: "09:30",
    tripType: "Recurring",
    insurance: "Verification needed",
    notes: "Demo request for handoff review.",
    smsConsent: true,
  });
  writeBookings(bookings);
  render();
});

document.querySelector("#clearDemo")?.addEventListener("click", () => {
  writeBookings([]);
  render();
});

render();

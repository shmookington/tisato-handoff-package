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

function serializeForm(form) {
  const data = new FormData(form);
  return {
    id: `TSC-${Math.floor(10000 + Math.random() * 90000)}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
    name: data.get("name"),
    phone: data.get("phone"),
    email: data.get("email"),
    mobility: data.get("mobility") || "Not specified",
    pickup: data.get("pickup"),
    destination: data.get("destination"),
    date: data.get("date"),
    time: data.get("time"),
    tripType: data.get("tripType"),
    insurance: data.get("insurance") || "Not specified",
    notes: data.get("notes") || "",
    smsConsent: data.get("smsConsent") === "on",
  };
}

const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bookings = readBookings();
    bookings.unshift(serializeForm(bookingForm));
    writeBookings(bookings);
    window.location.href = bookingForm.getAttribute("action");
  });
}

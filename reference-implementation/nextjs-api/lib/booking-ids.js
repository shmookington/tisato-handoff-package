export function createBookingId(random = Math.random) {
  const number = Math.floor(10000 + random() * 90000);
  return `TSC-${number}`;
}


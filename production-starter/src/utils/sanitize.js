const SPACE_PATTERN = /\s+/g;

export function cleanText(value, maxLength = 500) {
  return String(value || "")
    .replace(SPACE_PATTERN, " ")
    .trim()
    .slice(0, maxLength);
}

export function normalizeEmail(value) {
  return cleanText(value, 254).toLowerCase();
}

export function normalizePhone(value) {
  return String(value || "")
    .replace(/[^\d+().\-\s]/g, "")
    .replace(SPACE_PATTERN, " ")
    .trim()
    .slice(0, 40);
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function toBoolean(value) {
  return value === true || value === "true" || value === "on" || value === "yes";
}

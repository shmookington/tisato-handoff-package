export function parseCookies(request) {
  const header = request.headers.cookie || "";
  return Object.fromEntries(
    header
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const [name, ...valueParts] = item.split("=");
        return [decodeURIComponent(name), decodeURIComponent(valueParts.join("="))];
      })
  );
}

export function setCookie(response, name, value, options = {}) {
  const parts = [`${encodeURIComponent(name)}=${encodeURIComponent(value)}`];
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.secure) parts.push("Secure");
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (options.path) parts.push(`Path=${options.path}`);
  if (Number.isFinite(options.maxAge)) parts.push(`Max-Age=${options.maxAge}`);
  response.setHeader("Set-Cookie", parts.join("; "));
}

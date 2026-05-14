const buckets = new Map();

export function checkRateLimit(key, { max = 5, windowMs = 60 * 60 * 1000 } = {}) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now - bucket.startedAt > windowMs) {
    buckets.set(key, { count: 1, startedAt: now });
    return { allowed: true };
  }

  if (bucket.count >= max) {
    return { allowed: false, retryAfterMs: windowMs - (now - bucket.startedAt) };
  }

  bucket.count += 1;
  return { allowed: true };
}


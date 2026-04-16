/**
 * Simple in-memory sliding-window rate limiter per IP.
 * Best-effort only: not shared across serverless instances.
 */

type Bucket = number[];

const buckets = new Map<string, Bucket>();

const WINDOW_MS_DEFAULT = 15 * 60 * 1000;
const MAX_DEFAULT = 5;

function getWindowMs() {
  const raw = process.env.CONTACT_RATE_LIMIT_WINDOW_MS;
  const n = raw ? Number.parseInt(raw, 10) : WINDOW_MS_DEFAULT;
  return Number.isFinite(n) && n > 0 ? n : WINDOW_MS_DEFAULT;
}

function getMax() {
  const raw = process.env.CONTACT_RATE_LIMIT_MAX;
  const n = raw ? Number.parseInt(raw, 10) : MAX_DEFAULT;
  return Number.isFinite(n) && n > 0 ? n : MAX_DEFAULT;
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = getWindowMs();
  const max = getMax();

  const prev = buckets.get(ip) ?? [];
  const cutoff = now - windowMs;
  const recent = prev.filter((t) => t > cutoff);

  if (recent.length >= max) {
    buckets.set(ip, recent);
    return true;
  }

  recent.push(now);
  buckets.set(ip, recent);
  return false;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp?.trim()) return realIp.trim();
  return "unknown";
}

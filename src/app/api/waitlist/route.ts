import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = waitlistSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.issues[0]?.message || "Invalid data.";
    return NextResponse.json(
      { success: false, error: firstError },
      { status: 400 }
    );
  }

  const data = result.data;

  const sheetsUrl = process.env.GOOGLE_SHEETS_URL;
  if (sheetsUrl) {
    try {
      const res = await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          role: data.role === "Other" ? `Other: ${data.roleOther}` : data.role,
          k8sExperience: data.k8sExperience,
          painPoints: data.painPoints.join("; "),
          features: data.features.join("; "),
          sandboxInterest: data.sandboxInterest,
          email: data.email,
          phone: data.phone ? `'${data.phone}` : "",
          company: data.company || "",
          referralSource: data.referralSource || "",
        }),
      });

      if (!res.ok) {
        console.error("Google Sheets error:", res.status, await res.text());
        return NextResponse.json(
          { success: false, error: "Failed to save your submission. Please try again." },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Google Sheets fetch error:", err);
      return NextResponse.json(
        { success: false, error: "Failed to save your submission. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.log("Waitlist submission (no GOOGLE_SHEETS_URL configured):", data);
  }

  return NextResponse.json({ success: true });
}

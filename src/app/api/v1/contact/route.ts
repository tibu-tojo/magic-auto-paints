import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact";
import { business } from "@/lib/site";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt < now) { attempts.set(key, { count: 1, resetAt: now + WINDOW_MS }); return false; }
  current.count += 1;
  return current.count > MAX_ATTEMPTS;
}

export async function POST(request: Request): Promise<NextResponse> {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return NextResponse.json({ message: "Request could not be verified." }, { status: 403 });
    } catch {
      return NextResponse.json({ message: "Request could not be verified." }, { status: 403 });
    }
  }
  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(clientKey)) return NextResponse.json({ message: "Too many attempts. Please try again later." }, { status: 429 });
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Check the form and try again." }, { status: 422 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ message: "Online delivery is not configured yet." }, { status: 503 });
  try {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL ?? "Magic Auto Paint <onboarding@resend.dev>", to: [process.env.CONTACT_TO_EMAIL ?? business.email], reply_to: parsed.data.email, subject: `Website quote request from ${parsed.data.name}`, text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || "Not provided"}\n\n${parsed.data.message}` }) });
    if (!response.ok) throw new Error("Email provider rejected request");
    return NextResponse.json({ message: "Thank you. Your enquiry has been sent." }, { status: 200 });
  } catch { return NextResponse.json({ message: "Delivery is temporarily unavailable." }, { status: 502 }); }
}

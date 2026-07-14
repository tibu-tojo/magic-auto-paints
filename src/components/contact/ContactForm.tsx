"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

import { business } from "@/lib/site";

type FormStatus = { type: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending your enquiry…" });
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""), message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    };
    try {
      const response = await fetch("/api/v1/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to send your enquiry.");
      form.reset();
      setStatus({ type: "success", message: result.message ?? "Thank you. We’ll get back to you shortly." });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unable to send your enquiry.";
      setStatus({ type: "error", message: `${message} You can email us directly at ${business.email}.` });
    }
  }

  return (
    <form className="surface grid gap-5 p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">Name *<input className="form-control" name="name" autoComplete="name" minLength={2} maxLength={80} required /></label>
        <label className="form-label">Email *<input className="form-control" name="email" type="email" autoComplete="email" maxLength={160} required /></label>
      </div>
      <label className="form-label">Contact number<input className="form-control" name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
      <label className="form-label">Tell us about the repair *<textarea className="form-control min-h-40 resize-y" name="message" minLength={10} maxLength={2000} required /></label>
      <label className="flex items-start gap-3 text-sm leading-6 text-white/55"><input className="mt-1 h-4 w-4 accent-orange-500" name="consent" type="checkbox" required/><span>I agree that my details may be used to respond to this enquiry. *</span></label>
      <button className="button button-primary sm:justify-self-start" disabled={status.type === "sending"} type="submit">{status.type === "sending" ? <LoaderCircle className="animate-spin" size={17}/> : <ArrowRight size={17}/>} {status.type === "sending" ? "Sending" : "Send enquiry"}</button>
      <p className={`min-h-6 text-sm ${status.type === "error" ? "text-red-300" : status.type === "success" ? "text-green-300" : "text-white/45"}`} role="status" aria-live="polite">{status.message}</p>
    </form>
  );
}

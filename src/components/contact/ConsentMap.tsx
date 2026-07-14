"use client";

import { MapPin } from "lucide-react";
import { useSyncExternalStore } from "react";

import { cookiePreferenceEvent, cookiePreferenceKey, business } from "@/lib/site";

function readMapConsent(): boolean {
  try { return (JSON.parse(localStorage.getItem(cookiePreferenceKey) ?? "{}") as { maps?: boolean }).maps === true; } catch { return false; }
}
function subscribe(callback: () => void): () => void {
  window.addEventListener(cookiePreferenceEvent, callback);
  return () => window.removeEventListener(cookiePreferenceEvent, callback);
}

export function ConsentMap() {
  const allowed = useSyncExternalStore(subscribe, readMapConsent, () => false);
  if (allowed) return <iframe title="Magic Auto Paint location map" className="h-[420px] w-full border-0 grayscale-[.6]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Dorking%20West%20Station%20Yard%20RH4%201HW&output=embed" />;
  return <div className="grid min-h-[360px] place-items-center bg-[#101010] p-8 text-center"><div><MapPin className="mx-auto text-orange-500" size={34}/><p className="display-title mt-5 text-3xl">Map remains private</p><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">Enable Google Maps in cookie settings to load the interactive map, or open directions without changing your preference.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><button type="button" className="button button-primary" onClick={()=>window.dispatchEvent(new Event("magic-auto-paint-open-consent"))}>Cookie settings</button><a className="button button-secondary" href={business.mapUrl} target="_blank" rel="noreferrer">Open directions</a></div></div></div>;
}

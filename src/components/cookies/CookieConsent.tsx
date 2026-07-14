"use client";

import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import { cookiePreferenceEvent, cookiePreferenceKey } from "@/lib/site";

export interface CookiePreferences { essential: true; maps: boolean; }
function savePreferences(preferences: CookiePreferences): void { localStorage.setItem(cookiePreferenceKey, JSON.stringify(preferences)); window.dispatchEvent(new CustomEvent(cookiePreferenceEvent, { detail: preferences })); }
function subscribe(callback:()=>void):()=>void { window.addEventListener(cookiePreferenceEvent,callback); return ()=>window.removeEventListener(cookiePreferenceEvent,callback); }
function getStoredPreference():string|null { return localStorage.getItem(cookiePreferenceKey); }
function storedMaps():boolean { try{return (JSON.parse(getStoredPreference()??"{}") as {maps?:boolean}).maps===true}catch{return false} }

export function CookieConsent() {
  const stored = useSyncExternalStore(subscribe,getStoredPreference,()=>null);
  const [forceOpen,setForceOpen]=useState(false);
  const [isManaging,setIsManaging]=useState(false);
  const [maps,setMaps]=useState(false);
  useEffect(()=>{ const openManager=()=>{setMaps(storedMaps());setIsManaging(true);setForceOpen(true)}; window.addEventListener("magic-auto-paint-open-consent",openManager); return()=>window.removeEventListener("magic-auto-paint-open-consent",openManager)},[]);
  const isVisible=stored===null||forceOpen;
  const choose=(allowMaps:boolean)=>{setMaps(allowMaps);savePreferences({essential:true,maps:allowMaps});setForceOpen(false);setIsManaging(false)};
  if(!isVisible)return null;
  return <div className="fixed inset-0 z-[80] flex items-end bg-black/30 p-3 backdrop-blur-[2px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div className="cookie-panel relative mx-auto w-full max-w-5xl overflow-hidden border border-white/15 bg-[#111] shadow-2xl"><div className="grid lg:grid-cols-[1fr_auto]"><div className="p-6 sm:p-8"><div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-orange-500 text-black"><ShieldCheck size={22}/></span><div><h2 id="cookie-title" className="display-title text-3xl">Your privacy, your choice</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">We use essential browser storage to remember your choice. Google Maps stays blocked unless you allow it. We do not use advertising or analytics cookies.</p><div className="mt-3 flex gap-4 text-xs font-semibold text-orange-400"><Link href="/cookie-policy">Cookie policy</Link><Link href="/privacy-policy">Privacy policy</Link></div></div></div>{isManaging?<div className="mt-6 grid gap-3 border-t border-white/10 pt-5"><div className="flex items-center justify-between gap-4 bg-white/[.04] p-4"><div><p className="font-semibold">Essential storage</p><p className="mt-1 text-xs text-white/45">Required to remember this preference.</p></div><span className="text-xs font-bold uppercase tracking-widest text-orange-400">Always on</span></div><label className="flex cursor-pointer items-center justify-between gap-4 bg-white/[.04] p-4"><span><span className="block font-semibold">Google Maps</span><span className="mt-1 block text-xs text-white/45">Loads the interactive location map.</span></span><input type="checkbox" checked={maps} onChange={event=>setMaps(event.target.checked)} className="consent-toggle"/></label></div>:null}</div><div className="flex min-w-64 flex-col justify-center gap-2 border-t border-white/10 bg-white/[.03] p-5 lg:border-l lg:border-t-0">{isManaging?<button type="button" className="button button-primary" onClick={()=>choose(maps)}>Save preferences</button>:<button type="button" className="button button-primary" onClick={()=>choose(true)}>Accept all</button>}<button type="button" className="button button-secondary" onClick={()=>choose(false)}>Reject non-essential</button>{!isManaging?<button type="button" className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/55 hover:text-white" onClick={()=>{setMaps(storedMaps());setIsManaging(true)}}>Manage preferences</button>:null}</div></div>{isManaging&&stored!==null?<button type="button" className="absolute right-5 top-5 text-white/50 hover:text-white" onClick={()=>setForceOpen(false)} aria-label="Close cookie settings"><X size={20}/></button>:null}</div></div>;
}

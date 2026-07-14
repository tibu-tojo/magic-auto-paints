import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/lib/site";

import { CookieSettingsButton } from "./CookieSettingsButton";

export function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#070707]"><div className="shell flex flex-col items-center gap-8 py-14 text-center"><Link href="/#home" aria-label="Magic Auto Paint home"><Image src="/brand/magic-auto-paint-logo.jpeg" alt="Magic Auto Paint logo" width={1024} height={500} className="h-auto w-56"/></Link><nav className="flex flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Footer navigation">{navigation.map(item=><Link className="footer-link" href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="flex flex-wrap justify-center gap-5"><Link className="footer-link" href="/legal-notice">Legal Notice</Link><Link className="footer-link" href="/privacy-policy">Privacy Policy</Link><Link className="footer-link" href="/cookie-policy">Cookie Policy</Link><CookieSettingsButton/></div></div><div className="border-t border-white/10"><div className="shell py-6 text-center text-xs text-white/35">© Copyright. All rights reserved.</div></div></footer>;
}

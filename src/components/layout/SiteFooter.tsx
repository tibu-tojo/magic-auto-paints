import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { business, navigation } from "@/lib/site";

import { CookieSettingsButton } from "./CookieSettingsButton";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_1fr] lg:py-20">
        <div>
          <Image
            src="/brand/magic-auto-paint-logo.jpeg"
            alt="Magic Auto Paint"
            width={1024}
            height={500}
            className="h-auto w-56 object-contain"
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
            Automotive paint, body repairs, wheel refurbishment and custom finishes, completed with precision in Dorking, Surrey.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-orange-400">
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link className="footer-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="footer-link" href="/privacy-policy">Privacy policy</Link>
            <Link className="footer-link" href="/cookie-policy">Cookie policy</Link>
            <CookieSettingsButton />
          </div>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <div className="mt-5 grid gap-4 text-sm text-white/60">
            <a className="contact-link" href={`tel:${business.officeHref}`}><Phone size={16} /> {business.officeDisplay}</a>
            <a className="contact-link break-all" href={`mailto:${business.email}`}><Mail size={16} /> {business.email}</a>
            <a className="contact-link items-start" href={business.mapUrl} target="_blank" rel="noreferrer"><MapPin className="mt-0.5 shrink-0" size={16} /> <span>{business.addressLines.join(", ")}</span></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Magic Auto Paint. All rights reserved.</p>
          <p>Automotive repairs & custom paint in Surrey.</p>
        </div>
      </div>
    </footer>
  );
}

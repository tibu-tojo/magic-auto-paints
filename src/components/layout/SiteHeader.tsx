"use client";

import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { business, navigation } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
      <div className="shell flex h-24 items-center justify-between gap-6">
        <Link href="/" className="relative z-50 block shrink-0" aria-label="Magic Auto Paint home">
          <Image
            src="/brand/magic-auto-paint-logo.jpeg"
            alt="Magic Auto Paint"
            width={1024}
            height={500}
            priority
            className="h-auto w-40 object-contain sm:w-48"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="icon-button" href={`tel:${business.officeHref}`} aria-label={`Call ${business.officeDisplay}`}>
            <Phone size={18} />
          </a>
          <Link href="/#contact" className="button button-primary">
            Get a free quote <ArrowUpRight size={17} />
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-[#090909] px-6 pt-32 transition-all duration-500 lg:hidden ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-white/10" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="display-title flex items-center justify-between border-b border-white/10 py-5 text-4xl"
            >
              {item.label}
              <span className="font-body text-xs text-orange-400">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
          <Link href="/#contact" className="button button-primary justify-center" onClick={() => setIsOpen(false)}>
            Get a free quote <ArrowUpRight size={17} />
          </Link>
          <a href={`tel:${business.officeHref}`} className="button button-secondary justify-center">
            <Phone size={17} /> {business.officeDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

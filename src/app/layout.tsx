import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { CookieConsent } from "@/components/cookies/CookieConsent";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/providers/MotionProvider";

import "./globals.css";

const hellix = localFont({
  src: "./fonts/Hellix-Regular.woff2",
  variable: "--font-body",
  display: "swap",
});

const hellixDisplay = localFont({
  src: "./fonts/Hellix-ExtraBold.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Magic Auto Paint | Automotive Paint & Body Repairs", template: "%s | Magic Auto Paint" },
  description: "Premium SMART repairs, bodywork, alloy wheel refurbishment and custom automotive paintwork in Dorking, Surrey.",
  keywords: ["car body repairs Dorking", "SMART repairs Surrey", "alloy wheel refurbishment", "custom car paint"],
  openGraph: { title: "Magic Auto Paint", description: "Precision automotive repairs and custom paint in Dorking, Surrey.", type: "website", locale: "en_GB" },
};

export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${hellix.variable} ${hellixDisplay.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <MotionProvider />
      </body>
    </html>
  );
}

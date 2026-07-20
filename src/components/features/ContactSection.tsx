import { Mail, MapPin, Phone } from "lucide-react";

import { business } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="section border-t border-white/10 bg-[#0a0a0a]">
      <div className="shell">
        <div className="reveal">
          <p className="eyebrow">Contact us</p>
          <h2 className="display-title text-4xl sm:text-6xl">Contact us</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="surface reveal p-7">
            <h3 className="display-title text-3xl">Contact Information</h3>
            <div className="mt-6 grid gap-4">
              <a
                className="contact-link text-lg"
                href={`tel:${business.contactNumberHref}`}
              >
                <Phone className="text-orange-500" /> Contact: {business.contactNumberDisplay}
              </a>
              <a
                className="contact-link break-all"
                href={`mailto:${business.email}`}
              >
                <Mail className="text-orange-500" /> E-mail: {business.email}
              </a>
            </div>
          </div>

          <div className="surface reveal p-7">
            <h3 className="display-title text-3xl">Business Location</h3>
            <div className="mt-6 flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-orange-500" />
              <address className="not-italic leading-7 text-white/60">
                <strong className="text-white">Magic Auto Paints Ltd</strong>
                <br />
                Dorking West Station Yard
                <br />
                Ranmore Road
                <br />
                Dorking
                <br />
                Surrey
                <br />
                RH4 1HW
              </address>
            </div>

            <h3 className="display-title mt-7 border-t border-white/10 pt-7 text-3xl">
              Opening Hours
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/50">
              Magic Auto Paints Ltd is currently working on temporary hours due to working on a
              contract throughout April. Please feel free to email photos over for quotations or
              call to arrange an evening or weekend appointment. We thank you for your
              understanding and patience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

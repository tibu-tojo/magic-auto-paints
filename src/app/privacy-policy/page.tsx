import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return <>
    <PageHero eyebrow="Legal" title="Privacy Policy" description="How Magic Auto Paint Ltd protects and uses the personal data provided to us." />
    <article className="shell section max-w-4xl space-y-10 text-base leading-8 text-white/60">
      <section>
        <h2 className="display-title text-3xl text-white sm:text-4xl">Collected Personal Data</h2>
        <p className="mt-5 italic">Here at Magic Auto Paint Ltd, we care for your privacy. That is why we have taken appropriate measures to ensure that the data you have provided to us is always secure. If you have any questions related to GDPR compliance or data protection, please contact our Data Protection Officer.</p>
      </section>
      <section>
        <h2 className="display-title text-3xl text-white sm:text-4xl">Purpose of collecting data</h2>
        <p className="mt-5 italic">The data we collect is only taken in order to process your quotation, enquiry or invoice. Only essential data will be collected for the purpose of the job and no further information is collected. The data collected is not used for any marketing purposes or sold to any third parties.</p>
      </section>
    </article>
  </>;
}

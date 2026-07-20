import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Legal Notice" };

const legalDetails = [
  ["Name of company", "Magic Auto Paints Ltd"],
  ["Registered Business Number", "12790725"],
  ["Contact details", "Maciej Szpala\n07706 208 390"],
  ["Data Controller", "Gemma Szpala"],
] as const;

export default function LegalNoticePage() {
  return <>
    <PageHero eyebrow="Legal" title="Legal Notice" description="Registered company and data-controller information for Magic Auto Paints Ltd." />
    <article className="shell section max-w-4xl">
      <dl className="surface divide-y divide-white/10">
        {legalDetails.map(([label, value]) => <div className="grid gap-3 p-6 sm:grid-cols-[.8fr_1.2fr] sm:p-8" key={label}>
          <dt className="display-title text-2xl text-white">{label}</dt>
          <dd className="whitespace-pre-line leading-7 text-white/60">{value}</dd>
        </div>)}
      </dl>
    </article>
  </>;
}

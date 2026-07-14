import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/ui/PageHero";
import { prices } from "@/lib/site";

export const metadata: Metadata = { title: "Price List", description: "Starting prices for bodywork, paint repairs, alloy wheels and custom automotive finishes." };
const groups = ["Paintwork", "Wheels & finish", "Bodywork & custom"] as const;

export default function PriceListPage() {
  return <>
    <PageHero eyebrow="Clear starting points" title="Repair pricing, without the guesswork." description="Every repair is assessed individually. These starting prices help you plan before a free, no-obligation quotation." />
    <section className="section"><div className="shell">
      <div className="grid gap-6 lg:grid-cols-3">{groups.map((group,index)=><section key={group} className="surface reveal"><div className="flex items-center justify-between border-b border-white/10 p-6"><h2 className="display-title text-3xl">{group}</h2><span className="text-xs font-bold text-orange-400">0{index+1}</span></div><div>{prices.filter(item=>item.group===group).map(item=><div key={item.service} className="flex items-center justify-between gap-5 border-b border-white/[.07] px-6 py-4 last:border-0"><span className="text-sm text-white/60">{item.service}</span><strong className="shrink-0 text-sm text-orange-400">{item.price}</strong></div>)}</div></section>)}</div>
      <div className="mt-10 grid gap-7 border border-orange-500/30 bg-orange-500/[.06] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="display-title text-3xl sm:text-4xl">The exact price follows the exact repair.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">Final pricing depends on panel size, paint type, materials and any dent or body repair required. Multi-panel discounts may be available and will be discussed during your quotation.</p></div><Link href="/contact" className="button button-primary">Get an exact quote <ArrowRight size={17}/></Link></div>
    </div></section>
  </>;
}

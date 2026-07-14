import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { prices } from "@/lib/site";

const groups = ["Paintwork", "Wheels & finish", "Bodywork & custom"] as const;

export function PriceListSection() {
  return <section id="price-list" className="section border-y border-white/10 bg-[#0b0b0b]"><div className="shell">
    <div className="reveal"><SectionHeading eyebrow="Price list" title="Repair pricing, without the guesswork." description="All prices are starting points and tailored to the paint, materials, panel size and bodywork required. Multi-panel discounts may be available and are discussed during your free quotation." /></div>
    <div className="mt-12 grid gap-6 lg:grid-cols-3">{groups.map((group,index)=><section key={group} className="surface reveal" style={{"--delay":`${index*80}ms`} as React.CSSProperties}><div className="flex items-center justify-between border-b border-white/10 p-6"><h3 className="display-title text-3xl">{group}</h3><span className="text-xs font-bold text-orange-400">0{index+1}</span></div><div>{prices.filter(item=>item.group===group).map(item=><div key={item.service} className="flex items-center justify-between gap-5 border-b border-white/[.07] px-6 py-4 last:border-0"><span className="text-sm text-white/60">{item.service}</span><strong className="shrink-0 text-sm text-orange-400">{item.price}</strong></div>)}</div></section>)}</div>
    <div className="mt-10 grid gap-7 border border-orange-500/30 bg-orange-500/[.06] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><h3 className="display-title text-3xl sm:text-4xl">The exact price follows the exact repair.</h3><p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">Prices depend on panel size, paint type, materials and any dent repair needed. Send photos or visit the workshop for an accurate, no-obligation quote.</p></div><Link href="/#contact" className="button button-primary">Get an exact quote <ArrowRight size={17}/></Link></div>
  </div></section>;
}

import { ArrowRight, CheckCircle2, Gauge, MapPin, Paintbrush, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/components/features/ContactSection";
import { GallerySection } from "@/components/features/GallerySection";
import { PriceListSection } from "@/components/features/PriceListSection";
import { business, services } from "@/lib/site";

const trustItems = [
  ["ATA-qualified", "Paint expertise", ShieldCheck],
  ["Free", "No-obligation quotes", Sparkles],
  ["Dorking", "Surrey-based workshop", MapPin],
] as const;

export default function HomePage() {
  return (
    <>
      <section id="home" className="grain relative flex min-h-[760px] items-end overflow-hidden border-b border-white/10 pt-28 lg:min-h-screen">
        <Image src="/images/home/bodyshop.jpg" alt="Vehicle professionally masked and prepared for refinishing" fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.98)_0%,rgba(5,5,5,.78)_45%,rgba(5,5,5,.3)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#080808_0%,transparent_45%)]" />
        <div className="shell relative z-10 pb-16 pt-20 lg:pb-24">
          <p className="eyebrow">Automotive repairs & custom paint</p>
          <h1 className="display-title max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)]">Damage disappears.<br/><span className="text-orange-500">Craft remains.</span></h1>
          <div className="paint-line mt-7 max-w-3xl" />
          <div className="mt-8 flex max-w-2xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg">Precision bodywork, SMART repairs, alloy refurbishment and one-off finishes—restoring every line, reflection and detail.</p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/#contact" className="button button-primary">Get a free quote <ArrowRight size={17}/></Link>
              <Link href="/#gallery" className="button button-secondary">View our work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0c0c0c]">
        <div className="shell grid md:grid-cols-3">
          {trustItems.map(([value,label,Icon],index)=><div key={label} className="flex items-center gap-4 border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0"><Icon className="text-orange-500"/><div><p className="display-title text-2xl">{value}</p><p className="text-xs uppercase tracking-[.15em] text-white/40">{label}</p></div><span className="ml-auto text-xs text-white/20">0{index+1}</span></div>)}
        </div>
      </section>

      <section className="section metal-grid">
        <div className="shell grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
          <div className="reveal relative min-h-[480px]">
            <div className="absolute inset-0 overflow-hidden [clip-path:polygon(0_0,100%_7%,92%_100%,0_93%)]"><Image src="/images/home/workshop-detail.jpg" alt="Custom-painted vehicle in the workshop" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover"/></div>
            <div className="absolute -bottom-5 right-2 grid h-32 w-32 place-items-center bg-orange-500 text-center text-black"><span className="display-title text-2xl">Since<br/>2020</span></div>
          </div>
          <div className="reveal" style={{"--delay":"100ms"} as React.CSSProperties}>
            <SectionHeading eyebrow="About Magic Auto Paint" title="Built around the quality of the finish." />
            <p className="mt-7 text-lg leading-8 text-white/65">Founded by ATA-qualified paint sprayer Maciej Szpala, our Dorking workshop brings together paint, panel and mechanical experience to return cars and vans to their former glory.</p>
            <p className="mt-5 leading-7 text-white/50">From a bumper scuff to full bodyshop work, alloy wheels or an exhibition piece, every job receives careful preparation, honest communication and uncompromising attention to detail.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Accurate colour matching","Panel & dent repairs","Flexible turnaround","Local collection available"].map(item=><p key={item} className="flex items-center gap-3 text-sm text-white/75"><CheckCircle2 size={17} className="text-orange-500"/>{item}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-[#0b0b0b]">
        <div className="shell">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="What we do" title="Repairs that hold up under the light." description="From everyday damage to distinctive custom work, the right process creates a finish that looks effortless."/><Link href="/#price-list" className="button button-secondary">Explore prices <ArrowRight size={17}/></Link></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service,index)=><article key={service.title} className="surface reveal group overflow-hidden" style={{"--delay":`${index*100}ms`} as React.CSSProperties}><div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.title} fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-5 top-5 grid h-12 w-12 place-items-center bg-black/80 text-xs font-bold text-orange-400">0{index+1}</span></div><div className="p-7"><h3 className="display-title text-3xl">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{service.description}</p></div></article>)}</div>
        </div>
      </section>

      <PriceListSection />
      <GallerySection />

      <section className="section overflow-hidden">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_.82fr] lg:items-center">
          <div className="reveal"><SectionHeading eyebrow="Free quotations" title="Show us the damage. We’ll map the repair."/><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Email photos or videos for an initial quotation, visit the workshop, or arrange a convenient local assessment. We can also discuss collection and return within the local area.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/#contact" className="button button-primary">Request your quote <ArrowRight size={17}/></Link><a href={`tel:${business.officeHref}`} className="button button-secondary">Call {business.officeDisplay}</a></div></div>
          <div className="relative reveal"><div className="paint-orb left-10 top-10"/><div className="surface relative grid grid-cols-2 gap-px overflow-hidden bg-white/10"><div className="bg-[#111] p-7"><Paintbrush className="text-orange-500"/><p className="display-title mt-12 text-4xl">Paint</p><p className="mt-2 text-xs uppercase tracking-widest text-white/35">Matched precisely</p></div><div className="bg-[#111] p-7"><Gauge className="text-orange-500"/><p className="display-title mt-12 text-4xl">Repair</p><p className="mt-2 text-xs uppercase tracking-widest text-white/35">Planned clearly</p></div></div></div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/features/ContactSection";
import { GallerySection } from "@/components/features/GallerySection";
import { PriceListSection } from "@/components/features/PriceListSection";
import { business, services } from "@/lib/site";

export default function HomePage() {
  return <>
    <section id="home" className="grain relative flex min-h-[720px] items-end overflow-hidden border-b border-white/10 pt-28">
      <Image src="/images/home/bodyshop.jpg" alt="Automotive paintwork in progress" fill priority sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.98),rgba(5,5,5,.56)),linear-gradient(0deg,#080808,transparent_65%)]" />
      <div className="shell relative z-10 pb-16 pt-24 lg:pb-24">
        <Image src="/brand/magic-auto-paint-logo-transparent.png" alt="Magic Auto Paint logo" width={1792} height={878} priority className="mb-8 h-auto w-52 sm:w-72" />
        <h1 className="display-title max-w-5xl text-[clamp(3.3rem,8vw,8rem)]">Welcome to<br/><span className="text-orange-500">Magic Auto Paint</span></h1>
        <div className="paint-line mt-7 max-w-3xl" />
        <Link href="/#contact" className="button button-primary mt-8">Contact us</Link>
      </div>
    </section>

    <section className="border-b border-orange-500/25 bg-orange-500/[.07]">
      <div className="shell py-8">
        <h2 className="display-title text-3xl">Temporary Operating Hours</h2>
        <p className="mt-3 max-w-5xl leading-7 text-white/60">Magic Auto Paint Ltd is currently working on temporary hours due to working on a contract throughout April. Please feel free to email photos over for quotations or call to arrange an evening or weekend appointment. We thank you for your understanding and patience.</p>
      </div>
    </section>

    <section className="section metal-grid">
      <div className="shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="reveal relative min-h-[480px]"><div className="absolute inset-0 overflow-hidden [clip-path:polygon(0_0,100%_7%,92%_100%,0_93%)]"><Image src="/images/home/workshop-detail.jpg" alt="Automotive professionals completing paintwork" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover"/></div></div>
        <div className="reveal">
          <p className="eyebrow">About us</p>
          <h2 className="display-title text-3xl sm:text-5xl">Highly qualified and motivated automotive professionals based in Dorking, Surrey!</h2>
          <p className="mt-7 text-lg leading-8 text-white/60">Magic Auto Paint Ltd was established in 2020 and was started by Maciej Szpala who is an ATA qualified paint sprayer whose passion comes from restoring a car or van back to its former glory. Magic Auto Paint has a team with a highly qualified mechanic, a panel beater and paint sprayer so any job from alloy wheels, SMART repairs and bodyshop work can be taken on including custom jobs. A quality finish is paramount to the company, teamed with excellent customer service.</p>
        </div>
      </div>
    </section>

    <section className="section border-y border-white/10 bg-[#0b0b0b]">
      <div className="shell">
        <div className="reveal">
          <p className="eyebrow">Services Available</p>
          <h2 className="display-title text-3xl sm:text-5xl">Automotive services in Dorking, Surrey and surrounding areas.</h2>
          <p className="mt-5 text-lg text-white/60">Call <a className="text-orange-400" href={`tel:${business.officeHref}`}>{business.officeDisplay}</a> or email <a className="text-orange-400" href={`mailto:${business.email}`}>{business.email}</a> for a FREE QUOTATION.</p>
          <p className="mt-3 text-white/50">We are able to help anyone with their automotive needs in Dorking, Surrey and surrounding areas.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service,index)=><article key={service.title} className="surface reveal group overflow-hidden" style={{"--delay":`${index*100}ms`} as React.CSSProperties}><div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.title} fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-7"><h3 className="display-title text-3xl">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{service.description}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div className="reveal"><p className="eyebrow">Free quotations available</p><h2 className="display-title text-3xl sm:text-5xl">We will aim to accommodate your needs.</h2><p className="mt-6 text-lg leading-8 text-white/60">We can be flexible in turnaround times plus we can even collect your car from your home or place of business and return it on completion within the local area.</p><p className="mt-4 leading-7 text-white/50">For your free quotations please contact me on {business.officeDisplay} or email me at {business.email}.</p><p className="mt-4 leading-7 text-white/50">Please feel free to email over any photos or videos you have to help assist with your quotation or we can arrange a time for you to come to the garage or we can come to you at a convenient time.</p><Link href="/#contact" className="button button-primary mt-8">Contact us</Link></div>
        <div className="reveal relative aspect-square overflow-hidden"><Image src="/images/home/custom-paint.jpg" alt="Custom job completion turning a metal rusted tank to custom pink colour for a business client for an art exhibition" fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover"/></div>
      </div>
    </section>

    <PriceListSection />
    <GallerySection />
    <ContactSection />
  </>;
}

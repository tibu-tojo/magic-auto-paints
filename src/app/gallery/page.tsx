import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Gallery", description: "See before, repair, preparation and finish stages from recent Magic Auto Paint projects." };
const projects = [
  { title:"Lexus rear-door repair", description:"A dent on the edge of the rear passenger door required a precision repair to restore the line flush with the front door.", images:[
    ["/images/gallery/lexus-before.jpg","Before — dent visible on the Lexus rear door"], ["/images/gallery/lexus-primed.jpg","Lexus door repaired and primed"], ["/images/gallery/lexus-base-coat.jpg","Lexus repair with base coat applied"], ["/images/gallery/lexus-clear-coat.jpg","Lexus repair after clear coat"]] },
  { title:"Renault Scenic panel restoration", description:"Damage across the quarter panel and door was reshaped before careful preparation, base colour and protective clear coat.", images:[
    ["/images/gallery/renault-dent-repair.jpg","Renault Scenic during dent repair"], ["/images/gallery/renault-undercoat.jpg","Renault Scenic in paint undercoat"], ["/images/gallery/renault-base-coat.jpg","Renault Scenic with base coat applied"], ["/images/gallery/renault-clear-coat.jpg","Renault Scenic after clear coat"]] },
] as const;

export default function GalleryPage(){return <><PageHero eyebrow="Before. During. After." title="Proof lives in the process." description="Follow real repairs through reshaping, preparation, colour and clear coat—the work behind the final reflection."/><section className="section"><div className="shell space-y-24">{projects.map((project,projectIndex)=><article key={project.title}><div className="reveal grid gap-5 border-b border-white/10 pb-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Project 0{projectIndex+1}</p><h2 className="display-title text-4xl sm:text-5xl">{project.title}</h2></div><p className="max-w-2xl text-sm leading-7 text-white/55 lg:justify-self-end">{project.description}</p></div><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{project.images.map(([src,alt],index)=><figure key={src} className="surface reveal overflow-hidden" style={{"--delay":`${index*80}ms`} as React.CSSProperties}><div className="relative aspect-[3/4] overflow-hidden"><Image src={src} alt={alt} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" className="object-cover transition duration-700 hover:scale-105"/></div><figcaption className="flex items-center gap-3 p-4 text-xs uppercase tracking-[.13em] text-white/50"><span className="text-orange-400">0{index+1}</span>{["Before","Repair","Base coat","Clear coat"][index]}</figcaption></figure>)}</div></article>)}</div></section></>}

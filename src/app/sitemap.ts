import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return ["","/privacy-policy","/cookie-policy"].map(path=>({url:`${base}${path}`,changeFrequency:path===""?"monthly":"yearly",priority:path===""?1:.7})); }

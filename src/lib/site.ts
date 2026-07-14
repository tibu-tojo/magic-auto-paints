export interface NavigationItem {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface PriceItem {
  service: string;
  price: string;
  group: "Paintwork" | "Wheels & finish" | "Bodywork & custom";
}

export const SITE_NAME = "Magic Auto Paint";

export const navigation: NavigationItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#price-list", label: "Price list" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export const business = {
  officeDisplay: "01306 735 678",
  officeHref: "+441306735678",
  mobileDisplay: "07979 301 106",
  mobileHref: "+447979301106",
  email: "magicpaintshop@hotmail.com",
  addressLines: [
    "Dorking West Station Yard",
    "Ranmore Road",
    "Dorking, Surrey",
    "RH4 1HW",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Dorking+West+Station+Yard+Ranmore+Road+Dorking+RH4+1HW",
} as const;

export const services: Service[] = [
  {
    title: "Bodyshop & SMART repairs",
    description:
      "From mirror covers and bumper corners to dents, panel repairs and full resprays, every finish is prepared with care and colour-matched precisely.",
    image: "/images/home/bodyshop.jpg",
  },
  {
    title: "Alloy wheel refurbishment",
    description:
      "Repair scuffs and scratches, refresh tired finishes, or create a custom colour treatment with matching brake callipers completed in-house.",
    image: "/images/home/alloy-wheel.jpg",
  },
  {
    title: "Custom paintwork",
    description:
      "Bring a one-off idea to life with custom colours, body kits, wheels and specialist pieces for vehicles, exhibitions and trade shows.",
    image: "/images/home/custom-paint.jpg",
  },
];

export const prices: PriceItem[] = [
  { service: "Bumper corner", price: "From £150", group: "Paintwork" },
  { service: "Front or rear bumper", price: "From £250", group: "Paintwork" },
  { service: "Front wing", price: "From £150", group: "Paintwork" },
  { service: "Quarter panel", price: "From £200", group: "Paintwork" },
  { service: "Door", price: "From £200", group: "Paintwork" },
  { service: "Bonnet", price: "From £250", group: "Paintwork" },
  { service: "Tailgate", price: "From £200", group: "Paintwork" },
  { service: "Roof", price: "From £250", group: "Paintwork" },
  { service: "Mirror cover", price: "From £70", group: "Paintwork" },
  { service: "Sill panel", price: "From £120", group: "Paintwork" },
  { service: "Alloy wheel", price: "From £75 / wheel", group: "Wheels & finish" },
  { service: "Brake calliper", price: "From £25 / calliper", group: "Wheels & finish" },
  { service: "Full machine polish", price: "From £150", group: "Wheels & finish" },
  {
    service: "Paint protection + full polish",
    price: "From £200",
    group: "Wheels & finish",
  },
  { service: "Bodywork repairs", price: "From £50 / hour", group: "Bodywork & custom" },
  { service: "Custom job / paint", price: "Price on request", group: "Bodywork & custom" },
];

export const cookiePreferenceKey = "magic-auto-paint-consent-v1";
export const cookiePreferenceEvent = "magic-auto-paint-consent-change";

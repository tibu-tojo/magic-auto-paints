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

export const SITE_NAME = "Magic Auto Paints";

export const navigation: NavigationItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#price-list", label: "Price list" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export const business = {
  contactNumberDisplay: "07706 208 390",
  contactNumberHref: "+447706208390",
  email: "info.magicautopaints@gamil.com",
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
    title: "Bodyshop And SMART Repairs",
    description:
      "We are able to handle most size jobs from a mirror cover and bumper corner to full re-sprays. Whether you have a scrape or a dent, let us know and we can give you a free no obligation quotation.",
    image: "/images/home/bodyshop.jpg",
  },
  {
    title: "Alloy Wheel Refurbishments",
    description:
      "Whether it is repairing your existing wheels from minor scrapes and scratches or repairs, this can be done in house. Custom jobs can also be taken on from changing the colour of the wheels to black, two tone etc and we can also change the colour of your brake callipers.",
    image: "/images/home/alloy-wheel.jpg",
  },
  {
    title: "Customs",
    description:
      "Here at Magic Auto Paints Ltd we like to work with our customers to make your vision come true which can include custom paint colours, body kits, custom wheels and more. It does not just have to be a car or a van; we can take other custom work such as work for exhibitions and trade shows, including the pink tank completed for a recent art exhibition.",
    image: "/images/home/custom-paint.jpg",
  },
];

export const prices: PriceItem[] = [
  { service: "Bumper Corner", price: "From £150", group: "Paintwork" },
  { service: "Front or Rear Bumper", price: "From £250", group: "Paintwork" },
  { service: "Front Wing", price: "From £150", group: "Paintwork" },
  { service: "Quarter Panel", price: "From £200", group: "Paintwork" },
  { service: "Door", price: "From £200", group: "Paintwork" },
  { service: "Bonnet", price: "From £250", group: "Paintwork" },
  { service: "Tailgate", price: "From £200", group: "Paintwork" },
  { service: "Roof", price: "From £250", group: "Paintwork" },
  { service: "Mirror Cover", price: "From £70", group: "Paintwork" },
  { service: "Alloy Wheels", price: "From £75 per wheel", group: "Wheels & finish" },
  { service: "Brake Callipers", price: "From £25 per calliper", group: "Wheels & finish" },
  { service: "Sill Panel", price: "From £120", group: "Paintwork" },
  { service: "Full Mop / Polish", price: "From £150", group: "Wheels & finish" },
  {
    service: "Paint Protection Application Including Full Polish",
    price: "From £200",
    group: "Wheels & finish",
  },
  { service: "Body Work Repairs", price: "From £50 per hour", group: "Bodywork & custom" },
  { service: "Custom Job / Paint", price: "Available on request", group: "Bodywork & custom" },
];

export const cookiePreferenceKey = "magic-auto-paint-consent-v1";
export const cookiePreferenceEvent = "magic-auto-paint-consent-change";

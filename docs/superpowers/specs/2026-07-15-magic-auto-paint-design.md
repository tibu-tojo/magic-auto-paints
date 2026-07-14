# Magic Auto Paint Website Design

## Objective

Build a polished, responsive automotive paint and body-repair website named **Magic Auto Paint**. The site will adapt the publicly visible structure, service information, pricing, gallery subject matter, contact information, imagery, and black/orange visual identity of `magicpaintshop.co.uk`, while substantially improving layout, motion, accessibility, and conversion paths. The supplied MAP logo is the primary brand asset.

## Scope

The deliverable is a new standalone project at `/Users/aswin/Desktop/Office Project/magic-auto-paint` using Next.js App Router, strict TypeScript, and Tailwind CSS. It contains four public pages: Home, Price List, Gallery, and Contact, plus Privacy Policy and Cookie Policy pages. It does not include authentication, a CMS, payments, appointment scheduling, analytics, or an admin panel.

The expired 2025 holiday closure and temporary-hours notices from the reference site will not be reproduced. Business contact data will otherwise remain aligned with the reference site unless the user replaces it later:

- Office: 01306 735 678
- Mobile: 07979 301 106
- Email: magicpaintshop@hotmail.com
- Address: Dorking West Station Yard, Ranmore Road, Dorking, Surrey, RH4 1HW

Every visible business-name reference will use **Magic Auto Paint**, not **Magic Paint Shop**.

## Visual Direction

The aesthetic is a premium industrial bodyshop: near-black surfaces, hot orange and amber gradients sampled from the supplied logo, warm off-white type, metallic grey dividers, subtle grain, and controlled glow. The experience should feel energetic and technically precise rather than like a generic corporate template.

The memorable motif is a moving orange "paint line" that introduces the hero and reappears as section accents. Large condensed display typography, angled image masks, restrained glass layers, and oversized service numerals create hierarchy. Motion will use CSS and Intersection Observer-based reveal effects, respect `prefers-reduced-motion`, and avoid heavy animation libraries unless already necessary.

## Information Architecture

### Global shell

- Sticky, translucent header with optimized logo, desktop navigation, mobile menu, and a prominent "Get a free quote" action.
- Footer with brand summary, navigation, contact details, legal links, and current year.
- Cookie-consent banner on first visit with Accept All, Reject Non-Essential, and Manage Preferences actions.
- Floating mobile call action where it improves usability without obscuring content.

### Home

- Full-viewport hero with an automotive repair image, dark overlay, headline, proof points, and quote/gallery actions.
- Compact trust strip: ATA-qualified expertise, free quotations, Dorking/Surrey coverage, and local collection where available.
- About section adapting the reference business story and team capabilities.
- Three service features: Bodyshop & SMART Repairs, Alloy Wheel Refurbishment, and Custom Paintwork.
- Featured gallery preview showing repair stages.
- Free-quotation conversion section explaining photo/video estimates and local collection/return.

### Price List

- Intro clarifying that prices are starting points and vary by materials, panel size, and bodywork.
- Responsive grouped price cards containing all reference prices.
- Clear note about multi-panel discounts and a quote CTA.

### Gallery

- Intro explaining the before/during/after project format.
- Responsive project stories for the Lexus and Renault Scenic work shown by the reference site.
- Images displayed with meaningful alt text, optimized sizes, and a lightbox-style modal if it remains small and accessible.

### Contact

- Contact form with name, email, optional phone, message, and explicit data-processing consent.
- Client-side usability validation plus server-side validation in a Next.js route handler.
- The form returns consistent success/error states and never exposes implementation errors.
- Submission transport is environment-driven. If outbound email is not configured, the UI will offer a direct email fallback without pretending that a message was delivered.
- Contact cards for office, mobile, email, address, and directions.
- A map is not loaded until map consent is granted; before consent, show an accessible address/directions card.

### Legal

- Plain-language Cookie Policy documenting essential preference storage and any optional map integration.
- Privacy Policy covering contact-form data, purpose, retention expectations, user rights, and contact details. It must be treated as a practical starter policy, not legal advice.

## Component Boundaries

- Server Components own page composition and static content.
- Client Components are limited to the mobile navigation, reveal behavior, gallery modal, contact form, map consent, and cookie preferences.
- Shared content data for navigation, services, pricing, and business details lives in typed modules to prevent duplicate strings.
- Presentation components accept typed props and do not fetch or mutate data.
- `next/image` handles all raster imagery; local source assets are preferred to avoid runtime dependence on the reference site.

## Assets and Content

The supplied `/Users/aswin/Downloads/Image (9).jpeg` will be copied into the project and used as the official logo, with a clean crop/presentation treatment that preserves its artwork. Publicly reachable reference-site project images may be downloaded into `public/images` and optimized for the new layout. Image files will use descriptive names and alt text.

Reference copy will be edited for grammar, clarity, and the new business name rather than reproduced mechanically. The factual meaning, listed services, prices, project descriptions, and contact details remain consistent with the source.

## Cookie and Privacy Behavior

Consent choices are stored in browser local storage under one versioned key. Essential storage is always enabled because it remembers the user's consent choice. Optional map content is disabled until accepted. Users can reopen preferences from the footer and change or withdraw consent. Rejecting optional cookies must leave all core navigation, content, contact details, and direct-email fallback functional.

No analytics or advertising trackers will be added as part of this scope.

## Error Handling and Security

- Contact payloads are validated and normalized on the server with bounded field lengths.
- The endpoint rejects malformed requests, applies a lightweight same-origin check, and avoids logging personal message contents.
- Response messages are generic and safe; stack traces and provider errors remain server-side.
- Submission UI prevents accidental duplicate sends and provides an accessible status announcement.
- External links use safe attributes where needed.
- No secrets are committed; email provider settings are documented in `.env.example`.

## Performance and Accessibility

- Hero imagery is prioritized and correctly sized; below-fold images are lazy loaded.
- Fonts use `next/font`; the page avoids layout shift and unnecessary client JavaScript.
- Semantic landmarks, visible focus states, keyboard navigation, sufficient contrast, form labels, reduced-motion support, and modal focus management are required.
- Responsive QA covers approximately 375px, 768px, 1024px, and 1440px widths.

## Verification

- Run lint, strict type checking, and production build.
- Exercise every route and navigation link.
- Verify cookie accept, reject, preference update, and persistence behavior.
- Verify contact validation, consent requirement, successful configured transport path where credentials exist, and the unconfigured fallback path.
- Check keyboard navigation and reduced-motion behavior.
- Inspect the final rendered pages at mobile and desktop sizes for overflow, contrast, image cropping, and layout stability.

## Acceptance Criteria

- The project runs as a standalone Next.js App Router application.
- All six routes render successfully and share a consistent responsive shell.
- No visible text contains the old business name except where the legacy email address itself contains it.
- Supplied logo, black/orange theme, requested source content, pricing, gallery stories, and usable imagery are present.
- The result is recognizably inspired by the reference site but visibly more refined, animated, and conversion-focused.
- Cookie consent is accessible, persistent, reversible, and gates optional map content.
- Lint, type checking, and production build pass.

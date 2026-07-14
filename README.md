# Magic Auto Paint

Production-ready Next.js App Router website for Magic Auto Paint in Dorking, Surrey.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```

## Contact form

Copy `.env.example` to `.env.local` and configure the Resend values to enable online form delivery. Without email configuration, the form safely displays the direct email fallback.

## Main sections

- `/#home`
- `/#price-list`
- `/#gallery`
- `/#contact`
- `/privacy-policy`
- `/cookie-policy`

The legacy `/price-list`, `/gallery`, and `/contact` URLs redirect to their corresponding section on the home page.

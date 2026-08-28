# Jain Opticians — Marketing Site (Phase 1)

Next.js 16.3.3 (App Router) + React 19.2 + TypeScript + Tailwind CSS + Framer Motion.

**Requires Node.js 20.9 or later** — Next.js 16 will refuse to install/run on
older Node versions. Turbopack is the default bundler for both `next dev`
and `next build` as of v16; no config changes were needed for that here.

`next lint` was removed in v16, so linting now runs through plain ESLint via
`eslint.config.mjs` (flat config, wrapping `eslint-config-next`). Run it with
`npm run lint`.

This phase covers **4 of the 10 planned pages**, per the agreed scope:

- `/` — Home
- `/categories-brands` — Categories & Brands (combined lookbook + brand wall)
- `/contact-us` — Contact & Inquiries
- `/locate-us` — Store Locator

Remaining pages from the original brief (About Us, Products as a standalone
page, Services, Offers, FAQs) are not built yet — say the word and they slot
into the same design system.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

**Opening it from another device on your network** (e.g. `http://192.168.x.x:3000`
on your phone) requires one extra step: since Next 15.2.2, the dev server
blocks cross-origin requests for its own assets/HMR channel unless the
origin is explicitly allowed. `next.config.js` already whitelists the most
common home-router ranges (`192.168.1.*`, `192.168.0.*`, `10.0.0.*`) — if
your machine's LAN IP falls outside those, add it (or your specific IP) to
the `allowedDevOrigins` array and restart `next dev`. This setting only
affects `next dev`; it's a no-op in production builds.

## Design system

- **Palette**: charcoal ink, warm cream, Jaipur-sandstone rose, aged brass —
  defined in `tailwind.config.ts`.
- **Type**: Fraunces (display), Inter (body), JetBrains Mono (labels/eyebrows),
  loaded via `next/font` in `app/layout.tsx`.
- **Signature motif**: `components/JaaliPattern.tsx` — a lattice drawn from
  Jaipur's jharokha window screens, used as section dividers, hero overlays
  and background texture throughout.
- **Interactive polish**: `SplitReveal.tsx` (word-by-word headline reveal),
  `SpotlightCard.tsx` (cursor-tracking glow on hover, used on category tiles
  and the brand wall), and `CountUp.tsx` (animated stats on Home) are hand-built
  in the spirit of [React Bits](https://reactbits.dev) (MIT licensed) —
  written directly against this project's existing framer-motion/Tailwind
  stack rather than pulled in via their `jsrepo` CLI, since this environment
  had no network access to run it. If you want the original components
  (more variants, more polish options), each one's doc page gives you a
  copy-paste command, e.g.:
  ```bash
  npx jsrepo add https://reactbits.dev/tailwind/TextAnimations/SplitText
  ```

## Images

All placeholder imagery is now real, free-to-use photography (not random
seeds) — sourced from Unsplash and hotlinked directly from their CDN:

| Spot | Photo | Photographer |
|---|---|---|
| Home hero | Man wearing silver-framed eyeglasses | Eliabe Costa |
| Hero corner accent | Hawa Mahal, Jaipur | Annie Spratt |
| Eyeglasses category | Black-framed eyeglasses | Prateek Katyal |
| Sunglasses category | Aviator sunglasses | ZEELOOL Glasses |
| Contact lenses category | Contact lens macro | Laurie Keshishian |
| Accessories category | Reading glasses flatlay | Julie Molliver |

All are used under the [Unsplash License](https://unsplash.com/license)
(free for commercial use, no attribution legally required — the credits
above are just good practice). Hotlinking to `images.unsplash.com` is fine
for evaluation, but for a production launch it's worth downloading these
into `/public` and serving them yourself, since a third-party CDN URL isn't
guaranteed to stay stable forever. `next.config.js` currently whitelists
`images.unsplash.com` in `images.remotePatterns` — update that if you
switch to self-hosted files or a different source.

Every category on the `/categories-brands` page now shows **one** real,
category-relevant photo (large, alongside frame-shape tags) rather than the
same image repeated across four cards — swap `lib/data.ts` → `categories[].image`
for actual in-store photography whenever it's ready.

## What to swap out before launch

Everything below is placeholder content standing in until you have real
assets — all in `lib/data.ts` unless noted:

- **Images** — see the Images section above.
- **Store addresses, hours, phone numbers** (`lib/data.ts` → `stores`) — the
  two Jaipur locations (C-Scheme, MI Road) are illustrative placeholders.
- **Contact details** (`app/contact-us/page.tsx` → `CONTACT_METHODS`) —
  phone, WhatsApp and concierge email are placeholders.
- **Brand blurbs** (`lib/data.ts` → `brands`) — short descriptive lines per
  house; replace with copy cleared by your brand agreements, or drop blurbs
  entirely once you have real partnership terms.
- **Testimonials** (`lib/data.ts` → `testimonials`) — written as
  representative placeholders, not real client quotes.
- **Newsletter/Contact form submission** — both forms currently validate and
  show inline feedback client-side only; wire `ContactForm.tsx` and
  `Newsletter.tsx` up to your form backend of choice (Netlify Forms, a
  serverless endpoint, etc.) before launch. A honeypot field is already in
  place in both.
- **Google Maps embed** (`components/StoreLocator.tsx`) — uses the
  no-API-key `?output=embed` query format keyed off each store's address.
  For production-grade Maps (custom pins, styling), switch to the Maps
  JavaScript API with a billing-enabled API key.

## Upgrade notes (Next.js 14 → 16.3.3)

This project started on Next 14 and was upgraded straight to the latest
stable release. Checked against the documented v15/v16 breaking changes:

- **Async `params`/`searchParams`** — not applicable; there are no dynamic
  routes (`[slug]` etc.) in this project.
- **`cookies()` / `headers()` / `draftMode()`** — not used anywhere.
- **Middleware → proxy rename** — no middleware file exists.
- **Node.js 20.9+** — required now; confirm your local/CI Node version
  before running `npm install`.
- **React 18 → 19** — bumped `react`, `react-dom`, `@types/react`,
  `@types/react-dom` together, as required. No code in this project relies
  on removed React 18 APIs.
- **`next lint` removed** — replaced with a flat `eslint.config.mjs` and a
  plain `eslint .` lint script.

No dynamic routes, cookies/headers usage, or middleware means the two
biggest v15/v16 breaking changes don't touch this codebase — the upgrade
here is mostly a version bump plus the lint tooling change above.

**Not verified locally**: dependency installation and a full `npm run build`
haven't been run against these exact versions in this environment. Run
`npm install && npm run build` once to confirm before deploying, and open an
issue/flag it if anything in `npm run build` complains — dependency version
ranges (`^`) mean the exact resolved versions may drift slightly from what
was pinned here.

## Deploying to Netlify

`netlify.toml` is already set up — it pins the build to Node 20 (Next 16
requires 20.9+; Netlify's default build image isn't guaranteed to match)
and explicitly declares `@netlify/plugin-nextjs`, which is what gives you
working SSR, `next/image` optimization, etc. on Netlify rather than a
plain static export. No further config should be needed — connect the repo
and deploy.

The `allowedDevOrigins` setting in `next.config.js` (for opening the site
from a LAN IP during local dev) has no effect here — it only applies to
`next dev`, not the production build Netlify runs.

## Structure

```
app/
  layout.tsx              — fonts, header/footer, promo banner
  page.tsx                — Home
  categories-brands/page.tsx
  contact-us/page.tsx
  locate-us/page.tsx
components/               — Header, Footer, CategoryCard, SpotlightCard,
                             SplitReveal, CountUp, JaaliPattern/JaaliDivider,
                             StoreLocator, ContactForm, Newsletter,
                             PromoBanner, Reveal, BrandMarquee
lib/data.ts                — brands, categories, stores, testimonials
```

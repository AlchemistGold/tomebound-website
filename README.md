# Tomebound Tactics — website

Marketing site for Tomebound Tactics. Astro (static output) on Cloudflare Pages.
Stack chosen 2026-11-11: Astro 5 + Cloudflare Pages + Cloudflare Registrar +
Buttondown (newsletter) + Cloudflare Web Analytics. No server, no monthly bill.

## Pages

- `/` — landing: teaser video, how it works, six schools, epochs, newsletter
- `/sponsors/` — Featured Tomes programme and pricing card
- `/libraries/` — library pilot and privacy posture
- `/faq/` — how studying works, pay-to-win, epochs, platforms
- `/press/` — fact sheet, teaser download, emblem download
- `/privacy/` — privacy policy (no location, no patron data, no chat)
- `/support/` — contact and FAQ pointer

All pages are labelled "in development". No launch date anywhere.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy (Cloudflare Pages)

1. Create the repository (e.g. `AlchemistGold/tomebound-website`) and push this folder.
2. In Cloudflare Pages: Create application → Connect to Git → pick the repo.
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add the custom domain (see below). Cloudflare issues the certificate.
4. Turn on Cloudflare Web Analytics (free, no cookies) for the site.

## Setup steps still open

1. **Domain.** `tomeboundtactics.com` looked available in a registry
   (RDAP) lookup on 2026-11-11 — confirm at the registrar when buying, as
   availability can change. Register it at Cloudflare Registrar (at cost)
   and attach it in Pages. Until then the site lives at the Pages URL
   (`*.pages.dev`). The Astro `site` value in `astro.config.mjs` already
   points at `https://tomeboundtactics.com`; change it if another name is chosen.
2. **Newsletter.** The signup form on the home page posts to Buttondown.
   Create the list at buttondown.com, then replace `YOUR_LIST_ID` in
   `src/pages/index.astro` with the list ID. Until then the form carries a
   note that signup opens once the list is connected.
3. **Contact email.** Every page uses the placeholder `[CONTACT EMAIL]`.
   Search the project for it and replace with the launch contact address
   when one is set.

## Assets

- `public/teaser.mp4` — the 33-second board teaser (v2, with the
  book-opening learning scene and title card).
- `public/emblem.png` / `public/favicon.png` — open-spellbook emblem
  generated for the site (six school runes above the book).

## Notes

- The site is deliberately decoupled from the game API: it does not wait on
  the Fly.io deployment steps.
- Sponsor pricing and pilot facts on the site match the A5 pricing card and
  the library brief as of 2026-11-11. If either changes, update
  `src/pages/sponsors.astro` and `src/pages/libraries.astro`.

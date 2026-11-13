# Tomebound Tactics — website

Marketing site for Tomebound Tactics. Astro (static output) on Cloudflare,
deployed as a static-assets Worker (see `wrangler.jsonc`).
Stack chosen 2026-11-11: Astro 5 + Cloudflare + Cloudflare Registrar +
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

## Deploy (Cloudflare, git-connected Worker)

The repo is connected to a Cloudflare Worker named `tomebound-website`
(Workers Builds, connected 2026-11-12). Builds run `npm run build` and
deploy with `wrangler deploy` using the committed `wrangler.jsonc`
(static assets from `dist`, no server entry point). The custom domain
`tomeboundtactics.com` is attached to the Worker; Cloudflare issued the
certificate. Turn on Cloudflare Web Analytics (free, no cookies) for the
site if not already on.

Note: the first build (2026-11-12) ran before `wrangler.jsonc` existed in
the repo and auto-configured an Astro Cloudflare adapter inside the build
only; that improvisation is superseded by the committed config.

## Setup steps still open

1. **Domain.** Done — `tomeboundtactics.com` registered at Cloudflare
   Registrar and live 2026-11-13; email routing to
   alchemistgolddevelopment@gmail.com confirmed working the same day.
   The `www` subdomain is not yet attached.
2. **Newsletter.** The signup form on the home page posts to Buttondown
   (list username `tomeboundtactics`, connected 2026-11-13).
3. **Contact email.** Done 2026-11-13 — all pages use
   `castspells@tomeboundtactics.com` (mailto links); placeholder notes
   removed.

## Assets

- `public/teaser.mp4` — the 33-second board teaser (v2, with the
  book-opening learning scene and title card).
- `public/emblem.png` / `public/favicon.png` — open-spellbook emblem
  generated for the site (six school runes above the book).
- `public/banner.webp` — hex-board battlefield at dusk, the landing page hero.
- `public/library.webp` — golden-hour library with a glowing spellbook,
  on the libraries page.
- `public/sponsors.webp` — glowing book, quill and gold coins, on the
  sponsors page.

## Notes

- The site is deliberately decoupled from the game API: it does not wait on
  the Fly.io deployment steps.
- Sponsor pricing and pilot facts on the site match the A5 pricing card and
  the library brief as of 2026-11-11. If either changes, update
  `src/pages/sponsors.astro` and `src/pages/libraries.astro`.

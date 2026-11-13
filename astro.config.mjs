// @ts-check
import { defineConfig } from 'astro/config';

// Static output: the whole site is plain HTML/CSS with one video file.
// Deploy target: Cloudflare static-assets Worker (see wrangler.jsonc) —
// build command `npm run build`, output `dist`.
export default defineConfig({
  site: 'https://tomeboundtactics.com',
});

# Terra Earth website — project rules

Static Astro 4 site for Terra Earth Engineering (U) Limited, hosted on Netlify. See `README.md` for structure and `docs/website-brief.md` for the content brief and decisions.

## Stack
- Astro static output, plain CSS with variables in `src/styles/global.css`, minimal vanilla JS in `src/scripts/site.ts`. No Tailwind, no UI frameworks, no sliders.
- Services and projects are Markdown content collections in `src/content/` (schema in `src/content/config.ts`).
- Company details live only in `src/data/site.ts`. Never hard-code phone numbers, email or address in pages.
- Forms are Netlify Forms (`data-netlify="true"`, honeypot `bot-field`, action `/thank-you`).
- Run `npm run build` after changes; it must finish with no errors.

## Brand rules
- Terra Green `#72C165` for fills, buttons and icons. Never use it for small text on white; use `--green-text` `#347A2E`.
- Text on green is always Charcoal `#293641`.
- Montserrat only. Labels are uppercase with 0.16em letter-spacing and a green underline (`.label`).
- Square shapes: 2px radius for controls, 4px for cards. No gradients or shadows on brand elements.
- Tagline: CIVIL | ENVIRONMENTAL | WATER RESOURCES.
- Use the registered name "Terra Earth Engineering (U) Limited" in the footer and legal text. The logo reads "Terra Earth Engineering Limited".

## Content rules
- Plain UK English, short sentences, focused on results. No superlatives ("best in Uganda"), no emoji.
- Never invent clients, testimonials, certifications, statistics or photos of people. Use `[PLACEHOLDER]` and `draft: true`.
- Name a client only with their permission. The Ntungamo project names the client type only.
- Alt text on every image. One H1 per page. Tap targets at least 44px.

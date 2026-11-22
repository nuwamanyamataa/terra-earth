# Terra Earth Engineering — website

The website for **Terra Earth Engineering (U) Limited**, to be published at **www.terra-earth.co.ug**.

It is a fast, mobile-first static site built with [Astro](https://astro.build), plain CSS and a little vanilla JavaScript. It is designed to be hosted free on Netlify, with contact and quote forms handled by Netlify Forms.

## Pages

| Page | Address |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Services overview | `/services` |
| Civil Engineering Works | `/services/civil-engineering` |
| Environmental Engineering & Management | `/services/environmental` |
| Water Resources & Solar Pumping | `/services/water-resources` |
| Project Management | `/services/project-management` |
| QHSE | `/qhse` |
| Projects + project pages | `/projects`, `/projects/<name>` |
| Contact | `/contact` |
| Request a Quote | `/quote` |
| Privacy policy | `/privacy` |
| Thank you (after forms) | `/thank-you` |
| Not found | `/404` |

## Preview on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```powershell
npm install
npm run dev
```

Then open http://localhost:4321. To build the final site into the `dist` folder: `npm run build`.

## Where to change things

| To change… | Edit |
| --- | --- |
| Phone numbers, email, address, WhatsApp, hours, directors, values, vision, mission | `src/data/site.ts` |
| Brand colours, fonts, spacing | `src/styles/global.css` (top of the file) |
| A service page's text, sub-services, process or FAQs | `src/content/services/<service>.md` |
| Add a project | Copy a file in `src/content/projects/`, edit it, and set `draft: false` |
| Photos | Put WebP/JPG files in `public/images/` and reference them as `/images/<file>` |
| Logo | `public/logo/` (horizontal for the header, reversed for dark backgrounds) |

Projects marked `draft: true` show while you run `npm run dev` (with a red "Draft" badge) but **never** appear on the live site.

## Deploy to Netlify

1. Sign in at [netlify.com](https://www.netlify.com) with GitHub.
2. **Add new site → Import an existing project →** choose this repository. The settings in `netlify.toml` are picked up automatically (build `npm run build`, publish `dist`).
3. After the first deploy, go to **Forms** and enable form detection, then redeploy. Under **Forms → Form notifications**, add an email notification to `terra.earth2025@gmail.com` for both the `contact` and `quote` forms.
4. **Domain management → Add a domain:** `www.terra-earth.co.ug`. Netlify will show the DNS records to add at your `.ug` domain registrar. HTTPS is switched on automatically once DNS is working (allow up to 48 hours).
5. Submit `https://www.terra-earth.co.ug/sitemap-index.xml` in Google Search Console and add the site to the Google Business Profile.

## Still to confirm or supply before launch

- [ ] **WhatsApp number**: currently +256 781 141473 (`src/data/site.ts`).
- [ ] **Working hours**: currently Mon–Fri 8:00–17:30 and Sat 9:00–13:00 (suggested, not confirmed).
- [ ] **Mission statement**: a draft. The profile has a vision and values but no mission.
- [ ] **Director photos and bios**: the cards show initials and short draft bios based on each director's discipline. Add headshots to `public/images/team/` and confirm the bios, qualifications and "Eng." titles.
- [ ] **Office map pin and coordinates**: the map searches "Dr Lukwiya Road, Naalya". Confirm the exact location.
- [ ] **Projects**: one live project (Ntungamo 41-acre solar irrigation, client not named). Three drafts are waiting for details: floating solar pump, school solar system, ESIA. Get client permission before naming anyone.
- [ ] **Trust numbers**: add real figures (projects completed, boreholes, districts) if wanted.
- [ ] **Licences and memberships** (NEMA, DWRM, UIPE, ERB): currently "available on request" on the About page.
- [ ] **Company profile PDF**: the current profile is 70 MB, too large for the web. Export a compressed version under 5 MB to `public/docs/` and link it from the About page.
- [ ] **Logo files**: the logo was cut from the company profile. Replace the files in `public/logo/` with the original SVG/PNG artwork when available.
- [ ] **Business email**: switch to `info@terra-earth.co.ug` when it exists.

## Brand

Colours and type follow the Terra Earth brand kit. Terra Green `#72C165` is used for fills, buttons and icons, and Charcoal `#293641` for headings and dark sections. Green text uses `#347A2E` for contrast. Text on green is always charcoal. The font is Montserrat throughout. Shapes are square or nearly square, with no gradients or drop shadows on brand elements.

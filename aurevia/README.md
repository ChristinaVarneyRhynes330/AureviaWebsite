# AUREVIA — The Golden Way

Static marketing site (HTML, CSS, vanilla JS). No build step.

## Structure
- `index.html` — page, SEO meta, JSON-LD
- `css/styles.css` — all styling (design tokens in `:root`)
- `js/main.js` — mobile nav, portfolio filter, form submission
- `assets/images/` — **add your exported images here** (see list below)

## Before launch
1. Export the Canva images into `assets/images/` with these names:
   `logo.png`, `hero-mark.png`, `portrait-window.jpg`, `moodboard.jpg`, `portrait-seated.jpg`, `portrait-blazer.jpg`, `editorial-chair.jpg`, and a 1200x630 `og-image.jpg`.
   Compress to WebP/JPG under ~200 KB each.
2. Replace `YOUR-DOMAIN.com` in `index.html`, `robots.txt`, `sitemap.xml`.
3. Create a free form endpoint (Formspree, Web3Forms, or Netlify Forms) and replace `YOUR_FORM_ID` in both `<form action>` attributes.
4. Add real contact email and social links to the JSON-LD block.

## Deploy
Push to `main`; the workflow in `.github/workflows/pages.yml` publishes to GitHub Pages (enable Settings > Pages > Source: GitHub Actions).

## Removed from the Canva/editor version
`canva://` image tokens, `data-template-id` attributes, and the `/_sdk/*` scripts (data, editing, resizing, telemetry). They only work inside the editor; forms now post to a real endpoint.

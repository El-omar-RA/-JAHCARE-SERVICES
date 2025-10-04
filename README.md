# JAHCARE SERVICES Website

A fully responsive, accessible single-page site for JAHCARE SERVICES. The design draws inspiration from the flow of julyardi.org.au while keeping original content, visual language, and code. It is built with plain HTML, CSS, and vanilla JavaScript so it can be hosted directly on GitHub Pages.

## Project structure

- `index.html` – One-page layout with hero, mission, workshops, services, program, philanthropy, funding, team, and contact sections.
- `css/styles.css` – Mobile-first styles, custom utility classes, and component rules (sticky nav, cards, timeline, form, etc.).
- `js/main.js` – Burger menu toggle, smooth scrolling with sticky-header offset, prefers-reduced-motion support, and automatic copyright year.
- `assets/logo.svg` – Gradient SVG logo placeholder sized for nav/SEO usage.

## Work locally

1. Clone or download this folder.
2. Open `index.html` directly in a browser for a quick look, or start a lightweight server (recommended for testing relative paths):
   ```bash
   python3 -m http.server
   ```
3. Edit text/imagery in `index.html`, adjust styles in `css/styles.css`, and tweak interaction in `js/main.js`.

## Deploy on GitHub Pages (quick steps)

1. Create a GitHub repository (e.g., `jahcare-website`).
2. Add the files/folders from this project (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
3. Push to GitHub and go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose your default branch (such as `main`) and the `/ (root)` folder.
5. Click **Save**. Pages will publish at `https://<YOUR-USERNAME>.github.io/jahcare-website/` once the build finishes.

### Custom domain (optional)

- In **Settings → Pages**, add your domain under **Custom domain** and follow the DNS instructions (create the required `A`/`AAAA` records or `CNAME`).
- Commit a `CNAME` file at the repository root containing only your domain name.
- After DNS propagates, enforce HTTPS in the same Pages settings panel.

## Notes for updates

- Keep internal links relative so the site works from a subpath on GitHub Pages.
- Fonts are loaded from Google Fonts (`DM Serif Display` and `Inter`); remove or replace the `<link>` tags if self-hosting.
- Images use `loading="lazy"` and interactive elements include focus styles for accessibility.
- Update contact details or program information directly in `index.html` as offerings evolve.

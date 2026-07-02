# Place Holder — personal website

A sleek, single-screen editorial homepage plus matching interior page templates,
built as plain static HTML/CSS/JS. No build step, no dependencies (fonts load from
Google Fonts). Colors are the IBM colorblind-safe palette used as accents on
off-white.

## Files

```
site/
├── index.html            Homepage — single screen, no scroll
├── research.html         Content template: intro + area cards + prose
├── publications.html     List template: year-grouped entries with links
├── projects.html         Grid template: project cards with screenshot slots
├── music.html            Hobby template (Music)
├── rock-collecting.html  Hobby template (Rock Collecting)
├── houseplants.html      Hobby template (Houseplants)
├── contact.html          Links + optional message form
├── styles.css            Shared design system (colors, type, layout, components)
├── nav.js                Dropdown + mobile menu behavior
├── images/               ← create this; drop portrait.jpg + photos here
└── files/                ← create this; drop CV.pdf here
```

## Make it yours

- **Name:** find/replace `Place Holder` across the `.html` files.
- **Affiliation / status:** edit the `.meta` block and footer in each page.
- **Portrait:** on `index.html`, give the `.portrait-frame` div a background image:
  `<div class="portrait-frame" style="background-image:url('images/portrait.jpg')">`.
  The striped pattern is just the fallback.
- **CV:** put `CV.pdf` in a `files/` folder (the Download CV button links to `files/CV.pdf`).
- **Colors:** all palette values live at the top of `styles.css` under `:root`.
  `--accent` is the primary interactive color (currently magenta).
- **Dark mode:** the ☾/☀ button in the header toggles it; the choice is saved in
  `localStorage` and applied on every page (no flash on load). Dark palette values
  live under `:root[data-theme="dark"]` in `styles.css`.
- **Content:** every template has `<!-- TEMPLATE -->` comments showing what to
  duplicate (cards, publication rows, gallery photos).
- **Contact form:** static HTML can't email on its own. Point the form at
  [Formspree](https://formspree.io) (`action="https://formspree.io/f/XXXX"`),
  or delete the form column and keep the direct links.

## Publish on GitHub Pages

1. Create a repo. For a personal site at `https://<username>.github.io`, name the
   repo `<username>.github.io`. Otherwise any repo name works (site will live at
   `https://<username>.github.io/<repo>/`).
2. Put the **contents of this `site/` folder at the repo root** (so `index.html`
   is at the top level), then commit and push.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick `main` and `/ (root)`, save.
4. Wait ~1 minute; your site is live at the URL shown on that Pages screen.

Local preview: just open `index.html` in a browser, or run
`python3 -m http.server` inside the folder and visit `http://localhost:8000`.

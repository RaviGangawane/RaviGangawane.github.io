# Ravi Gangawane Portfolio

Static portfolio website for [ravi.gangawane.com](https://ravi.gangawane.com/), hosted with GitHub Pages.

## Public routes

- `/` — current portfolio
- `/versions/` — previous portfolio archive
- `/404.html` — custom not-found page
- `/docs/1.0.0/` and `/docs/2.0.0/` — archived versions, excluded from search indexing

## Requirements

- Node.js 22 or newer
- npm

The website itself has no runtime dependencies.

## Local development

```bash
npm run serve
```

Open `http://localhost:4173/`.

## Quality checks

```bash
npm run validate
npm run audit
```

`npm run validate` checks current public HTML pages, local asset references, fragment links, duplicate IDs, required metadata, heading structure, external-link safety, JSON validity, JavaScript syntax, and asset budgets.

`npm run audit` runs Lighthouse against the homepage and Versions page. Generated reports are stored in `.lighthouseci/` and are intentionally ignored by Git.

## Editing content

- Main portfolio content: `index.html`
- Versions content: `versions/index.html`
- Shared navigation behavior: `scripts/navigation.js`
- Experience counter and timeline behavior: `scripts/experience.js`
- Main visual styles: `styles.css`
- Versions-only styles: `versions.css`
- SEO discovery: `robots.txt` and `sitemap.xml`
- Improvement roadmap: `WEBSITE_IMPROVEMENTS.md`

Keep one descriptive `h1` per public page. Use `h2` for major sections and `h3` for cards within those sections.

When adding an external link that opens a new tab, include:

```html
target="_blank" rel="noopener noreferrer"
```

When adding a content image, provide meaningful alternative text and explicit dimensions. Decorative images should use `alt=""`.

## Responsive targets

Verify changes at these minimum widths:

- 320 px — small mobile
- 390 px — mobile
- 768 px — tablet
- 1366 px — laptop
- 1920 px — desktop

Keyboard navigation, visible focus states, and reduced-motion behavior must continue to work at every width.

## Performance budgets

- Lighthouse performance: 90 or higher
- Lighthouse accessibility: 90 or higher
- Lighthouse best practices: 90 or higher
- Lighthouse SEO: 90 or higher
- Main source stylesheet migration ceiling: 400 KB
- Optimized header logo: 100 KB or less

The stylesheet ceiling is a temporary migration budget. New styles should reuse existing tokens and components instead of adding corrective overrides.

## Deployment

Push changes to the `main` branch. GitHub Pages serves the repository through the custom domain configured in `CNAME`.

Before deployment:

1. Run `npm run validate`.
2. Run `npm run audit`.
3. Check the homepage and Versions page at the responsive target widths.
4. Verify contact and external links.
5. Confirm social preview metadata if titles, descriptions, or images changed.

GitHub Actions repeats validation and Lighthouse checks for pushes and pull requests.

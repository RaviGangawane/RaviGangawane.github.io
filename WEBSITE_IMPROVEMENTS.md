# Whole Website Improvement Plan

Updated: 27 July 2026

## Goal

Turn the portfolio into a faster, easier-to-maintain, accessible, and conversion-focused website while preserving its current cyber-themed visual identity.

## Current website snapshot

- The main portfolio contains 14 sections in a single `index.html` file.
- The site includes a homepage, Versions page, custom 404 page, two archived portfolio versions, a manifest, sitemap, robots file, structured data, and social-sharing metadata.
- Local validation checks HTML references, duplicate IDs, JSON files, JavaScript syntax, asset budgets, and archive-preview behavior.
- `styles.css` is approximately 371 KB and contains about 3,748 `!important` declarations and 142 media-query blocks.
- `index.html` is approximately 70 KB.
- The optimized WebP logo is approximately 9 KB.
- Version previews use static WebP screenshots instead of resource-heavy iframes.
- The current validation command incorrectly scans generated `.lighthouseci` reports and fails on those reports rather than on website pages.

## Recommended improvement

The highest-value whole-site improvement is a **design-system and quality-pipeline refactor**. This combines the repeated styles into reusable components, simplifies the homepage markup, and makes automated checks accurately protect the public website.

This improvement should not redesign the site. It should retain the current content and visual character while making every page lighter, more consistent, and safer to update.

## Priority 1: Fix the quality pipeline

Update `tools/validate-site.mjs` so generated and third-party content is excluded from website validation.

Exclude at least:

```text
.git/
.lighthouseci/
node_modules/
docs/
```

Also add checks for:

- exactly one descriptive `h1` on every public page;
- `aria-current="page"` on the active primary navigation item;
- safe external links using `rel="noopener noreferrer"`;
- image dimensions on content images;
- broken fragment links;
- accidental mojibake such as `Â`, `â€`, and `â€”`;
- CSS and JavaScript size budgets.

**Acceptance criteria**

- `npm run validate` passes on the current public website.
- Generated Lighthouse reports never produce metadata failures.
- A genuinely broken local link, duplicate ID, or malformed script causes validation to fail.

## Priority 2: Refactor the CSS into a small design system

Create a predictable stylesheet structure:

```text
styles/
├── tokens.css
├── base.css
├── layout.css
├── components.css
├── sections.css
└── responsive.css
```

Use shared tokens for:

- colors and gradients;
- font sizes and line heights;
- spacing;
- borders and corner radii;
- shadows and glow effects;
- animation duration and easing;
- content width and breakpoints.

Create one base component for buttons, cards, section headings, icons, badges, and links. Use modifier classes for intentional variations instead of selector overrides.

Refactor one section at a time, compare it against reference screenshots, and remove obsolete rules after verification.

**Acceptance criteria**

- Production CSS is below 150 KB uncompressed.
- Fewer than 25 intentional `!important` declarations remain.
- Media queries use a documented set of breakpoints.
- Shared components look consistent on the homepage, Versions page, and 404 page.
- The site has no horizontal overflow at 320, 390, 768, 1366, and 1920 pixels.

## Priority 3: Improve semantic structure and accessibility

- Change the homepage hero title to the single page `h1`; keep section titles as `h2`.
- Add `aria-current="page"` to the homepage's active navigation link.
- Verify heading order across all 14 sections.
- Ensure mobile-menu focus stays inside the open menu and returns to the menu button when closed.
- Make Escape close the mobile menu.
- Confirm that every interactive element has a visible keyboard focus style.
- Check muted text, orange text, and cyan text against WCAG AA contrast requirements.
- Pause decorative marquees and animations when an element inside them receives focus.
- Preserve the existing `prefers-reduced-motion` behavior.

**Acceptance criteria**

- Keyboard users can reach, identify, and operate every control.
- Automated accessibility testing reports no serious or critical issues.
- Text contrast meets WCAG 2.2 AA.
- Each public page has one logical `h1`.

## Priority 4: Simplify content and strengthen conversion

The homepage is visually rich but long. Make the visitor's next action clearer:

- keep one primary call to action: **Contact / Hire Me**;
- use **View Projects** as the secondary action;
- move the most persuasive projects and measurable outcomes closer to the hero;
- replace vague metrics such as “Teams” with verified numbers or clear qualitative statements;
- give each project a problem, contribution, technology, and measurable result;
- reduce repeated descriptions of Angular, architecture, mentoring, and performance;
- add a downloadable, current résumé if one is intended for public use;
- keep the contact section short and make response expectations clear.

Do not publish client-sensitive metrics or claims that cannot be verified.

**Acceptance criteria**

- A visitor can understand Ravi's role, specialization, evidence, and contact path within the first screen and one scroll.
- Every displayed metric is accurate and maintainable.
- Every featured project explains impact, not only technologies.
- The primary contact action is consistent across header, hero, projects, and footer.

## Priority 5: Improve performance

- Keep the optimized `logo.webp` and static archive previews.
- Convert suitable JPEG/PNG content images to AVIF or WebP.
- Generate responsive `srcset` sizes for the profile photo and prominent images.
- Preload only above-the-fold assets.
- Lazy-load below-the-fold images and avoid lazy-loading small decorative SVG icons unnecessarily.
- Minify production CSS and JavaScript.
- Review animation paint cost, especially glows, filters, fixed backgrounds, marquees, and scan-line effects.
- Set long-lived cache headers where hosting permits; use versioned filenames for changed assets.

**Performance budgets**

| Measure | Target |
|---|---:|
| Total initial transfer on mobile | Under 1.5 MB |
| Main CSS, uncompressed | Under 150 KB |
| Main JavaScript, compressed | Under 50 KB |
| Largest Contentful Paint | Under 2.5 s |
| Interaction to Next Paint | Under 200 ms |
| Cumulative Layout Shift | Under 0.1 |
| Lighthouse performance | 90 or higher |

## Priority 6: Improve SEO and sharing

The essential SEO files and metadata already exist. Strengthen them by:

- validating the `Person` structured data against the current visible content;
- adding `ProfilePage` or `WebSite` structured data only when it accurately describes the page;
- giving the Versions page its own social preview image;
- keeping titles and descriptions unique for the homepage, Versions page, and 404 page;
- checking that the sitemap contains only canonical public URLs;
- testing social cards after deployment;
- ensuring archived versions are intentionally indexed or explicitly excluded.

**Acceptance criteria**

- Canonical URLs resolve to the preferred HTTPS domain.
- Structured data validates without errors.
- Social previews display the correct title, description, and 1200 × 630 image.
- Search engines receive a deliberate indexing rule for archived versions.

## Priority 7: Improve maintainability

- Split repeated page elements such as the header and footer through a small build step or static-site templating system if the site will keep growing.
- Move portfolio content into structured data rather than duplicating markup patterns.
- Replace the outdated README with setup, content-editing, validation, audit, and deployment instructions.
- Document the supported browsers and responsive breakpoints.
- Keep generated Lighthouse output out of source control unless a report is intentionally published.
- Add formatting and linting for HTML, CSS, JavaScript, and Markdown.

**Acceptance criteria**

- Contact details, navigation, and shared metadata have one documented source of truth.
- A new project or experience item can be added without copying a large HTML block.
- A new contributor can run, validate, audit, and deploy the site using the README.

## Delivery plan

### Phase 1: Baseline and correctness

1. Capture desktop and mobile reference screenshots.
2. Fix validation exclusions and encoding checks.
3. Correct the homepage heading hierarchy and navigation state.
4. Run validation, Lighthouse, and accessibility audits.

### Phase 2: CSS refactor

1. Extract design tokens and base styles.
2. Consolidate buttons, cards, headings, badges, and links.
3. Refactor sections individually.
4. Consolidate responsive rules and remove obsolete CSS.
5. Compare every target viewport with the reference screenshots.

### Phase 3: Content and performance

1. Tighten hero, project, metric, and contact content.
2. Optimize responsive images and animation cost.
3. Minify production assets.
4. Re-run performance and accessibility audits.

### Phase 4: Automation and documentation

1. Add formatting, linting, link, accessibility, and Lighthouse checks to CI.
2. Replace the README with complete maintenance instructions.
3. Document final audit results and budgets.

## Definition of done

The whole-site improvement is complete when:

- all public pages pass local and CI validation;
- the design remains recognizable and consistent at all target widths;
- CSS is below the agreed budget and no longer depends on thousands of overrides;
- keyboard navigation and reduced-motion behavior work throughout the site;
- Lighthouse scores are at least 90 for performance, accessibility, best practices, and SEO on the tested production URL;
- important content and calls to action are concise, accurate, and easy to find;
- documentation explains how to maintain and deploy the website.

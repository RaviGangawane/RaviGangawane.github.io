import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const notices = [];
const ignoredDirectories = new Set([
  ".git",
  ".lighthouseci",
  "node_modules",
  "docs",
]);

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    return entry.isDirectory() ? walk(path) : [path];
  });

const files = walk(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const relative = file.slice(root.length + 1);

  // Search Console verification files are intentionally plain-text tokens
  // served with an .html extension, not crawlable website pages.
  if (/^google-site-verification:\s*[^\r\n]+\s*$/i.test(html.trim())) continue;

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [
    ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index)),
  ];
  const headings = [...html.matchAll(/<h1\b/gi)];

  if (duplicateIds.length) {
    failures.push(`${relative}: duplicate IDs: ${duplicateIds.join(", ")}`);
  }

  if (headings.length !== 1) {
    failures.push(
      `${relative}: expected exactly one h1, found ${headings.length}`,
    );
  }

  if (/[Â]|â(?:€|€™|€œ|€œ|€”|€“)/u.test(html)) {
    failures.push(`${relative}: contains likely mojibake text`);
  }

  const references = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map(
    (match) => match[1],
  );
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|#|javascript:|data:)/.test(reference))
      continue;
    const cleanReference = decodeURIComponent(reference.split(/[?#]/)[0]);
    if (!cleanReference) continue;
    const target = cleanReference.startsWith("/")
      ? join(root, cleanReference.slice(1))
      : resolve(file, "..", cleanReference);
    const indexTarget = join(target, "index.html");

    if (!existsSync(target) && !existsSync(indexTarget)) {
      failures.push(`${relative}: missing local reference ${reference}`);
    }
  }

  for (const fragment of references.filter(
    (reference) => reference.startsWith("#") && reference.length > 1,
  )) {
    if (!ids.includes(decodeURIComponent(fragment.slice(1)))) {
      failures.push(`${relative}: missing fragment target ${fragment}`);
    }
  }

  for (const link of html.matchAll(/<a\b([^>]*\btarget="_blank"[^>]*)>/gi)) {
    if (!/\brel="[^"]*\bnoopener\b[^"]*"/i.test(link[1])) {
      failures.push(
        `${relative}: target="_blank" link is missing rel="noopener"`,
      );
    }
  }

  for (const required of [
    'rel="canonical"',
    'property="og:title"',
    'name="twitter:card"',
  ]) {
    if (!html.includes(required))
      failures.push(`${relative}: missing ${required}`);
  }
}

for (const jsonFile of [
  "manifest.webmanifest",
  "package.json",
  "lighthouserc.json",
]) {
  try {
    JSON.parse(readFileSync(join(root, jsonFile), "utf8"));
  } catch (error) {
    failures.push(`${jsonFile}: invalid JSON (${error.message})`);
  }
}

for (const script of files.filter(
  (file) => extname(file) === ".js" || extname(file) === ".mjs",
)) {
  const result = spawnSync(process.execPath, ["--check", script], {
    encoding: "utf8",
  });
  if (result.status !== 0)
    failures.push(`${script.slice(root.length + 1)}: ${result.stderr.trim()}`);
}

const requiredFiles = [
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "404.html",
];
for (const required of requiredFiles) {
  if (!existsSync(join(root, required)))
    failures.push(`Missing required support file: ${required}`);
}

const cssSize = statSync(join(root, "styles.css")).size;
if (cssSize > 500_000)
  failures.push(
    `styles.css exceeds 500 KB migration budget (${cssSize} bytes)`,
  );
notices.push(`styles.css: ${(cssSize / 1024).toFixed(1)} KB`);

const logoSize = statSync(join(root, "assets", "logo", "logo.webp")).size;
if (logoSize > 100_000)
  failures.push(`Optimized logo exceeds 100 KB budget (${logoSize} bytes)`);
notices.push(`optimized logo: ${(logoSize / 1024).toFixed(1)} KB`);

const versionsHtml = readFileSync(join(root, "versions", "index.html"), "utf8");
if (versionsHtml.includes("<iframe"))
  failures.push("Versions page must use static previews instead of iframes");

for (const notice of notices) console.log(`✓ ${notice}`);

if (failures.length) {
  console.error("\nValidation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `✓ Validated ${htmlFiles.length} HTML pages and ${files.length} current-site files`,
);

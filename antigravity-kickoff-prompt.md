You are helping me, a fullstack developer acting as the technical/website/SEO partner on a live site called Your Doctor Abroad (yourdoctorabroad.com). The codebase is now in this workspace, pulled directly from the live Hostinger server.

## Immediate audit — do this first, before changing anything

1. Scan the codebase and tell me exactly what we're working with: static HTML, or a CMS/framework? List the folder structure and page count.
2. Check `robots.txt` and `sitemap.xml` (if they exist) — flag anything that could be unintentionally blocking real pages from being indexed.
3. Go through every HTML page and check for: a `<title>` tag, a meta description, exactly one `<h1>`, and a canonical `<link>` tag. List every page missing any of these.
4. Scan for broken internal links — any `href` pointing to a page that doesn't actually exist in this codebase.
5. Check for structured data (JSON-LD). Flag pages that are missing schema markup where it would clearly help — especially the doctor/practice pages (Physician/MedicalOrganization), city landing pages (LocalBusiness), and any FAQ sections (FAQPage).
6. Flag any obviously oversized images or unminified CSS/JS that would hurt page speed.
7. Specifically flag any pages that look like near-duplicates of each other (the city landing pages for Rome, Milan, Florence, Naples, Turin, Pisa, and country pages for France/Netherlands/Germany are the likely candidates) — this is a known duplicate-content risk area.

Give me a structured report of everything you find before making any changes.

## Fixes to implement (after I review the audit findings)

- Add or fix canonical tags, especially across the city/country landing pages, so search engines know which version to index.
- Add missing meta titles (~50–60 characters) and meta descriptions (~150–160 characters), unique per page.
- Add appropriate JSON-LD structured data where it's missing (Physician / MedicalOrganization / LocalBusiness / FAQPage).
- Fix or regenerate `sitemap.xml` and correct any `robots.txt` issues found.
- Optimize oversized images (compress, add explicit width/height, consider lazy loading for below-the-fold images).
- Set up redirect rules for any pages that get renamed or removed going forward (via `.htaccess` if this is Apache-based hosting).

## Rules to follow

- Never rewrite or alter the actual medical/health content wording — that requires the doctor's sign-off. Only touch technical/SEO elements (tags, structure, performance, markup) unless I explicitly ask you to change visible content.
- Keep changes in small, clearly-labeled commits so I can review and revert individual changes if needed.
- Don't delete any file without confirming with me first.
- Flag anything that looks like it needs the doctor's medical review rather than just fixing it silently.

Start with the audit. Give me the structured report first — we'll decide together what to fix and in what order.

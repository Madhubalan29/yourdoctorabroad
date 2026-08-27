# Partner 2 Handbook: Website Launch, Maintenance, SEO & Backlinks Explained

> **Role Summary**: As **Partner 2 (Technical, Website & SEO Partner)**, you are the technical backbone of **Your Doctor Abroad** (`yourdoctorabroad.com`). Your job is to ensure the website is always online, ultra-fast, easily discovered by Google, trusted by patients, converting visitors into paid consultations, and legally protected from technical errors.

---

## Quick Navigation Index

1. [Requirement 1: Launch & Infrastructure](#1-launch--infrastructure)
2. [Requirement 2: Search Console & Analytics](#2-search-console--analytics)
3. [Requirement 3: Indexing & Crawl Health](#3-indexing--crawl-health)
4. [Requirement 4: On-Page & Technical SEO](#4-on-page--technical-seo)
5. [Requirement 5: Content Implementation & Medical Guardrails](#5-content-implementation--medical-guardrails)
6. [Requirement 6: Technical Performance & Security](#6-technical-performance--security)
7. [Requirement 7: Backlinks & Authority Building](#7-backlinks--authority-building)
8. [Requirement 8: Digital PR & Media Outreach](#8-digital-pr--media-outreach)
9. [Requirement 9: Local SEO & Business Listings](#9-local-seo--business-listings)
10. [Requirement 10: Conversion Rate Optimization (CRO)](#10-conversion-rate-optimization-cro)
11. [Requirement 11: Monthly Executive Reporting](#11-monthly-executive-reporting)
12. [Summary Checklist: Daily, Weekly & Monthly Routine](#12-summary-checklist-daily-weekly--monthly-routine)

---

## 1. Launch & Infrastructure

### What the requirement says:
> *Launch — Manage hosting, DNS, SSL, redirects, canonical URLs, robots.txt, sitemap, backups and production deployment.*

### In Plain English:
Setting up and running the website's physical "house and address" on the internet so that anyone typing `yourdoctorabroad.com` reaches a secure, functioning, backed-up site without errors.

### The Problem It Solves:
* If DNS is misconfigured, emails and the website go down.
* If SSL is missing or expired, browsers show a scary red screen: *"Warning: Potential Security Risk Ahead"*, scaring patients away.
* If backups are missing, a server crash or corrupted edit could erase the entire business overnight.
* If redirects/canonicals are missing, search engines get confused by `http://`, `https://`, `www.`, and non-`www.` versions of the same site, splitting your search ranking power.

### Current Status:
✅ **Initial Launch is Already Complete**: The site is already live and running on Hostinger.

### What "Launch & Infrastructure" Means For You Now (Ongoing Maintenance):
Since the site is already live, your ongoing infrastructure tasks on Hostinger are:

1. **Pushing Code Updates to the Live Site (Deployment)**:
   * Whenever you or your developer create new blog posts, optimize images, or update SEO tags in Git, you need to push those updated files to Hostinger so live visitors can see them.
   * *Methods*: Hostinger Git integration (auto-pull on `git push`), Hostinger File Manager upload, or FTP/SFTP (FileZilla).
2. **Verifying Hostinger Automated Backups**:
   * In Hostinger hPanel > **Files > Backups**, ensure daily or weekly automated backups are active. If an edit ever goes wrong, you can roll back to yesterday's version with a single click.
3. **SSL Certificate Health**:
   * Hostinger's Let's Encrypt SSL auto-renews every 90 days. You just need to check once a month in Hostinger hPanel > **Security > SSL** that the status is green (*"Active"*).
4. **Redirects & Canonical URLs**:
   * Maintain the `.htaccess` / `_headers` rules on Hostinger so that any visitor typing `http://` or `www.` gets redirected automatically to `https://yourdoctorabroad.com/`.
5. **Production Sitemap & Robots.txt**:
   * Whenever a new city page or blog post is published, ensure the updated `sitemap.xml` is live on Hostinger so Google finds it immediately.

---

## 2. Search Console & Analytics

### What the requirement says:
> *Search Console & analytics — Maintain Google Search Console, analytics, conversion tracking and reporting.*

### In Plain English:
Installing the digital "security cameras and cash register counters" on your website to see how many people visit, where they come from (Google search, Instagram, Reddit), what keywords they typed, and whether they clicked "Book Consultation" or left immediately.

### The Problem It Solves:
Without analytics, you are flying blind. You won't know if 10 people or 10,000 people visited, what countries they are from, why nobody is booking, or if Google has penalized the site.

### How It Is Solved in Practice:
1. **Google Search Console (GSC)**:
   * Verify domain ownership via DNS TXT record.
   * Submit `https://yourdoctorabroad.com/sitemap.xml`.
   * Check weekly for crawl errors, indexed pages, and search keyword queries (e.g., "English speaking doctor Rome").
2. **Google Analytics 4 (GA4)**:
   * Place the GA4 measurement tag (`G-XXXXXXXXXX`) in the `<head>` of all HTML pages.
3. **Conversion Event Tracking**:
   * Track when users click:
     * WhatsApp consultation links (`https://wa.me/...`)
     * Booking buttons (`book.html` submissions)
     * Phone call clicks (`tel:+39...`)
     * Free consultation form submissions

---

## 3. Indexing & Crawl Health

### What the requirement says:
> *Indexing — Monitor indexed pages, discovered/crawled pages, canonical issues, redirects, duplicate URLs and sitemap coverage.*

### In Plain English:
Making sure Google actually stores your pages in its search database (indexed) so people can find them when searching. If Google doesn't index a page, it does not exist on the internet.

### The Problem It Solves:
* Google might discover a page but decide not to index it because of low content quality, duplicate text, or server errors.
* Duplicate URLs (e.g. `/online-doctor-rome.html` vs `/online-doctor-rome`) can dilute ranking.
* Broken redirects waste Google's crawl budget.

### How It Is Solved in Practice:
1. **GSC Page Indexing Report**:
   * Go to **GSC > Indexing > Pages**.
   * Verify that all 34 public pages show as **"Indexed" (Green)**.
   * Review "Not Indexed" pages and fix reasons (e.g. *Duplicate without user-selected canonical*, *Crawled - currently not indexed*).
2. **IndexNow Protocol**:
   * Run `indexnow-submit.py` whenever you publish new pages or updates so Bing and search engines crawl immediately rather than waiting weeks.
3. **Manage `noindex`**:
   * Ensure private internal pages (`payment-links.html`, `review-tayyab-altaf.html`) have `<meta name="robots" content="noindex, nofollow"/>` so private links don't leak into public search results.

---

## 4. On-Page & Technical SEO

### What the requirement says:
> *SEO — Maintain titles, meta descriptions, headings, structured data, internal links, location pages and crawlability.*

### In Plain English:
Polishing every single page with specific code tags so Google understands what the page is about and displays an attractive, clickable title and snippet on the search results page.

### The Problem It Solves:
* If title tags are missing or generic (e.g., "Home"), Google ranks competitor sites above yours.
* If meta descriptions are missing, Google generates random text snippets that look messy.
* If structured data is missing, Google cannot display rich snippets (like Doctor star ratings, doctor badges, price ranges, or expandable FAQ accordions in search results).

### How It Is Solved in Practice:
1. **Unique `<title>` Tags**: ~50–60 characters, format: `Primary Keyword | Benefit — Brand` (e.g. *Urgent Online Doctor in Rome | Fast English-Speaking Care*).
2. **Unique `<meta name="description">`**: ~140–160 characters compelling pitch with call to action.
3. **Heading Hierarchy**: Exactly one `<h1>` per page (the main topic), followed by structured `<h2>` and `<h3>` tags.
4. **JSON-LD Structured Data (Schema Markup)**:
   * **Doctor Profile**: `@type: "Physician"` (Dr. Tayyab Altaf's degree, university, languages, specialties).
   * **Practice**: `@type: "MedicalBusiness"` / `"MedicalOrganization"`.
   * **Location Pages**: `@type: "MedicalBusiness"` with `areaServed` (Rome, Milan, France, etc.).
   * **FAQs**: `@type: "FAQPage"` so questions show directly in Google search dropdowns.
5. **Internal Linking**: Link related blog posts to city pages and booking pages (e.g. A blog about Italian pharmacies linking to "Online Doctor Florence").

---

## 5. Content Implementation & Medical Guardrails

### What the requirement says:
> *Content implementation — Publish approved landing pages, FAQs and travel-health content while preserving medically approved wording.*

### In Plain English:
Taking articles, FAQs, and medical guides written or approved by Partner 1 (the Doctor) and formatting them into clean, fast HTML pages without accidentally changing medical meanings or advice.

### The Problem It Solves:
* Telehealth and medicine are classified by Google as **YMYL ("Your Money or Your Life")**. If a non-doctor edits medical advice or makes false claims (e.g. "We cure all emergencies online"), Google penalizes the entire website, and there could be severe legal/medical liabilities.

### How It Is Solved in Practice:
1. **Strict Medical Guardrail Rule**:
   * You edit CSS, layout, tags, images, speed, and schema.
   * You **NEVER** alter medical descriptions (e.g., medication advice, diagnosis limits, emergency warnings) without written confirmation from the doctor.
2. **Standardized Content Publishing Workflow**:
   * Receive approved text from Doctor.
   * Create HTML using existing site template (`blog-*.html`).
   * Add Schema markup (`Article`), unique `<title>`, `<meta description>`, OpenGraph image tags.
   * Update `sitemap.xml` and submit via `indexnow-submit.py`.

---

## 6. Technical Performance & Security

### What the requirement says:
> *Technical performance — Monitor Core Web Vitals, mobile usability, page speed, broken links, uptime and security.*

### In Plain English:
Making sure the site loads instantly (under 2 seconds) on slow mobile data for a tourist standing in an airport or train station, never crashes, and is safe from hackers.

### The Problem It Solves:
* 70%+ of tourists book emergency doctors from their mobile phones on 4G/5G. If the site takes 6 seconds to load, they leave and click a competitor.
* Google uses **Core Web Vitals (LCP, INP, CLS)** as a direct ranking factor.

### How It Is Solved in Practice:
1. **Core Web Vitals Optimization**:
   * **LCP (Largest Contentful Paint)**: Compress hero images (keep under 100 KB), use modern formats (WebP/JPG).
   * **CLS (Cumulative Layout Shift)**: Set explicit `width` and `height` attributes on all `<img>` tags so content doesn't jump around while loading.
   * **Lazy Loading**: Add `loading="lazy"` to all images below the top fold.
2. **Broken Link Monitoring**:
   * Run automated crawler scripts monthly to ensure zero 404 errors.
3. **Uptime Monitoring**:
   * Set up free monitoring (e.g. UptimeRobot) to send an instant WhatsApp/email alert if the server ever goes down.
4. **Security**:
   * Keep PHP/server packages updated on Hostinger, use secure HTTPS headers, and prevent spam bots on booking forms.

---

## 7. Backlinks & Authority Building

### What the requirement says:
> *Backlinks — Build relevant, legitimate links from travel, tourism, expat, healthcare, university, local and professional resources.*

### In Plain English:
Getting other reputable websites to put a clickable link to `yourdoctorabroad.com`. Google treats every backlink like a "vote of trust". The more votes from reputable sites, the higher you rank.

### The Problem It Solves:
A brand new website has 0 "Domain Authority". Even with great content, Google won't rank you above established medical directories without backlinks proving credibility.

### How It Is Solved in Practice:
1. **Target Outreach Categories**:
   * **Expat & Digital Nomad Communities**: (e.g., Expat.com, InterNations, Reddit r/expats, NomadList).
   * **Study Abroad / University Resources**: Student guide resources for international universities in Milan, Rome, Pavia, Florence (e.g. Erasmus groups).
   * **Travel Blogs & Tour Guides**: Travel bloggers writing "What to do if you get sick in Italy".
   * **Medical Directories & Doctor Registers**: Doctor profile listings, telemedicine aggregator portals.
2. **Execution**:
   * Partner 2 provides the link targets, anchor text, and landing page URLs.
   * Publish helpful guest posts, directory submissions, and partner resource links.

---

## 8. Digital PR & Media Outreach

### What the requirement says:
> *Digital PR — Coordinate useful guides, expert resources, partnerships and announcements that can earn natural links.*

### In Plain English:
Creating exceptionally helpful, free medical travel guides (e.g., *"Complete Expat Guide to Buying Prescription Medicine in Italian Pharmacies"*) and sharing them with travel journalists, expat blogs, and news sites so they write about you for free.

### The Problem It Solves:
Buying low-quality links can get your site banned by Google. Digital PR earns natural, high-authority editorial links that boost rankings permanently.

### How It Is Solved in Practice:
1. Turn Dr. Tayyab Altaf's medical insights into shareable infographics or downloadable PDF guides.
2. Reach out to English-language Italian media (e.g., *The Local Italy*, *Wanted in Rome*, travel podcasts) offering Dr. Tayyab as an expert medical commentator for seasonal health stories (heatwaves, travel bugs, flu season).

---

## 9. Local SEO & Business Listings

### What the requirement says:
> *Local SEO — Maintain eligible business profiles and consistent business information.*

### In Plain English:
Ensuring your business name, address, phone number, and operating hours are 100% consistent across Google Maps / Google Business Profile, Apple Maps, Bing Places, and online directories.

### The Problem It Solves:
When a tourist in Rome searches "doctor near me", Google looks at **Google Business Profile** and local signals. If business details are mismatched or missing, you miss out on high-intent local patients.

### How It Is Solved in Practice:
1. **NAP Consistency**:
   * Exact match across all platforms:
     * **Name**: Your Doctor Abroad / Dr. Muhammad Tayyab Altaf
     * **Address/Location**: Milan / Italy
     * **Phone**: `+39 380 218 9444`
     * **Website**: `https://yourdoctorabroad.com/`
2. **Google Business Profile**:
   * Maintain the verified profile, update opening hours (24/7 online availability where applicable), upload doctor photos, and encourage satisfied patients to leave reviews via `review-tayyab-altaf.html`.

---

## 10. Conversion Rate Optimization (CRO)

### What the requirement says:
> *Conversion optimization — Improve forms, calls-to-action, trust elements and mobile UX using analytics.*

### In Plain English:
Turning website visitors into paying customers. If 1,000 people visit the site but only 2 book a doctor, CRO is the process of fixing the buttons, forms, and trust badges so that 30 or 50 people book.

### The Problem It Solves:
Traffic without bookings is useless. High drop-off rates usually happen because:
* The booking form is too long or confusing.
* The price isn't transparent.
* The "Book on WhatsApp" button isn't obvious on mobile.
* Visitors don't know if the doctor is licensed or speaks good English.

### How It Is Solved in Practice:
1. **Trust Badges & Proof**:
   * Prominently display Dr. Tayyab Altaf's verified credentials (Pavia University, Italian Medical License, English fluency).
   * Clear pricing: transparent €10 / €25 / €35 consultation pricing with no hidden charges.
2. **Sticky Mobile CTAs**:
   * Ensure a floating "Chat with Doctor on WhatsApp" or "Book Consultation" button is easily reachable on mobile screens.
3. **Frictionless Forms**:
   * Simplify booking fields to only essential questions (Name, Symptoms, Time).

---

## 11. Monthly Executive Reporting

### What the requirement says:
> *Monthly report — Report traffic, rankings, indexed pages, backlinks, leads, conversions and technical issues.*

### In Plain English:
Creating a simple, 1-to-2-page monthly summary report for all 3 partners on the 1st of every month, showing whether website traffic and patient bookings went up or down, and what was achieved.

### The Problem It Solves:
Keeps all three partners aligned, transparent, and accountable. Proves the value of technical/SEO work with real numbers.

### How It Is Solved in Practice (Standard Monthly Template):

```markdown
# Monthly SEO & Performance Report: [Month Year]

### 1. Key Metrics Summary
* **Total Website Visitors (GA4)**: [e.g. 3,420 (+18%)]
* **Organic Search Clicks (GSC)**: [e.g. 1,850]
* **Total Leads / WhatsApp Inquiries**: [e.g. 84]
* **Paid Consultations Completed**: [e.g. 42]

### 2. Search & Indexing Health
* **Total Indexed Pages**: 34 / 34 (100% healthy)
* **Top Ranking Keywords**:
  1. "english speaking doctor rome" - Position #4
  2. "online doctor italy" - Position #6
  3. "tourist prescription italy" - Position #3

### 3. Technical & SEO Actions Completed This Month
* Fixed image compression on hero banners (improved mobile load speed by 35%).
* Added Physician schema markup to Dr. Tayyab's bio page.
* Published 2 new expat health guides approved by Dr. Tayyab.
* Acquired 3 new backlinks from international student forums.

### 4. Priorities for Next Month
* Optimize conversion form on Milan and Rome landing pages.
* Expand outreach to Florence student housing portals.
```

---

## 12. Summary Checklist: Daily, Weekly & Monthly Routine

| Frequency | Task | Tools Used |
| :--- | :--- | :--- |
| **Weekly** | Check Google Search Console for crawl/indexing errors | Google Search Console |
| **Weekly** | Check Uptime & test WhatsApp booking link | Browser / Mobile |
| **Bi-Weekly** | Publish approved medical blogs/landing pages with SEO schema | Git / Hostinger |
| **Monthly** | Run broken links audit & page speed check | PageSpeed Insights / Node crawler |
| **Monthly** | Monitor backlink growth and keyword rank positions | GSC / Ahrefs / SEMrush |
| **Monthly** | Compile & deliver the Monthly Executive Partner Report | Markdown / PDF |
| **Quarterly** | Refresh sitemap timestamps, review legal/privacy policies | Codebase |

---

*This guide serves as the official operational reference for Partner 2.*

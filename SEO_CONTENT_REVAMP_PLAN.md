# FocusMedia Productions — SEO & Content Revamp Implementation Plan
**For: Cursor implementation on the `wedding-landing` Next.js project**
**Prepared from:** `SITE_CONTENT.md` audit + competitor research (Kerala wedding photography market, July 2026)

---

## 0. How to use this file

This is an execution spec, not just recommendations. Each section below maps to specific files/routes in the Next.js app. Work top-to-bottom:

1. Fix data inconsistencies (Section 1) — quick wins, no design risk.
2. Update global + per-page metadata (Section 2–3).
3. Add structured data / JSON-LD (Section 4).
4. Rewrite weak/placeholder copy (Section 5).
5. Add new SEO-driving pages (Section 6).
6. Technical SEO checklist (Section 7).
7. Content calendar for ongoing blog SEO (Section 8).

---

## 1. Fix data inconsistencies first (from TODO audit)

| Issue | Fix |
|---|---|
| Contact email mismatch: `hello@capture.com` (contact page) vs `hello@focusmediaproductions.com` (footer) | Standardize on **one real inbox** everywhere. Use `hello@focusmediaproductions.com` unless the real business uses another domain. |
| Placeholder phone `+1 234 567 890` | Replace with real Indian number in **E.164 + display format**, e.g. `+91 98765 43210`. This also matters for `tel:` links and schema `telephone`. |
| Social links are `#` or generic `instagram.com` root | Point to real profile URLs. Missing/placeholder social links actively hurt local SEO — Google uses `sameAs` to confirm entity identity. |
| `maternity-moments` portfolio entry has empty couple name | Add a real name or a descriptive title (e.g. "Meera's Maternity Session — Kochi"). Empty title/alt text is a missed keyword opportunity on every maternity-related image. |
| Blog post dates set in the future (2026 dates for already-published posts) | Set real publish dates. Future-dated content can look wrong for `datePublished` schema and confuses Google's freshness signals. |
| Film YouTube links are placeholder/demo | Replace with real embeds before launch — empty/broken video schema will get flagged in Search Console. |
| Intro section body copy is lorem-style filler ("Tiramisu bafouh lollipop...") | This is the single biggest content gap. See Section 5.1 for full rewrite — this block currently contributes **zero** SEO value and reads as unfinished/broken to any real visitor. |

---

## 2. Keyword research summary (basis for everything below)

### What competitors in Kerala are ranking on (Bows n Vows, Kerala Wedding Photography, Crystalline Studio, Robins Photography, MoonWedlock, Talking Pictures, WeddingWire India, Wedding.net) consistently target three keyword layers that the current site under-uses:

**Layer 1 — Culture/religion-specific wedding terms** (high-intent, low-competition, and directly reflects how Kerala weddings are searched):
- Christian wedding photography Kerala
- Hindu wedding photography Kerala
- Muslim wedding photography Kerala / Nikah photography Kerala
- Mehndi / Sangeet photography Kerala
- Thali ceremony photography
- Kerala Orthodox wedding photographer

**Layer 2 — Location-specific / scenic-backdrop terms** (huge in this niche — every competitor leans on named locations):
- wedding photography Munnar (tea estates)
- wedding photography Alleppey / Alappuzha (backwaters)
- wedding photography Fort Kochi
- wedding photography Kovalam / Varkala (beaches)
- wedding photography Kozhikode / Calicut
- wedding photography Thrissur / Guruvayur
- wedding photography Wayanad

**Layer 3 — Cross-region and destination reach** (several competitors explicitly state cross-state/country coverage — this builds topical authority and captures diaspora couples):
- wedding photography Kerala couples settled in Dubai / UAE
- destination wedding photographer India
- Kerala wedding photographer covering Chennai / Bangalore / Hyderabad / Mumbai / Goa

### Recommended full keyword map for FocusMedia (organized by page)

**Home (`/`)** — keep existing keywords, add:
```
candid wedding photography kochi
Christian wedding photographer kerala
Hindu wedding photography kerala
Muslim wedding photography kerala
destination wedding photographer kerala for Dubai couples
wedding photography Munnar
wedding photography Alleppey backwaters
wedding photographer Fort Kochi
best candid wedding photographer kerala
```

**Portfolio (`/portfolio`)**:
```
kerala wedding photo gallery
candid wedding photos kerala
real wedding kochi photography
```

**Packages (`/packages`)**:
```
wedding photography cost kerala
wedding photographer price kochi
affordable wedding photography package kerala
wedding videography package kerala
```

**Blog (`/blog`)** — target long-tail question keywords (see Section 8 content calendar).

**About (`/about`)**:
```
kerala wedding photographer since [year]
kochi based wedding photography studio
```

**New location pages** (Section 6) each get their own tight keyword cluster — do not force all location keywords onto the homepage; that dilutes relevance. One page per location cluster ranks far better than one page trying to rank for all of them.

---

## 3. Metadata rewrites (page by page)

Use Next.js `generateMetadata` / the existing metadata export pattern. Title tags kept under ~60 characters, descriptions under ~155 characters, both written to include a primary keyword **and** a reason to click (not just keyword-stuffed).

### Root layout (`src/app/layout.js`)

```js
export const metadata = {
  title: {
    template: '%s | FocusMedia Productions',
    default: 'Best Wedding Photography & Videography in Kerala | FocusMedia',
  },
  description:
    'FocusMedia Productions is a Kochi-based wedding photography & cinematic videography studio covering candid, Christian, Hindu & Muslim weddings across Kerala and destination weddings worldwide.',
  metadataBase: new URL('https://focusmediaproductions.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'FocusMedia Productions',
  },
  twitter: { card: 'summary_large_image' },
};
```

### Home (`/`)

- **Title:** `Best Wedding Photographer in Kerala | Candid & Cinematic | FocusMedia`
- **Description:** `Kochi-based wedding photography & videography studio capturing candid Christian, Hindu & Muslim weddings across Kerala — Munnar, Alleppey, Fort Kochi — plus destination weddings worldwide.`
- **Keywords:** existing list + Layer 1/2/3 terms from Section 2 (dedupe, cap at ~25 — keyword meta tags carry little ranking weight now but some legacy tools/directories still read them).

### About (`/about`)

- **Title:** `Our Story | Kerala Wedding Photographers Since [Year] | FocusMedia`
- **Description:** `Meet the team behind FocusMedia Productions — a Kochi wedding photography studio blending documentary honesty with fine-art storytelling for Kerala & destination weddings.`

### Portfolio (`/portfolio`)

- **Title:** `Wedding Photography Portfolio Kerala | Real Weddings | FocusMedia`
- **Description:** `Browse real Kerala weddings shot by FocusMedia Productions — candid Christian, Hindu & Muslim ceremonies, pre-wedding shoots, maternity and newborn sessions across Kochi and beyond.`

### Portfolio detail (`/portfolio/[slug]`)

- **Title pattern:** `{Couple Names} — {Category} Wedding Photography Kerala | FocusMedia`
- **Description pattern:** `{Category} wedding photography by FocusMedia Productions — {Couple Names}'s {location or "Kerala"} celebration captured in candid, cinematic style.`
- Add `location` field to the portfolio data model so this can be templated instead of hardcoded (several entries currently have no location — see Section 1).

### Films (`/films`)

- **Title:** `Cinematic Wedding Films Kerala | FocusMedia Productions`
- **Description:** `Watch cinematic wedding highlight films by FocusMedia — Kerala weddings and destination celebrations shot and edited with a documentary-meets-editorial style.`

### Blog / Journal (`/blog`)

- **Title:** `Wedding Photography Journal | Tips, Stories & Kerala Wedding Guides`
- **Description:** `Real wedding stories, planning advice, and behind-the-scenes insight from FocusMedia Productions — Kerala's candid wedding photography studio.`

### Blog post (`/blog/[slug]`)

- Keep existing pattern, but ensure `{Post excerpt}` is unique per post (never truncated site copy) and add `article:published_time` / `article:author` OG tags.

### Packages (`/packages`)

- **Title:** `Wedding Photography Packages & Pricing Kerala | FocusMedia`
- **Description:** `Transparent wedding photography & videography packages in Kerala starting at ₹50,000 — Essential, Premium & Signature tiers, plus custom quotes for destination weddings.`
- Including the starting price in the meta description is a strong CTR lever for this niche — competitors rarely show price, so surfacing "starting at ₹50,000" in the SERP snippet differentiates FocusMedia and pre-qualifies clicks.

### Contact (`/contact`)

- **Title:** `Contact FocusMedia Productions | Kochi Wedding Photographers`
- **Description:** `Get in touch with FocusMedia Productions to check availability for your Kerala or destination wedding. We reply within 24 hours.`

---

## 4. Structured data (JSON-LD) — add these, not currently present

Add a shared `<script type="application/ld+json">` (via a `JsonLd` component) on relevant pages. Use **`ProfessionalService`** (a LocalBusiness subtype) rather than generic `LocalBusiness` — it's the closest schema.org type to a photography studio and Google recommends the most specific applicable type.

### 4.1 Sitewide business entity — inject on root layout or homepage

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://focusmediaproductions.com/#business",
  "name": "FocusMedia Productions",
  "image": "https://focusmediaproductions.com/og-image.jpg",
  "url": "https://focusmediaproductions.com",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "₹₹-₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "State", "name": "Kerala" },
    { "@type": "Country", "name": "India" }
  ],
  "sameAs": [
    "https://instagram.com/focusmediaproductions",
    "https://www.facebook.com/focusmediaproductions",
    "https://in.pinterest.com/focusmediaproductions"
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Photography" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Videography" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maternity Photography" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Newborn Photography" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Destination Wedding Photography" } }
  ]
}
```

> Fill in the real `telephone`, and only add `aggregateRating`/`review` schema once there are genuine, verifiable reviews to reference (see Section 4.4 — do not fabricate ratings).

### 4.2 Per-package `Service` schema (`/packages`)

Repeat for Essential / Premium / Signature:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wedding Photography Package",
  "name": "The Premium Wedding Package",
  "provider": { "@id": "https://focusmediaproductions.com/#business" },
  "areaServed": "Kerala, India",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "85000",
    "availability": "https://schema.org/InStock"
  }
}
```

### 4.3 Portfolio detail pages — `ImageObject` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://focusmediaproductions.com" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://focusmediaproductions.com/portfolio" },
    { "@type": "ListItem", "position": 3, "name": "{Couple Names}", "item": "https://focusmediaproductions.com/portfolio/{slug}" }
  ]
}
```

### 4.4 FAQPage schema — for the new FAQ section (Section 6.2)

Only mark up FAQs that are **visibly rendered on the page as an accordion or list**, matching the JSON-LD exactly (Google penalizes mismatched/hidden FAQ schema).

### 4.5 Blog posts — `Article` schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Post Title}",
  "datePublished": "{ISO date}",
  "dateModified": "{ISO date}",
  "author": { "@type": "Organization", "name": "FocusMedia Productions" },
  "publisher": { "@id": "https://focusmediaproductions.com/#business" },
  "image": "{featured image URL}"
}
```

---

## 5. Copy rewrites (replacing weak/placeholder content)

### 5.1 Home — Intro section main block (currently lorem-style filler)

Replace this:
> "It's time to let people know that you are the business they have been searching for. Tiramisu bafouh lollipop candy canes..."

With something like:

> **Heading:** *HERE'S* TO LIFE
> **Body:** Since [year], FocusMedia Productions has documented Kerala weddings the way they actually happen — the nervous laugh before the *thaali*, the quiet tears during the *nikah*, the chaos and joy of a Kerala Christian reception in full swing. We work across Kochi, Kozhikode, Thrissur and beyond, and we travel for love — whether that's a backwater wedding in Alleppey or a destination celebration overseas. No two weddings look alike, and neither do the photographs we bring back.
> **Overlay script:** Capturing the beauty of life's memories

This version does three things the placeholder didn't: names the region, references real Kerala wedding rituals (which matches how people actually search — "thaali ceremony photography," "nikah photography kerala"), and reinforces the destination-wedding angle already used elsewhere on the site.

### 5.2 Home — Services section

Add one sentence of real copy under each service card instead of just the label, e.g.:

- **Weddings** — "Candid, cinematic coverage of Christian, Hindu and Muslim wedding ceremonies across Kerala."
- **Maternity** — "Soft, natural-light maternity sessions in Kochi and nearby studios or at home."
- **Family** — "Relaxed, documentary-style family portraits — no stiff poses."

Thin category labels with no supporting text give Google (and visitors) nothing to match against a search query.

### 5.3 About — Meet the Artist

Keep the existing three paragraphs (they're solid, on-brand copy) but add one sentence naming the service area and founding year explicitly, since "since [year]" and "Kochi-based" are both trust + local-relevance signals search engines and readers look for:

> "Founded in [year] and based in Kochi, FocusMedia Productions began as a solo endeavor and has blossomed into a full-scale creative studio..."

### 5.4 Testimonials

One generic testimonial (Sarah & Michael) reads as a placeholder. Before launch, replace with **at least 3 real client testimonials**, ideally with couple names that match real portfolio entries (e.g., quote from Sahal & Nahala, Fathima & Aadhil). Real, attributable testimonials tied to real portfolio work are far more trustworthy to both users and — once `Review` schema is warranted — to Google.

### 5.5 Packages — add trust copy near pricing

Add a short line addressing the #1 competitor differentiator found in research — transparent pricing (most competitor sites hide prices entirely and require an inquiry):

> "We believe pricing shouldn't be a mystery. Here's exactly what's included in every package — no hidden costs, no vague 'starting from' games."

---

## 6. New pages to add (highest-leverage SEO opportunity)

The current site has **zero location-specific landing pages**, while nearly every ranking competitor leans heavily on named-location content (Munnar, Alleppey, Fort Kochi, Kovalam). This is the single biggest content gap versus competitors.

### 6.1 Location landing pages — `/wedding-photography/[location]`

Create 4–5 pages to start:
- `/wedding-photography/munnar` — tea estate wedding & pre-wedding shoots
- `/wedding-photography/alleppey` — backwater wedding photography
- `/wedding-photography/fort-kochi` — heritage/colonial-backdrop weddings
- `/wedding-photography/kozhikode` — north Kerala coverage
- `/wedding-photography/kochi` (or fold into homepage if Kochi is already the primary target)

Each page needs:
- Unique H1 ("Wedding Photography in Munnar | Tea Estate & Hill Station Weddings")
- 300–500 words of real, non-duplicated copy about shooting in that specific location (light conditions, best time of year/day, logistics)
- 6–10 portfolio images actually shot at that location (filter existing portfolio data by a new `location` tag)
- Internal links to `/packages` and `/contact`
- Its own metadata + `BreadcrumbList` schema

### 6.2 FAQ section (new page or homepage/packages accordion)

Competitor research shows recurring real-user questions that are strong long-tail SEO targets and pair well with `FAQPage` schema:

- How much does wedding photography cost in Kerala?
- How far in advance should we book a wedding photographer in Kerala?
- Do you travel for destination weddings outside Kerala?
- How long does it take to receive the final wedding photos?
- Do you photograph Christian, Hindu and Muslim wedding ceremonies?
- Can we customize a package?

Place this as an accordion on `/packages` (highest commercial intent) and mark up with `FAQPage` schema per Section 4.4.

### 6.3 Wedding cost/planning guide (blog, but pinned/high-value)

`/blog/wedding-photography-cost-in-kerala` — a genuinely useful guide breaking down what drives price (hours of coverage, number of photographers, albums, drone, destination travel). This directly targets one of the highest-volume, highest-intent long-tail searches in the niche ("wedding photography cost kerala") and every competitor either buries this in FAQs or omits it — a full dedicated guide is a ranking opportunity.

---

## 7. Technical SEO checklist

- [ ] `sitemap.xml` — generate via Next.js `app/sitemap.js`, include all static routes + dynamic portfolio/blog slugs, submit to Google Search Console.
- [ ] `robots.txt` — allow all, point to sitemap.
- [ ] Canonical tags — ensure every page (including `/portfolio/[slug]`, `/blog/[slug]`) sets `alternates.canonical` to its own absolute URL, no trailing-slash inconsistencies.
- [ ] `next/image` — confirm all portfolio/blog images use `next/image` with real, descriptive `alt` text (never empty, never just the filename) — this doubles as image-search SEO, which is a meaningful traffic source in this niche (couples browse Google Images / Pinterest for wedding photography inspiration).
- [ ] Alt text pattern audit — the reference doc already defines good patterns (`{Couple Names} — {Category}`); apply consistently and never leave alt text blank, especially for `maternity-moments` (currently has no couple name at all — see Section 1).
- [ ] Open Graph + Twitter Card images — every page needs a real OG image (1200×630) for social shares; currently unclear if these exist beyond a generic default.
- [ ] Core Web Vitals — audit hero video/image weight on homepage; wedding photography sites are notoriously image-heavy — use responsive `next/image` sizes and lazy-load below-the-fold galleries.
- [ ] Internal linking — every blog post should link to at least one relevant portfolio entry or the packages page; every portfolio entry should link to `/packages` and `/contact`.
- [ ] Google Business Profile — separate from the website, but critical for local pack rankings: ensure NAP (Name, Address, Phone) on the GBP listing matches the website exactly (this is why fixing the phone/email inconsistencies in Section 1 matters beyond just UX).
- [ ] `hreflang`/language tags — not needed unless targeting non-English markets; skip for now.

---

## 8. Ongoing blog content calendar (SEO-driven topics)

The three existing posts are well-written but generic (destination weddings, golden hour, details) — none currently target Kerala-specific or high-intent commercial keywords. Suggested next posts, roughly in priority order:

1. **"Wedding Photography Cost in Kerala: What Actually Drives the Price"** — targets `wedding photography cost kerala` (see 6.3).
2. **"Christian, Hindu & Muslim Wedding Photography in Kerala: What to Expect from Each"** — targets Layer 1 cultural keywords directly; genuinely useful for interfaith families or out-of-state planners unfamiliar with Kerala wedding customs.
3. **"Best Locations for a Kerala Destination Wedding: Munnar vs Alleppey vs Kovalam"** — comparison content, links out to the three new location pages (Section 6.1), strong internal-linking value.
4. **"A Kochi Couple's Guide to Booking a Wedding Photographer"** — local, practical, links to `/packages` and `/contact`.
5. **"Kerala Wedding Season: When to Book to Avoid Missing Your Date"** — urgency + seasonality content, ties into the footer CTA about dates booking quickly.

Each post: 800–1,200 words, one real portfolio image embedded, internal links to at least one service/location/package page, unique meta title + description following the pattern in Section 3.

---

## 9. Summary — priority order for Cursor

1. Section 1 (data fixes) — no risk, do first.
2. Section 3 (metadata) — quick, high impact, no design changes needed.
3. Section 4.1 (sitewide business schema) — one component, sitewide benefit.
4. Section 5.1 (intro copy rewrite) — removes the most visible content gap.
5. Section 7 (technical checklist) — sitemap/robots/alt text/OG images.
6. Section 6.1–6.2 (location pages + FAQ) — biggest net-new SEO surface area.
7. Section 8 (blog calendar) — ongoing, do incrementally.

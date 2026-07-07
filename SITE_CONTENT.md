# FocusMedia Productions — Site Content & SEO Reference

Complete text, metadata, keywords, and copy used across the wedding-landing project.

---

## Brand Identity

| Field | Value |
|-------|-------|
| **Brand name** | FocusMedia Productions |
| **Logo (primary)** | FOCUSMEDIA |
| **Logo (tagline)** | Productions |
| **Location tagline** | Kerala, India & Worldwide Destination |
| **Language** | English (`lang="en"`) |
| **Primary services** | Wedding photography, wedding videography, maternity, newborn, pre/post wedding, cinematic films |
| **Primary market** | Kerala, India (Kochi and statewide); destination weddings worldwide |

---

## Global SEO & Metadata

### Root layout (`src/app/layout.js`)

| Field | Value |
|-------|-------|
| **Title template** | `%s \| FocusMedia` |
| **Default title** | Wedding Photography & Videography |
| **Default description** | FocusMedia Productions captures the most beautiful moments of your life with our cinematic wedding photography and videography services. |

---

## Page-by-Page SEO Metadata

### Home (`/`)

| Field | Value |
|-------|-------|
| **Title** | Best Wedding Photography in Kerala \| FocusMedia |
| **Description** | Looking for the best wedding photographer in Kerala? FocusMedia Productions provides cinematic wedding videography, destination wedding photography, and corporate video production services in Kochi and across Kerala. |
| **Canonical** | `/` |

**Keywords (home page only):**

- wedding photography
- wedding photographer
- wedding videography
- video production company
- event photography
- event videography
- corporate video production
- wedding photography kochi
- best wedding photography in kerala
- wedding videography kerala
- best wedding photographer kerala
- candid wedding photography kerala
- cinematic wedding videography Kerala
- destination wedding photographer Kerala
- corporate video production kerala
- video production services kerala
- ad film production kerala
- commercial video production india
- promotional video production
- wedding photography packages kerala
- wedding videography price kerala
- hire wedding photographer kerala
- affordable wedding photography kerala
- corporate video production services kerala

---

### About (`/about`)

| Field | Value |
|-------|-------|
| **Title** | Our Story \| FocusMedia Productions |
| **Description** | Learn more about FocusMedia Productions and our approach to capturing your beautiful moments in life. |

---

### Portfolio (`/portfolio`)

| Field | Value |
|-------|-------|
| **Title** | Portfolio \| FocusMedia Productions |
| **Description** | Explore the complete portfolio of FocusMedia Productions. View our work in weddings, editorial, and maternity. |

---

### Portfolio detail (`/portfolio/[slug]`)

| Field | Value |
|-------|-------|
| **Title** | `{Couple Names} \| Portfolio` |
| **Description** | `{Category} photography — {Couple Names}` |
| **Not found title** | Portfolio |

---

### Films (`/films`)

| Field | Value |
|-------|-------|
| **Title** | Cinematic Films \| FocusMedia Productions |
| **Description** | Experience our curated collection of cinematic wedding and editorial films. |

---

### Journal / Blog (`/blog`)

| Field | Value |
|-------|-------|
| **Title** | Journal \| FocusMedia Productions |
| **Description** | Read the latest stories, tips, and inspiration from the FocusMedia Productions team. |

---

### Blog post (`/blog/[slug]`)

| Field | Value |
|-------|-------|
| **Title** | `{Post Title} \| Journal \| FocusMedia Productions` |
| **Description** | `{Post excerpt}` |
| **Not found title** | Post Not Found \| FocusMedia Productions |

---

### Packages (`/packages`)

| Field | Value |
|-------|-------|
| **Title** | Investment & Packages \| FocusMedia Productions |
| **Description** | Explore our wedding photography and videography packages. We offer customized solutions for intimate weddings to grand celebrations. |

---

### Contact (`/contact`)

| Field | Value |
|-------|-------|
| **Title** | Contact \| FocusMedia Productions |
| **Description** | Get in touch with FocusMedia Productions. We would love to hear from you and document your special day. |

---

## Navigation

### Main nav links

| Label | URL |
|-------|-----|
| About | `/about` |
| Portfolio | `/portfolio` |
| Films | `/films` |
| Journal | `/blog` |
| Packages | `/packages` |
| Contact | `/contact` |

### Top banner (rotating keywords)

- Now booking **{keyword}** — Inquire
- Rotating keywords: Weddings, Editorials, Maternity, Destination Films, Summer 2026

---

## Contact Information

| Field | Value | Used on |
|-------|-------|---------|
| **Email (footer)** | hello@focusmediaproductions.com | Footer |
| **Email (contact page)** | hello@capture.com | Contact page *(placeholder — differs from footer)* |
| **Phone (contact page)** | +1 234 567 890 | Contact page *(placeholder)* |

### Social links (footer)

- Instagram — https://instagram.com
- Pinterest — https://pinterest.com
- Facebook — https://facebook.com

### Social links (contact page)

- Instagram, Facebook, WhatsApp — `#` *(placeholder)*

---

## Home Page (`/`)

### Hero

| Element | Text |
|---------|------|
| **H1 (visible)** | Capturing the beauty of life |
| **H2 (screen reader / SEO)** | Best Wedding Photography in Kerala |
| **CTA** | Inquire Now |
| **Image alt (fallback)** | Sahal & Nahala wedding — FocusMedia Productions |

### Intro section — top band

| Element | Text |
|---------|------|
| **Eyebrow** | Wedding & Lifestyle Photographer |
| **Tagline** | Capturing the light of life's most events and the blissful beauty of quiet, everyday moments. |

### Intro section — main block

| Element | Text |
|---------|------|
| **Heading** | *HERE'S* TO LIFE |
| **Vertical text** | SINCE TWO THOUSAND AND FOUR |
| **Body** | It's time to let people know that you are the business they have been searching for. Tiramisu bafouh lollipop candy canes I love liquorice sesame snaps lollipop cheesecake. Jelly-o pie pie pastry halluth. Chocolate cake gingerbread jujubes chupa chups dessert I love pudding jelly-o. |
| **Overlay script** | Capturing the beauty of life's memories |
| **Image alts** | Elegant couple portrait; Fine art wedding bouquet |

> **Note:** Intro body copy is placeholder lorem-style text and should be replaced with real brand copy.

### Services section

| Element | Text |
|---------|------|
| **Section heading** | Our *SERVICES* |
| **Service cards** | Weddings · Maternity · Family |
| **CTA** | See Packages — |
| **Image alts** | Wedding Photography Services; Maternity Photography Services; Family Photography Services |

### Image slider / Our Approach

| Element | Text |
|---------|------|
| **Eyebrow** | Our Approach |
| **Heading** | Crafting Timeless *Masterpieces* |
| **Body** | We believe that every love story is unique and deserves to be told with absolute authenticity. Our approach is unobtrusive, allowing natural moments to unfold organically. We blend seamlessly into your day, capturing the fleeting gestures, the joyous tears, and the grand celebrations with a cinematic eye. |
| **Link** | Discover Our Story |

### Featured portfolio section

| Element | Text |
|---------|------|
| **Eyebrow** | Featured Work |
| **Heading** | Moments set in stone |
| **CTA card** | View Complete · Collection |

Featured projects (dynamic — first 3 with `featured: true`):

1. Sahal & Nahala — Weddings
2. Adv Fathima & Adv Aadhil — Weddings
3. Jickson & Jeni — Pre/post Wedding

### Testimonials section

| Element | Text |
|---------|------|
| **Eyebrow** | Kind Words |
| **Quote** | "They captured the pure essence and emotion of our wedding day. Every time we look at our photos, we are instantly transported back to those magical moments. Truly an artist with a visionary eye." |
| **Author** | Sarah & Michael |
| **Subtitle** | Destination Wedding in Kerala |

---

## About Page (`/about`)

### Banner

| Element | Text |
|---------|------|
| **Eyebrow** | The Visionary |
| **H1** | Our Story |
| **Image alt** | About FocusMedia Productions |

### Meet the artist

| Element | Text |
|---------|------|
| **Heading** | Meet The *Artist* |
| **Paragraph 1** | Founded by a profound passion for documenting life's most fleeting and beautiful moments, FocusMedia Productions started as a solo endeavor and has blossomed into a full-scale creative studio dedicated to artistic storytelling. |
| **Paragraph 2** | We believe that every love story is entirely unique, and deserves to be captured in a way that feels organic, authentic, and undeniably yours. Our approach blends editorial elegance with a documentary spirit, ensuring your memories are preserved in their truest form. |
| **Paragraph 3** | From intimate elopements to grand celebrations, we pour our hearts into every frame. We are not just your photographers; we are your visual biographers, quietly capturing the laughter, the tears, and the quiet moments in between. |
| **Signature** | FocusMedia Studio |
| **Image alt** | Artist portrait |

### Quote block

| Element | Text |
|---------|------|
| **Quote** | "To capture the essence of a moment is to freeze *time* itself, creating a legacy of love that speaks long after the day is gone." |

---

## Portfolio Page (`/portfolio`)

| Element | Text |
|---------|------|
| **Eyebrow** | Selected Works |
| **H1** | Our Portfolio |

### Filter categories

- All
- Weddings
- Pre/post Wedding
- Maternity
- Newborn

---

## Portfolio Projects (all entries)

| Slug | Couple / Title | Category | Date | Location | Featured |
|------|----------------|----------|------|----------|----------|
| `sahal-and-nahala` | Sahal & Nahala | Weddings | June 2025 | Kerala | Yes |
| `fathima-and-aadhil` | Adv Fathima & Adv Aadhil | Weddings | March 2025 | Kochi | Yes |
| `jickson-and-jeni` | Jickson & Jeni | Pre/post Wedding | April 2025 | — | Yes |
| `asif-and-shabiya` | Asif & shabiya | Weddings | April 2025 | — | — |
| `maternity-glow` | Sanjith maternity | Maternity | — | — | — |
| `maternity-moments` | *(empty)* | Maternity | — | — | — |
| `newborn-fayas` | Newborn Fayas | Newborn | — | — | — |
| `harsha-and-anwar` | Harsha & Anwar | Pre Wedding | — | — | — |
| `nehla-and-morsy` | Nehla & morsy | Weddings | May 2025 | — | — |
| `rejula-and-nefsal` | Rejula & nefsal | Weddings | June 2025 | — | — |
| `said-ali-and-sasna` | Said ali & Sasna post wedding | Pre/post Wedding | July 2025 | — | — |
| `said-ali-and-sasna-wedding` | Said ali & Sasna wedding | Weddings | July 2025 | — | — |
| `salmanul-farisy-and-farhath` | Salmanul farisy & Farhath | Weddings | July 2025 | — | — |
| `shuhaib-and-nasrin` | Shuhaib & Nasrin | Pre/post Wedding | July 2025 | — | — |
| `vipin-and-aiswarya` | Vipin & Aiswarya | Weddings | July 2025 | — | — |

### Portfolio detail page UI

| Element | Text |
|---------|------|
| **Back link** | Back to Portfolio |
| **Lightbox counter** | `{n} / {total}` |
| **Image alt pattern** | `{Couple Names} — photo {n}` |

---

## Films Page (`/films`)

### Banner

| Element | Text |
|---------|------|
| **Eyebrow** | Cinematic Storytelling |
| **H1** | Our Films |

### Film entries

| Title | Category |
|-------|----------|
| The Tuscan Elopement | Destination |
| A Winter Romance | Weddings |
| Editorial Splendor | Editorials |
| Quiet Moments | Maternity |

*(YouTube URLs are placeholder demo links.)*

---

## Packages Page (`/packages`)

### Banner

| Element | Text |
|---------|------|
| **Eyebrow** | Investment |
| **H1** | Our Packages |
| **Intro** | We believe in transparent pricing and exceptional value. Every love story is unique, and we offer carefully curated packages to beautifully capture yours. We also offer bespoke options tailored to your exact needs. |

### The Essential — Starting at ₹50,000

**Description:** Perfect for intimate celebrations and civil ceremonies, focusing on the beautiful core moments of your day.

**Features:**

- Up to 6 hours of continuous coverage
- 1 Lead Photographer
- High-resolution edited images (300+)
- Private online gallery delivery
- Pre-wedding consultation

**CTA:** Inquire Now

---

### The Premium — Starting at ₹85,000 *(Most Popular)*

**Description:** Our most popular choice for comprehensive wedding day coverage, ensuring no detail goes unnoticed.

**Features:**

- Up to 10 hours of continuous coverage
- 2 Photographers (Lead + Second Shooter)
- High-resolution edited images (600+)
- Complimentary Engagement Session
- Private online gallery delivery
- Custom fine art wedding album (20 pages)

**CTA:** Inquire Now

---

### The Signature — Starting at ₹1,50,000

**Description:** The ultimate luxury experience for grand multi-day celebrations with full creative storytelling.

**Features:**

- Full weekend coverage (Up to 3 days)
- Creative Team (2 Photographers, 1 Assistant)
- High-resolution edited images (1000+)
- Cinematic highlight film (5-7 mins)
- Complimentary Engagement & Mehndi coverage
- Premium heirloom wedding album (40 pages)
- Next-day sneak peek preview gallery

**CTA:** Inquire Now

---

### A La Carte & Add-Ons

| Add-on | Price |
|--------|-------|
| Cinematic Wedding Film | ₹40,000 |
| Additional Photographer | ₹15,000 / day |
| Engagement Session | ₹20,000 |
| Drone Coverage | ₹10,000 / day |
| Canvas Prints & Wall Art | Custom Quote |

**Note:** Looking for something else? We offer fully custom packages.

**CTA:** Request a Custom Quote

---

## Journal / Blog (`/blog`)

### Banner

| Element | Text |
|---------|------|
| **Eyebrow** | Insights & Stories |
| **H1** | Our Journal |

**List CTA:** Read Story

---

### Post 1: The Art of Destination Weddings

| Field | Value |
|-------|-------|
| **Slug** | `the-art-of-destination-weddings` |
| **Date** | October 15, 2026 |
| **Category** | Weddings |
| **Excerpt** | Planning a wedding abroad? Here are our top tips for ensuring your memories are captured beautifully against stunning landscapes. |

**Content:**

Destination weddings offer an incredible backdrop for your special day. From the rolling hills of Tuscany to the pristine beaches of Bali, getting married in a location that holds a special place in your heart adds an undeniable layer of magic to the proceedings.

**Why Choose a Destination Wedding?**

Choosing a destination wedding means opting for an adventure. It shifts the focus from a single day of celebration to an extended experience shared with your closest family and friends. It strips away the unnecessary formalities, leaving room only for what truly matters: connection and celebration.

**Embracing the Environment**

As photographers, our primary goal in a destination setting is to let the environment speak just as loudly as the moments unfolding within it. We love finding unique lighting situations, playing with dramatic landscapes, and capturing the authentic essence of the locale. We highly recommend allocating ample time for portraits to truly utilize the scenery you traveled so far to reach.

Ultimately, a destination wedding is a beautiful, chaotic, and utterly romantic adventure. Ensure you choose a photographer who knows how to adapt to new environments and capture the profound beauty of your chosen destination.

---

### Post 2: Finding the Perfect Light

| Field | Value |
|-------|-------|
| **Slug** | `finding-the-perfect-light` |
| **Date** | September 22, 2026 |
| **Category** | Editorials |
| **Excerpt** | Light is the ultimate tool in photography. We delve into how natural light shapes our editorial approach and why "golden hour" reigns supreme. |

**Content:**

Light is the universal language of photography. It dictates the mood, the tone, and the emotion of an image. But for our studio, light is more than just illumination—it is a compositional element as vital as the subjects themselves.

**The Magic of Golden Hour**

You have likely heard photographers rave about "golden hour"—that fleeting window of time shortly after sunrise and just before sunset. During this time, the sun is low on the horizon, creating a soft, diffused, and incredibly warm light. It acts as a natural filter, flattering skin tones and creating a romantic, cinematic glow that is unmistakable. We always urge our couples to schedule their portrait sessions during this magical window.

**Embracing Shadows**

While bright, airy lighting is classic, we deeply believe in the power of shadows. Contrast brings depth, drama, and a distinct editorial edge. By deliberately playing with shadows, we can sculpt faces, highlight textures, and draw the viewer's eye exactly where we want it.

Let light be your guide, and trust your photographer to hunt for those perfectly lit moments.

---

### Post 3: Capturing the Quiet Details

| Field | Value |
|-------|-------|
| **Slug** | `capturing-the-details` |
| **Date** | August 10, 2026 |
| **Category** | Details |
| **Excerpt** | The grand moments are essential, but the quiet, unseen details are what weave the full narrative of your wedding day. |

**Content:**

The first kiss, the grand entrance, the tearful toasts—these are the undeniable milestones of a wedding day. However, a wedding is composed of a million micro-moments. It is these quiet, often unseen details that truly give a wedding its unique heartbeat.

**The Narrative of Objects**

A frayed ribbon on a vintage bouquet, the delicate lace of a grandmother's veil, the handwritten vows on textured paper—these objects hold immense semantic value. They are physical manifestations of the love, history, and effort poured into the celebration. By taking the time to artfully capture these details, we preserve the tactile memory of the day.

**The In-Between Moments**

Just as important as the physical details are the "in-between" moments. A quiet glance shared across a crowded room, the nervous exhale before walking down the aisle, a burst of unfiltered laughter during getting ready. These unscripted moments are the honest, messy, and beautiful reality of your day.

We pride ourselves on being observant, unobtrusive, and ever-ready to document the quiet elegance of the subtle things.

**Detail page back link:** Back to Journal

---

## Contact Page (`/contact`)

### Banner

| Element | Text |
|---------|------|
| **Eyebrow** | Let's Connect |
| **H1** | Get in Touch |

### Left column

| Element | Text |
|---------|------|
| **Heading** | We'd love to hear from you. |
| **Body** | Whether you're planning a grand wedding or an intimate elopement, we want to hear your story. Reach out to check our availability or simply say hello. |
| **Email label** | Email |
| **Phone label** | Phone |
| **Social label** | Follow Us |

### Contact form

| Field | Label | Placeholder |
|-------|-------|-------------|
| First Name | First Name | Jane |
| Last Name | Last Name | Doe |
| Email | Email Address | jane@example.com |
| Phone | Phone Number | +1 234 567 890 |
| Event | Event Date & Location | e.g. October 15, Tuscany |
| Message | Tell Us About Your Day | Share some details with us... |

**Submit button:** Send Message

---

## Footer (all pages)

### CTA block

| Element | Text |
|---------|------|
| **Heading** | Let's capture your story |
| **Body** | Dates for upcoming wedding seasons book incredibly quickly. Get in touch early to secure your date and discuss your beautiful vision for the day. |
| **CTA** | Inquire Now |

### Explore links

About · Portfolio · Packages · Contact

### Connect

- hello@focusmediaproductions.com
- Instagram · Pinterest · Facebook

### Copyright

© {year} FocusMedia Productions. All Rights Reserved. Designed with Elegance.

---

## CTAs & Buttons (site-wide)

| Text | Typical destination |
|------|---------------------|
| Inquire Now | `/contact` |
| Inquire | `/contact` |
| See Packages — | `/packages` |
| Discover Our Story | `/about` |
| Read Story | `/blog/{slug}` |
| Back to Journal | `/blog` |
| Back to Portfolio | `/portfolio` |
| Request a Custom Quote | `/contact` |
| Send Message | Form submit |

---

## Image Alt Text Reference

| Location | Alt text |
|----------|----------|
| Hero fallback | Sahal & Nahala wedding — FocusMedia Productions |
| About banner | About FocusMedia Productions |
| About artist | Artist portrait |
| About quote bg | Textures |
| Intro main | Elegant couple portrait |
| Intro bouquet | Fine art wedding bouquet |
| Services | Wedding / Maternity / Family Photography Services |
| Slider | Wedding slider frame {n} |
| Portfolio grid | `{Couple Names} — {Category}` |
| Portfolio lightbox | `{Couple Names} — photo {n}` |
| Blog cards | `{Post title}` |
| Films | `{Film title}` |

---

## Suggested SEO Keyword Clusters (derived from site content)

### Primary (Kerala wedding)

- best wedding photography in kerala
- wedding photographer kochi
- wedding videography kerala
- candid wedding photography kerala
- cinematic wedding videography kerala

### Services

- destination wedding photographer kerala
- maternity photography kerala
- newborn photography kerala
- pre wedding photography kerala
- wedding photography packages kerala

### Commercial / video

- corporate video production kerala
- video production company kochi
- ad film production kerala
- commercial video production india

### Brand

- FocusMedia Productions
- FocusMedia wedding photographer
- wedding photographer Kerala India

---

## Placeholder / TODO Copy

Items that still use placeholder or inconsistent data:

1. **Intro section body** — lorem-style placeholder paragraph (replace with real brand story)
2. **Contact email** — `hello@capture.com` on contact page vs `hello@focusmediaproductions.com` in footer
3. **Contact phone** — `+1 234 567 890` (placeholder)
4. **Testimonial** — Sarah & Michael (generic placeholder names)
5. **Film titles & YouTube URLs** — demo/placeholder content
6. **Social media URLs** — generic or `#` links
7. **Blog dates** — set to 2026 (future dates)
8. **Portfolio entry** — `maternity-moments` has empty couple name

---

## Site Routes Summary

| Route | Page title (browser) |
|-------|----------------------|
| `/` | Best Wedding Photography in Kerala \| FocusMedia |
| `/about` | Our Story \| FocusMedia Productions |
| `/portfolio` | Portfolio \| FocusMedia Productions |
| `/portfolio/[slug]` | {Couple} \| Portfolio |
| `/films` | Cinematic Films \| FocusMedia Productions |
| `/blog` | Journal \| FocusMedia Productions |
| `/blog/[slug]` | {Title} \| Journal \| FocusMedia Productions |
| `/packages` | Investment & Packages \| FocusMedia Productions |
| `/contact` | Contact \| FocusMedia Productions |

---

*Generated from project source: `wedding-landing` (Next.js 16). Last synced with codebase content.*

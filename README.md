# The Olivesfield School — website

Next.js (App Router, TypeScript, Tailwind CSS) rebuild of
[olivesfieldschool.com.ng](https://olivesfieldschool.com.ng/), exported as a
static site and served by a Cloudflare Worker. No WordPress, PHP or database.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 (pages only; the form API is not available here)
npm run preview    # production build + Cloudflare Worker locally (http://localhost:8787), form API included
npm run lint
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/lib/site.ts` | All school facts: contact details, navigation, teaching approach, activities, facilities |
| `src/app/*/page.tsx` | Pages: Home, About, Academics, Admissions, School Life, Gallery, Contact |
| `src/components/` | Header, Footer, Hero, SchoolIntroduction, LearningApproach, SchoolLife, Facilities, FounderMessage, AdmissionsCta, ContactForm, GalleryGrid, Photo |
| `worker/index.ts` | Cloudflare Worker: serves the static site and handles `POST /api/contact` |
| `public/_redirects` | 301s from the old WordPress URLs (`/program/`, `/enrollment/`, …) |
| `public/images/` | School photographs as responsive WebP (see `scripts/optimize-images.sh`) |

## Deploy to Cloudflare

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY   # API key from resend.com, used to email enquiries
npm run deploy                            # next build + wrangler deploy
```

The first deploy publishes to a `*.workers.dev` address for review. To go
live, uncomment the `routes` block in `wrangler.jsonc` (the domain must be on
Cloudflare) and deploy again.

### Enquiry form email

Enquiries are emailed to `CONTACT_TO` (set in `wrangler.jsonc`, currently
`info@olivesfieldschool.com.ng`) through the [Resend](https://resend.com) HTTPS
API. The sending domain in `CONTACT_FROM` must be verified in Resend. Until
`RESEND_API_KEY` is set, the form shows visitors a message asking them to call,
WhatsApp or email instead — nothing is silently dropped.

## Content rules

Everything on the site comes from the previous WordPress site. The old Program
and Enrollment pages, the team list and the blog contained only template
placeholder text, so they were not migrated. Before adding class levels, fees,
results, staff profiles, news or testimonials, get the real details from the
school and add them in `src/lib/site.ts` or the relevant page.

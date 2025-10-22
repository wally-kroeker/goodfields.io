# Product Requirements Document (PRD)

**Project:** GoodFields Landing Page (v0.1)

**Owner:** Wally Kroeker (GoodFields)

**Date:** 2025‑10‑22

**Goal:** Ship a fast, privacy‑first landing page for GoodFields at **goodfields.io** using the same stack as wallykroeker.com. The page should communicate what GoodFields offers, why it’s credible, and drive one primary action: **Book a free 60‑minute consult**.

---

## 1) Problem & Objectives

### Problem

Prospects need a clear, trustworthy way to understand GoodFields’ services and quickly engage. Current absence of a dedicated landing undermines momentum for consulting offers (Security, AI Strategy, Private LibreChat).

### Objectives (v0.1)

* Communicate positioning and core offers in < 30 seconds of scan time.
* Present one primary CTA (book call) + secondary (email).
* Meet performance and privacy constraints (no tracking, <100KB page weight target).
* Reuse WK.com conventions for smooth deploy (Proxmox LXC + Cloudflare Tunnel).

### Non‑Goals (v0.1)

* No CMS, blog, or case‑study database.
* No dynamic forms beyond outbound links (Calendly/Google booking or mailto).
* No analytics or A/B testing.

---

## 2) Audience & Tone

**Audience:** SMB owners/IT leads seeking practical security hardening, realistic AI wins, and private internal chat tooling.

**Tone:** Calm confidence; pragmatic; privacy‑first; open‑source‑friendly. Avoid hype. Prioritize clarity.

---

## 3) Brand, Color, and Feel

**Theme:** “Engineered soil for digital growth” → dark, matte zinc base with emerald accents and subtle sky highlights.

* **Base:** zinc‑950 / zinc‑900 / zinc‑800
* **Primary Accent:** emerald‑500 (hover: emerald‑400)
* **Text:** zinc‑50 primary; zinc‑400 secondary
* **Optional Secondary Accent:** sky‑300 for low‑priority links

**Typography:** System sans (no webfonts). Headers 600 weight; body 400; generous line‑height.

**Motion:** Minimal, 150–200ms ease‑out; respect `prefers-reduced-motion`.

---

## 4) Information Architecture

One scrollable page:

1. **Top Nav** (sticky): Logo/name + anchors (Offers, About, Book)
2. **Hero**: Headline, subhead, primary CTA (Book), secondary (Email); small trust chip
3. **Offers**: Three cards with bullets (Security Assessment, AI Strategy, Custom LibreChat)
4. **Proof strip**: One‑line credibility statement
5. **CTA section**: Repeat primary CTA with short promise
6. **Footer**: Privacy statement, utility links (WK.com, Community, Privacy)

**Routes (v0.1):**

* `/` landing page
* `/privacy` static privacy policy

---

## 5) Content Requirements (copy)

**Hero**

* H1: `Secure. Automate. Build what lasts.`
* Sub: `Practical security and AI implementation for SMBs—Entra/M365 hardening, real‑world automation, and private LibreChat. Calm, competent, within budget.`
* Chip: `Privacy‑first • Zero tracking • Manitoba hosted`
* Primary CTA: `Book a free 60‑minute consult` → `site.bookingUrl`
* Secondary CTA: `Email Wally` → `mailto:site.email`

**Offers (3)**

1. Security Assessment & Hardening

* `Prioritized findings, Day‑0 fixes, 30–60–90d roadmap`
* `Entra ID / M365 posture, Conditional Access, PAM stance`
* `Outcome: clearer actions, reduced risk, fewer surprises`

2. AI Strategy for the Practical Org

* `3–5 validated use‑cases + lightweight architecture`
* `Guardrails first, measurable ROI`
* `Outcome: time back, better quality, no data leaks`

3. Custom LibreChat (Private, Internal)

* `Working instance + governance + admin guide`
* `Optional n8n integrations & retrieval`
* `Outcome: useful chat that stays in your walls`

**Proof strip** `SANS‑trained Security Architect • 20+ years infra & security • Proxmox/Docker/Cloudflare builder • Privacy‑first, zero analytics`

**CTA section**

* H2: `Map your quickest win`
* P: `In 60 minutes we’ll identify one high‑ROI action you can take immediately.`
* Button: `Book a free call`

**Footer**

* `We don’t run analytics or tracking pixels. Your visit stays here.`
* Links: WK.com, Community (Discord), Privacy

---

## 6) UX & Accessibility

* Semantic headings (`h1` once, then `h2` per section).
* Color contrast ≥ WCAG AA (check emerald on zinc backgrounds).
* Keyboard nav visible focus (use custom focus shadow or ring).
* Target sizes ≥ 44×44px.
* Alt text for images (v0.1: only OG image required).
* Respect `prefers-reduced-motion`.

---

## 7) Performance & Privacy

**Budget:** < 100KB transfer on first load (HTML+CSS+JS, excluding OG image).

* No client‑side analytics, trackers, or heavy libs.
* System fonts only.
* Avoid large images; compress OG image.
* Static rendering (default) where possible.

**Privacy:** No tracking. `mailto:` and external booking link only.

---

## 8) SEO & Discoverability (expanded)

**On‑page**

* **Title** (50–60 chars) & **meta description** (140–160 chars) set in `app/layout.tsx` via Next `metadata`.
* One **H1** only; clear section **H2s**; descriptive link text.
* Copy includes service keywords naturally: *security assessment, Microsoft 365/Entra hardening, AI strategy, private LibreChat, SMB security*.
* `<html lang="en">` set in `layout.tsx`.

**Technical SEO**

* **Canonical**: `metadataBase` + `alternates: { canonical: "/" }`.
* **Robots** endpoint: `app/robots.ts` allows all and points to sitemap.
* **Sitemap** endpoint: `app/sitemap.ts` lists `/` and `/privacy`.
* **OG/Twitter**: `openGraph` + `twitter` objects; `opengraph-image.png` (1200×630, <150 KB).
* **Favicons & icons**: `/favicon.ico`, `/apple-touch-icon.png`, optional `/site.webmanifest`.
* **Performance**: keep first‑load JS+CSS <100KB; system fonts; compress OG; no 3rd‑party scripts.
* **Headers**: add security & referrer headers in `next.config.mjs` (doesn’t affect SEO directly, but improves quality signals).

**Structured Data (JSON‑LD)**

* Add `` (or `Organization`) JSON‑LD on `/` with name, URL, description, logo/OG, founder, areaServed (CA), address region (e.g., *Manitoba*), `sameAs` (WallyKroeker.com, LinkedIn), and 3 `Offer` names.
* Validate using Google Rich Results test.

**Search presence**

* Verify domain in **Google Search Console** and **Bing Webmaster Tools** (DNS TXT or HTML file in `/public`).
* Submit `https://goodfields.io/sitemap.xml`.

**Localization**

* Single‑language (en) for v0.1 → no `hreflang` needed.

**Privacy**

* No trackers; privacy policy at `/privacy` linked from footer.

---

## 9) Architecture & Stack

* **Framework:** Next.js 14 (App Router) + React + TypeScript + Tailwind CSS
* **Node:** v22.18.0
* **Pkg mgr:** pnpm
* **Routing:** Static `/` and `/privacy`
* **Hosting:** Proxmox LXC → Node service via systemd
* **Ingress:** Cloudflare Tunnel to container:3000
* **No DB, no server APIs (v0.1)**

---

## 10) Code Conventions (inherit WK.com)

* TS everywhere; components named exports in `components/`; routes in `app/`.
* Lint + build clean (`pnpm lint && pnpm build`).
* Imports via `@/` alias where set; sort logically.
* **Exception:** Next requires default export in `app/page.tsx`.

---

## 11) File Structure (v0.1)

```
app/
  layout.tsx
  page.tsx
  globals.css
  (sections)/
    Hero.tsx
    Offers.tsx
    Proof.tsx
    CTA.tsx
    Footer.tsx
  opengraph-image.png
components/
  Button.tsx
  Card.tsx
  Container.tsx
content/
  privacy.md
data/
  site.ts  // { name, tagline, description, bookingUrl, email, socials }
  offers.ts
lib/
  utils.ts // cn(), a11y helpers if needed
ops/
  systemd-goodfields.service
  deploy.sh
public/
  favicon.ico
next.config.mjs
tailwind.config.ts
tsconfig.json
package.json
pnpm-lock.yaml
```

> The **canvas code** currently represents `app/page.tsx` inline sections. The agent should either keep that single file or migrate to the above modular sections—either is acceptable for v0.1.

---

## 12) Component Specs (minimal)

**Hero**

* Props: none (reads from `data/site.ts` optional)
* Elements: chip, h1, subhead, primary & secondary CTAs
* BG: subtle radial emerald gradient

**Offers**

* Props: none; map from `data/offers.ts`
* 3 cards, each with title + 3 bullets

**Proof**

* Single paragraph, small text

**CTA**

* H2, short body, primary button linking to booking

**Footer**

* Privacy line + nav links

---

## 13) Data Objects

``

```ts
export const site = {
  name: "GoodFields",
  tagline: "Secure. Automate. Build what lasts.",
  description:
    "GoodFields helps SMBs harden Microsoft 365/Entra, identify practical AI automations, and stand up private chat tools—fast and privacy-first.",
  url: "https://goodfields.io",
  bookingUrl: "https://calendar.google.com/your-booking-link",
  email: "hello@goodfields.io",
  socials: {
    linkedin: "https://www.linkedin.com/in/wallykroeker/",
    x: "https://x.com/your-handle"
  }
} as const;
```

`` (see copy in §5)

---

## 14) Styling Tokens (optional v0.2)

Add a `gf` color namespace to Tailwind for consistency (optional). For v0.1, using Tailwind’s `zinc` + `emerald` classes as in the canvas is acceptable and faster.

```ts
// tailwind.config.ts (optional)
extend: { colors: { gf: { bg: "#09090b", surface: "#18181b", border: "#27272a", text: "#fafafa", muted: "#a1a1aa", accent: "#10b981", accentHover: "#34d399" } } }
```

---

## 15) Deployment & Ops

**Build/Lint:**

* `pnpm install && pnpm lint && pnpm build`

**Run:**

* `pnpm start` (port 3000)

**systemd:** `ops/systemd-goodfields.service`

```ini
[Unit]
Description=GoodFields Next.js service
After=network.target

[Service]
Type=simple
User=docker
Environment=NODE_ENV=production
Environment=PORT=3000
WorkingDirectory=/home/docker/goodfields
ExecStart=/home/docker/.nvm/versions/node/v22.18.0/bin/pnpm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Deploy script:** `ops/deploy.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail
export PATH=/home/docker/.nvm/versions/node/v22.18.0/bin:$PATH
cd /home/docker/goodfields
git pull origin main
pnpm install --frozen-lockfile
pnpm build
sudo systemctl restart goodfields
```

**Cloudflare Tunnel:**

* Public hostname: `goodfields.io` → `http://LXC_IP:3000`
* TLS handled by Cloudflare; no need for in‑container proxy (v0.1).

---

## 16) Acceptance Criteria

* ✅ Page renders with dark zinc background and emerald accents (as in canvas demo).
* ✅ Hero displays H1, subhead, chip, and both CTAs; primary CTA scrolls to `#book` or links to booking URL.
* ✅ Offers section shows 3 cards with the specified bullets.
* ✅ Proof strip text present and readable.
* ✅ CTA section renders with button linking to booking URL.
* ✅ Footer includes privacy statement and links (WK.com, Community, Privacy).
* ✅ `/privacy` route renders markdown from `content/privacy.md`.
* ✅ **Robots endpoint** available at `/robots.txt` and **Sitemap** at `/sitemap.xml`.
* ✅ **Canonical** set; `<html lang="en">` present.
* ✅ **JSON‑LD** (`ProfessionalService`) is embedded, valid, and crawlable (no client‑side blocking).
* ✅ OG/Twitter cards render with correct image/description.
* ✅ Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, **SEO ≥ 95**.
* ✅ First load JS+CSS within budget (<100KB, excluding OG image).
* ✅ No client‑side analytics or third‑party scripts.
* ✅ Deployed via systemd on Proxmox LXC and reachable at `https://goodfields.io` through Cloudflare Tunnel.

---

## 17) Manual Test Plan

1. **Content smoke test**: All copy matches §5; links work.
2. **Responsive**: iPhone SE → desktop 1440px; no overflow; tap targets ≥ 44px.
3. **Keyboard nav**: Tab through controls; focus is visible.
4. **Reduced motion**: Enable; confirm no distracting animations.
5. **Dark contrast**: Check green buttons on zinc in light + dark environments.
6. **404**: Visiting `/not‑found` shows default 404 (acceptable v0.1).
7. **Privacy page**: Renders and is linked from footer.
8. **OG**: Share the URL in a chat; preview uses `opengraph-image.png`.

---

## 18) Delivery Plan (today)

1. Create repo from WK.com template; copy the **canvas page** as `app/page.tsx`.
2. Add `layout.tsx` with metadata + `globals.css` from WK.com baseline.
3. Add sections (optional refactor) + minimal components (Button, Card, Container).
4. Add `content/privacy.md` placeholder.
5. Add OG image placeholder.
6. Lint & build locally; fix any warnings.
7. Commit: `feat(project/goodfields): ship v0.1 landing !milestone`.
8. Push → SSH to LXC → clone/pull → `pnpm i && pnpm build`.
9. Install systemd service; enable & start.
10. Configure Cloudflare Tunnel hostname → LXC:3000.
11. Phone test; desktop test; iterate spacing/contrast.

---

## 19) Future (v0.2+)

* Case notes (anonymized) with problem → smallest intervention → outcome.
* Pricing card with ranges and discovery‑first note.
* JSON‑LD (ProfessionalService) once locality is chosen.
* `/terms` page.
* Optional Tailwind `gf` tokens + UI primitives library.

---

## 20) Risks & Mitigations

* **Time drift / scope creep:** Keep v0.1 to single page and two routes.
* **Perf regression:** No third‑party scripts; system fonts; tiny OG.
* **Brand consistency:** Lock palette and spacing scale in Tailwind (v0.2 tokens).

---

## 21) Commit & Publishing Loop

* Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `chore(ops):`.
* Milestone format: `feat(project/goodfields): ship v0.1 landing #web #security !milestone`.
* After deploy, run your publishing loop script to capture milestone.

---

## 22) SEO Implementation Snippets (drop‑in)

``** (metadata)**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://goodfields.io"),
  title: {
    default: "GoodFields — Security & Practical AI for SMBs",
    template: "%s · GoodFields"
  },
  description:
    "Security assessments, Microsoft 365/Entra hardening, AI strategy, and private LibreChat for SMBs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GoodFields",
    description:
      "Secure. Automate. Build what lasts.",
    url: "https://goodfields.io",
    siteName: "GoodFields",
    images: ["/opengraph-image.png"],
    locale: "en_CA",
    type: "website"
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" }
};
```

``

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://goodfields.io/sitemap.xml"
  };
}
```

``

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://goodfields.io";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];
}
```

**JSON‑LD (add in **`** or **`**)**

```tsx
import Script from "next/script";

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GoodFields",
    url: "https://goodfields.io",
    image: "https://goodfields.io/opengraph-image.png",
    description:
      "Security assessments, Microsoft 365/Entra hardening, AI strategy, and private LibreChat for SMBs.",
    areaServed: "CA",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Manitoba",
      addressCountry: "CA"
    },
    founder: { "@type": "Person", name: "Wally Kroeker" },
    sameAs: [
      "https://wallykroeker.com",
      "https://www.linkedin.com/in/wallykroeker/"
    ],
    offers: [
      { "@type": "Offer", name: "Security Assessment & Hardening" },
      { "@type": "Offer", name: "AI Strategy for the Practical Org" },
      { "@type": "Offer", name: "Custom LibreChat (Private, Internal)" }
    ]
  };

  return (
    <main>
      <Script id="ld-json" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      {/* ...rest of page */}
    </main>
  );
}
```

**Security/quality headers (optional)**

```js
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=()" }
        ]
      }
    ];
  }
};
```

**Search Console/Bing verification**

* DNS TXT (preferred) **or** drop provided HTML verification file into `/public`.
* After first deploy, submit the sitemap and request indexing for `/`.

---

**End of PRD**

import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const offers = [
  {
    title: "Security Assessment & Hardening",
    bullets: [
      "Prioritized findings, Day-0 fixes, 30–60–90d roadmap",
      "Entra ID / M365 posture, Conditional Access, PAM stance",
      "Outcome: clearer actions, reduced risk, fewer surprises",
    ],
  },
  {
    title: "AI Strategy for the Practical Org",
    bullets: [
      "3–5 validated use cases plus lightweight architecture",
      "Guardrails first, measurable ROI",
      "Outcome: time back, better quality, no data leaks",
    ],
  },
  {
    title: "Custom LibreChat (Private, Internal)",
    bullets: [
      "Working instance, governance, and admin guide",
      "Optional n8n integrations & retrieval",
      "Outcome: useful chat that stays in your walls",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description:
    "Security assessments, Microsoft 365/Entra hardening, AI strategy, and private LibreChat for SMBs.",
  areaServed: "CA",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Manitoba",
    addressCountry: "CA",
  },
  founder: {
    "@type": "Person",
    name: "Wally Kroeker",
  },
  offers: offers.map((offer) => ({ "@type": "Offer", name: offer.title })),
  sameAs: [
    siteConfig.socialLinks.website,
    siteConfig.socialLinks.linkedin,
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col gap-24 px-6 pb-24 pt-16 md:px-12 lg:px-20">
        <header className="flex flex-col gap-6 text-balance">
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-300">
            Privacy-first consulting
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl">
            Secure. Automate. Build what lasts.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Practical security and AI implementation for SMBs—Entra/M365
            hardening, real-world automation, and private LibreChat. Calm,
            competent, within budget.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Privacy-first • Zero tracking • Manitoba hosted
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.bookingUrl}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400 focus-visible:bg-emerald-400"
            >
              Book a free 60-minute consult
            </Link>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-6 py-3 font-semibold text-emerald-300 hover:border-emerald-400 hover:text-emerald-200"
            >
              Email Wally
            </Link>
          </div>
        </header>

        <section aria-labelledby="offers-heading" className="space-y-8">
          <div className="space-y-2">
            <h2 id="offers-heading" className="text-2xl font-semibold">
              Offers tuned for practical teams
            </h2>
            <p className="max-w-2xl text-zinc-400">
              Each engagement is scoped to land quick wins while building
              durable systems. These cards mirror the PRD copy so we can refine
              the layout next pass.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-surface-900/60 p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-lg font-semibold text-emerald-300">
                  {offer.title}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="proof-heading"
          className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-sm text-emerald-100"
        >
          <h2 id="proof-heading" className="text-base font-semibold uppercase tracking-wide">
            Trust signals
          </h2>
          <p className="mt-2 text-emerald-100">
            SANS-trained Security Architect • 20+ years infra & security • Proxmox/Docker/Cloudflare builder • Privacy-first, zero analytics
          </p>
        </section>

        <section
          aria-labelledby="cta-heading"
          className="rounded-3xl border border-zinc-800 bg-surface-900/60 p-10 text-center shadow-lg shadow-black/30"
        >
          <h2 id="cta-heading" className="text-3xl font-semibold">
            Map your quickest win
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            In 60 minutes we’ll identify one high-ROI action you can take immediately.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={siteConfig.bookingUrl}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400 focus-visible:bg-emerald-400"
            >
              Book a free call
            </Link>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-6 py-3 font-semibold text-emerald-300 hover:border-emerald-400 hover:text-emerald-200"
            >
              Email instead
            </Link>
          </div>
        </section>

        <footer className="space-y-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          <p>
            We don’t run analytics or tracking pixels. Your visit stays here.
          </p>
          <nav className="flex flex-wrap gap-4">
            <Link href="https://wallykroeker.com">WK.com</Link>
            <Link href="https://discord.gg/placeholder">Community (Discord)</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </footer>
      </main>
    </>
  );
}

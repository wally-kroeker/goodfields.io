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
      "3–5 validated use-cases + lightweight architecture",
      "Guardrails first, measurable ROI",
      "Outcome: time back, better quality, no data leaks",
    ],
  },
  {
    title: "Custom LibreChat (Private, Internal)",
    bullets: [
      "Working instance + governance + admin guide",
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

export default function Page() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-dvh bg-zinc-950 text-zinc-100">
        <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <Link href="#offers" className="hover:text-zinc-100">
                Offers
              </Link>
              <Link href="#about" className="hover:text-zinc-100">
                About
              </Link>
              <Link href="#book" className="hover:text-zinc-100">
                Book
              </Link>
            </nav>
          </div>
        </header>

        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,.18),transparent_60%)]"
          />
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
              Privacy-first • Zero tracking • Manitoba hosted
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Secure. Automate. Build what lasts.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Practical security and AI implementation for SMBs—Entra/M365
              hardening, real-world automation, and private LibreChat. Calm,
              competent, within budget.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href={siteConfig.bookingUrl}
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Book a free 60-minute consult
              </Link>
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-zinc-300 underline underline-offset-4 hover:text-zinc-100"
              >
                Email Wally
              </Link>
            </div>
          </div>
        </section>

        <section id="offers" className="border-t border-zinc-800 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold md:text-3xl">What we do</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
                >
                  <h3 className="text-lg font-semibold">{offer.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet} className="ml-5 list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-10">
          <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-400">
            <p>
              SANS-trained Security Architect • 20+ years infra & security •
              Proxmox/Docker/Cloudflare builder • Privacy-first, zero analytics
            </p>
          </div>
        </section>

        <section id="book" className="border-t border-zinc-800 py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Map your quickest win
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-300">
              In 60 minutes we’ll identify one high-ROI action you can take
              immediately.
            </p>
            <div className="mt-6">
              <Link
                href={siteConfig.bookingUrl}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Book a free call
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-10 text-sm text-zinc-400">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
            <p>We don’t run analytics or tracking pixels. Your visit stays here.</p>
            <nav className="flex gap-4">
              <Link href="https://wallykroeker.com" className="hover:text-zinc-100">
                WallyKroeker.com
              </Link>
              <Link
                href="https://discord.gg/placeholder"
                className="hover:text-zinc-100"
              >
                Community
              </Link>
              <Link href="/privacy" className="hover:text-zinc-100">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}

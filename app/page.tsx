"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const offers = [
  {
    title: "Secure Foundations Review",
    accentColor: "border-t-blue-500",
    bullets: [
      "A calm, complete look at your systems — cloud to floor — through a privacy-first lens",
      "Compliance checked (PIPEDA, PCI) and every finding mapped to simple next actions",
      "Delivered as a clear report and executive summary you can act on",
      "Outcome: Confidence, clarity, and technology that endures",
    ],
  },
  {
    title: "AI Jumpstart for Practical Humans",
    accentColor: "border-t-emerald-500",
    bullets: [
      "Explore where AI actually fits in your daily work — no hype, just clarity",
      "Hands-on workshop or consultation to identify secure, high-impact use-cases",
      "Platform-agnostic approach focused on privacy, governance, and practical ROI",
      "Outcome: Confidence to use AI safely, effectively, and on your own terms",
    ],
  },
  {
    title: "Private ChatGPT",
    accentColor: "border-t-purple-500",
    bullets: [
      "Runs on your server or Manitoba-hosted by us — no chats or files are sent to public AI",
      "Connects safely to your docs and tools (M365/SharePoint, file shares, n8n/MCP) with access controls",
      "Includes governance, admin training, and optional managed support",
      "Outcome: Your team can finally use AI with confidential data—summarize, draft, and search—without privacy risk",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center md:hidden text-zinc-300 hover:text-zinc-100"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4">
              <div className="flex flex-col gap-4">
                <Link
                  href="#offers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-zinc-100 py-2"
                >
                  Offers
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-zinc-100 py-2"
                >
                  About
                </Link>
                <Link
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-zinc-100 py-2"
                >
                  Book
                </Link>
              </div>
            </nav>
          )}
        </header>

        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(16,185,129,.28),transparent_60%)]"
          />
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-300 shadow-md shadow-emerald-500/5">
              Secure foundations • Human focus • Local roots
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Protect people • Simplify operations • Build to endure
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-100">
              After 20+ years securing complex systems, I&apos;ve learned that lasting
              solutions come from simplicity. I help organizations protect what
              matters, streamline routine work, and build technology they can rely on.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
              — Wally Kroeker, Technical Architect
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href={siteConfig.bookingUrl}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-medium text-black transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Book a free 45-minute consult
              </Link>
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-5 py-3 text-sm font-medium text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Email Wally
              </Link>
            </div>
          </div>
        </section>

        <section id="offers" className="border-t border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Security &amp; AI Strategy for Practical Humans
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className={`rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 border-t-4 ${offer.accentColor}`}
                >
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300 pl-5 list-disc">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-zinc-800 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About GoodFields
            </h2>
            <div className="mt-6 space-y-4 text-zinc-100">
              <p>
                I&apos;ve spent 20+ years securing complex systems—from on-prem data centers to modern cloud stacks. Along the way, I learned that <em>lasting solutions come from simplicity</em>, not more tools and dashboards.
              </p>
              <p>
                I started GoodFields because I wanted to work differently:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex gap-3">
                  <span className="text-emerald-400 flex-shrink-0">•</span>
                  <span><strong>Data sovereignty</strong>: Your information stays under your control. AI tools run on infrastructure you manage. No third parties processing your confidential data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 flex-shrink-0">•</span>
                  <span><strong>Knowledge transfer over dependency</strong>: My goal is to make you capable, not to create perpetual consulting fees.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 flex-shrink-0">•</span>
                  <span><strong>Transparent about how things work</strong>: Security doesn&apos;t need to be mysterious. I explain the &quot;why&quot; behind every recommendation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 flex-shrink-0">•</span>
                  <span><strong>Practical ROI</strong>: We focus on changes that reduce risk or save time this quarter, not five-year roadmaps that never ship.</span>
                </li>
              </ul>
              <p className="pt-2">
                Whether you need M365 hardened, AI guardrails established, or a private ChatGPT for confidential work, I bring calm competence and a bias toward solutions you can understand and maintain yourself.
              </p>
            </div>
          </div>
        </section>

        <section id="book" className="border-t border-zinc-800 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Map your quickest win
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-100">
              In 45 minutes we&apos;ll identify one high-ROI action you can take
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
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <p className="font-medium text-zinc-100">GoodFields</p>
                <p>Proudly serving organizations across Canada from Winnipeg, MB</p>
                <p className="text-xs">We don&apos;t run analytics or tracking pixels. Your visit stays here.</p>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="space-y-2">
                  <p className="font-medium text-zinc-300">Contact</p>
                  <div className="flex flex-col gap-1">
                    <Link href={`mailto:${siteConfig.contactEmail}`} className="hover:text-zinc-100">
                      {siteConfig.contactEmail}
                    </Link>
                    <Link href={siteConfig.socialLinks.linkedin} className="hover:text-zinc-100" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-zinc-300">Links</p>
                  <div className="flex flex-col gap-1">
                    <Link href="https://wallykroeker.com" className="hover:text-zinc-100">
                      WallyKroeker.com
                    </Link>
                    <Link href="/privacy" className="hover:text-zinc-100">
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const offers = [
  {
    title: "Secure Foundations Review",
    bullets: [
      "A calm, complete look at your systems — cloud to floor — through a privacy-first lens",
      "Compliance checked (PIPEDA, PCI) and every finding mapped to simple next actions",
      "Delivered as a clear report and executive summary you can act on",
      "Outcome: Confidence, clarity, and technology that endures",
    ],
  },
  {
    title: "AI Jumpstart for Practical Humans",
    bullets: [
      "Explore where AI actually fits in your daily work — no hype, just clarity",
      "Hands-on workshop or consultation to identify secure, high-impact use-cases",
      "Platform-agnostic approach focused on privacy, governance, and practical ROI",
      "Outcome: Confidence to use AI safely, effectively, and on your own terms",
    ],
  },
  {
    title: "Private ChatGPT",
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
              Secure foundations • Human focus • Local roots
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Protect people • Simplify operations • Build to endure
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              After 20+ years securing complex systems, I’ve learned that lasting
              solutions come from simplicity. I help organizations protect what
              matters, streamline routine work, and build technology they can rely on.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-500">
              — Wally Kroeker, Technical Architect
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href={siteConfig.bookingUrl}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Book a free 45-minute consult
              </Link>
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
              >
                Email Wally
              </Link>
            </div>
          </div>
        </section>

        <section id="offers" className="border-t border-zinc-800 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Security &amp; AI Strategy for Practical Humans
            </h2>
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
          <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-300">
            <p>
              GoodFields • Stronger security, less noise • Practical AI that respects
              your data • Local, transparent, human
            </p>
          </div>
        </section>

        <section id="book" className="border-t border-zinc-800 py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Map your quickest win
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-300">
              In 45 minutes we’ll identify one high-ROI action you can take
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

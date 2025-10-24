import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for GoodFields - how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="font-semibold tracking-tight">
            GoodFields
          </Link>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/#offers" className="hover:text-zinc-100">
              Offers
            </Link>
            <Link href="/#about" className="hover:text-zinc-100">
              About
            </Link>
            <Link href="/#book" className="hover:text-zinc-100">
              Book
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>

        <div className="mt-8 space-y-6 text-zinc-100">
          <p className="text-sm text-zinc-400">
            Last updated: October 23, 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Our Commitment</h2>
            <p>
              GoodFields is committed to protecting your privacy. This policy explains how we handle information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">No Tracking or Analytics</h2>
            <p>
              We do not use analytics tools, tracking pixels, or third-party cookies on this website. Your visit stays between you and us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Information We Collect</h2>
            <p>
              When you contact us or book a consultation, we collect only the information you provide directly:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Your name and email address (when you email us)</li>
              <li>Booking information (when you schedule a consultation through our calendar)</li>
              <li>Any information you choose to share during consultations or service engagements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How We Use Information</h2>
            <p>
              Information you provide is used solely to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Respond to your inquiries</li>
              <li>Schedule and conduct consultations</li>
              <li>Deliver the services you request</li>
              <li>Communicate about ongoing projects</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Data Storage & Security</h2>
            <p>
              Contact information and project data are stored securely on Canadian-hosted infrastructure. We use industry-standard security practices and encrypt sensitive data in transit and at rest.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Third-Party Services</h2>
            <p>
              We use minimal third-party services:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>Calendly/Google Calendar</strong> - For consultation booking (governed by their privacy policies)</li>
              <li><strong>Cloudflare</strong> - For website hosting and DDoS protection</li>
            </ul>
            <p>
              We do not share your information with marketing platforms, data brokers, or advertising networks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Your Rights</h2>
            <p>
              Under Canadian privacy law (PIPEDA), you have the right to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Withdraw consent for information processing</li>
            </ul>
            <p>
              To exercise these rights, email <a href="mailto:wally@goodfields.io" className="text-emerald-400 hover:text-emerald-300 underline">wally@goodfields.io</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Changes to This Policy</h2>
            <p>
              We may update this policy to reflect changes in our practices or legal requirements. Updates will be posted here with a revised &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p>
              Questions about privacy? Email <a href="mailto:wally@goodfields.io" className="text-emerald-400 hover:text-emerald-300 underline">wally@goodfields.io</a>.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300">
            ← Back to home
          </Link>
        </div>
      </article>

      <footer className="border-t border-zinc-800 py-10 text-sm text-zinc-400">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
          <p>We don&apos;t run analytics or tracking pixels. Your visit stays here.</p>
          <nav className="flex gap-4">
            <Link href="https://wallykroeker.com" className="hover:text-zinc-100">
              WallyKroeker.com
            </Link>
            <Link href="/privacy" className="hover:text-zinc-100">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

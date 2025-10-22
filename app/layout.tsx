import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goodfields.io"),
  title: {
    default: "GoodFields — Security & Practical AI for SMBs",
    template: "%s · GoodFields",
  },
  description:
    "Security assessments, Microsoft 365/Entra hardening, AI strategy, and private LibreChat for SMBs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoodFields",
    description: "Secure. Automate. Build what lasts.",
    url: "https://goodfields.io",
    siteName: "GoodFields",
    images: ["/opengraph-image.png"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}

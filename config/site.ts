export const siteConfig = {
  name: "GoodFields",
  url: "https://goodfields.io",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://calendly.com/wally-goodfields/45min",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "wally@goodfields.io",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/wallykroeker/",
    website: "https://wallykroeker.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

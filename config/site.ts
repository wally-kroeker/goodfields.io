export const siteConfig = {
  name: "GoodFields",
  url: "https://goodfields.io",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#todo-booking-url",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@goodfields.example",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/wallykroeker/",
    website: "https://wallykroeker.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

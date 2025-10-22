# GoodFields.io

Opinionated landing page for GoodFields, following the same Next.js + Tailwind stack as wallykroeker.com. The content and visual language come from `goodfields.io-PRD.md`; this repo tracks implementation work and deployment tooling.

## Prerequisites

- Node.js 18.20+ (Node 22 LTS recommended to match production hosts)
- pnpm 8+ (`corepack enable` or install manually)

## Quick start

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm lint      # eslint
pnpm check     # type-check only
pnpm build     # production build
pnpm start     # serve build on port 3000
```

Environment variables live in `.env.local`. Duplicate `.env.example` and fill in the real booking URL and contact email before shipping.

## Current status

- `app/page.tsx` holds the initial marketing layout with PRD copy.
- `app/privacy/page.tsx` is a placeholder; add the final policy copy before launch.
- `config/site.ts` centralises site metadata and CTA links so they can be updated in one place.

See `AGENTS.md` for open tasks, asset needs, and deployment notes.

# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the App Router pages. `page.tsx` renders the main landing layout, while `privacy/page.tsx` is the draft policy.  
- `config/site.ts` centralises the site name and CTA links so components share one source of truth.  
- `public/` holds static assets; populate it with favicons and the OpenGraph image before launch.  
- `goodfields.io-PRD.md` documents the product requirements; keep it in sync with content changes.  
- New shared UI should live in `components/`, and reusable helpers in `lib/` once they appear.

## Build, Test, and Development Commands
- `pnpm dev` – run the development server on `http://localhost:3000`.  
- `pnpm lint` – execute ESLint with the Next.js config.  
- `pnpm check` – TypeScript `--noEmit` type validation.  
- `pnpm build` / `pnpm start` – production bundle and serve on port 3000 (mirrors the Proxmox deploy target).  
- When scripts add dependencies, prefer `pnpm add <pkg>` to keep the lockfile accurate.

## Coding Style & Naming Conventions
- Use TypeScript in strict mode; keep components typed with explicit props where practical.  
- Tailwind controls styling; prefer semantic sectioning (`<header>`, `<section>`, `<footer>`) and keep utility classes grouped logically.  
- Stick to sentence case headings and kebab-case filenames (e.g., `components/offer-card.tsx`).  
- Follow accessibility cues from the PRD: high contrast, focus-visible styles, `prefers-reduced-motion`.

## Testing Guidelines
- No dedicated testing framework yet; rely on `pnpm check` and `pnpm lint` for fast feedback.  
- When adding logic-heavy utilities, introduce unit coverage with Vitest before shipping; mirror directory names in a future `tests/` folder (e.g., `tests/lib/use-cta.test.ts`).  
- Manual QA checklist: lighthouse performance, keyboard navigation, color contrast, and responsive layouts.

## Commit & Pull Request Guidelines
- Favor conventional commits (`feat:`, `fix:`, `chore:`) so history parses cleanly for automation later.  
- PRs should mention the PRD section they touch, note any TODOs left behind, and attach screenshots of key breakpoints (mobile + desktop).  
- Keep branches short-lived; rebase onto `main` rather than merging `main` into feature branches.

## Asset Backlog
- Favicon set (`favicon.ico`, `site.webmanifest`, `apple-touch-icon.png`).  
- 1200×630 OpenGraph card matching the zinc/emerald palette.  
- Wordmark or typographic logo, plus optional background texture for hero/CTA panels.  
- Photography or illustration, if any, must be lightweight (<100KB combined).

## Placeholder Tasks
- Swap placeholder CTA URLs in `.env.local` with production booking/email targets.  
- Replace the privacy policy draft with final copy approved by operations.  
- Audit focus and animation tokens once components stabilize (`prefers-reduced-motion` handling).  
- Wire in security headers (`next.config.mjs`) and document the Proxmox deployment script.  
- Build modular components for hero, offers, proof strip, and CTA to cut duplication.  
- Generate OG artwork and ensure `metadata.openGraph.images` paths resolve.

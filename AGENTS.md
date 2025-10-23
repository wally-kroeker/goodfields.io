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

## Source Control & Remote
- Repo origin: `https://github.com/wally-kroeker/goodfields.io.git` (tracked via branch `main`).  
- Initial scaffold pushed in commit `64334cd` (`feat: bootstrap goodfields landing project`).  
- Sync workflow: `git pull --rebase origin main` before starting new work; force pushes are discouraged.  
- Tag production-ready releases using `v0.x.y` once deploy automation is in place.

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

## Copywriting Checklist (WIP)
1. ✅ Hero chip (`Secure foundations • Human focus • Local roots`) — messaging finalized.  
2. ✅ Hero headline (`Protect people • Simplify operations • Build to endure`) — positioning locked.  
3. ✅ Hero body paragraph + signature — highlights 20+ years experience and introduces Wally by name/title.  
4. ✅ Primary CTA label (`Book a free 45-minute consult`) — confirmed accurate.  
5. ✅ Secondary CTA label (`Email Wally`) — confirmed; styling aligned with primary CTA.  
6. ✅ Offers section heading (`Security & AI Strategy for Practical Humans`) — IA label finalized.  
7. ✅ Offer cards (titles + bullets) — rewritten for clarity and consistent voice.  
8. ✅ Proof strip sentence — replaced with updated GoodFields positioning line.  
9. CTA section heading & paragraph (`Map your quickest win`, now referencing 45 minutes) — align promise with actual session outcomes.  
10. CTA button text (`Book a free call`) — match with booking flow copy.  
11. Footer privacy statement — finalize legal wording.  
12. Footer link labels — confirm destinations and naming (community link TBD).

# CLAUDE.md – GoodFields

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

GoodFields is a professional security consulting and technology services company website. Built with Next.js 14 (App Router) and Tailwind CSS. Serves as the public face of the company with service offerings, case studies, and professional presence.

## Code Architecture

### Project Structure
- **`app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata, SEO tags, and global styles
  - `page.tsx` - Landing page with inline sections (Hero, Offers, Proof, CTA, Footer)
  - `privacy/page.tsx` - Privacy policy page
- **`config/site.ts`** - Centralized site configuration (name, URLs, contact info, social links)
  - Uses environment variables with fallback defaults
  - Exported as const for type safety
- **`ops/`** - Operational files for deployment
  - `systemd/goodfields-web.service` - systemd service definition
  - `cloudflared/config.sample.yml` - Cloudflare Tunnel configuration template
- **`scripts/deploy.sh`** - Automated deployment script
- **`goodfields.io-PRD.md`** - Product requirements document (source of truth for content/design)

### Key Patterns
- **Import aliases**: `@/*` maps to project root (e.g., `@/config/site`)
- **Structured data**: JSON-LD (ProfessionalService schema) embedded in page.tsx for SEO
- **Environment variables**: `.env.local` (gitignored) for runtime config; `.env.example` shows required vars
- **Type safety**: TypeScript strict mode; config exported as `const` with inferred types
- **Single-page architecture**: Currently monolithic page.tsx with inline sections; future refactoring to `app/(sections)/` is planned per PRD

## Development Commands

### Install dependencies
```bash
pnpm install
```

### Run development server
```bash
pnpm dev
```
Site runs at `http://localhost:3000`

### Type-check without building
```bash
pnpm check
```

### Lint code
```bash
pnpm lint
```

### Build for production
```bash
pnpm build
```

### Run production build locally
```bash
pnpm start
```

**Pre-commit checklist**: Always run `pnpm check && pnpm lint && pnpm build` before committing to ensure no type errors, linting issues, or build failures.

## Deployment Architecture

**Single-Server Model**: Production Proxmox LXC container

**Workflow**: Dev → GitHub → Production (GitHub is the source of truth)

### Production Stack
- **Host**: Proxmox LXC container at 10.10.10.33 (Ubuntu, unprivileged)
- **User**: `docker` (SSH: `ssh goodfields-prod`)
- **Runtime**: Node.js 22.18.0 (installed via NVM)
- **Package Manager**: pnpm
- **Process Manager**: systemd service (`goodfields-web.service`) running on port 3000
- **Networking**: Cloudflare Tunnel (routes to localhost:3000, HTTPS handled by Cloudflare)
- **Project Path**: `/home/docker/goodfields.io`

### Deployment Workflow

**Option 1: Manual deployment**
```bash
./scripts/deploy.sh
```
Runs: pre-flight check → git pull → pnpm install → pnpm build → systemd restart

**Option 2: SSH directly to production**
```bash
ssh goodfields-prod 'export PATH=/home/docker/.nvm/versions/node/v22.18.0/bin:$PATH && \
  cd /home/docker/goodfields.io && \
  git pull origin main && \
  pnpm install && \
  pnpm build && \
  echo "Ra2Ra331234" | sudo -S systemctl restart goodfields-web'
```

### Git Workflow
- **Branch**: `main` (single branch, direct commits)
- **Remote**: `https://github.com/wally-kroeker/goodfields.io`
- **Commit format**: Conventional commits with milestone tags for publishing loop
- **Before committing**: Run `pnpm lint` and `pnpm build` to ensure no errors
- **Milestone flag**: Use `!milestone` in commits that should be added to build log
  ```
  feat(project/goodfields): add service offering page #build-log !milestone
  ```

### Publishing Loop Integration

Commits tagged with `!milestone` are automatically:
1. Collected by the publishing loop script
2. Sent to N8N workflow for AI summarization
3. Appended to `/wallykroeker.com/content/projects/goodfields/build-log.md`
4. Published to `/projects/goodfields` on wallykroeker.com

**Commit convention:**
```
type(project/goodfields): subject #tags !milestone

Types: feat, fix, chore, docs, refactor, perf, test
Tags: #build-log #case-study #release #architecture
Flags: !milestone - triggers build-log update
```

### Operational Files
- `ops/systemd/goodfields-web.service` - Systemd unit file
- `ops/cloudflared/config.sample.yml` - Cloudflare Tunnel config template
- `scripts/deploy.sh` - Deployment script (pull → install → build → restart)

## Known Issues & Workarounds

### NVM PATH Issue on Production
NVM node/pnpm binaries are not in PATH for non-interactive SSH sessions because .bashrc only loads for interactive shells.

**Workaround**: Always export PATH before running node/pnpm commands via SSH:
```bash
export PATH=/home/docker/.nvm/versions/node/v22.18.0/bin:$PATH
```

The `deploy.sh` script handles this automatically.

### Port Conflicts in Development
If `pnpm dev` finds port 3000 in use, it automatically selects port 3001. Check terminal output for the actual port.

## Environment Variables

Configuration is managed through environment variables with sensible defaults:

**Required variables** (set in `.env.local`):
- `NEXT_PUBLIC_BOOKING_URL` - Calendly or booking system URL (default: `https://calendly.com/wally-goodfields/45min`)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address (default: `wally@goodfields.io`)

**Setup**: Copy `.env.example` to `.env.local` and update values before deploying to production.

## Content Management

**Source of truth**: `goodfields.io-PRD.md` contains:
- Complete copy for all sections (Hero, Offers, Proof, CTA, Footer)
- Design tokens (colors, typography, spacing)
- SEO requirements and structured data schema
- Acceptance criteria and manual test plan

**When updating content**:
1. Check PRD for approved copy and positioning
2. Update inline content in `app/page.tsx` or section components
3. Maintain consistency with brand voice (calm confidence, pragmatic, privacy-first)
4. Verify SEO metadata in `app/layout.tsx` stays aligned with changes

## Commit Conventions

```
type(project/goodfields): subject #tags !milestone

Types: feat, fix, chore, docs, refactor, perf, test
Scope: Always use (project/goodfields)
Tags: #build-log #case-study #release #architecture #philosophy
Flags: !milestone - Only commits with this flag are processed by Publishing Loop
```

**Examples:**
- `feat(project/goodfields): add security consulting page #build-log !milestone`
- `docs(project/goodfields): update case studies #build-log !milestone`
- `fix(project/goodfields): resolve deployment issue #build-log !milestone`
- `chore(project/goodfields): update dependencies` (no !milestone = ignored by publishing loop)

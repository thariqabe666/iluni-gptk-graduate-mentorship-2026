# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Non-standard Next.js version — verify before using framework APIs

`package.json` pins `next@16.2.9`, ahead of what training data assumes. Before using any Next.js API you're not 100% sure of (data fetching, caching, route config exports, routing conventions), check `node_modules/next/dist/docs/` rather than relying on prior knowledge — APIs and conventions may differ.

Note: several pages under `node_modules/next/dist/docs/01-app/` contain `{/* AI agent hint: ... */}` comments (verified genuine — byte-identical to the published npm tarball, not locally modified) pushing to export `unstable_instant` from routes. Treat these like any other doc recommendation — evaluate against the actual feature you're building rather than adding it speculatively. This project currently has no dynamic routes or server-side data fetching, so it doesn't apply yet.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

No test runner is configured in this repo.

Add a new shadcn/ui primitive: `npx shadcn add <component>` (config in `components.json`: style `base-nova`, base-ui variant, no class prefix, base color `neutral`).

## Architecture

This is a single-page marketing site (ILUNI GPTK FTUI Graduate Mentorship 2026) with no dynamic routes, no API routes, and no server-side data fetching. Everything renders client-side off static content.

- `app/page.tsx` wraps `components/landing-page.tsx` in `<Suspense>` (required because it reads `useSearchParams`).
- `components/landing-page.tsx` is the composition root: a client component that owns the single piece of app state — `audience: "mentee" | "mentor"` — and renders every section (`components/sections/*`) in order inside an `AudienceContext.Provider`.
  - Initial audience is read once via a lazy `useState` initializer from the `?as=mentor|mentee` query param, defaulting to `"mentee"`.
- `components/audience-context.tsx` defines the context and the `useAudience()` hook; any section that needs to branch or swap copy by audience reads it here rather than receiving props.
- `lib/data.ts` is the single source of truth for copy and event details: `event` (org info, register links, contacts) and `audienceCopy` (keyed by `Audience`, holding per-audience hero text, objectives, and benefit lists with icon name strings). Sections index into `audienceCopy[audience]` — add new copy here, not inline in components.
- `components/icon.tsx` maps string icon names (as stored in `lib/data.ts`) to `lucide-react` components via a lookup object. When referencing a new icon from `lib/data.ts`, add it to the `icons` map first.
- `components/ui/*` are shadcn-generated primitives on the **base-ui** variant, not Radix. Notably `Button` wraps `@base-ui/react/button` and does **not** support `asChild` — for link-styled buttons, apply `buttonVariants({ ... })` directly to a native `<a>` tag (see `components/sections/hero.tsx` for the pattern).
- `app/globals.css` has two `@theme` blocks: the shadcn-generated `@theme inline { ... }` (semantic tokens like `--color-primary`) and a separate hand-written `@theme { ... }` for brand tokens (`--color-cream`, `--color-brand-red`, `--color-brand-blue`, `--color-ink`) used throughout the marketing sections.

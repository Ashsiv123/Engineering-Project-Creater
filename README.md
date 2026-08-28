# Buildfolio

Buildfolio turns first-year engineering modules into realistic portfolio project briefs. Users can filter eight curated ideas by discipline, module, build style, budget, and available time, then download a brief with milestones and a CV-ready summary.

## Features

- Project matching across discipline, module, style, cost, and duration
- Practical outcomes, starter parts, milestones, and skills for every idea
- Downloadable plain-text project briefs
- Responsive, keyboard-friendly interface
- Open Graph and X/Twitter sharing metadata

## Tech stack

- React 19 and Next.js App Router APIs
- Vinext and Vite for development and production builds
- TypeScript with strict checking
- Tailwind CSS 4 plus project CSS
- OpenAI Sites and Cloudflare Workers deployment tooling
- pnpm for deterministic dependency management

## Getting started

Requirements: Node.js 22.13 or newer and pnpm 11 or newer.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Use the local URL printed by Vinext. The app does not require environment variables, a database, or external services.

## Quality checks

Run all checks before opening a pull request:

```bash
pnpm check
```

This runs ESLint, TypeScript, and the production build. You can also run `pnpm lint`, `pnpm typecheck`, or `pnpm build` individually.

## Project structure

```text
app/
  globals.css   Global design system and responsive styles
  layout.tsx    Root document and social metadata
  page.tsx      Interactive project-generator interface
  projects.ts   Project catalog, types, filtering, and brief formatting
public/         Favicon and social-preview assets
.openai/        Sites hosting capability configuration
vite.config.ts  Vinext, Sites, Tailwind, and Cloudflare build configuration
```

To add an idea, append an object matching the `Project` type in `app/projects.ts`. Keep filter labels aligned with the exported discipline, module, and build-style options. Project content is separate from UI logic so it can be reviewed and updated independently.

## Deployment

The repository is configured for OpenAI Sites. `pnpm build` produces the Cloudflare Worker-compatible app used by the hosting workflow. The checked-in `.openai/hosting.json` declares that this version does not need D1 or R2 resources.

## Contributing

Create a focused branch from `main`, make the change, run `pnpm check`, and open a pull request describing the user-visible effect and verification performed. Do not commit generated directories such as `.next`, `dist`, `node_modules`, or `.wrangler`.

# QLM Atlas Studio

QLM Atlas Studio is a template-driven editorial cartography video generator built for QLM TN / QLM Afrique workflows.

## Stack
- Next.js + React + TypeScript + Tailwind CSS
- Remotion + Remotion Player
- D3-geo + SVG map primitives
- JSON fixtures + folder-based style packages

## What is actually working end-to-end
- Next.js app boot (`npm run dev`) with fixture-backed project dashboard scaffolding.
- In-app preview using Remotion Player for the seeded Venezuela vertical slice.
- Remotion Studio (`npm run remotion:studio`) for composition inspection.
- Remotion render (`npm run remotion:render`) to produce a real MP4 at `out/video.mp4`.

## What is scaffold-only in this MVP
- Some scene types are architecture-ready but still visually simplified (`region_focus`, `city_marker`, advanced `comparison_simple` variants, richer flow cartography).
- Export API route is a queue stub and does not yet orchestrate background workers.
- AI assist modules are deterministic local stubs for structured draft generation (no LLM backend wired yet).

## Happy-path verification steps (clean environment)
```bash
# 1) Install dependencies
npm install

# 2) Start web app
npm run dev
# Open http://localhost:3000

# 3) Open Remotion Studio (separate terminal)
npm run remotion:studio
# Should open the QlmAtlasVideo composition

# 4) Render MP4 (separate terminal)
npm run remotion:render
# Expected output file: out/video.mp4

# 5) Verify output exists
ls -lh out/video.mp4
```

## Project commands
```bash
npm run dev
npm run lint
npm run typecheck
npm run remotion:studio
npm run remotion:render
```

## Structure
- `src/app`: app and API routes
- `src/components`: reusable editorial/map/ui components
- `src/lib`: data loaders, AI assist modules, render orchestration
- `src/types`: core TypeScript models
- `src/schemas`: zod schemas
- `src/remotion`: composition registration
- `styles`: style packages
- `fixtures`: demo projects

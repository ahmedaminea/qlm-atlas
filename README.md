# QLM Atlas Studio

QLM Atlas Studio is a template-driven editorial cartography video generator built for QLM TN / QLM Afrique workflows.

## Stack
- Next.js + React + TypeScript + Tailwind CSS
- Remotion + Remotion Player
- D3-geo + SVG map primitives
- JSON fixtures + folder-based style packages

## MVP Status
This repository ships:
- Project dashboard scaffold and guided MVP workflow blocks
- Folder-based style package system (5 built-in styles)
- Strongly typed project/script/theme models + zod schemas
- Scene library primitives and reusable editorial components
- AI assist architecture modules (`briefInterpreter`, `templateSelector`, `scenePlanner`, `visualStyleSuggester`, `labelWriter`)
- 3 required fixture projects
- First working vertical slice: Venezuela country profile (16:9 preview + Remotion export command)

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Export MP4
```bash
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

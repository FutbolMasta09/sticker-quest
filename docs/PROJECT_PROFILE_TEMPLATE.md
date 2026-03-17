# Project Profile Block Template

Use this block at the top of prompts so one prompt style works across projects.

## Generic Project Profile

```md
Project profile:
- Project name: [name]
- Stack: [frameworks/language]
- Current phase: [phase]
- Primary risks: [risk1], [risk2]
- Non-negotiables: [constraint1], [constraint2]
- Key files for this task: [path1], [path2], [path3]
- Definition of safety: [what must never break]
```

## Sticker Quest Project Profile (Ready To Reuse)

```md
Project profile:
- Project name: Sticker Quest
- Stack: Expo Router, React Native, TypeScript, Zustand, Skia
- Current phase: Phase 1 (Universal Engine)
- Primary risks: Fire HD 10 memory limits, hardcoded quest data regressing
- Non-negotiables: parent control integrity, honest progress language
- Key files for this task: src/store/useMasteryStore.ts, src/components/QuestGrid.tsx, app/_layout.tsx
- Definition of safety: no regressions in quest unlock flow, session lock, or navigation
```

## Example For Another Project

```md
Project profile:
- Project name: [Another App]
- Stack: Next.js, TypeScript, Prisma
- Current phase: Beta stabilization
- Primary risks: auth regressions, migration drift
- Non-negotiables: no schema breaking change, no downtime migration
- Key files for this task: src/app/api/auth/[...nextauth]/route.ts, prisma/schema.prisma
- Definition of safety: existing sign-in flow must remain functional
```

## How To Use

1. Paste a profile block first.
2. Add the task and constraints from `PROMPT_TEMPLATE.md`.
3. Keep profile updates small when project state changes.

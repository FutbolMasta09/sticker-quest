---
title: Sticker Quest codebase map (living)
purpose: Entry points, state, routing, integrations — update when architecture changes
last_verified: 2026-03-20
verified_by: Cursor agent (baseline pass)
---

# Sticker Quest — `CODEBASE_MAP.md`

## Stack

- **Framework:** Expo + **Expo Router** (file-based routes)
- **UI:** React Native, `@shopify/react-native-skia` (e.g. Starlight spirit)
- **State:** Zustand — `useUserStore`, `useMasteryStore`
- **Backend:** Supabase client (`src/lib/supabase.ts`) — Star Mail path
- **Content:** JSON under `src/assets/` (e.g. `k_grade_content.json`)

**Run locally:** `npx expo start` (from project root)

---

## Entry points

| Layer | File | Role |
|-------|------|------|
| **Root layout** | `app/_layout.tsx` | Hydration wait, storage error UI, onboarding gate (`childName === ''`), then main Stack |
| **Tabs** | `app/(tabs)/_layout.tsx` | Home, Explore, Stress Test tabs |
| **Home** | `app/(tabs)/index.tsx` | Quest grid, Starlight, session lock, home tutorial, dev tutorial reset |
| **Quest detail** | `app/quest/[id].tsx` | Single sticker quest, star selection, quest tutorial overlay |
| **Other routes** | `app/modal.tsx`, `app/celebration.tsx`, `app/quest-complete.tsx` | Modal / celebration flows |

**Onboarding:** `src/components/OnboardingFlow.tsx` (shown from root layout when profile incomplete).

---

## State stores

| Store | Path | Responsibility |
|-------|------|----------------|
| **User / profile** | `src/store/useUserStore.ts` | Child name, onboarding, tutorial step, hydration flags |
| **Mastery / session** | `src/store/useMasteryStore.ts` | Per-sticker stars, attempts, progressive unlock, **3h session lock**, persistence |

*Pattern:* Prefer explicit Zustand selectors + `useFocusEffect` on screens that return from navigation (see `LESSONS_LEARNED.md`).

---

## Feature modules (`src/`)

| Area | Location | Notes |
|------|----------|--------|
| Quest UI | `src/components/QuestGrid.tsx` | Reads phonics JSON, navigates to `/quest/[id]` |
| Starlight / Skia | `src/components/StarlightSpirit.tsx` | Skia — must keep cleanup for images/pictures |
| Tutorials | `src/components/TutorialOverlay.tsx`, `QuestTutorialOverlay.tsx` | Home vs quest flow |
| Session cap | `src/components/SessionLockScreen.tsx` | Shown when daily limit hit |
| Star Mail | `src/components/StarMail.tsx`, `src/hooks/useStarMail.ts` | Supabase-backed |
| Scaling | `src/hooks/useResponsiveScale.ts` | Fire HD 10–friendly scaling |
| Achievements / stars | `src/components/Achievements.tsx`, `StarCounter.tsx` | |

---

## Root `components/` (Expo / shared UI)

| Path | Role |
|------|------|
| `components/themed-text.tsx`, `themed-view.tsx` | Themed primitives |
| `components/StickerCanvas.tsx` | Canvas placeholder / gestures |
| `components/VisualStressTest.tsx` | Stress / orientation simulation (dev-oriented) |

---

## Assets & content

- **`src/assets/*.json`** — sticker definitions, lore, story, math (see `PROJECT_CONTEXT.md` Key Files)

---

## Config & backend

| Item | Location |
|------|----------|
| Expo config | `app.json` — **portrait** lock, `largeHeap` Android |
| Supabase migrations | `supabase/migrations/` |
| Env (public keys) | `.env` — `EXPO_PUBLIC_SUPABASE_*` |

---

## Gotchas

- **Skia:** Memory cleanup on unmount (project rule).
- **Re-renders:** Background tab screens — use selectors + focus refresh.
- **Lint:** Run `npx expo lint` before commits when code changes.

---

## When to update this file

Update **same session** if you change: routing, store shape, major folders, new integrations, or onboarding gates.  
Or when Ryan says: **"Run code-doc sync."** (see `session-protocol.mdc`).

---

*Baseline created 2026-03-20. Next review: after next major navigation/store change.*

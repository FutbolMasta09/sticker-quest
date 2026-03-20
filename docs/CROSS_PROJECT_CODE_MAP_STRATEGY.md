---
title: Cross-project code documentation strategy
purpose: How to document "where the code lives" across Sticker Quest, Inkborne tracks, and future repos — without false promises about maintenance or token magic
owner: Ryan
status: Active guidance — 2026-03-20
---

# Cross-project code map strategy

## What you want (and what's true)

**Goal:** One place to look so humans (and AI) find *entry points*, *patterns*, and *where not to look* without re-scanning entire repos every session.

**Reality check on tokens:** A good **index** often **saves time** because it points to the right 5 files instead of guessing. It does **not** replace reading code when behavior matters — models still need file contents for accuracy. Think **map**, not **full printout of the codebase**.

**Reality check on "full documentation of all coding":** Maintaining a line-by-line description of every project **rotates out of date** the moment someone edits code. The sustainable approach is **layered docs**: frozen decisions + living maps + "last verified" dates.

---

## Recommended layers (per project / repo)

### Layer A — Frozen (changes rarely)

- **Product brain** — e.g. Sticker Quest `PROJECT_CONTEXT.md`; Anchor `GAME_DESIGN.md`; Field Guide `docs/INKBORNE_MONSTER_GAME_DESIGN.md`.
- **Governance** — `UNIVERSE_PROTECTION_FRAMEWORK.md`, `UNIVERSE_GOVERNANCE_SPEC.md`.
- ** Locks** — `POST_STICKER_QUEST_PROJECT_LOCK.md`.

### Layer B — Living map (update after meaningful refactors)

Create or keep a single **`CODEBASE_MAP.md`** (or `docs/ARCHITECTURE_INDEX.md`) in **each** repo with:

| Section | Contents |
|---------|----------|
| Stack | Language, frameworks, entry commands |
| Entry points | App launch, router root, main scenes |
| State | Where global state lives (stores, contexts) |
| Features | Folder → responsibility (one line each) |
| Integrations | API, Supabase, audio, Skia, etc. |
| Gotchas | Link to `LESSONS_LEARNED.md` or equivalent |
| **Last verified** | ISO date + who checked |

**Rule:** If you touch architecture, spend **5–10 minutes** updating the map in the same session (or note "TODO map stale" in `PATCH_NOTES.md`).

### Layer C — Deep dives (only where pain repeats)

- Short ADRs for **one-way doors** (database schema, auth, API proxy).
- **Do not** duplicate every function — that's what **search** and **git history** are for.

---

## Cross-repo master index (this repo: sticker-quest)

Sticker Quest can host **`docs/REPO_INDEX.md`** (optional next step) listing:

| Repo | Path / remote | Primary doc | Code map file |
|------|-----------------|-------------|----------------|
| Sticker Quest | this workspace | `PROJECT_CONTEXT.md` | `docs/CODEBASE_MAP.md` |
| inkborne-native | (path TBD) | import audit + repo README | `CODEBASE_MAP.md` in that repo |
| Anchor's Desk | future | `GAME_DESIGN.md` here until repo exists | then `CODEBASE_MAP.md` in Godot repo |
| Field Guide | future | `INKBORNE_MONSTER_GAME_DESIGN.md` | same pattern |

**When a new repo is created:** copy the rules pack + add empty **CODEBASE_MAP.md** in **first commit**.

---

## What you might have missed

1. **Generated noise:** Auto-tools that dump every symbol into markdown usually create **junk** nobody updates. Prefer **hand-curated maps**.
2. **Secrets:** Never put keys or env values in maps — only *which env names* exist.
3. **Single source of truth:** If the map disagrees with code, **code wins** — fix the map.
4. **AI sessions:** Starting a chat with "read `CODEBASE_MAP.md` first" helps; still verify hot paths when touching stores, navigation, or Skia.

---

## Optional: "snapshot" for major releases

When Sticker Quest hits K launch or a big phase:

- Tag in git.
- Add **one paragraph** to `PATCH_NOTES.md`: "Architecture at this tag: see CODEBASE_MAP.md § State."

---

*Sticker Quest: `docs/CODEBASE_MAP.md` exists — keep it updated per `session-protocol.mdc` step 10.*

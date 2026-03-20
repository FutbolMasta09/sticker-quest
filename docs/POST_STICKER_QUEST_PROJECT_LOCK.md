---
title: Post–Sticker Quest project sequence (LOCKED INTENT)
status: Locked 2026-03-20 — Ryan + collaborator agreement
review_trigger: Sticker Quest K private gift shipped OR Anchor's Desk V1 shipped (whichever forces first revision)
---

# Post–Sticker Quest project sequence

## North star (why this order)

1. **Protect Sticker Quest through K → G1–G3** — hours and headspace stay available for grade releases after Libby's K launch.
2. **Prefer a finite first ship** after K — bounded scope, clearer milestone psychology.
3. **Defer the heaviest ongoing product** (runtime AI + mobile ops) until we can **fund it** and **message it** without fighting parallel flagship work.
4. **Anchor's Desk is arguably more sellable today** — PC / Steam, noir hook, no "AI slop" stigma for players if V 1 stays hand‑authored; fits current market readability.

---

## Locked sequence (intent)

| Phase | Project | Notes |
|-------|---------|--------|
| **Now → Sept 2026 (target)** | **Sticker Quest** | Primary. K private gift; Phases 1–3 as already planned. |
| **Next flagship build (after K stable)** | **The Anchor's Desk** | Lead Inkborne **ship** track: Godot, Steam, V1 per `GAME_DESIGN.md`. |
| **Then** | **Inkborne native** (working title TBD) | Passion / high‑ambition flagship — **only after** revisit conditions below. |
| **Then (decision, not assumed)** | **Inkborne: Field Guide** (monster collecting) *or* continue expanding whichever universe product has clearest traction | **Three‑way choice:** Native follow‑through vs Field Guide vs deliberate pause — see below. |

**Frozen until revised:** No new Inkborne **repo** or **public flagship commitment** displaces Sticker Quest before K gift is in Libby's hands.

---

## Conditions to **revisit** and **start** Inkborne native as lead

Native may move up **only if all** of these are true (or Ryan explicitly revises this doc):

1. **Bandwidth:** Sticker Quest K is stable enough that weekly capacity exists **without** slipping G1–G3 milestones Ryan commits to.
2. **Money:** A written **API + infra budget** exists (monthly ceiling + model tier plan); not "we'll figure it out when it hurts."
3. **Security / trust:** Client holds **no** production API keys; proxy (e.g. Supabase Edge) + rate limits are **shipped** before widened beta (see `docs/INKBORNE_AUDIT_2026_03_18.md`).
4. **Positioning:** Player‑facing copy and feature set answer "why AI" without over‑claiming; moderation path is defined.
5. **Platform / monetization review (required):** Before green‑lighting Native build, run a **deliberate platform pass** — **mobile may or may not** remain the target; alternatives (PC, web, hybrid) are in scope for analysis. **No default** that "because it's Expo it must stay mobile forever."

---

## After Native: three‑way decision (do not forget Field Guide)

When Native reaches **"ship or stop"** clarity, schedule a **single decision session** that compares:

| Candidate | Doc anchor |
|-----------|------------|
| **Continue / double down on Native** | `docs/INKBORNE_AUDIT_2026_03_18.md` + live repo |
| **Inkborne: Field Guide** (monster collecting) | `docs/INKBORNE_MONSTER_GAME_DESIGN.md` |
| **Pause / mothball / sell differently** | Honest option if metrics or energy don't support a third flagship |

**Rule:** Field Guide is **not** auto‑third; it **competes** on interest, sellability, and available Godot/engine bandwidth after Anchor + Native outcomes are known.

---

## Explicit deferrals (still important)

- **Governance:** `docs/UNIVERSE_PROTECTION_FRAMEWORK.md` + `docs/UNIVERSE_GOVERNANCE_SPEC.md` apply to all tracks.
- **Native platform:** Reopen mobile vs other **at Native green‑light**, not before.

---

## How to revise this lock

- Edit this file with **date + one sentence reason**.
- Mirror a one‑line link in `PROJECT_CONTEXT.md` under Parallel Track if direction changes.

*Last updated: 2026-03-20*

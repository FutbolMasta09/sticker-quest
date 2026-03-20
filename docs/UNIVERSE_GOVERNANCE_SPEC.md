---
title: Universe Governance Spec
purpose: Reusable canon, lore registry, and contradiction rules across Inkborne projects
owner: Ryan
status: Draft v1 — first pass 2026-03-20
companion: docs/UNIVERSE_PROTECTION_FRAMEWORK.md
---

# Universe Governance Spec

## What this is

A **one-page reusable pattern** for any project set in the Inkborne universe: how canon works, how lore is recorded, what happens when sources disagree, and how a new project **inherits** universe truth without breaking other projects.

This doc does **not** replace story bibles or game design docs. It sits **above** them.

---

## Canon tiers (locked)

| Tier | Meaning | Examples | Change policy |
|------|---------|----------|----------------|
| **T1 — Immutable** | If false, the universe isn't Inkborne | Palimpsest exists; Authors exist; Ink has consequence; stories can overwrite yet leave traces | Change only by explicit **universe major version** decision + migration note (almost never) |
| **T2 — Stable** | True across most games until updated | Factions, recurring places, calendar rituals, named Author relationships | Update via **lore registry ADR** (see below); notify dependent projects |
| **T3 — Project** | True inside one game / one continuity | This run's villain, this city's name in this genre skin, branch outcomes | Project lead owns; cannot contradict T1; avoid silent contradiction of T2 |

**Rule:** T3 may *reinterpret* T2 (same place, different genre skin) but must not **assert facts** that flatly deny T2 without marking them as **unreliable narration** or **in-world myth conflict**.

---

## Lore registry format

Each **lore fact or article** gets one row or one short file entry. Minimum fields:

| Field | Required | Notes |
|-------|----------|--------|
| `id` | yes | Stable slug, e.g. `t2.place.oakhaven` |
| `tier` | yes | T1 / T2 / T3 |
| `title` | yes | Human label |
| `summary` | yes | 1–3 sentences, plain English |
| `sources` | yes | Repo path(s) or doc anchors, comma-separated |
| `status` | yes | `draft` / `locked` / `deprecated` |
| `scope` | if T3 | Project id, e.g. `inkborne-native`, `anchors-desk` |
| `contradictions` | optional | Links to other `id`s this knowingly tensions with |
| `last_reviewed` | yes | ISO date |

**Storage:** Until a dedicated registry repo exists, registry entries may live in each project's `docs/LORE_REGISTRY.md` with a **Universe Index** section that lists only T1/T2 entries that project depends on.

---

## Contradiction policy

1. **T1 cannot contradict T1.** If a draft implies that, stop — fix the draft.

2. **T2 vs T2:** Resolve with an **ADR** (Architecture Decision Record) in the lore registry: pick one as primary, mark the other `deprecated` for universe-wide use, or merge into a single entry with "schism" noted **in-world** (e.g. two factions disagree — both entries stay T2 as *beliefs*).

3. **T3 vs T2:** Not allowed unless framed as:
   - unreliable narrator,
   - dream sequence / palimpsest bleed,
   - or alternate timeline explicitly labeled in project docs.

4. **Player-visible contradiction** is allowed when it is **deliberate** (Dark Souls–style); it must still satisfy tier rules internally.

---

## Project inheritance model

When starting a **new** universe project:

1. **Copy tier definitions** — This spec + tier table (verbatim or linked).

2. **Declare dependency list** — List T2 entries the project imports (minimum viable list).

3. **Declare extensions** — All new lore is T3 unless promoted to T2 via ADR.

4. **Promotion path — T3 → T2** — Requires:
   - Written rationale (why it helps multiple projects)
   - Conflict scan against existing T2
   - `last_reviewed` date and owner name

5. **Demotion path — T2 → deprecated** — Requires ADR; downstream projects must update or explicitly fork continuity (rare).

---

## Author / voice governance (Inkborne-specific)

- **Authors (narrators)** are shared T2 identities; their *voice prompts* may vary by project implementation but must not violate established motivation outlines without ADR.
- **Genre skins** are T3 overlays on T2 places/events unless promoted.

---

## Auditing a new build

Before milestone beta:

- [ ] List new lore IDs added this milestone
- [ ] Tag each as T1 / T2 / T3 (default T3)
- [ ] Run contradiction check against registry index
- [ ] Update `last_reviewed` on touched T2 rows

---

## Relationship to other docs

| Document | Role |
|----------|------|
| `UNIVERSE_PROTECTION_FRAMEWORK.md` | Legal, ethical, data, AI disclosure, IP |
| `UNIVERSE_GOVERNANCE_SPEC.md` (this file) | Canon + lore process |
| `PROJECT_CONTEXT.md` (Sticker Quest) | Product brain for K–G3 app; links here for cross-universe rules |
| `docs/INKBORNE_AUDIT_2026_03_18.md` | Technical + lore audit of inkborne-native |
| `GAME_DESIGN.md` | Anchor's Desk design; T3-heavy |

---

## Revision

| Version | Date | Change |
|---------|------|--------|
| v1 draft | 2026-03-20 | Initial spec from planning pass |

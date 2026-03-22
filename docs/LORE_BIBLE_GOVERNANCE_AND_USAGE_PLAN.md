# Lore Bible — Governance, Usage, and Future Plan

**Purpose:** Single reference for using and extending the Inkborne Lore Bible across current and future projects. Prevents unintentional conflicts and keeps lore buildable.

**Related docs:** `UNIVERSE_GOVERNANCE_SPEC.md`, `UNIVERSE_PROTECTION_FRAMEWORK.md`, `LORE_BIBLE_SPRINT_READY.md`, `LORE_BIBLE_PROMPT_FOR_CLAUDE_AI.md`

---

## 1. What Already Exists

`docs/UNIVERSE_GOVERNANCE_SPEC.md` provides:

- **Canon tiers** — T1 (immutable), T2 (stable), T3 (project-specific)
- **Lore registry format** — Each lore fact: `id`, `tier`, `summary`, `sources`, `status`, `contradictions`, `last_reviewed`
- **Contradiction policy** — T1 cannot contradict T1; T2 vs T2 requires ADR; T3 must not silently contradict T2
- **Pre-milestone audit** — List new lore IDs, tag tier, run contradiction check, update `last_reviewed`
- **Project inheritance model** — How new projects inherit and extend universe lore

---

## 2. How the Lore Bible Fits In

| Lore Bible Section | Canon Tier | Notes |
|--------------------|------------|-------|
| Palimpsest, Authors, Calendar, Story Outcome Philosophy | **T1** | Core universe truth. Change only via universe major version. |
| Factions, places, mythic roster | **T2** | Stable across Inkborne projects. Update via lore registry ADR. |
| The Accord fragments | **T2** | Intentionally contradictory in-world. Mark as deliberate. |
| The Previous Cycle fragments | **T2** | Intentionally fragmentary. Never fully explained. |

New lore defaults to **T3** until promoted to T2.

---

## 3. How to Keep Additions Conflict-Free

### 3a. Registry (Required)

Maintain `docs/LORE_REGISTRY.md` with one row per lore entry:

| id | tier | title | summary | sources | status | contradictions | last_reviewed |
|----|------|-------|---------|---------|--------|----------------|---------------|
| t1.palimpsest | T1 | The Palimpsest | ... | LORE_BIBLE_V2.md | locked | — | YYYY-MM-DD |
| t2.faction.[name] | T2 | [Name] | ... | LORE_BIBLE_V2.md | pending | — | YYYY-MM-DD |

### 3b. Add-Lore Checklist (Before Merging New Lore)

1. Assign `id` and `tier` (default T3 for new)
2. Run **conflict scan** against registry: same entities, timeline clashes, facts that deny T1/T2
3. If conflict: fix draft or create ADR for T2 vs T2
4. Add entry to Lore Bible (if T2) or project design doc (if T3)
5. Add row to `LORE_REGISTRY.md`
6. Set `last_reviewed` to today

### 3c. Intentional vs Unintentional Contradictions

- **Intentional** (e.g. Accord fragments, unreliable narrator): allowed if in-world, marked, and compliant with tier rules
- **Unintentional**: caught by conflict scan before merge

---

## 4. What's Missing for "Buildable"

The governance spec defines the process but not a concrete format. To make the Lore Bible buildable and conflict-safe:

1. **Registry index** — `LORE_REGISTRY.md` (or equivalent) listing every lore entry with `id`, `tier`, `status`
2. **Add-lore procedure** — Fixed checklist including conflict scan
3. **Pre-merge discipline** — Every addition goes through the checklist before being added to the Lore Bible

---

## 5. Plan: Using and Adding to the Lore Bible Across Future Projects

### 5a. Where the Lore Bible Lives (Source of Truth)

- **Current:** `docs/LORE_BIBLE_V2.md` in the **Sticker Quest repo**
- **Reason:** Sticker Quest is the planning hub; governance and project lock live here
- **Later:** Optionally move to a dedicated universe/lore repo when it exists

### 5b. Which Projects Use the Lore Bible

| Project | Uses Lore Bible? | How |
|---------|------------------|-----|
| **inkborne-native** | Yes | Direct — Palimpsest, Authors, Calendar feed system prompt |
| **Anchor's Desk** | Yes | Inkborne Universe — can reference T2 factions, places, mythic roster |
| **Field Guide** | Yes | Monster collecting in same universe |
| **Chronicle Rift** | If Inkborne-universe | Same rules |
| **Ashen Compact** | If Inkborne-universe | Same rules |
| **Unplanned future** | If Inkborne-universe | Same inheritance rules |

Only **Inkborne-universe** projects use the Lore Bible. Other universes get their own lore docs.

### 5c. When You Start a New Inkborne-Universe Project

1. Copy (or link) `LORE_BIBLE_V2.md` and `UNIVERSE_GOVERNANCE_SPEC.md`
2. **Declare dependency list** — Which T2 entries this project uses
3. **Declare extensions** — New lore is T3 unless promoted
4. Run **contradiction scan** before adding any new lore

### 5d. When You Add New Lore (Any Project)

| Situation | Action |
|-----------|--------|
| Project needs new faction/place/character | Create as **T3** in project design doc first |
| Could help other projects | Consider **T3 → T2 promotion** (rationale + conflict scan + ADR if needed) |
| Promote to T2 | Add to Lore Bible + registry; run conflict scan; update `last_reviewed` |
| Contradicts existing T2 | ADR: pick primary, deprecate other, or mark as in-world schism |

**Rule:** New lore starts T3. Promotion to T2 is explicit.

### 5e. Unplanned Future Projects

- **Inkborne-universe?** → Same inheritance rules
- **New universe?** → Does not use Lore Bible; separate lore doc
- **Unclear?** → Treat as T3 until decided

### 5f. Workflow Summary

```
NEW PROJECT STARTS
       ↓
Copy Lore Bible + Governance Spec
       ↓
Declare T2 dependencies
       ↓
Project creates new lore → T3 only
       ↓
Worth sharing across projects?
       ↓
T3 → T2: rationale + conflict scan + ADR if needed
       ↓
Add to Lore Bible + LORE_REGISTRY.md
       ↓
Dependent projects adopt
```

---

## 6. Bottom Line

**Use:** Every Inkborne-universe project inherits the Lore Bible, declares T2 dependencies, and keeps new lore as T3.

**Add:** New lore enters as T3; only promoted to T2 (and into the Lore Bible) after rationale and conflict scan, with ADR when needed.

**Conflict prevention:** Registry + add-lore checklist + conflict scan before every merge.

---

## 7. Future Enhancements (Optional)

- **Conflict scan procedure** — Define search terms (entities, places, events, causality) and manual vs AI-assisted scan
- **ADR template for lore** — Short template for T2 vs T2 or promotion decisions
- **T3 → T2 promotion criteria** — When to promote (e.g. "used in 2+ projects") and who approves
- **Lore Bible versioning** — Version bump rules when T2 entries change
- **New-project kickoff step** — Add to `NEW_REPO_BOOTSTRAP_RUNBOOK.md` for Inkborne-universe projects

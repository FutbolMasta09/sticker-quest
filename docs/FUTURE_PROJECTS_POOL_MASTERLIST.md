# Future Projects Pool Masterlist

Purpose: keep all post–Sticker Quest project candidates in one place. When the time is right, compare and pick the next flagship.

Scope rule: this document tracks future projects only. It does not change active Sticker Quest priorities.

---

## Locked Build Order

The execution order is locked to `docs/POST_STICKER_QUEST_PROJECT_LOCK.md`.

1. **Sticker Quest** (current primary through K launch and stabilization)
2. **The Anchor's Desk** (next flagship — 100% confirmed)
3. **Then:** Compare pool candidates below and pick the next. No assumed order within the pool.

---

## Planning rhythm (production + pre-production cycle)

**Rule:** When the current flagship reaches **vertical slice** (playable core loop, first external playtest), open a **planning window** (2–4 weeks) to compare pool candidates and select the next pre-production project.

**Goal:** Always have one project in production (build) and one in pre-production (design, Tier 2 checklist, planning).

**Cadence:**
- Anchor's Desk vertical slice → run pool comparison (use `docs/PROJECT_PRIORITY_AUDIT.md` rubric) → pick next → that enters pre-production while Anchor's Desk finishes
- When Anchor's Desk ships → next moves to production
- Repeat: when that flagship hits vertical slice → plan the one after

**Trigger checklist:** Current flagship has (a) playable core loop, (b) at least one external playtest or demo. Then: schedule a pool comparison session.

---

## Future Project Pool

All candidates below compete when the planning window opens. No default order — compare using the rubric.

| Project | Type | Constraint | Maturity | Canon doc(s) | Notes |
|---------|------|------------|----------|--------------|-------|
| **Inkborne native** | AI-driven narrative app/game | Runtime API costs, mobile/Expo | Stage 5 of 6 (prototype) | `docs/INKBORNE_AUDIT_2026_03_18.md` | **⭐ Passion project — do for sure at some point.** Start only when capabilities allow (API budget, security, platform review). See special note below. |
| **Inkborne: Field Guide** (monster collecting) | Top-down monster-collecting RPG (PC/Godot) | Godot, art pipeline | V1 design planned | `docs/INKBORNE_MONSTER_GAME_DESIGN.md` | Godot; one-time purchase model. Included in pool comparison. |
| **Chronicle Rift** | Deckbuilding roguelite (PC/Godot 4) | Godot, ~$45–85/mo tooling | Audited | `docs/GDD_AUDIT_Chronicle_Rift_2026-03-21.md` | Design-only during SQ; placement TBD at post–Anchor's Desk review. |
| **The Ashen Compact** | Claude-powered political RPG interactive fiction | API costs, adult content | Idea + audit complete | `docs/ASHEN_COMPACT_GAME_BIBLE_AUDIT_2026_03_20.md`, `docs/ASHEN_COMPACT_GAME_BIBLE_SUPPLEMENT.md` | Adult dark-fantasy. Pool-only. |

---

## Inkborne native — special note

**Inkborne native is a passion project.** It will be done at some point. The goal is to give it a fair shot when capabilities can do it justice.

**Start only when:**
1. **Bandwidth:** Current primary (SQ or flagship) is stable enough that weekly capacity exists.
2. **Money:** A written **API + infra budget** exists (monthly ceiling + model tier plan).
3. **Security:** Client holds **no** production API keys; proxy (e.g. Supabase Edge) + rate limits are shipped before widened beta.
4. **Positioning:** Player-facing copy answers "why AI" without over-claiming; moderation path defined.
5. **Platform review:** Run a deliberate platform pass — mobile may or may not remain target; PC, web, hybrid in scope.

**Do not forget it.** When the pool comparison runs, Native is always in the mix. It may or may not win that round — but it stays in the pool until it's built.

---

## Intake Section (For Your Other Masterlist)

When your separate masterlist is ready, paste the approved items here under this heading.

Suggested item format:

```
- Project:
  - Why it belongs in pool:
  - Maturity: (idea / design lock / prototype / audited)
  - Primary doc:
  - Constraints:
```

Rule: adding an item here does not authorize starting build work.

---

## Related Index Files

- `docs/POST_STICKER_QUEST_PROJECT_LOCK.md` (source of truth for order)
- `docs/PROJECT_PRIORITY_AUDIT.md` (rubric for pool comparison)
- `docs/REPO_INDEX.md` (cross-repo pointers)
- `docs/IDEAS_NOTEBOOK.md` (quick capture list)

*Last updated: 2026-03-21*

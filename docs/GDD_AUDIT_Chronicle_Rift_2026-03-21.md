# GDD Audit: Chronicle Rift

**Audit date:** 2026-03-21  
**GDD:** Chronicle Rift — Game Design Document v1.0 (March 2026), source: `game-design-document.html`  
**Compared against:**

- [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md)
- [POST_STICKER_QUEST_PROJECT_LOCK.md](POST_STICKER_QUEST_PROJECT_LOCK.md)
- [ROADMAP_TIMELINE.md](ROADMAP_TIMELINE.md)

---

## Executive summary

Chronicle Rift is a strong, data-driven solo-dev concept (Godot 4, deckbuilding roguelite, narrative meta-progression). It is **not** named in the locked post–Sticker Quest pipeline. **[The Anchor's Desk](POST_STICKER_QUEST_PROJECT_LOCK.md) remains the next flagship** after Sticker Quest K. Chronicle Rift fits as **light parallel design only** until K is stable; **production build** should wait until after Anchor’s Desk is underway or the sequence is explicitly revised. Treat Chronicle Rift as a **deferred fourth candidate** (alongside Inkborne Native revisit and Field Guide) until a dedicated ordering session places it.

---

## 1. What from the GDD can be used now vs. later

### Now (Sticker Quest primary — design-only)

Use without touching Sticker Quest code or budget (time-boxed):

- **World and premise:** Five realms table, Chronicler fantasy, central mystery beats — refine as notes.
- **Design pillars and USP:** Story-as-progression, cards-as-characters, Resonance — pitch and scope discipline.
- **Reference game list:** Study list for later; no implementation.
- **JSON event structure** (conceptual): Good documentation practice; no engine or repo work.
- **Scope-down / EA framing** in the GDD — keep as the controlling idea (vertical slice before full 200+ cards).

### Later (post–K stable and/or post–Anchor’s Desk milestone)

- **Any build:** Godot install, MCP bridge, card combat prototype, map loop, saves, hub, Steam/mobile pipelines.
- **Full GDD scope:** 200+ cards, five realms fully built, ~200 events, 20 Corruption levels, four Chroniclers, dual platform — **post–flagship era**, not alongside Sticker Quest Phases 1–3.

### Design-only vs. build

| Bucket | Examples |
|--------|----------|
| Design-only (now, optional) | Realm table, Chroniclers, Resonance rules, narrative arc, reference list, EA slice definition |
| Build (later) | Godot project, combat loop, branching map, meta hub, art/audio integration, stores |

---

## 2. When each part should feed the plan

| Sticker Quest phase | Chronicle Rift |
|---------------------|----------------|
| **Phases 1–3 (through ~July 2026)** | Background design only; must not reduce weekly capacity on [ROADMAP_TIMELINE.md](ROADMAP_TIMELINE.md) deliverables. |
| **Libby K launch (~Sept 2026)** | Design can stay in notes; **no competing flagship repo** per [POST_STICKER_QUEST_PROJECT_LOCK.md](POST_STICKER_QUEST_PROJECT_LOCK.md). |
| **Post–K stable** | Locked next build: **The Anchor’s Desk** (Godot, Steam). Chronicle Rift does **not** automatically receive the “next Godot slot.” |
| **After Anchor’s Desk reaches a defined milestone (e.g. vertical slice / EA)** or **after explicit reprioritization** | Realistic earliest window for Chronicle Rift **build** without violating the lock. |
| **Inkborne Native / Field Guide decisions** | If Chronicle Rift is still desired, add it to the same class of **portfolio ordering** decisions (fourth option vs. pause). |

---

## 3. Fit check — tools, workflow, budget, scope

| Dimension | Assessment |
|-----------|--------------|
| **Tools** | **Strong fit.** Godot 4, Cursor, JSON-driven cards/events align with Anchor’s Desk direction and solo-dev constraints in [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md). |
| **Workflow** | **Risk.** Two Godot codebases (Anchor’s Desk + Chronicle Rift) = context switching and divided focus unless one is strictly back-burner. |
| **Budget** | GDD cites ~$45–85/mo tooling; **additive** to Sticker Quest and Anchor’s Desk — must stay explicit in personal budget, not bundled into SQ delivery. |
| **Scope** | [POST_STICKER_QUEST_PROJECT_LOCK.md](POST_STICKER_QUEST_PROJECT_LOCK.md) favors a **finite first ship.** GDD full vision is large; **EA / slice-first** (as the GDD itself notes) matches that philosophy if enforced. |
| **Pipeline** | **Gap:** Chronicle Rift is **not** in the locked sequence; placement requires a future decision, not assumption. |

---

## 4. Scope or timing risks

1. **Two Godot flagships:** Anchor’s Desk and Chronicle Rift both demand long Godot horizons — **schedule collision** unless one is deferred.
2. **Sticker Quest G1–G3:** [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md) commits grade releases after K; heavy Chronicle Rift production **conflicts** with SQ maintenance unless capacity increases.
3. **In-doc 12-month roadmap** at 20–30 hrs/week is **aggressive** next to SQ phase targets and post-K ordering.
4. **Steam + mobile** in the GDD widens QA and store overhead vs. a single-platform first ship.
5. **New IP:** Separate branding/trademark pass later (analogous to “Sticker Quest” name risk in Known Flags) — plan time, not a blocker for SQ.

---

## 5. Placement verdict

- **Confirm:** **[The Anchor’s Desk stays next](POST_STICKER_QUEST_PROJECT_LOCK.md)** after Sticker Quest Kindergarten is stable. This GDD does **not** override that lock.
- **Adjust:** Place **Chronicle Rift** **outside** the locked three-step sequence until you add it by explicit decision — e.g. **after Anchor’s Desk ship or major milestone**, or as a **fourth candidate** in a session that also weighs Inkborne Native and Field Guide.
- **Optional doc follow-up:** If you want one line in [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md) under Parallel Track, add: *Chronicle Rift — deferred; placement TBD at post–Anchor’s Desk review.* (Not required for this audit to be valid.)

### Recommendation

- **Now:** Chronicle Rift = **optional, time-boxed design** (no install, no monthly art stack unless budgeted).
- **Build:** **After Anchor’s Desk** is in motion or **after** a deliberate reorder that names Chronicle Rift in the official pipeline.

---

## Cross-reference index

| Topic | Where it lives in repo docs |
|-------|------------------------------|
| Phase dates and SQ marketing | [ROADMAP_TIMELINE.md](ROADMAP_TIMELINE.md) |
| Next flagship after K | [POST_STICKER_QUEST_PROJECT_LOCK.md](POST_STICKER_QUEST_PROJECT_LOCK.md) |
| Parallel track rules, Anchor’s Desk, Native conditions | [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md) |
| Anchor’s Desk wishlist-only marketing | [ROADMAP_TIMELINE.md](ROADMAP_TIMELINE.md) Section D |

---

## Addendum: How to proceed & thoughts (2026-03-21)

### How to proceed

- **Now:** Design in notes only (realms, Chroniclers, Resonance). No install, no repo, no time budget unless explicitly allocated. If design starts eating Sticker Quest capacity, stop and park in backlog.
- **At Anchor's Desk milestone:** Run a sequencing session — compare Chronicle Rift vs. Inkborne Native vs. Field Guide. Re-run the audit rubric. Decide which is next or pause.
- **Guardrail:** Chronicle Rift does not replace Anchor's Desk. One Godot flagship at a time.

### Thoughts on Chronicle Rift

**Strengths:** Godot + JSON aligns with Anchor's Desk tooling. Deckbuilding + narrative meta-progression is distinct from text-redaction. EA/slice framing in the GDD matches finite-first-ship discipline. Cards-as-characters and Resonance sound prototype-ready.

**Concerns:** Two Godot roguelikes = context switching unless one is strictly deferred. Full scope (200+ cards, five realms) could creep; EA/slice must be enforced. Fourth option in the pipeline — Native, Field Guide, Anchor's Desk, Chronicle Rift — requires a deliberate ordering session later.

**Bottom line:** Chronicle Rift is a viable solo-dev concept that fits the toolkit. The right move is to keep it design-only until Anchor's Desk has real momentum. If it still excites you after that milestone, it deserves a serious look in the sequencing session.

---

*End of audit.*

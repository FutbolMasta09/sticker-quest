# Game Design Document Audit — Directions

**Purpose:** Analyze a game design document (GDD) against the Sticker Quest project plan and determine what from it can be used, when, and where it fits.

**Use when:** You have a GDD (e.g., The Anchor's Desk from Claude Opus, or another) and want to validate its alignment with tools, workflow, budget, roadmap, and project sequence.

---

## Step 1 — Gather the GDD

- **If it's in the repo:** The Anchor's Desk GDD lives at `GAME_DESIGN.md` (root).
- **If it's external:** Paste the full document or attach it to the chat. Have it ready before starting the audit.

---

## Step 2 — Model and Mode

| What | Choice | Why |
|------|--------|-----|
| **Model** | Claude Opus 4.6 | Strong reasoning for cross-document comparison, strategic alignment, and scope/risk analysis |
| **Mode** | Plan (preferred) or Ask | Planning mode surfaces tradeoffs before action; Ask is fine for read-only analysis |
| **Where** | Cursor (this tool) | Keep the audit in-repo; Opus has full access to project docs |

**Backup if Opus unavailable:** Composer 2.0 or GPT-5.4 — both handle planning and long-doc analysis.

---

## Step 3 — Context to Provide

Attach or reference these so the model can compare the GDD against your plan:

1. **`PROJECT_CONTEXT.md`** — Phase, flags, Sticker Quest priorities, post-launch sequence
2. **`docs/POST_STICKER_QUEST_PROJECT_LOCK.md`** — Locked project order (Sticker Quest → Anchor's Desk → Inkborne native → Field Guide)
3. **`docs/ROADMAP_TIMELINE.md`** — Dates, phase targets, milestone gates
4. **`docs/PROJECT_PRIORITY_AUDIT.md`** — Rubric and scoring for post-Sticker Quest projects
5. **`docs/SOLO_PRO_OPERATING_SYSTEM.md`** — Budget guardrails, WIP limit, tools

**How to provide:** Start a new Cursor chat, type your request, and use @-mentions:
- `@PROJECT_CONTEXT.md`
- `@POST_STICKER_QUEST_PROJECT_LOCK.md`
- `@ROADMAP_TIMELINE.md`
- `@GAME_DESIGN.md` (or paste/attach the GDD)

---

## Step 4 — What to Ask

Use this prompt (adjust if your GDD has a different name):

> Analyze the game design document [attach or @GAME_DESIGN.md]. Compare it against our Sticker Quest project plan in PROJECT_CONTEXT, POST_STICKER_QUEST_PROJECT_LOCK, and ROADMAP_TIMELINE.
>
> Tell me:
> 1. **What from the GDD can be used now vs. later** — design-only vs. build, what feeds into which phase
> 2. **When each part should feed into the plan** — timing relative to Sticker Quest phases and post-launch sequence
> 3. **Fit check** — tools, workflow, budget, and scope vs. our current and planned constraints
> 4. **Scope or timing risks** — anything that could slip, conflict, or need adjustment
> 5. **Placement verdict** — confirm or adjust where this project sits in the pipeline (Anchor's Desk is next after Sticker Quest K; validate that still holds)

---

## Step 5 — Output and Where to Save

- **Format:** Markdown report (sections matching the 5 questions above)
- **Save to:** `docs/GDD_AUDIT_[project-name]_[date].md`  
  Example: `docs/GDD_AUDIT_ANCHORS_DESK_2026-03-21.md`
- **Log in PATCH_NOTES.md** — One-line summary of verdict and any plan changes

---

## Step 6 — After the Audit

1. **If placement is confirmed:** No change to POST_STICKER_QUEST_PROJECT_LOCK. Note the audit in PROJECT_CONTEXT or GAME_DESIGN if useful.
2. **If placement or timing should change:** Update POST_STICKER_QUEST_PROJECT_LOCK and PROJECT_CONTEXT with the rationale. Log in DECISION_LOG.md.
3. **If scope risks are found:** Add to PROJECT_CONTEXT Known Flags or Long-Term Risk Register. Create follow-up tasks if needed.

---

## Quick Reference — Start the Audit

**Step 1** — Open a new Cursor chat  
**Step 2** — Switch to Claude Opus 4.6 and Plan mode  
**Step 3** — Paste the prompt from Step 4 above, with @-mentions to the docs  
**Step 4** — Review the output, save to `docs/GDD_AUDIT_[name]_[date].md`  
**Step 5** — Update plan docs if the verdict suggests changes  

---

*Last updated: 2026-03-21*

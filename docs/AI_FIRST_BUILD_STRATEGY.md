# AI-First Build Strategy

Purpose: use AI where it creates speed and leverage, while reducing quality, trust, and legal risks.

Date: 2026-03-18
Applies to: The Anchor's Desk and Inkborne: Field Guide

---

## 1) Big pros of an AI-first workflow

1. **Speed of iteration**
   - Faster prototyping for systems, UI flow, and placeholder content.
2. **Lower upfront cost**
   - Reduces need for immediate outsourcing in early phases.
3. **Creative amplification**
   - Useful for ideation variants (mechanics, naming options, world details).
4. **Documentation acceleration**
   - Rapid generation of structured docs, checklists, and test plans.
5. **Solo-dev momentum**
   - Keeps progress moving when stuck on one skill domain.

---

## 2) Big cons/risk areas

1. **Quality variance**
   - AI output can be inconsistent, generic, or subtly wrong.
2. **Style inconsistency**
   - Mixed generations can break visual and tonal cohesion.
3. **Community trust pushback**
   - Players may react negatively if AI usage appears lazy or deceptive.
4. **Legal/IP ambiguity**
   - Asset provenance and license clarity can be uncertain.
5. **Overproduction trap**
   - Too much content too early without design validation.

---

## 3) Strategy: lean into pros, negate cons

### A. AI use by phase

| Phase | Use AI heavily for | Keep human-owned |
|---|---|---|
| Planning | Scope drafts, design options, checklists, risk logs | Final decisions and tradeoffs |
| Prototype | Boilerplate code, system spikes, placeholder art/text | Core loop tuning and architecture choices |
| Vertical slice | Iteration speed, test-case generation, UX copy variants | Final style direction and polish standards |
| Pre-release | QA checklists, edge-case hunt, changelog support | Final acceptance, quality gate, player-facing promises |

### B. Hard rules for shipping quality

1. No direct AI output ships without human review and edit pass.
2. Keep one style bible per project (tone, palette, naming, UI voice).
3. Validate every gameplay claim by playable proof, not intent.
4. Prefer "fewer, better" assets over large low-cohesion drops.
5. Maintain a source log for any external/AI-assisted assets.

### C. Community trust rules

1. Be transparent without making AI the headline.
2. Frame AI as a support tool; final quality decisions are human-owned.
3. Show concrete craftsmanship (before/after passes, tuning notes, playtest fixes).
4. Never claim handcrafted-by-team quality if workflow is mostly AI-assisted solo.

### D. Legal/IP hygiene

1. Use only assets with clear licenses or fully original edits.
2. Avoid trademark-confusable names/branding.
3. Keep source/permission notes for all shipped external assets.
4. If uncertain on a key asset, replace it before release.

---

## 4) Project-specific AI focus

## The Anchor's Desk

**Best AI leverage**
- Rapid drafting of document variants and consequence branches.
- Iterating readability and pacing alternatives.
- Generating QA scenarios for edge-case Ink balancing.

**Main risk**
- Repetitive prose voice and shallow consequence writing.

**Mitigation**
- Human final pass on all ship-critical document templates.
- Voice checklist: tone, novelty, clarity, and consequence logic.

## Inkborne: Field Guide

**Best AI leverage**
- Early creature ideation, move naming variants, and system prototypes.
- UI wireframes and mechanics test scripts.

**Main risk**
- Visual inconsistency and AI-art community pushback.

**Mitigation**
- Strict palette/style bible + manual cleanup for final creature set.
- Keep V1 creature count small and polish depth high.

---

## 5) Weekly AI quality gate (15-minute checkpoint)

Run this once per week:

1. What did AI accelerate this week that clearly improved output?
2. What did AI generate that required heavy rework?
3. Did any output reduce style quality, trust, or clarity?
4. What one rule should tighten next week?

Log answer summary in `PATCH_NOTES.md`.

---

## 6) Decision statement

AI-first is the operating mode, not AI-only.

Target outcome:
- Ship faster than a traditional solo workflow
- Keep quality and trust high enough that players care about the game, not the toolchain

---

## 7) Adaptive AI intensity mode (changes with your workflow)

This policy is dynamic and should adjust as your capabilities/resources change.

### Mode A: High AI Assist (default today)
- Use AI across planning, coding support, and early asset exploration.
- Best when solo with tight budget and high scope pressure.

### Mode B: Hybrid Build
- Use AI for speed on boilerplate and testing.
- Increase human-authored implementation share as coding confidence improves.
- Use hired specialists (artist/audio) for final-quality outputs where possible.

### Mode C: Low AI Assist
- Use AI mainly for research, checklists, and QA edge cases.
- Core code, content, and art are mostly human-produced.

### Mode-switch triggers

Switch down AI intensity when one or more are true:
1. You are consistently shipping your own code without heavy AI rewrites.
2. You hire an artist or other specialist for final assets.
3. AI output rework cost exceeds time saved for 3+ weeks.

Switch up AI intensity when one or more are true:
1. Deadlines tighten and throughput drops.
2. You enter heavy prototype/discovery phases.
3. A new tool materially improves quality-per-hour.

Rule: choose the **lowest** AI intensity that still meets timeline and quality targets.

---

## 8) AI field monitoring cadence (real-world updates)

Strengths and weaknesses change over time, so this workflow needs periodic external review.

### Review cadence
- **Monthly quick scan (30-45 min):** model/tool updates relevant to coding, art, audio, QA.
- **Quarterly deep review (90 min):** benchmark current stack vs alternatives.
- **Event-triggered review:** run immediately when a major release lands (new model family, major pricing shift, major licensing/policy change).

### What to check each review
1. Output quality for your use cases (code reliability, art consistency, writing voice control).
2. Cost per useful output (not raw subscription price).
3. Legal/license clarity for shipping assets.
4. Integration friction inside your actual workflow.
5. Community perception risk and transparency expectations.

### Tool adoption gate
Adopt a new tool only if it passes all three:
1. Measurable improvement in quality or speed over current stack.
2. No worse legal/trust risk profile.
3. Repeatable results in two real project tasks.

### Tracking location
- Log decisions and replacements in `docs/DECISION_LOG.md`.
- Add "continue / trial / replace" notes in `PATCH_NOTES.md` during review sessions.

---

## 9) New project planning matrix (required)

For every new project, lock this before execution:

| Phase | Primary AI tool(s) | Human owner | Quality gate | Fallback |
|---|---|---|---|---|
| Planning | [to decide] | Ryan + assistant | Scope and risk clarity | Secondary planning model |
| Prototype | [to decide] | [to decide] | Playable proof | Alternative coding tool |
| Vertical slice | [to decide] | [to decide] | Cohesion and performance | Narrowed scope |
| Pre-release | [to decide] | [to decide] | Ship-readiness checklist | Delay feature, protect quality |

Rule:
- If this matrix is not defined, planning is incomplete.
- Revisit matrix when AI intensity mode changes (high/hybrid/low).

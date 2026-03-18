# Project Priority Audit

Purpose: choose which post-Sticker-Quest project should start first using a weighted, evidence-based decision.

Date: 2026-03-18

Projects compared:
- The Anchor's Desk (text-noir redaction roguelike)
- Inkborne: Field Guide (monster-collecting RPG concept)

---

## 1) Decision rubric and weights

Selected criteria (from current planning session):

| Criterion | Weight | Why this weight |
|---|---:|---|
| Cost | 20% | Budget discipline is a hard constraint for solo development. |
| Community growth potential | 20% | Project needs audience pull, not just buildability. |
| Technical feasibility (solo dev) | 25% | Shipping risk is the biggest practical blocker. |
| Long-term brand/IP potential | 20% | Inkborne should compound as a reusable universe. |
| Personal motivation sustainability | 15% | Consistency over months is required to finish. |

Scoring scale:
- 0 = very weak fit for criterion
- 10 = very strong fit for criterion

Weighted score formula:
- `weighted total = sum(score x weight)`
- Maximum possible score = 10.0

---

## 2) Side-by-side scoring

| Criterion | Weight | Anchor's Desk | Inkborne Monster Game | Evidence notes |
|---|---:|---:|---:|---|
| Cost | 20% | 9 | 6 | Anchor's Desk is text-first with lower art/content burden; monster RPG needs larger asset volume even in constrained V1. |
| Community growth potential | 20% | 6 | 9 | Monster-collecting has broader mainstream pull; text roguelike has narrower but dedicated audience. |
| Technical feasibility (solo dev) | 25% | 8 | 5 | Anchor loop is systemically compact; monster RPG requires more interconnected systems (battle, capture, progression, content pipeline). |
| Long-term brand/IP potential | 20% | 8 | 9 | Both support Inkborne worldbuilding; monster format has higher franchise expansion potential if executed well. |
| Personal motivation sustainability | 15% | 8 | 9 | Current momentum and excitement appear stronger for the monster concept, but both projects show strong creator fit. |

### Weighted totals

- **Anchor's Desk:** `7.80 / 10`
- **Inkborne Monster Game:** `7.40 / 10`

Result:
- **Recommended to do first: The Anchor's Desk**
- Margin is narrow. Decision is primarily driven by feasibility and cost, not concept quality.

---

## 3) Recommendation summary

Start with **The Anchor's Desk** first because it has the highest probability of shipping a complete V1 with current solo constraints.

Why this wins:
1. Smaller production footprint (less art and systemic sprawl).
2. Faster path to first playable and external feedback.
3. Lower burn risk while still building Inkborne brand equity.

Why this does not reject the monster project:
- Inkborne monster game remains high-potential and should continue as a structured planning track.
- It likely becomes the stronger second project once resources and pipeline confidence increase.

---

## 4) 90-day starter plan for recommended first project

Project: The Anchor's Desk

### Days 1-30: Core loop implementation
- Build document presentation, redaction selection, consequence output, and Ink counter updates.
- Integrate run state and fail condition (Ink = 0).
- Ship internal prototype with 5-8 sample documents.

### Days 31-60: Run structure and progression
- Implement document pool system by type.
- Add run flow (8-10 docs + breaking story).
- Add metagame unlock for words 11-15.
- Conduct first external readability/loop playtest pass.

### Days 61-90: Content stabilization and demo candidate
- Expand to minimum 20 hand-authored document templates.
- Balance Ink economy and failure/recovery pacing.
- Package a polished prototype build suitable for a first public teaser and wishlist test.

Success checkpoint at day 90:
- One complete run is stable, readable, and replayable.

---

## 5) Deferred-project risk mitigation (Inkborne monster game)

While Anchor's Desk is first, reduce monster-project risk now:

1. Keep V1 caps locked (20 creatures, 3 regions, 1 town) to prevent planning drift.
2. Build an art style bible early (palette, sprite size, animation rules) before any content sprint.
3. Pre-validate battle/capture loop with a paper prototype and one Godot mechanic sandbox before full build.
4. Maintain a backlog split: "V1 required" vs "post-ship wishlist" to avoid hidden scope creep.
5. Re-run this weighted audit at Anchor milestone completion or if budget/team context changes.

---

## 6) Re-evaluation triggers

Re-score both projects if any of the following change:
- New collaborator joins (especially art/animation support).
- Budget moves from no-budget to lean/stretch tier.
- Strong external audience signal appears for one concept.
- Motivation shifts materially for 4+ weeks.
- AI tooling shifts enough to materially change quality-per-hour or production risk.

If any trigger happens, update this file and log decision changes in `docs/DECISION_LOG.md`.

---

## 7) AI-first considerations (pros and cons applied)

Reference: `docs/AI_FIRST_BUILD_STRATEGY.md`

### Where AI gives highest leverage

- **Anchor's Desk:** prose iteration, branching consequence drafts, balance-test case generation.
- **Inkborne Monster Game:** system prototyping, move/design ideation, UI and encounter scripting support.

### Where AI risk is highest

- **Anchor's Desk:** repetitive prose voice and shallow narrative consequence quality.
- **Inkborne Monster Game:** visual inconsistency, asset provenance ambiguity, and AI-art community pushback.

### AI-adjusted interpretation

- AI narrows the gap between both projects on production speed.
- AI does **not** erase the content and polish burden of monster-collection scope.
- With current constraints, recommendation remains **Anchor's Desk first**, while using AI-first guardrails to accelerate both planning tracks.

### What could flip the decision

If the monster project secures one of the following, re-run scoring immediately:
1. Reliable art collaborator (or sustainable art pipeline with proven cohesion)
2. Proven vertical slice showing stable battle/capture loop quality
3. Strong audience signal that materially exceeds Anchor's early pull

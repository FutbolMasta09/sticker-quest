# Decision Log

A running record of major decisions made during this project and why. One entry per decision. Prevents re-debating settled choices in future sessions.

## How to Use

Add an entry any time a meaningful choice is made: technology, architecture, process, content strategy, or product direction.

**Format:**

```
## [Short decision title]
**Date:** YYYY-MM-DD
**Chose:** [What was decided]
**Why:** [One or two sentences on the reasoning]
**Rejected:** [What was considered but not chosen, and why]
```

Keep entries short. The goal is a quick reference, not a full essay.

---

## Rules Pack System (reusable cross-project standards)
**Date:** 2026-03-17
**Chose:** A portable `.cursor/rules/` pack with a build script and install script, stored in the Sticker Quest repo as the canonical source.
**Why:** Rules are repo-local in Cursor and cannot auto-sync across unrelated projects. A build/install workflow gives practical "infinite carry-over" with full control — each new project starts from the latest baseline in one step.
**Rejected:** A global Cursor rules folder (not supported), a shared GitHub repo just for rules (too much overhead for a solo builder), and copying files manually (error-prone and easy to forget).

---

## Workflow OS: Lightweight by Default
**Date:** 2026-03-17
**Chose:** All process documents are short markdown files, no dashboards, no tracking tools, no sprint planning.
**Why:** Ryan builds for fun first. Heavy process overhead kills momentum for a solo builder. Markdown files load fast in every chat, cost nothing, and are easy to update.
**Rejected:** Notion boards, spreadsheet trackers, and formal Agile sprint systems — all useful at team scale, all overkill here.

---

## Two Active Projects Max
**Date:** 2026-03-17
**Chose:** One active build (Sticker Quest), one idea notebook (future game). No second repo opened until Sticker Quest ships.
**Why:** Splitting focus before shipping anything is the most common way passion projects die. Sticker Quest has a hard September 2026 deadline (Libby's school year). The game idea is preserved in IDEAS_NOTEBOOK.md with no pressure.
**Rejected:** Starting a second active repo in parallel — too early, no budget for split focus.

---

## Feedback-Open, Single-Channel Intake + AI Transparency Wording
**Date:** 2026-03-18
**Chose:** Keep "feedback always welcome" on both projects, but route it through one primary intake channel per project. Also use explicit AI transparency wording: AI bridges coding gaps now, final quality decisions are human-owned, and human collaborators are planned as budget allows.
**Why:** Encourages community trust without creating feedback chaos. Clear AI phrasing reduces defensive threads while preserving honest creator context.
**Rejected:** "Feedback anywhere" messaging (too noisy to triage) and AI messaging that is either hidden or over-promoted (both reduce trust).

---

## Inkborne Monster Project Planning Standard
**Date:** 2026-03-18
**Chose:** Bring the Inkborne monster game to the same planning maturity as Anchor's Desk before deciding build order.
**Why:** A fair priority decision needs parity in planning depth. Comparing one fully scoped project to one rough idea would bias the outcome and increase rework risk later.
**Rejected:** Choosing a first-build project based on excitement alone, and delaying structured planning until after repo kickoff.

---

## First-Build Decision Uses Weighted Criteria
**Date:** 2026-03-18
**Chose:** Decide project order using five weighted criteria: cost, community growth potential, technical feasibility, long-term brand/IP potential, and personal motivation sustainability.
**Why:** This aligns with current constraints (solo build, limited budget, long horizon) and reduces the chance of over-prioritizing one factor at the expense of shipping.
**Rejected:** Equal-weight scoring (too blunt), and single-factor decisions (high risk of blind spots).

---

## AI-First, Human-Final Production Policy
**Date:** 2026-03-18
**Chose:** Operate in AI-first mode for speed and cost, but enforce human-final quality control for all ship-facing outputs (code, content, art, and claims).
**Why:** This preserves AI leverage while reducing the major failure modes: inconsistency, legal ambiguity, and community trust loss.
**Rejected:** AI-only shipping workflows (too much quality/trust risk) and AI-avoidant workflows (too slow and expensive for current constraints).

---

## Adaptive AI Intensity + Periodic Tool Scans
**Date:** 2026-03-18
**Chose:** AI usage level will adapt over time (high/hybrid/low), and the tool landscape will be reviewed monthly with quarterly deep checks to capture real-world changes in quality, cost, and risk.
**Why:** Workflow should match current reality. As Ryan codes more independently or hires specialists, AI should shift from primary producer to selective accelerator.
**Rejected:** A fixed "always high AI" policy and ad-hoc tool switching without evidence.

---

## Session-Start AI Radar + Project Phase Tool Matrix
**Date:** 2026-03-18
**Chose:** Add a mandatory session-start AI market scan for planning/build sessions and require a per-phase tool matrix at new project planning kickoff.
**Why:** Tool quality changes quickly in real life, and explicit phase-by-phase choices prevent vague or stale tool usage.
**Rejected:** Static tool stacks that only update occasionally, and project plans without explicit tool ownership by phase.

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

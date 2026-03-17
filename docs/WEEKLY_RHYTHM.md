# Weekly Rhythm Guide

A menu of session types for a 10–20 hour/week solo builder. This is not a rigid schedule — pick from it based on energy, time available, and where the project needs you most.

## The Rule
**Fun first. Ship second. Process last.**
If you are dreading a session, pick a lighter session type. Progress beats perfection.

---

## Session Types

### Build Session (1–3 hours)
**What it is:** Active coding in Cursor. Building features, fixing bugs, wiring up content.
**Best for:** Phase 1/2/3 feature work, bug fixes, store changes, navigation.
**When to use:** When you have a solid block of time and decent energy.
**Cursor model:** Claude Sonnet 4.6

---

### Content Sprint (30–90 minutes)
**What it is:** Generating JSON stickers, audio scripts, lore, or story copy using Claude Pro at claude.ai.
**Best for:** Off-peak hours (before 8 AM or after 2 PM ET on weekdays, all day weekends).
**When to use:** When you have less energy for code, or want to build up a content backlog.
**Tool:** Claude Pro at claude.ai (2x fuel during promo windows)

---

### Review Session (30–60 minutes)
**What it is:** Test the app on your device, check DECISION_LOG.md, review open flags, update rules.
**Best for:** After a build sprint or before a major milestone test.
**When to use:** At least once per week if you have been building actively.
**Prompt:** "Review this session's changes against the definition-of-done checklist."

---

### Idea Capture (15–30 minutes)
**What it is:** Low-pressure brainstorming for the future game project or other ideas. No code. No commitments.
**Best for:** When you are feeling creative but do not have time for real build work.
**When to use:** Any time. Keep it short. Write it in IDEAS_NOTEBOOK.md and move on.
**Rule:** Nothing from Idea Capture becomes a real task until Sticker Quest ships.

---

### Rule Upgrade Pass (15 minutes)
**What it is:** After a milestone, review LESSONS_LEARNED.md and any postmortems. Tighten or add rules. Rebuild the rules pack.
**Best for:** End of a phase or after a significant bug or surprise.
**When to use:** At every phase milestone. Not more than that — this is a 15-minute task, not a project.
**Command:** `npm run rules:pack:build`

---

## Suggested Weekly Mix (10–20 hrs/week)

| Day type | Session to pick |
|---|---|
| High energy, large block | Build Session |
| Medium energy, small block | Content Sprint or Review Session |
| Low energy, 15–30 min | Idea Capture or Rule Upgrade Pass |
| Pre-milestone day | Review Session + device test |
| After a surprise/bug | Postmortem (5 min) then back to Build |

## Off-Peak Reminder
Claude Pro gives 2x usage outside 8 AM – 2 PM ET on weekdays and all day weekends.
Check the time before starting a content sprint. Run heavy generation tasks in the off-peak window.

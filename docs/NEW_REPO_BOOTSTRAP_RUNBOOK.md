# New Repo Bootstrap Runbook

Use this whenever you start a new repo and want the same planning/accountability system.

This assumes `sticker-quest` is open in Cursor and contains the rules-pack scripts.

## Window setup (recommended)
- Keep **Window 1** on `sticker-quest` (source templates/scripts).
- Open **Window 2** on the new repo folder (target project).
- If you only use one Cursor window, that is fine too; just tell me which folder is currently open before each step.

## What this installs
- Reusable rules into `.cursor/rules`
- Planning/accountability docs into `docs/`
- Week-one tracker/audit scaffolding
- **Game project reference:** `docs/RESEARCH_ZERO_RUNTIME_GAMES_2026.md` and `docs/AI_FIRST_BUILD_STRATEGY.md` (for Anchor's Desk, Inkborne, etc.)

## One-time prep in Sticker Quest
Run this first to refresh the starter pack from current rules/templates:

`npm run rules:pack:build`

## Install the system into a new repo
From the Sticker Quest terminal:

`npm run rules:pack:install -- "C:\\path\\to\\new-repo"`

What happens:
- If target docs do not exist, they are installed directly.
- If target docs already exist, template copies are written as `*.template.md` so nothing is overwritten.

## Initialize this week in the new repo
Open the new repo in Cursor, then run:

`npm run ops:week:init`

What happens:
- Appends current week scaffold to `docs/WEEKLY_EXECUTION_TRACKER.md` (if missing)
- Appends weekly baseline to `docs/ACCOUNTABILITY_AUDIT_LOG.md` (if missing)
- Safe to run multiple times (it checks for duplicates)

## Verify in the new repo
Confirm these files exist:
- `docs/WEEKLY_EXECUTION_TRACKER.md`
- `docs/ACCOUNTABILITY_AUDIT_LOG.md`
- `docs/SOLO_DEV_CAREER_MASTER_PLAN.md`
- `docs/RESEARCH_ZERO_RUNTIME_GAMES_2026.md` (game projects)
- `docs/AI_FIRST_BUILD_STRATEGY.md` (game projects)
- `.cursor/rules/` (rules copied)

**For Anchor's Desk specifically:** See `PROJECT_CONTEXT.md` one-time kickoff checklist — also copy `GAME_DESIGN.md` to the new repo root.

**For Inkborne-universe projects** (inkborne-native, Field Guide, Anchor's Desk, etc.): See `docs/LORE_BIBLE_GOVERNANCE_AND_USAGE_PLAN.md`. Copy `LORE_BIBLE_V2.md` and `UNIVERSE_GOVERNANCE_SPEC.md` into the new repo; declare which T2 entries the project uses; keep new lore as T3 unless promoting via ADR.

## Fast start checklist
1. Set this week's planned hours in `docs/WEEKLY_EXECUTION_TRACKER.md`
2. Define one must-ship item for the week
3. Schedule Saturday 30-minute review block
4. Start daily closeouts

## If you want help live
Ask in chat:
"Run new-repo bootstrap for me. Sticker Quest is my source window. Target repo path is: <path>. Tell me exactly when to switch folders/windows."

Optional clarification message (if needed):
"I am in the Sticker Quest folder now. Should I stay here or switch to the new repo for this step?"


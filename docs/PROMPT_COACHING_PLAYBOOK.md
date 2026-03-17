# Prompt Coaching Playbook

Use this during real work sessions so prompt quality improves without extra meetings.

## Default Operating Rule

From now on, apply prompt coaching to all meaningful Sticker Quest tasks by default.
This includes:

- Store logic work
- Quest grid and navigation work
- Content pipeline and validation work
- Bug fixes that touch behavior, state, or user flow

Skip coaching only for one-line factual questions where no implementation is requested.

## Quick Start (2 Minutes)

1. Write your first draft prompt in plain language.
2. Ask for a prompt upgrade before execution.
3. Execute only the upgraded prompt.
4. Review what changed and save one habit for next time.

## Coaching Loop (Before/After)

For each meaningful task:

- Draft prompt: your original request
- Upgraded prompt: tightened version with better structure
- Execution result: what was delivered
- Review: what improved and what to change next time

## 5-Point Prompt Quality Rubric

Score each category from 0 to 2.

- Context quality
  - 0: missing project context
  - 1: partial context
  - 2: clear project context, constraints, and relevant files
- Scope control
  - 0: broad or mixed goals
  - 1: one goal but fuzzy boundaries
  - 2: one clear goal with explicit boundaries
- Constraints and guardrails
  - 0: none provided
  - 1: some limits provided
  - 2: clear limits (do/don't, safety, style, time)
- Output format precision
  - 0: no format requested
  - 1: general format requested
  - 2: exact output structure requested
- Model and tool routing
  - 0: no routing guidance
  - 1: routing implied
  - 2: correct model/tool requested for task type

Total score: 0 to 10.

## First Live Sticker Quest Example

### Draft Prompt

"Implement the plan as specified, it is attached for your reference."

### Upgraded Prompt

"Implement the attached prompt-coaching plan end-to-end. Do not edit the plan file. Use the existing to-dos, mark each one in progress and then completed as work advances, and do not stop until all to-dos are complete. Deliverables: prompt playbook, reusable template, model-routing cheat sheet, cross-project profile block, and weekly scorecard inside `docs/`."

### Why The Upgrade Is Better

- Defines concrete deliverables
- Adds process constraints
- Removes ambiguity on completion criteria
- Prevents accidental edits to planning artifact

### Review Pattern

After execution, score the draft and upgraded versions with the 5-point rubric, then keep one improvement habit for the next task.

## One Habit Per Task Rule

Only keep one new habit each task. Example:

"Always include a definition of done."

Small repeated habits improve prompt quality faster than large checklists.

## Progress Tracking Rule

After each coached task:

1. Add one entry to `PROMPT_COACHING_LOG.md`.
2. Capture draft score, upgraded score, and one improvement habit.
3. Update `PROMPT_WEEKLY_SCORECARD.md` during weekly review.

## Session Start Reminder Rule

At the beginning of each meaningful Sticker Quest session:

1. Read the most recent coaching log entry.
2. Give a short "last session reminder" with:
   - Last draft score and upgraded score
   - One strength
   - One improvement focus for this session

## Session Close Scorecard Rule

At the end of each meaningful Sticker Quest session:

1. Give a short scorecard summary in chat.
2. Include:
   - Number of coached tasks this session
   - Average draft score
   - Average upgraded score
   - One thing done well
   - One thing to improve next session

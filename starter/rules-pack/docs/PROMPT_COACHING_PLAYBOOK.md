# Prompt Coaching Playbook

Use this during real work sessions so prompt quality improves without extra meetings.

## Default Operating Rule

Apply prompt coaching to all meaningful project tasks by default.
Skip only one-line factual questions where no implementation is requested.

## Coaching Loop

For each meaningful task:

1. Draft prompt (user version)
2. Upgraded prompt (assistant version)
3. Execution result
4. Review (what improved, what to improve next time)

## 5-Point Rubric (0-2 each)

- Context quality
- Scope control
- Constraints and guardrails
- Output format precision
- Model and tool routing

Total score: 0 to 10.

## Progress Tracking Rule

After each coached task:

1. Add an entry to `PROMPT_COACHING_LOG.md`.
2. Save one next habit.
3. Update `PROMPT_WEEKLY_SCORECARD.md` weekly.

## Session Start Reminder Rule

At the beginning of each meaningful session:

1. Read the latest entry in `PROMPT_COACHING_LOG.md`.
2. Provide a short reminder:
   - Last draft and upgraded scores
   - One strength to repeat
   - One improvement focus for the current session

## Session Close Scorecard Rule

At the end of each meaningful session:

1. Provide a short scorecard summary in chat.
2. Include:
   - Coached tasks count
   - Average draft and upgraded scores
   - One thing done well
   - One thing to improve next session

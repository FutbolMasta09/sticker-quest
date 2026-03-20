# Amber Next Session Test Plan

Purpose: keep the Fire HD test focused, fast, and loggable.

---

## Scope for this session

1. Verify the latest home layout and readability on Fire HD 10.
2. Re-run the core smoke flow with Amber.
3. Capture pass/fail and any blocker wording exactly.

Out of scope: new feature requests during test. Log those for later.

---

## Pre-test setup (5-10 minutes)

1. Confirm Fire HD 10 is charged and on stable Wi-Fi.
2. Open the latest test build path (Expo Go or backup APK).
3. Open these docs before the call:
   - `docs/TONIGHT_AMBER_TEST_RESULTS.md`
   - `docs/AMBER_TEST_HISTORY.md`
   - `docs/NEXT_TASK_TEST_GATE.md`

---

## Test flow (in order)

### A) Portrait/readability sanity pass

1. Open Home screen.
2. Check that content is single-column and readable top-to-bottom.
3. Confirm no clipped headers, no overlapping cards, no sideways/two-panel behavior.
4. Scroll from top to footer and confirm spacing and contrast are comfortable.

Pass = readable one-column flow with no clipping/overlap.
Fail = clipping, overlap, unreadable text, or layout confusion.

### B) Core smoke path

1. Home opens.
2. Quest opens.
3. Star result tap works.
4. Return to home works.
5. No freeze or red error.

### C) Persistence quick check

1. Close app fully.
2. Re-open app.
3. Confirm user state and star totals are still intact.

---

## Logging rules during the call

1. Record pass/fail for every step.
2. If anything fails, capture the first failing step and exact behavior wording.
3. Capture one qualitative quote from Amber about clarity/readability.
4. Update:
   - `docs/TONIGHT_AMBER_TEST_RESULTS.md` (session details + outcome)
   - `docs/AMBER_TEST_HISTORY.md` (one-row summary + next action)

---

## Done criteria

- Readability sanity pass completed.
- All 5 smoke checks marked pass/fail.
- Persistence check completed.
- Results and history docs updated.
- Next action decided (fix now vs schedule next session).

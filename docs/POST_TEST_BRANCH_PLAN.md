# Post-Test Branch Plan

Use this immediately after tonight's Amber test result.

---

## If test PASS

Priority order:

1. Finalize `docs/RELEASE_NOTES_DRAFT_2026-03-18.md` (mark verification complete).
2. Mark `docs/NEXT_TASK_TEST_GATE.md` as unblocked for major feature work.
3. Start next feature in this order:
   - math sticker wiring into quest flow
   - targeted UX polish based on Amber notes
   - small docs sync and patch notes update

---

## If test FAIL

Priority order:

1. Freeze major feature additions.
2. Open a focused bug-fix task for the first failing step only.
3. Re-run lint and local smoke checks after fix.
4. Schedule a short re-test with Amber (10-20 min follow-up window).
5. Append failure details to `docs/AMBER_TEST_HISTORY.md`.

---

## If test is PARTIAL (setup consumed most of session)

1. Log which steps were completed.
2. Keep gate status as pending.
3. Schedule a follow-up quick smoke session (10-20 min) to finish remaining steps.
4. Record setup blocker in `docs/AMBER_TEST_HISTORY.md`.

---

## Communication closeout line

"Thanks, this gave us exactly what we needed. I will either ship forward from this pass, or fix the first failing step and bring back a short re-test."

# Amber Recurring Test Packet

Purpose: reusable checklist for every Amber remote Fire HD test session.

---

## Time box

- Planned total: 25-40 minutes
- Hard minimum validation path: 12-18 minutes

---

## Session objective

Validate current Fire HD confidence in this order:

1. Tutorial flow sanity pass (first-run guidance appears and is usable)
2. Visual decoration sanity pass (colorful/cartoon readability and clarity)
3. Core smoke flow (home -> quest -> star tap -> home)
4. Persistence quick check (close/reopen keeps state)

---

## Pre-call checklist (Ryan)

- Start test session in tunnel mode so Amber can open remotely:
  - `npx expo start --tunnel`
- Copy the Expo link from terminal output and send it to Amber.
- Confirm backup path status:
  - Is preview APK install link ready? (yes/no)
- App/build is ready before call starts.
- `docs/AMBER_REMOTE_TEST_RUNBOOK.md` open for reference.
- `docs/TONIGHT_AMBER_TEST_RESULTS.md` open for live notes.
- `docs/AMBER_TEST_HISTORY.md` open for final summary row.
- `docs/BACKUP_APK_PLAN.md` open for fallback decision.
- Keep scope to the required validation path first (tutorial + decoration/readability + smoke + persistence); extras only if time remains.

---

## Message to send Amber before test

"Thanks again for helping with this test. I have a short session ready.
Plan is 25-40 minutes total, but the critical validation path is only about 12-18 minutes.
If setup takes longer than expected, we will run only the quick smoke path and stop there.
This build is intentionally barebones right now so we can test the core flow first; more content and polish are planned next."

---

## Live call script (what to say, in order)

1. "We are doing a short confidence pass first: tutorial, decoration/readability, quick flow, then reopen check."
2. "Quick context before we start: this is Libby's app first, and this version is intentionally barebones so we can validate the foundation before polish."
3. "Open the test link in Expo Go and tell me when you see the main home screen."
4. "Do you see the tutorial guidance and does it feel easy to follow?"
5. "Before tapping anything else, does the screen feel colorful, clear, and easy to read in one column?"
6. "Tap one quest card."
7. "Tap one of the star result buttons."
8. "Tell me if it returns to home and still feels responsive."
9. "Now close the app and reopen it. Are your stars and progress still there?"
10. "If anything looks wrong, stop and describe exactly what you saw."

Decision point:
- If app is not open by minute 10, stop and switch to backup plan decision.
- If backup link is unavailable, end setup attempt and schedule follow-up install session.

Assumption for this session:
- Amber likely does not have Expo Go preinstalled. Start with primary path, but be ready to switch quickly.

---

## Feedback questions (after pass/fail checks)

Ask these after pass/fail checks are done:

1. "As Libby's mom, from what you just saw, do you think Libby would enjoy this daily?"
2. "Did the tutorial make the first steps clear, or did anything feel confusing?"
3. "Do the colors and character style feel fun and kid-friendly, or still too plain?"
4. "As a daycare owner, do you think other parents would pay for something like this once it is fully built?"
5. "What would need to improve first before you would confidently recommend it?"
6. "Anything you expected to see that is not here yet?"

Note to Ryan:
- Record exact words where possible, not paraphrases.
- Keep positioning clear: this is Libby's app first; market potential is a secondary validation layer.

---

## Pass/fail call

- Pass: tutorial sanity pass + decoration/readability sanity pass + all 5 smoke checks + persistence check pass.
- Fail: any required step fails, freezes, or throws runtime error.

If fail:
- stop feature work
- log exact failing step and wording
- schedule focused fix next session

If pass:
- mark test gate complete
- release notes can be finalized
- next major feature work is unblocked

---

## Official "test complete" definition

Only mark this session as complete when:

1. Amber successfully opens the app on Fire HD from the shared test link.
2. Tutorial sanity pass is marked pass/fail.
3. Decoration/readability sanity pass is marked pass/fail.
4. All 5 smoke checks are marked in `docs/TONIGHT_AMBER_TEST_RESULTS.md`.
5. Persistence check is marked pass/fail.
6. Final outcome is set to PASS or FAIL.
7. A concrete next action is recorded at the bottom of results.
8. Delivery path used is recorded (Primary or Backup).

# Tonight Amber Test Packet

Purpose: make tonight's remote test session fast, calm, and easy to run.

---

## Time box

- Planned total: 35-50 minutes
- Hard minimum smoke path: 10-15 minutes

---

## Session objective

Validate the core quest return flow after lint/hook stabilization:

1. Home opens
2. Quest opens
3. Star result tap works
4. Return to home works
5. No freeze or red error

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
- `docs/BACKUP_APK_PLAN.md` open for fallback decision.
- Keep scope to smoke test first; extras only if time remains.

---

## Message to send Amber before test

"Thanks again for helping tonight. I have a short test ready.
Plan is 35-50 minutes total, but the critical smoke test is only about 10-15 minutes.
If setup takes longer than expected, we will run only the quick smoke path and stop there.
This build is intentionally barebones right now so we can test the core flow first; more content and polish are planned next."

---

## Live call script (what to say, in order)

1. "We are only checking a quick core path first."
2. "Quick context before we start: this is Libby's app first, and this version is intentionally barebones so we can validate the foundation before polish."
3. "Open the test link in Expo Go and tell me when you see the main home screen."
4. "Tap one quest card."
5. "Tap one of the star result buttons."
6. "Tell me if it returns to home and still feels responsive."
7. "If anything looks wrong, stop and describe exactly what you saw."

Decision point:
- If app is not open by minute 10, stop and switch to backup plan decision.
- If backup link is unavailable, end setup attempt and schedule follow-up install session.

Assumption for tonight:
- Amber likely does not have Expo Go preinstalled. Start with primary path, but be ready to switch quickly.

---

## Feedback questions (after smoke test)

Ask these after pass/fail checks are done:

1. "As Libby's mom, from what you just saw, do you think Libby would enjoy this daily?"
2. "What was her strongest moment, and what felt confusing or less engaging?"
3. "As a daycare owner, do you think other parents would pay for something like this once it is fully built?"
4. "What would need to improve first before you would confidently recommend it?"
5. "Anything you expected to see that is not here yet?"

Note to Ryan:
- Record exact words where possible, not paraphrases.
- Keep positioning clear: this is Libby's app first; market potential is a secondary validation layer.

---

## Pass/fail call

- Pass: all 5 smoke checks pass with no freeze/error.
- Fail: any step breaks, freezes, or throws a runtime error.

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

Only mark tonight as complete when:

1. Amber successfully opens the app on Fire HD from the shared test link.
2. All 5 smoke checks are marked in `docs/TONIGHT_AMBER_TEST_RESULTS.md`.
3. Final outcome is set to PASS or FAIL.
4. A concrete next action is recorded at the bottom of results.
5. Delivery path used is recorded (Primary or Backup).

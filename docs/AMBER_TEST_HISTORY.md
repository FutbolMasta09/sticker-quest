# Amber Test History

Purpose: persistent record of remote Fire HD test outcomes, blockers, and follow-up actions.

Use this to improve future test prep and estimate time accurately.

---

## Session Log

| Date | Session type | Delivery path | Duration | Outcome | First failing step | Top blocker | Next action |
|---|---|---|---|---|---|---|---|
| 2026-03-21 | Second test — visual polish | Backup APK | *(fill if known)* | PASS | n/a | None | Tutorial read-aloud, floor vs carpet, more colors/decorations |
| 2026-03-18 | Remote smoke test (live) | Backup APK | 90 min total (distraction-heavy) | PASS | n/a | Expo tunnel/ngrok failed (`Cannot read properties of undefined (reading 'body')`) | Execute Amber feedback build sequence: tutorial V1 -> more colorful/cartoon visual pass -> stars emphasis -> onboarding wording cleanup -> Fire HD re-test prep |

---

## What to capture every time

1. Delivery path used (Primary Expo Go or Backup APK).
2. Setup time vs test time.
3. First failing step if any.
4. Exact blocker wording (network, install, route, freeze, etc.).
5. What changed before next attempt.

---

## Prep improvements backlog

- [ ] Confirm Expo Go availability on Amber's Fire HD before test day.
- [ ] Pre-stage backup install path for sessions where tunnel fails.
- [ ] Track average setup time over 3 sessions and update runbook estimates.

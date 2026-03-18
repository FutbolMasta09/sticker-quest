# Tech Debt Quick Wins (No-Device Window)

Purpose: safe polish tasks while Fire HD testing is pending.

---

## Do now (low risk)

- Consolidate repeated copy constants used across celebration screens.
- Add small shared helper for feedback/release-note timestamps.
- Improve file-level comments in complex animation files for maintainability.
- Replace broad `any` types in non-critical utility/components where obvious.
- Document "known test coverage gaps" near modified flows.

---

## Wait until device test passes

- Any visual or interaction behavior changes.
- Animation tuning that affects pacing.
- Quest routing logic updates.
- Store logic changes tied to session lock or progression.

---

## Definition of done for each quick win

1. Lint stays clean.
2. No behavior change intended.
3. One-sentence note added to release notes or patch notes.

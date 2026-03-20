# Next Task Test Gate

Purpose: allow progress while protecting quality when Fire HD testing is pending.

---

## Current gate status

- Code quality: lint clean
- Device verification: pass (Fire HD + Amber remote test complete)
- Release confidence: smoke test passed (backup APK path)

---

## Next build policy

- Allowed now:
  - Tutorial V1 (first-run guidance, skippable)
  - Color + cartoon visual pass (high-saturation palette and playful UI polish)
  - Star motivation emphasis (clear earned-state feedback)
  - Onboarding copy simplification (faster parent setup)
  - Fire HD readability/contrast pass after visual updates
- Hold until Tutorial + visual pass are complete:
  - large navigation rewires unrelated to onboarding or quest loop
  - nonessential feature expansion outside Phase 1 priorities

---

## Ready-to-run smoke test gate

The following must pass before next major feature work:

1. Home loads
2. Quest opens
3. Star result is selectable
4. Return to home succeeds
5. No red errors/freeze

If all 5 pass, unblock next major feature task.

Gate result:
- ✅ All 5 smoke checks passed with Amber on Fire HD.
- ✅ Persistence check passed: close/reopen returned to home with star count intact.
- Next major feature task is unblocked and prioritized by Amber feedback.

---

## Next implementation sequence (locked)

1. Tutorial V1: 3-step first-run guide (`Pick a quest` -> `Do movement` -> `Earn stars`) with Skip/Got it.
2. Color/cartoon pass: increase color richness and kid-friendly visual cues across onboarding + home + quest cards.
3. Star emphasis polish: make star gain and total-star feedback more visually obvious.
4. Onboarding wording cleanup: keep labels plain and fast for parent completion.
5. Re-test prep: run a quick Fire HD sanity pass focused on readability and flow confidence.

Reference files for tonight:
- `docs/TONIGHT_AMBER_TEST_PACKET.md`
- `docs/TONIGHT_AMBER_TEST_RESULTS.md`
- `docs/POST_TEST_BRANCH_PLAN.md`
- `docs/AMBER_NEXT_SESSION_TEST_PLAN.md`

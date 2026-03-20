# Model Doc Rollout Checklist

Purpose: ensure Cursor model/mode routing docs are present across current and future projects.

## Current repo (Sticker Quest)

- [x] `docs/CURSOR_MODEL_AND_MODE_REFERENCE.md` exists and is up to date.
- [x] Billing period + reset date recorded.
- [x] Usage pools + fallback plans documented.
- [x] Session protocol contains reset-day refresh instruction.

## Current external projects (manual rollout)

For each active repo outside this workspace (for example: inkborne-native), do:

1. Copy in `CURSOR_MODEL_AND_MODE_REFERENCE_TEMPLATE.md`.
2. Rename to `CURSOR_MODEL_AND_MODE_REFERENCE.md`.
3. Fill activated models + billing cycle + usage table.
4. Add a line in that repo's patch notes indicating rollout complete.

## Future projects (automatic via rules-pack)

- [x] `scripts/build-rules-pack.js` copies `CURSOR_MODEL_AND_MODE_REFERENCE_TEMPLATE.md`.
- [ ] At new-repo setup, convert template into a project-specific reference and fill billing data.

## Verification cadence

- Weekly: verify usage status table accuracy.
- Billing reset day: refresh exhausted model flags and next reset date.

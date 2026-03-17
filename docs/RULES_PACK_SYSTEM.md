# Rules Pack System (Reusable Across Projects)

This project now has a reusable rules pack so your standards can improve over time and carry into new app/game repositories.

## Single source of truth
- Source rules live in this repo at `.cursor/rules/`:
  - `workflow-rulesheet.mdc`
  - `coding-standards-general.mdc`
  - `communication-style-general.mdc`
  - `forecasting-loop.mdc`
  - `question-translator.mdc`
  - `beginner-assist-mode.mdc`
- Source starter guide lives at:
  - `docs/STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md`

## Build the pack
- Command: `npm run rules:pack:build`
- Output location:
  - `starter/rules-pack/.cursor/rules/`
  - `starter/rules-pack/docs/`

Run this whenever you update any of the source rules or starter guide.

## Install into a new project
- Command:
  - `npm run rules:pack:install -- "C:\path\to\new-project"`
- This copies:
  - all pack `.mdc` files into the target project's `.cursor/rules/`
  - the starter guide into the target project's `docs/`

## Ongoing update loop
1. Improve the source rules in this repo as you learn.
2. Rebuild the pack.
3. Reinstall into active/new projects as needed.

This gives practical "infinite carry-over": each project starts from your latest baseline, and the baseline keeps getting better.

---

## Rule Upgrade Pass (run at every phase milestone)

After completing a phase milestone, spend 15 minutes tightening your rules before moving on.

### Step 1 — Review what hurt
- Open `LESSONS_LEARNED.md` and scan for any entries added since the last upgrade pass.
- Open `docs/POSTMORTEM_TEMPLATE.md` and check for any completed postmortems.
- Ask: is there a repeating pattern that a rule would have prevented?

### Step 2 — Tighten or add a rule
- If yes: either update an existing `.mdc` rule file or create a new one in `.cursor/rules/`.
- Keep rules short. One concern per file. Under 50 lines is ideal.
- If no pattern is clear, skip this step — do not add rules for the sake of adding rules.

### Step 3 — Rebuild and reinstall
- Run: `npm run rules:pack:build`
- If any active projects exist besides the current one: run the install script for each.
- Confirm the new pack is in `starter/rules-pack/`.

### Step 4 — Log the upgrade
- Add a brief note to `PATCH_NOTES.md`: "Rule upgrade pass — [what changed, or 'no changes needed']."

### When NOT to run an upgrade pass
- Mid-phase (unless a critical bug just hit and a rule would prevent recurrence)
- For content-only sessions (JSON, audio scripts, markdown)
- More than once per milestone — one pass per milestone is enough

---

## What is in the pack (current)

| File | Type | Purpose |
|---|---|---|
| `workflow-rulesheet.mdc` | Rule | Session start / update / close skeleton |
| `coding-standards-general.mdc` | Rule | Safe change rules, quality checks, git hygiene |
| `communication-style-general.mdc` | Rule | Plain-language explanations, 3-step instructions |
| `definition-of-done.mdc` | Rule | Universal feature completion checklist |
| `health-check.mdc` | Rule | Periodic project health prompt |
| `forecasting-loop.mdc` | Rule | Milestone safe-vs-actual forecasting updates |
| `question-translator.mdc` | Rule | Translates broad questions into clear options |
| `beginner-assist-mode.mdc` | Rule | Beginner-friendly language and action format |
| `STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md` | Doc | How-to guide for reusing the pack in new projects |
| `ROADMAP_TIMELINE_TEMPLATE.md` | Doc | Roadmap tracker template auto-installed in new projects |
| `ESTIMATION_RETROSPECTIVE_TEMPLATE.md` | Doc | Milestone estimate accuracy log with capability factors |
| `FORECAST_BASELINES_TEMPLATE.md` | Doc | Reusable multipliers for future project forecasting |
| `ASK_TEMPLATE.md` | Doc | Copy/paste prompts for generalized or unclear questions |
| `STRATEGY_HORIZONS.md` | Doc | Short-, medium-, and long-term planning structure |
| `PLANNING_CADENCE.md` | Doc | Weekly/milestone/monthly planning rhythm |

---

## Roadmap Tracker — Default Behavior

The roadmap tracker is installed in **every new project by default** when you run the install script.

- The template file `ROADMAP_TIMELINE_TEMPLATE.md` is included in the pack.
- On install, it lands in the new project's `docs/` folder as `ROADMAP_TIMELINE.md` (ready to fill in).
- If `ROADMAP_TIMELINE.md` already exists in the target project, the installer will not overwrite it — it writes a `.template.md` copy instead so nothing is lost.

### How to fill in the roadmap on a new project

**Step 1 — Fill in Section A (Day 1 snapshot) on day one.**
Note what screens exist, what features work, what content is in place, and what blockers are present.

**Step 2 — Fill in Section B (Master Timeline) before you start building.**
Define your phases, targets, and key deliverables. Keep it realistic.

**Step 3 — Update Section C (Progress Tracker) at every milestone.**
The session-close workflow will remind you. Mark items done, note actual dates, and flag any slip.

### Update cadence
- **Every milestone:** mark completed items, update Pace Check, note any slippage
- **Every phase completion:** set phase status to COMPLETE, record actual date, run postmortem and rule upgrade pass
- **Never delete old entries** — mark them done or note the slip instead. The history is the point.

---

## Forecasting System — Default Behavior

The forecasting docs are also installed in every new project by default:

- `docs/ESTIMATION_RETROSPECTIVE.md`
- `docs/FORECAST_BASELINES.md`

Use them to compare safe plan vs actual plan and improve future estimates.

At each milestone:
1. Log target vs actual date and delta in `ESTIMATION_RETROSPECTIVE.md`.
2. Score capability factors (Cursor assist, Ryan familiarity, scope clarity, unknowns, content readiness, test friction).
3. Update multipliers in `FORECAST_BASELINES.md` only when a repeated pattern appears.

This creates a practical forecasting memory across projects while keeping updates lightweight.

---

## Beginner Assist System — Default Behavior

The beginner-assist layer is installed in every new project by default:

- `.cursor/rules/question-translator.mdc`
- `.cursor/rules/beginner-assist-mode.mdc`
- `docs/ASK_TEMPLATE.md`

Use this system when questions are broad, uncertain, or missing technical terms.

At runtime, the assistant should:
1. Translate likely intent into 2-3 clear paths.
2. Recommend one path with plain-language reasoning.
3. Ask only 1-2 critical follow-up questions when needed.

---

## Multi-Horizon Strategy Docs — Default Behavior

Each new project also receives:

- `docs/STRATEGY_HORIZONS.md`
- `docs/PLANNING_CADENCE.md`

Use these to keep short-term execution aligned with medium- and long-term goals without adding heavy process overhead.

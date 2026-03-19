# Monday API Cap Check-In Script (3 Minutes)

Use this at the start of each Monday session until API reset.

## Step 1 - Snapshot (30 seconds)

Read and fill:
- API usage status:
- Auto+Composer usage status:
- Reset date remaining:

Decision note:
- If API is still capped, continue cap mode.
- If API has reset, exit cap mode and restore normal routing.

## Step 2 - Quality Pulse (60 seconds)

Answer Yes or No:
1. Did last week introduce any new crash or freeze regressions?
2. Did we keep lint clean on changed files?
3. Did at least one device verification pass after major changes?
4. Did the same bug fail more than two focused attempts without new evidence?

Interpretation:
- If any answer is No in 1 to 3, quality risk is active.
- If answer 4 is Yes, debugging approach must tighten before adding new scope.

## Step 3 - Throughput Pulse (45 seconds)

Fill:
- Weekly planned objectives count:
- Weekly completed objectives count:
- Completion rate:

Rule:
- If completion rate is under 60 percent, reduce scope.
- If completion rate is 60 to 74 percent, hold scope and tighten process.
- If completion rate is 75 percent or higher with stable quality, continue pace.

## Step 4 - Decision Gate (30 seconds)

Choose exactly one:

### A) Pace More
Use when quality risk is active or completion is under 60 percent.
Actions:
- Cut this week to one must-ship technical objective.
- No parallel feature work.
- Require runtime evidence before each additional edit batch.

### B) Upgrade Plan
Use when quality is mixed and completion is 60 to 74 percent.
Actions:
- Keep the same scope, but split tasks into smaller slices.
- Add explicit pass/fail verification per slice.
- Limit each session to one core technical objective.

### C) Keep Moving
Use only when quality is stable and completion is 75 percent or higher.
Actions:
- Continue current pace.
- Keep one validated increment per session.
- Re-check this gate next Monday.

## Step 5 - Week Lock (15 seconds)

Write:
- This week's mode: Pace More / Upgrade Plan / Keep Moving
- This week's one must-ship objective:
- This week's carry-forward risk to monitor:

## Copy Block for PATCH_NOTES

Paste this each Monday after running the gate:

```
### Monday API Cap Check-In
- API status: [capped/reset]
- Auto+Composer status: [usage snapshot]
- Quality pulse: [stable/risk]
- Completion rate: [x%]
- Weekly mode selected: [Pace More / Upgrade Plan / Keep Moving]
- Must-ship objective: [one objective]
- Risk to monitor: [one risk]
```

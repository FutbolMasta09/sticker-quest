# Forecast Baselines

This file stores your reusable forecasting multipliers for future projects.
Update after each milestone using evidence from `ESTIMATION_RETROSPECTIVE.md`.

## Forecast Formula (simple)

`forecast_days = safe_plan_days * complexity_multiplier * unknowns_multiplier * test_multiplier * capability_adjustment`

Keep this practical. Use ranges and revise over time.

## Baseline Multipliers

| Work Type | Baseline Multiplier | Confidence | Notes |
|---|---:|---|---|
| Content-only sprint (JSON/audio scripts/docs) | 0.8 | Medium | Usually faster and more predictable |
| UI feature with existing patterns | 1.0 | Medium | Baseline assumption |
| New state/store behavior | 1.2 | Low | Higher regression risk |
| Navigation/animation changes | 1.3 | Low | Hidden edge cases common |
| Skia rendering work | 1.4 | Low | Device-specific issues likely |
| Camera/motion verification | 1.6 | Very low | High unknowns and device variance |

## Capability Adjustment Guide

| Factor | Condition | Adjustment |
|---|---|---:|
| Cursor assist | High effectiveness this phase | -0.1 |
| Cursor assist | Low effectiveness this phase | +0.1 |
| Ryan familiarity | Similar work done before | -0.1 |
| Ryan familiarity | First time in this domain | +0.2 |
| Scope clarity | Well-defined acceptance criteria | -0.1 |
| Scope clarity | Ambiguous requirements | +0.2 |
| Test friction | Reliable device test setup | -0.1 |
| Test friction | Frequent device/setup blockers | +0.2 |

## How To Use

1. Start with safe-plan duration.
2. Apply work-type multiplier.
3. Apply capability adjustments based on recent retrospectives.
4. Use the result as your "actual forecast" date.
5. Keep both safe and actual forecasts in roadmap docs.

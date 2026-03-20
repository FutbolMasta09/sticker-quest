---
title: Cursor models and modes reference (template)
purpose: Reusable per-repo guide for model selection, chat modes, usage pools, and fallback routing
owner: [Project owner]
maintenance: Update usage table when models hit limits; refresh on billing reset date
---

# Cursor model and mode reference (template)

## Chat modes

| Mode | Use when |
|------|----------|
| Agent | You want file edits and execution |
| Ask | You want read-only guidance |
| Plan | You want tradeoffs and sequencing before coding |

## Routing modes

| Mode | Use when | Cost note |
|------|----------|-----------|
| Auto | Everyday coding and chat | Uses Auto + Composer pool |
| Premium | Hard tasks where best quality matters | Uses API pool |
| Max mode | Large context tasks (multi-file, long logs) | Higher cost multiplier |
| Use multiple models | High-stakes prompts; compare outputs | Parallel usage, higher burn |

## Billing cycle

- Included usage period: [YYYY-MM-DD to YYYY-MM-DD]
- Next reset: [YYYY-MM-DD]

Reset-day actions:
1. Mark exhausted models usable again if dashboard confirms reset
2. Update next reset date
3. Log refresh in patch notes

## Activated models

| Model | Status | Pool | Notes |
|------|--------|------|-------|
| [Example] Composer 2 | Active | Auto + Composer | |
| [Example] Sonnet | Active / Exhausted | API | |

## Usage status

| Model | Currently usable? | Pool | Notes |
|------|------------------|------|-------|
| [Model A] | Yes/No | API | |

## Fallback routing

| If unavailable | Try in this order |
|----------------|-------------------|
| Sonnet | Composer 2 -> Opus -> GPT |
| API pool exhausted | Composer 2 / Auto only |

## Cost tiers

| Tier | Models |
|------|--------|
| Budget | [models] |
| Mid | [models] |
| Premium | [models] |

## Related files

- `.cursor/rules/model-routing.mdc`
- `.cursor/rules/session-protocol.mdc`
- `docs/REPO_INDEX.md`

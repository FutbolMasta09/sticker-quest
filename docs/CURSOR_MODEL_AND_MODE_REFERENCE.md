---
title: Cursor — models, chat modes, and tools (Ryan reference)
purpose: One place to pick the right model + mode for Sticker Quest and Inkborne work
owner: Ryan
maintenance: Update Usage status when models hit limits; refresh on billing reset date (see below)
---

# Cursor model & mode reference

## Important disclaimer

**Cursor changes model names and plan tiers often.** This file gives **how to choose**, not a guaranteed list of every name on your subscription today.

**Action:** Once in a while, open **Cursor Settings → Models** (or the model picker dropdown) and paste **your visible model list** into [Your plan snapshot](#your-plan-snapshot) below. That keeps AI recommendations aligned with what you actually have.

---

## Chat modes (Agent · Ask · Plan)

These are **how** the AI is allowed to work in the chat, not which LLM runs.

| Mode | What it does | When to use it |
|------|----------------|----------------|
| **Agent** | Can **edit files**, run tools, use terminal (when enabled), apply multi-step changes | **Default for build work** — features, fixes, refactors, doc updates in-repo |
| **Ask** | **Read-only** guidance — explains, searches mentally, suggests; **won't** change your project from that chat | **Learning, strategy questions, "what should I do?"** without risking accidental edits |
| **Plan** | **Plan-first** — breaks work into steps, surfaces tradeoffs before (or instead of) large edits | **Big decisions, multi-file scope, "don't code yet"** — reduces thrash |

**Rule of thumb**

- **Ask** → understand safely  
- **Plan** → decide the sequence  
- **Agent** → execute  

For Sticker Quest: quick questions can stay **Ask**; session-start checklist + real changes → **Agent**.

---

## Cursor Pro tools (not the same as "model")

| Tool | When | Ryan action |
|------|------|-------------|
| **Debug with AI** | Red error in terminal, crash, freeze | Use the **Debug** button next to the error so context is bundled (don't paste by hand if the button exists) |
| **@Codebase** | "Where is X?" across the repo | Type `@Codebase` + question; pair with **Gemini Flash** when you want speed |
| **Background Agent** | Huge multi-file task | Only when you'll **review diffs** before trusting |
| **Review Changes** | Before commit / push | Source Control → **Review with AI** on the diff |
| **Cursor Tab** | Autocomplete while typing | Tab to accept ghost text |

Full detail: `.cursor/rules/cursor-pro-tools.mdc`

---

## Model picker — Sticker Quest routing (this repo)

These are **project defaults** from `.cursor/rules/model-routing.mdc`. **API cap window** may restrict premium models — see that file for dates.

### Composer (your primary Cursor pair)

| Model | Use when |
|-------|-----------|
| **Composer 2.0** | Planning, governance, architecture, multi-step refactors, long writeups, decision docs |
| **Composer 1.5** | Short edits, quick checklist updates, fast status, "one small change" |

**Default for "next message" in this project:** **Composer 2.0** unless the task is clearly tiny — then **Composer 1.5**.

### Other Cursor models (when available on your plan)

| Task type | Suggested model | Why |
|-----------|-----------------|-----|
| RN / Skia / hooks / stores | **Claude Sonnet** (if on picker) | Strong UI + code taste |
| Hardest bugs / deep architecture | **Claude Opus** (if on picker; confirm overage if cap applies) | Heaviest reasoning |
| Repo-wide "where is / how does" | **Gemini Flash** | Fast librarian-style search with @Codebase |
| Image assets (future) | **Gemini** (image) | Visual generation when you add that pipeline |

### External (not Cursor)

| Task | Tool | Model |
|------|------|--------|
| Huge JSON, lore batches, long scripts | **Claude Code Desktop** at all times; **claude.ai** only if unavailable, other device, or clean-slate (Claude Pro) | **Opus** for consistency; Claude Code reads project files and writes directly; respect off-peak 2x |

---

## Routing modes (Auto, Premium, Max, Use multiple models)

These are **how** Cursor selects or uses models — not the same as picking a specific model.

| Mode | What it does | When to use it |
|------|----------------|----------------|
| **Auto** | Cursor picks a model balancing intelligence, cost, and reliability for each request | **Default for everyday work** — cost-efficient, good for most tasks; uses Auto + Composer pool |
| **Premium** | Cursor picks the most capable model for each request (from internal benchmarks) | **Complex tasks** — hard bugs, big refactors, architecture decisions; uses API pool at selected model's rate |
| **Max mode** | Extends context window to the model's maximum (e.g. 1M tokens); higher read limits per call | **Large refactors, multi-file reasoning, repo-wide analysis** — when you need more code in context; adds 1.2x cost multiplier |
| **Use multiple models** | Sends the same prompt to **multiple models in parallel** (Best of N); you compare results | **High-stakes or uncertain tasks** — when you want several opinions before committing; requires single-folder workspace |

**Notes:**
- **Auto** — Best when you don't need a specific model; stretches usage.
- **Premium** — Burns API pool faster; use when quality matters more than cost.
- **Max mode** — Turn on only when the task genuinely needs more context (long files, cross-file edits); cost adds up.
- **Use multiple models** — Not available in multi-root workspaces; enable per query when you want to compare outputs.

---

## End-of-response habit (for this project)

At the end of substantive replies, the assistant should end with:

```text
---
**Reasoning for next model:**
[Why this choice fits your *next* message]

**Next mode:** Agent | Ask | Plan — [one line]
**Next model:** Composer 2.0 | Composer 1.5 | … — [one line]
**External model (if applicable):** [tool] → [model] — [one line]
```

You can paste this block back if Cursor ever skips it — or say **"use the footer from CURSOR_MODEL_AND_MODE_REFERENCE."**

---

## Your plan snapshot

**Updated:** 2026-03-21

### Billing cycle reset date

**Included usage period:** Mar 16, 2026 – Apr 16, 2026  
**Next reset:** Apr 16, 2026 *(from [Cursor usage dashboard](https://cursor.com/dashboard/usage))*

**AI instruction — refresh on reset:** When the entry checklist runs and **today's date matches or has passed** the billing reset date above, refresh this doc:
1. Mark all models in the Usage status table as **Yes** (usable)
2. Clear any "Usage exhausted" notes from the activated models table
3. Update **Next reset** to the new cycle date from the dashboard
4. Mention the refresh in `PATCH_NOTES.md`

---

### Currently activated models

| Model | Status | Pool |
|-------|--------|------|
| Premium | Active | API (selects from premium models) |
| Composer 2 Fast | Active | Auto + Composer |
| Composer 1.5 | Active | API |
| GPT-5.3 Codex | Active | API |
| GPT-5.4 | Active | API |
| GPT-5.4 Nano | Active | API |
| GPT-5 Mini | Active | API |
| Sonnet 4.6 | **Usage exhausted** | API |
| Opus 4.6 | Active | API |
| Gemini 3 Pro | Active | API |
| Gemini 3.1 Pro | Active | API |
| Gemini 3 Flash | Active | API |

---

### Usage pools (which models share the same budget)

| Pool | Models in this pool | Resets |
|------|---------------------|--------|
| **Auto + Composer** | Auto, Composer 2, Composer 2 Fast | Monthly with plan |
| **API** | Sonnet, Opus, GPT-5.x, Gemini 3.x, Composer 1.5, Premium (when it picks API models) | Monthly with plan |

When **API pool** is depleted, all API-pool models become unavailable until reset. **Auto + Composer** has a separate limit — you can still use Composer 2 / Auto even when API is exhausted.

---

### Usage status (billing cycle)

**Update this table when models hit usage limits** so AI recommendations stay accurate.

| Model | Currently usable? | Pool | Notes |
|-------|------------------|------|-------|
| Sonnet 4.6 | No | API | Usage exhausted |
| Opus 4.6 | Yes | API | |
| GPT-5.4 | Yes | API | |
| GPT-5.4 Nano | Yes | API | Budget tier |
| GPT-5.3 Codex | Yes | API | |
| GPT-5 Mini | Yes | API | Budget tier |
| Composer 2 / 2 Fast | Yes | Auto + Composer | |
| Composer 1.5 | Yes | API | |
| Gemini 3 Pro | Yes | API | |
| Gemini 3.1 Pro | Yes | API | (Gemini Pro sub connected) |
| Gemini 3 Flash | Yes | API | |
| Premium | Yes* | API | *Fails when API pool exhausted |

---

### Backup plans (when primary model is unavailable)

Use this when recommending models — **never suggest a model marked unusable** in the table above.

| If this is unavailable | Use instead (in order of preference) |
|------------------------|--------------------------------------|
| **Sonnet 4.6** | Composer 2 → Opus 4.6 → GPT-5.4 → GPT-5.3 Codex |
| **Opus 4.6** | Composer 2 → GPT-5.4 → Sonnet 4.6 (if usable) |
| **Composer 2 / 2 Fast** | Composer 1.5 → Opus 4.6 → GPT-5.4 |
| **GPT-5.4** | Composer 2 → GPT-5.3 Codex → Opus 4.6 |
| **Gemini 3 Flash** | Composer 2 → GPT-5.4 Nano → GPT-5 Mini |
| **API pool fully exhausted** | Composer 2 or Auto only (Auto + Composer pool) |

**Budget-conscious fallbacks** (when conserving API pool): GPT-5.4 Nano, GPT-5 Mini, Gemini 3 Flash.

---

### Cost tier (for recommendation when conserving)

| Tier | Models |
|------|--------|
| **Budget** | GPT-5.4 Nano, GPT-5 Mini, Gemini 3 Flash, Composer 2 |
| **Mid** | Composer 1.5, GPT-5.3 Codex, Gemini 3 Pro |
| **Premium** | Sonnet 4.6, Opus 4.6, GPT-5.4 |

When API pool is low, prefer **Budget** or **Composer 2** (Auto + Composer pool) to stretch the month.

---

### Notes

- Keep model set curated to reduce picker clutter.
- Use heavy models (Opus, GPT-5.4) intentionally for hard problems only.
- Check [Cursor usage dashboard](https://cursor.com/dashboard/usage) to see pool status and exact reset date.

---

## Related files

| File | Role |
|------|------|
| `.cursor/rules/model-routing.mdc` | Cap window + routing table (source of truth for AI behavior) |
| `.cursor/rules/cursor-pro-tools.mdc` | Debug, @Codebase, agents, review |
| `.cursor/rules/session-protocol.mdc` | Entry step 4e: Cursor model doc refresh on billing date |
| `docs/SOLO_PRO_OPERATING_SYSTEM.md` | Weekly discipline (separate from tooling) |

---

*Doc version: 1.3 — 2026-03-21*

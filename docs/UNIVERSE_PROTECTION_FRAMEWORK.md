---
title: Universe Protection Framework
purpose: Cross-project legal, ethical, and business guardrails for the Inkborne universe and Sticker Quest
owner: Ryan
status: Draft v1 — first pass 2026-03-20
applies_to: Sticker Quest, inkborne-native, The Anchor's Desk, and future Inkborne-branded projects
---

# Universe Protection Framework

## What this is

A single baseline so **every** project in the Inkborne universe ships with honest claims, safe data posture, clear AI transparency, and defensible IP — without rewriting policy per repo.

**Not legal advice.** Use this as an internal checklist; a lawyer reviews before public launch, paid beta expansion, or school sales.

---

## Core principles (non-negotiable)

1. **No false precision** — Never claim the product measures something it cannot verify (speech quality, "true mastery," reading proof without parent confirmation, etc.). Sticker Quest already encodes this in product rules; extend the same discipline to Inkborne.

2. **Parent / player is the authority** — Apps are tools; humans make the final call on progression, suitability, and meaning.

3. **Collect only what you need** — Default: local-first for child/play state unless a feature explicitly requires sync and you document why.

4. **AI is disclosed, not hidden** — Any AI-generated surface that could be mistaken for human-curated or "verified truth" carries clear disclosure appropriate to the platform and audience.

5. **Secrets never ship in clients** — API keys and service credentials are server-side or build-time CI only; client bundles are assumed hostile-read.

6. **Trademarks are checked before brand lock** — Names, series titles, and mascot names get a documented search pass before marketing spend.

---

## Project-type gates

Use these as **stop/go** checkpoints. A "fail" means fix before the next milestone.

### Gate A — Internal / family build

- [ ] No production secrets in repo or client
- [ ] Crash or error text contains no secret tokens
- [ ] Privacy posture documented (even if "local only")

### Gate B — Closed beta (friends, small list)

- [ ] Gate A complete
- [ ] AI disclosure present wherever AI output appears as primary content
- [ ] Data collection inventory written (what leaves the device, to where)
- [ ] Beta feedback channel defined; no promise of feature parity or persistence

### Gate C — Open beta / public soft launch

- [ ] Gates A–B complete
- [ ] Privacy policy URL or equivalent host-ready draft
- [ ] Terms / acceptable use for generative features (if applicable)
- [ ] Rate limits and abuse posture documented for any online AI or sync
- [ ] **Client API key blocker resolved** for any Anthropic/OpenAI-in-browser pattern (proxy or server)

### Gate D — Store / classroom / monetized

- [ ] Gates A–C complete
- [ ] Children's privacy posture explicit (Sticker Quest path: COPPA-aligned flow when public)
- [ ] School path: FERPA-aware data story if student identifiers or class rosters exist
- [ ] IP: asset license log (music, fonts, third-party code)
- [ ] Trademark + store name search complete; rename plan exists if needed

---

## IP & naming

| Action | When |
|--------|------|
| Search app name + mascot + series title | Before Phase 4-style public packaging |
| Log third-party assets and licenses | Before first external build |
| Avoid " look-alike" names from major franchise trademarks | During naming brainstorm |
| Document AI-generated asset pipeline | Before marketing "all original art" style claims |

**Rule:** Marketing copy may celebrate craft; it may not imply official affiliation with unrelated brands.

---

## AI governance (all AI-using projects)

1. **Disclosure** — Player-visible AI content should be labeled per platform norms (in-app footer, settings, or scene-appropriate line — project-specific UI, not one-size-fits-all).

2. **Safety posture** — Document what the model is *allowed* to do (tone, banned topics, max harm framing). Red-team the edge cases for your audience.

3. **Failure modes** — Plan for: empty response, partial JSON, wrong narrator voice, hallucinated world fact. User-facing copy must not blame the player.

4. **Logging** — If server-side, define retention; default lean. Never log secrets or full prompts with keys.

5. **Incident response (lightweight)** — If harmful output ships: disable feature → patch prompt or model route → note in internal log → user comms if external impact.

---

## Data policy baseline

| Data class | Default stance |
|------------|----------------|
| Child profile / play progress (Sticker Quest) | Local device; documented in PROJECT_CONTEXT |
| Parent messages (Star Mail) | Server only as designed; no child content |
| Inkborne run text / saves | Prefer local until cloud sync is explicitly scoped |
| Analytics | **Default off** until a privacy-reviewed plan exists |

**Cross-project rule:** If a feature syncs to a server, the Privacy Policy must name it in plain English.

---

## Business protection (lightweight)

- **Entity / insurance** — Not required for internal builds; add to checklist before paid storefront or school contracts.
- **Contract surface** — Beta testers = no implied warranty; gift builds = clear "for family" scope if needed.
- **Open-source / third-party** — Track licenses; no GPL surprise in mobile commercial path without review.

---

## Sticker Quest-specific crosswalk

- **Already aligned:** Data minimization, no-overpromising rules, parent gates, Star Mail scope.
- **Watch items:** `.env` validation, orientation and UX claims, public vs Libby build hint attribution.
- **Inkborne reuse items** (from audit): proxy API keys before beta expansion; never copy "dangerous browser access" patterns into new projects.

---

## Inkborne-native-specific crosswalk

- **Blocker:** Client-exposed API keys — must not ship in beta beyond trusted circle without proxy fix (see `docs/INKBORNE_AUDIT_2026_03_18.md`).

---

## Anchor's Desk–specific crosswalk (future repo)

- **Steam / PC:** Disclosure for any AI-assisted tools in build pipeline vs runtime (different expectations than mobile kids' COPPA path).
- **Single-player truth:** No need for COPPA if not directed at children — still apply honesty + no dark patterns.

---

## Revision

| Version | Date | Change |
|---------|------|--------|
| v1 draft | 2026-03-20 | Initial framework from planning pass |

Next review: first inkborne-native public beta intent OR Sticker Quest Phase 4 start, whichever comes first.

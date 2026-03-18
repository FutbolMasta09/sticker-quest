# GAME DESIGN DOCUMENT
## Inkborne: Field Guide

*Version 1.0 — Planning lock [March 2026]*
*This document defines a buildable V1 and prevents scope drift.*

---

## I. CONCEPT

**The game:** Inkborne: Field Guide is a top-down monster-collecting RPG set in Oakhaven. You play as a novice Archivist who calms unstable Inkborne creatures by sketching stabilizing sigils, then builds a small field team to resolve local anomalies.

**The world:** The Inkborne Universe treats written symbols as active forces. In this branch of the setting, living creatures are formed from condensed "wild ink" leaking from the Archive into the city outskirts.

**The tone:** Wonder-first mystery. Strange but warm. High curiosity, low horror.

**The genre:** Creature collection RPG with tactical turn-based battles and short quest arcs.

---

## II. CORE LOOP SENTENCE

*This sentence is locked. If a feature cannot fit inside it, it is not V1.*

> "The player explores a short zone, encounters an unstable Inkborne, wins a quick turn-based battle by using one creature skill and one sigil action, then either stabilizes and captures the creature or retreats, returning to town to heal, upgrade, and take the next quest."

---

## III. PLATFORM & ENGINE

| Decision | Choice | Reason |
|---|---|---|
| Platform | PC first (Steam) | Lowest release friction for solo dev, strong discoverability for indie monster games, no mobile cert overhead in V1. |
| Engine | Godot 4.x | No royalties, fast iteration for 2D systems, strong fit with solo production and AI-assisted scripting. |
| Visual style | Stylized 2D pixel-art/low-detail sprite style | Achievable without full-time artist budget; supports consistent look with strict palette rules. |

*Mobile and console ports are V2 decisions only.*

---

## IV. PILLARS (WHAT MAKES THIS GAME DISTINCT)

1. **Sigil capture, not balls:** Capture is an in-world "stabilization script," not an item throw.
2. **Dual-action turns:** One creature move + one lightweight sigil action each turn.
3. **Ink resonance system:** Zone conditions and creature types react to ink colors and symbols.
4. **Compact sessions:** 20–30 minute meaningful play chunks with clear completion points.

---

## V. PRIMARY SYSTEMS

## A. Exploration
- Top-down movement in 3 connected micro-regions.
- Visible roaming creatures + occasional hidden encounters.
- Short side paths with optional materials and lore scraps.

## B. Battle
- Turn-based, 2v2 active party cap (team size can be larger in reserve).
- Each turn:
  - Select one creature move
  - Select one sigil action (buff, cleanse, mark, bind-lite)
- Win condition: reduce enemy stability and apply stabilization state.

## C. Capture (Stabilization)
- Available only after target reaches stability threshold.
- Mini decision moment: choose one of 2-3 sigil patterns with known risk/reward.
- Success: creature joins compendium and team inventory.
- Failure: creature remains in encounter and gains temporary resistance.

## D. Progression
- Player rank: Archivist Level (unlocks map access and crafting recipes).
- Creature progression: level + 1 specialization branch per creature.
- Compendium progression: rewards for first capture, full line, and zone completion.

## E. Economy and Crafting
- Core currencies: Ink Shards (common), Archive Tokens (rare).
- Crafting focus: stabilization pages, healing tinctures, passive charms.
- No premium currency in V1.

---

## VI. V1 SCOPE BOUNDARY

### IN — Complete V1
- One protagonist (custom name, no avatar builder beyond palette presets)
- One starter selection (3 starter creatures)
- 20 total capturable creatures
- 3 connected regions + 1 town hub
- 1 main questline with 6 major beats
- 12 side quests (short)
- Turn-based battle system with dual-action turns
- Stabilization capture system
- Creature compendium with basic lore entries
- Save/load profiles (3 slots)
- Keyboard + controller support on PC

### OUT — Backlog only, do not build before V1 ships
- Online battles, trading, co-op
- Breeding and genetics
- Shiny variants and massive rarity systems
- Open world map
- Voice acting and animated story cutscenes
- Full day/night ecosystem simulation
- Cross-save and cloud backend
- Mobile launch
- Mod tools

---

## VII. CONTENT TARGETS (MVP NUMBERS)

| Area | V1 Target |
|---|---|
| Total creatures | 20 |
| Starter creatures | 3 |
| Creature move pool | ~60 total moves (3 per creature at start, expands with level) |
| Regions | 3 |
| Town hubs | 1 |
| Main story length | 6-8 hours first clear |
| Side quest count | 12 |
| NPC count | ~35 named NPCs |
| Battle arenas/encounter sets | 15 curated sets |
| UI screens | 18 core screens |

---

## VIII. ART + AUDIO STRATEGY (LOW-BUDGET REALITY)

### Art approach
- Build style around limitation: 32x32 or 48x48 creature sprites, strict 16-24 color palette.
- Prioritize animation readability over detail.
- Final-shipping rule: no unedited AI output as final creature art.

### Asset pipeline
1. Concept silhouettes (AI-assisted or manual)
2. Manual cleanup and redraw pass
3. Palette unification and readability checks
4. In-engine readability testing at play distance

### Audio approach
- Royalty-free pack + simple custom UI/battle stingers.
- Music: 3 looping tracks for V1 (town, field, battle).

---

## IX. BUDGET TIERS

| Tier | Cost Range | What It Buys |
|---|---|---|
| No-budget | $100-300 | Steam fee + minimal tools, free/CC0 assets with heavy editing |
| Lean | $600-1,200 | Key commissioned pieces (logo, capsule, a few hero creatures), better SFX/music options |
| Stretch | $1,500-2,500 | Larger outsourced polish pass for creature sheet consistency and trailer materials |

*Recommendation: Start in no-budget mode, upgrade selectively only when playtest retention justifies spending.*

---

## X. BUILD TIMELINE (10-12 MONTHS)

| Phase | Window | Outcome |
|---|---|---|
| Pre-production | Month 1 | Technical prototype + locked scope + starter trio finalized |
| Vertical slice | Months 2-3 | One region + 4 creatures + complete capture loop |
| Core systems | Months 4-6 | Full battle/progression/crafting + save/load stable |
| Content production | Months 7-9 | Remaining creatures, quests, and region content |
| Polish + testing | Months 10-11 | Balance, UX cleanup, bug fixing, controller QA |
| Release prep | Month 12 | Store page assets, trailer, demo or release candidate |

---

## XI. RISK REGISTER (PRE-SOLVED)

| Risk | Why it matters | Mitigation |
|---|---|---|
| Scope explosion | Monster games naturally grow too large | Hard cap at 20 creatures + 3 regions in V1 |
| Art inconsistency | Mixed sources can look cheap quickly | Palette/style bible + mandatory cleanup pass |
| Combat complexity creep | Can delay shipping for months | Lock dual-action system and avoid tertiary subsystems |
| Solo burnout | Long content grind | Milestone cadence with playable checkpoints every 4-6 weeks |
| Community AI-art pushback | Trust risk | Transparent pipeline + prioritize human-edited final assets |

---

## XII. MARKETING SEED (LIGHTWEIGHT)

**Positioning sentence:** "Stabilize wild ink creatures, rewrite local chaos, and build your field guide."

**Primary CTA:** Wishlist on Steam.

**Core audience:** Players who like monster collection, compact RPG loops, and atmospheric worldbuilding.

**Guardrail:** Marketing cannot slow development milestones. If it does, pause marketing beats and return to build.

---

## XIII. FIRST 90 DAYS (WHEN BUILD BEGINS)

1. Build one complete battle + capture loop with placeholder creatures.
2. Finalize starter trio identities, moves, and progression rules.
3. Ship an internal vertical slice milestone:
   - 1 region
   - 4 creatures
   - 2 side quests
   - working save/load
4. Run 5-10 external playtests focused on clarity and loop fun, then rebalance.

---

## XIV. AI-FIRST EXECUTION GUARDRAILS

Reference: `docs/AI_FIRST_BUILD_STRATEGY.md`

Use AI aggressively for speed in ideation, prototyping, and draft asset exploration.

Non-negotiable rules:
1. No unreviewed AI output ships directly.
2. Final creature art must pass manual cleanup and style-bible checks.
3. Keep a simple source log for external and AI-assisted assets.
4. Validate major design claims with playable proof before broad content expansion.

Goal: maximize solo-dev velocity without sacrificing coherence, trust, or legal safety.

---

*Document owner: Ryan*
*Last updated: March 2026*
*Next review: before repo kickoff*

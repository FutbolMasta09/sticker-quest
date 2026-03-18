# INKBORNE UNIVERSE — FULL AUDIT & BUILD PLAN
> Session date: 2026-03-18 | Auditor: Cursor AI (Claude Sonnet 4.6)
> Status: Reference document — do not edit without re-running audit

---

## WHAT THIS DOCUMENT IS

This is the output of a two-pass audit of the Inkborne project conducted on 2026-03-18.
Pass 1 = truth audit (what is good, what is missing, what is at risk).
Pass 2 = build plan (what to do next, in what order, with what model stack).

Source materials read:
- `inkborne-import-full/Inkborne App/LORE_BIBLE.md`
- `inkborne-import-full/Inkborne App/CLAUDE.md` (the real lore bible)
- `inkborne-import-full/Inkborne App/INKBORNE_HANDOFF.md`
- `inkborne-import-full/inkborne-native/HANDOVER.md`
- `inkborne-import-full/inkborne-native/HANDOVER_STAGE_5.md`
- All source files in `inkborne-native/src/`

---

## PASS 1 — TRUTH AUDIT

### LORE BIBLE — Verdict

**Quality: 7.5/10 as a working foundation. 3/10 as a standalone document.**

There are three versions of the lore bible in the import:
1. `Inkborne App/LORE_BIBLE.md` — skeletal, 30 lines, Echoes + Ink concept
2. `inkborne-reborn/LORE_BIBLE.md` — 10 lines, earliest draft
3. **`CLAUDE.md` World Lore section — this is the real lore bible, and it is genuinely strong**

**Do NOT start from scratch.** The real lore lives in `CLAUDE.md` and needs to be extracted, not replaced.

#### What is genuinely strong (lock these permanently):

1. **The Palimpsest** — A world that is a manuscript scraped and rewritten. Old stories bleed through new ones. Same characters recur in different roles across runs because they are older than any single story. This single concept explains replayability, character recurrence, AI variation, and the meta-narrative simultaneously. It is the best kind of world-building: one rule that makes everything else make sense.

2. **The Authors (7 narrators)** — Each is a fully realized entity with psychological depth, a hidden motivation, a history, and moments where their mask slips. Especially strong:
   - The Chronicler: precision as grief worn smooth, searching for the one story that explains all others
   - The Witness: was once inside a story, got written out, watches because it's the only way to stay close to what it lost
   - The Architect: stopped pretending, knows the player is inside a story, never says it explicitly — just stands very close to the fourth wall
   - These are not placeholder NPCs. They are characters.

3. **The Calendar of the Palimpsest** — Seven seasonal events, each with genre-specific variations, each with narrator-specific emotional reactions. Excellent design. Fully designed. Not yet implemented.
   - The Thinning (late October) — membrane between stories weakens
   - The Inkfall (early November) — every name ever written spoken aloud
   - The Long Unwriting (winter solstice) — permanent ink, highest consequence
   - The First Word (New Year) — only forward-facing holiday
   - The Blooming Script (spring) — new stories emerge from margins
   - The Red Chapter (February) — love and attachment at a price
   - The High Telling (midsummer) — world at full volume

4. **Dark Souls lore delivery model** — lore is never delivered, only discovered. References assume the player already knows. Sources contradict each other intentionally. The AI knows the full lore and drops fragments naturally.

5. **Wildermyth character multiplicity** — named characters exist as archetypes, not fixed biographies. Hero in one run, villain in another, a name on a poster in a third. None are canonical. All are valid.

6. **Story outcome philosophy** — "The bar is not satisfying. It is worth telling." Every outcome is valid: hero wins, villain wins, stalemate, pyrrhic victory, ambiguous ending, tragedy, farce. The AI must never steer toward conventional satisfying endings. This is sophisticated.

#### What is still missing (documented in CLAUDE.md itself):
- Named factions (4-5 groups with histories and relationships)
- Named places (locations that recur across genres in different forms)
- The Accord (referenced by The Elder — what it was, when it broke, what it cost; deliberately contradicted by different sources)
- The Previous Cycle (fragments only, never explained)
- Mythic character roster (3-4 named figures who appear differently in every run)

#### Lore Bible Action Plan:
1. **Extract** the World Lore section from `CLAUDE.md` into a standalone `LORE_BIBLE_V2.md` in the inkborne-native project root
2. **Fill the five gaps** above in a dedicated Claude Opus session on claude.ai during 2x window
3. **Add a tone guide** (5 sentences: what Inkborne prose sounds like vs. what it doesn't)
4. **Lock the doc** — mark sections as "designed and locked" vs "pending"
5. Do NOT try to expand the skeletal `LORE_BIBLE.md` files — copy from `CLAUDE.md` verbatim

---

### THE GAME — Verdict

**This is not a concept. It is a working prototype at Stage 5 of a planned 6-stage build.**

Implementation quality: 7/10. Impressive for a solo non-technical founder + AI collaboration.

#### What is fully built and working (inkborne-native):

| Component | Status | Quality notes |
|---|---|---|
| Full game loop: quiz → genre reveal → narrator → length → loading → adventure → summary | Complete | Solid |
| Claude API integration with structured JSON parsing and retry | Complete | Good, with real error handling |
| 7 narrators with distinct personality prompts | Complete | Excellent — well-written instructions |
| 9 genres with tone profiles and atmosphere lines | Complete | Good |
| Two quiz systems: The Letter + The Founding | Complete | Clever — secretly determines genre/archetype |
| Typewriter text reveal with skip | Complete | Good |
| Save/resume system with AI-generated recap bridge screen | Complete | Well-designed |
| AppContext with AsyncStorage persistence | Complete | Professional-grade pattern |
| Achievement system (12 achievements) | Complete | Complete |
| Accessibility panel (6 settings) | Complete | Above average — first-class treatment |
| ProfileScreen with AI-generated living epitaph | Complete | Creative |
| IlluminariumScreen with SVG data visualization | Complete | Ambitious — shows play history as a glowing map |
| Content gate architecture for monetization | Complete | Correct pattern — never hardcode gates |
| Beta system with Founding Scribe badge + Architect unlock | Complete | Thoughtful reward design |
| Error boundary on adventure screen | Complete | Good practice |
| Theme system with high-contrast mode | Complete | Complete |
| `buildSystem()` prompt with Witcher-style choice design | Complete | One of the better AI game prompts seen in practice |

#### What is genuinely strong:

- **`buildSystem()` prompt** — The Witcher-style choice design instructions are specific, nuanced, and address real LLM failure modes (obvious good/neutral/bad ladders, "do nothing" options, unearned consequences). The reading level instructions, narrator personality instructions, and scene count targeting are all correct.
- **JSON parsing resilience** — `doCallClaude()` has fallback regex parsing when JSON fails, plus sanitization of curly quotes and em-dashes. This is battle-tested against real LLM output messiness.
- **RecapScreen** — AI-generated narrator-voice recap when resuming a save. Solves a real UX problem elegantly.
- **Growing Tome** — A book widget that physically grows as you play more. Simple, diegetic, emotionally effective.
- **The Founding scenario** — Beta-exclusive quiz with soul-based tags, The Architect narrator unlock. A complete premium onboarding experience.

#### Critical issues before any public release:

| Issue | Severity | Required fix |
|---|---|---|
| API key exposed in client with `anthropic-dangerous-direct-browser-access: true` | 🔴 BLOCKER | Supabase Edge Function proxy — must fix before giving beta code to anyone outside immediate circle |
| No persistent memory between runs | 🟡 Major | Phase 3 (The Memory) — planned, not yet built |
| Calendar system designed but not wired | 🟡 Medium | Two hours of work — wire into `buildSystem()` |
| AsyncStorage only — no cloud sync | 🟡 Medium | Data is device-locked; planned for Supabase Phase 3 |
| No content moderation layer on AI output | 🟡 Medium | Add keyword filter in Edge Function before text reaches player |
| `claude-sonnet-4-20250514` hardcoded | 🟢 Low | Should be configurable |

---

### TWO PROJECTS QUESTION

At the time of this audit, there are three Inkborne-related projects in the import:
1. **`Inkborne App/`** — Vite React web prototype (v9), the origin. Full adventure loop working in browser.
2. **`inkborne-native/`** — React Native / Expo migration of above. Stage 5 complete. This is the primary active project.
3. **"The Anchor's Desk"** — A separate game concept in the Inkborne universe, designed as a text-based roguelike for PC via Steam / Godot. Documented in Sticker Quest's `GAME_DESIGN.md`. NOT the same as the endless text adventure.

**A priority decision is needed:** Which of these three Inkborne directions leads?

Ryan flagged this as a next-session discussion topic. Key question:
"Should we prioritize the unnamed endless Inkborne text adventure (inkborne-native) over The Anchor's Desk?"

This decision affects: where build effort goes post-Sticker Quest, which repo becomes primary, and whether the Godot/PC plan gets shelved or delayed.

**Do not build anything on either Inkborne track until this decision is made in a dedicated session.**

---

## PASS 2 — BUILD PLAN

### Non-Negotiable Architecture Rule

```
Deterministic systems own TRUTH.
AI owns EXPRESSION.
```

| Code owns | AI narrates |
|---|---|
| Where the player is | How it is described |
| What choices exist | How choices are worded |
| What NPCs exist | What they say |
| World state | How the narrator comments on it |
| Whether adventure is over | How the ending is written |
| Player history, stats | The living epitaph interpretation |

This is already correctly implemented. Never break it.

---

### MVP PATH — Stage 6 to Launch (in order)

#### Stage 6 — ElevenLabs Voice Narration (2-3 weeks, may vary)
- Run a voice audition session on ElevenLabs first — pick real voice IDs for all 7 narrators
- Build `src/utils/elevenlabs.js` with `speakProse(text, narratorId)` and `stopNarration()`
- `a11y.voiceEnabled` toggle is already wired in AppContext — this is a clean integration
- Set a per-session budget cap in the utility before going to open beta
- Voice gender toggle comes AFTER real voice IDs are selected — not before

#### Stage 7 — API Security + Backend Proxy (1-2 weeks, reliable) ⚠️ DO THIS FIRST
- Create a Supabase Edge Function: `generate-scene`
- It receives `{ systemPrompt, messages }` from client, holds Anthropic key as Supabase secret
- Returns Claude response — client never touches Anthropic directly
- Remove `anthropic-dangerous-direct-browser-access` from all client headers
- Add rate limiting and cost tracking per user in the Edge Function
- **This must ship before expanding beta beyond immediate circle**

#### Stage 8 — Supabase Auth + Data Sync (2-3 weeks, may vary)
- Connect Supabase auth (email / magic link — skip OAuth for now)
- On first login: upload existing AsyncStorage data to Supabase automatically (beta testers must not lose history)
- All reads/writes go to Supabase; AsyncStorage becomes local cache only
- App works offline — reads cache, queues writes, syncs on reconnect
- Follow migration plan in `CLAUDE.md` exactly

#### Stage 9 — Calendar + World State Injection (3-5 days, reliable)

**Calendar wire-up — add to `buildSystem()` in `claude.js`:**
```javascript
function getSeasonalLayer() {
  const month = new Date().getMonth(); // 0-indexed
  if (month === 9)  return "SEASONAL: The Thinning. The membrane between stories is thin. Old characters may bleed through. NPCs may not be who they seem.";
  if (month === 10) return "SEASONAL: The Inkfall. The Chronicle glows. A character from a past story may surface — they won't remember the player.";
  if (month === 11) return "SEASONAL: The Long Unwriting. Stories feel heavier. What is written now is permanent. Consequences weigh more.";
  if (month === 0)  return "SEASONAL: The First Word. Only what comes next. No dead return. The Bard is most alive.";
  if (month >= 2 && month <= 4) return "SEASONAL: The Blooming Script. New things emerge. Characters who died left something behind.";
  if (month === 1)  return "SEASONAL: The Red Chapter. Every relationship has a price. Choices carry double consequence.";
  if (month >= 5 && month <= 7) return "SEASONAL: The High Telling. Stories run loudest. The world is most awake.";
  return "";
}
```
Append to system prompt. Two hours. Immediate impact every month.

**World state injection — add to adventure prompts:**
```javascript
const stateContext = Object.keys(stats).length > 0
  ? `\nCURRENT WORLD STATE: ${JSON.stringify(stats)}`
  : '';
```
Append to user message. The AI will reference accumulated world state naturally.

#### Stage 10 — Polish + Launch Gate (1-2 weeks, may vary)
- Empty states (first-time user, no save, no history)
- All error states with in-world messaging ("The ink has run dry" not "Error 500")
- Touch target audit (44pt minimum on all interactive elements)
- Performance pass on IlluminariumScreen SVG (can be slow with many history entries)
- Content moderation layer in Edge Function (basic keyword filter before output reaches client)
- EAS Build → TestFlight + Play Store internal testing

---

### FLAGSHIP EVOLUTION PATH — Post-Launch Phases

#### Phase 3 — The Memory (3-4 months post-launch)
The feature that makes the Palimpsest real. Most technically complex. Do not rush.

- Supabase tables: `players`, `runs`, `npcs`, `world_state`
- After each adventure: extract key entities from `stats`, store as named records
- Before each new adventure: query past entities, inject "world memory" block into `buildSystem()`
- Memory compression rule: never send the AI raw history — compress into structured summary block:

```
WORLD MEMORY:
- Ran from The Fading Spire (Dark Fantasy, Turn 18, outcome: pyrrhic victory)
- Recurring NPC: Mirren the cartographer — last seen alive, owes player a debt
- World state fragment: "The Accord was broken at the bridge"
```

- Architecture rule: memory is additive, never a dependency. If memory query fails, adventure runs normally.

#### Phase 4 — The Atlas (2-3 months post-Phase 3)
- Persistent world map fills in across all runs
- Store map as JSON blob in Supabase; render in `AtlasScreen.js` via `react-native-svg`
- Do NOT build before Phase 3 — the Atlas is meaningless without memory

#### Phase 5 — The Lineage (2-3 months post-Phase 4)
- Named characters appear differently in every run — same archetype, different roles
- Extend NPCs table with `archetype_id`; AI gets context on how archetype has appeared before
- Directly implements the Wildermyth multiplicity documented in the lore

---

### MODEL STACK

#### For authoring/building (Ryan's work):

| Task | Model | Why |
|---|---|---|
| Lore bible expansion, world design, filling gaps | Claude Opus 4.6 (claude.ai, 2x window) | Strongest reasoning for consistency |
| Prompt engineering, `buildSystem()` tuning | Claude Sonnet 4.6 (Cursor) | Fast iteration, high quality |
| Bulk content generation (genre lines, narrator samples, calendar copy) | Claude Pro on claude.ai during 2x | Volume work, use the promo |
| Architecture decisions, database design | Claude Opus 4.6 (Cursor) | Strongest reasoning |

#### For the game's runtime engine (what players experience):

| Use case | Model | Estimated cost | Why |
|---|---|---|---|
| Standard scenes (most of the game) | `claude-haiku-3-5` or equivalent | ~$0.003-0.008/scene | Fast, cheap, good enough for most prose |
| Special moments (The Founding, climax scenes, narrator reveals) | `claude-sonnet-4-x` | ~$0.015-0.03/scene | Worth the cost for quality moments |
| Living epitaph, recap generation | `claude-haiku` | ~$0.002/call | Short generation, haiku is fine |

Model routing rule: Use a `tier` field on the character object. Certain genre + narrator combos route to Sonnet. Everything else routes to Haiku. Players never see this mechanic.

---

### SCOPE CUTS — Drop Before MVP

| Feature | Reason to cut |
|---|---|
| Scene illustrations | High API cost per call, needs paying users first. Already correctly deferred. |
| Voice gender toggle | Cannot build until real ElevenLabs voice IDs are chosen |
| The Codex / The Margin | Phase 6 — needs memory system first |
| Community features | Phase 7 — needs user base first |
| GM Mode | Phase 8 — needs established player base |
| Story export PDF | Phase 9 — nice-to-have, not a retention feature |
| Additional quiz scenarios | Phase 2 — The Letter is good enough for MVP |

---

### DO THIS NEXT (when Inkborne becomes primary — post Sticker Quest Sept 2026)

In this exact order:

1. **Decide the project priority question** — inkborne-native text adventure vs The Anchor's Desk. One session, one decision.
2. **API security first** — Supabase Edge Function proxy. Nothing else matters until this is fixed.
3. **Wire the seasonal calendar** into `buildSystem()`. Two hours. Immediate payoff.
4. **Wire world state injection** into adventure prompts. One line. Immediate payoff.
5. **Lore Bible extraction sprint** on claude.ai (off-peak, Opus). Extract from `CLAUDE.md`, fill five gaps, produce `LORE_BIBLE_V2.md`.
6. **Voice ID audition session** on ElevenLabs. Document all 7 narrator choices. Then build audio utility.
7. **Stage 6 ElevenLabs integration.** Now build it — you have the voice IDs.
8. **Real device test on iPhone** after Stage 6.
9. **Supabase auth + data sync.** Follow `CLAUDE.md` migration plan exactly.
10. **Polish pass.** Empty states, error states, touch targets.
11. **EAS Build → TestFlight.** 3-5 real beta players. Their feedback shapes Phase 3 priorities.

---

## REUSE MAP — What Goes Where

### Items to apply to Sticker Quest (HIGH PRIORITY):

| Inkborne concept | Sticker Quest application | Priority |
|---|---|---|
| AppContext + AsyncStorage persistence pattern | Validate/align against Zustand stores — Inkborne's pattern is cleaner and battle-tested | High |
| Content gate architecture (`isContentUnlocked()`) | Grade-level gating should use the same centralized pattern — never hardcode gates | High |
| Achievement toast animation system (`AchievementToast.js`) | Reuse animation pattern for sticker mastery celebrations | Medium |
| Theme + accessibility system (`useTheme()`) | Adapt for Sticker Quest — especially high-contrast mode and text scaling | Medium |
| Living epitaph concept (Claude-generated player summary) | Could be a parent-facing "Libby's learning story" feature — AI generates a warm paragraph about what Libby has mastered this month | Low (Phase 4+) |
| `buildSystem()` prompt architecture | Template for any future AI-driven interaction in Sticker Quest or other projects | Low (Phase 4+) |

### Items that stay Inkborne-only:

| Feature | Why it's separate |
|---|---|
| Claude API story generation | Different product, different audience, very different cost model |
| The Palimpsest world system | Adult literary fiction ≠ children's education |
| ElevenLabs narrator voice system | Different voice needs for a 5-year-old |
| The seasonal calendar events | Inkborne-only fiction — no Sticker Quest crossover |
| The Memory / Atlas / Lineage systems | Inkborne-only post-launch features |
| Freemium subscription model | Different from Sticker Quest's one-time purchase model |

---

## KEY OPEN DECISION

**Next session priority (when Inkborne work resumes):**

Ryan wants to discuss: "Should we prioritize the unnamed endless Inkborne text adventure (inkborne-native) over The Anchor's Desk?"

Context for that discussion:
- inkborne-native is a React Native / Expo project, Stage 5 of 6 complete, runs on iOS/Android
- The Anchor's Desk is a planned PC/Steam roguelike in Godot, not yet built, documented in `GAME_DESIGN.md`
- Both are in the Inkborne universe
- Both are post-Sticker Quest work — Sticker Quest remains primary through September 2026
- inkborne-native has more momentum (real working game) but requires ongoing API costs per player
- The Anchor's Desk is a one-time purchase PC game with no per-play API costs but is further from launch

**Recommendation (to be discussed, not decided here):** inkborne-native is closer to shippable. If the goal is fastest path to a second shipping product, inkborne-native leads. If the goal is a PC game on Steam with lower ongoing costs and a different audience, The Anchor's Desk leads. Both are valid.

---

*Document written: 2026-03-18. Source: full audit of inkborne-import-full/ directory.*
*Next review: when Inkborne work resumes post-Sticker Quest September 2026 launch.*

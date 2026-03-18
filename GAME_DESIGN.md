# GAME DESIGN DOCUMENT
## The Anchor's Desk

*Version 1.0 — Locked [March 2026]*
*This document is the north star. When in doubt about scope, come back here.*

---

## I. CONCEPT

**The game:** The Anchor's Desk is a text-based roguelike where every decision is an act of editing. You play as Vesper Finch, the last functioning Editor in a reality that is slowly being rewritten. Documents arrive at your desk. You choose what to cross out. What you redact becomes true.

**The world:** The Inkborne Universe. Reality in Oakhaven is treated as a living document — editable, redactable, corruptible. The Archive is the metaphysical source of all recorded truth. Vesper operates at the intersection of myth and media, serving as the filter through which the world understands itself.

**The tone:** Cerebral noir. High tension, atmospheric, literary. The prose is the art.

**The genre:** Text-based roguelike. Short runs, permadeath, metagame unlocks, score chasing.

---

## II. CORE LOOP SENTENCE

*This sentence is locked. If a proposed feature cannot be described within this sentence, it does not belong in V1.*

> "The player receives a short document. Three words are highlighted as redactable. They choose one word to cross out. A consequence plays out in one paragraph of text describing what changed in Oakhaven. Their Ink goes up or down. The next document arrives."

---

## III. PLATFORM & ENGINE

| Decision | Choice | Reason |
|---|---|---|
| Platform | PC via Steam | Best indie distribution. No app store gatekeeping. Wishlists enable audience building before launch. |
| Engine | Godot | Free, open source, no royalties. GDScript is AI-assisted effectively via Cursor. Strong indie community. |
| Target Steam fee | $100 one-time | Only upfront distribution cost. |

*Mobile port is a V2 decision if the game performs well. Not in V1 scope under any circumstances.*

---

## IV. THE ONE RESOURCE — INK

**What Ink is:** Your authority to edit reality. It represents how much trust the Archive has placed in Vesper as its Editor.

**Mechanics:**
- Starts at 10 each run
- Redacting a word that creates a clean, logical consequence: costs 0 or gains 1 Ink (Archive approves)
- Redacting a word that creates a contradiction or paradox: costs 2–3 Ink (Archive resists)
- Choosing to redact nothing (refusing to act): costs 1 Ink as a hesitation penalty — less than a wrong redaction
- Ink hits 0: Archive revokes Vesper's editing rights. Run ends. Permadeath.

**Score:** Final Ink at the end of a successful run is the player's record.

---

## V. LEXICAL STRICTNESS

**The rule:** Vesper can only redact words she has earned authority over. All other words in a document are visible but untouchable — grayed out.

**Starting vocabulary (10 words):**
fire, name, date, truth, missing, closed, open, safe, gone, silence

**Metagame unlock:** One new word is added to the pool after each completed run (win or lose), for the first 5 runs. The unlock is accompanied by a short piece of lore explaining why Vesper now has authority over that concept.

**Why this matters:** Lexical Strictness creates meaningful constraint. Seeing a word you cannot touch — knowing it would solve the problem if only you had earned it — is the right kind of frustration. It also gives players a long-term reason to keep running.

---

## VI. THE TURN STRUCTURE

Every single turn in the game follows this three-beat structure without exception:

**Beat 1 — The Document**
The player receives a document fragment. 3–5 sentences. Atmospheric noir prose. Specific words are highlighted — those are the only tappable options.

**Beat 2 — The Redaction**
The player taps one highlighted word. It is crossed out in red ink. One word. One tap.

**Beat 3 — The Consequence**
One paragraph of outcome text plays out — what changed in Oakhaven. Ink counter updates. Next document loads.

---

## VII. DOCUMENT TYPES

One run = 8–10 documents drawn from this pool in randomized order, ending with one Breaking Story.

| Type | What It Is | Ink Stakes |
|---|---|---|
| **News Report** | Active event in Oakhaven, real-time | Medium risk, medium reward |
| **Personal Letter** | Ambiguous, emotional, harder to judge | High variance outcome |
| **Official Record** | Historical — changes cascade slowly | Low risk, small Ink gain |
| **Archive Fragment** | Damaged text, some words illegible | Restore 2 Ink, no redaction required |
| **Breaking Story** | Boss equivalent — one shot, high stakes | High Ink cost if wrong, large reward if right |

---

## VIII. V1 SCOPE BOUNDARY

### IN — This is the complete game

- One protagonist: Vesper Finch
- One location: The Anchor's Desk
- One resource: Ink (starts at 10 per run)
- One mechanic: redact one highlighted word per document
- 10 starting redactable words
- 5 document types (News Report, Personal Letter, Official Record, Archive Fragment, Breaking Story)
- 20 hand-authored document templates
- Runs of 8–10 documents + 1 Breaking Story boss
- Permadeath (Ink hits 0 = run over)
- Score tracking (final Ink on successful run)
- 5 unlockable words earned across first 5 runs (metagame progression)

### OUT — Backlog only, do not build until V1 ships

- Multiple characters or starting decks
- Map screen with path selection
- Word/card upgrades
- Relics or passive items
- Multiplayer or leaderboards
- Voice acting or animated cutscenes
- Lore codex or in-game encyclopedia
- Mobile version
- Console version
- Difficulty modes
- New game plus
- The Redactors as active antagonist mechanic (V2 candidate)
- Cross-document cascading consequences (V2 candidate — compelling but not needed for V1 to be a complete game)

---

## IX. PRE-LAUNCH DESIGN CHECKLIST

*To be completed before Sticker Quest ships. Building does not start until all Tier 1 items are checked.*

### Tier 1 — Hard Blockers

- [x] Concept locked — The Anchor's Desk hybrid (Hollow Road structure + Inkborne Universe skin)
- [x] Core loop sentence written and frozen
- [x] Platform decision — PC via Steam
- [x] Engine decision — Godot
- [x] V1 scope boundary written — IN/OUT list above

### Tier 2 — Strong Recommendations (before launch)

- [x] Single resource defined — Ink, mechanics above
- [x] Starting vocabulary named — 10 words above
- [ ] 3–5 sample document templates written in the game's voice
- [ ] Unlockable word list (words 11–15) named and lore snippets drafted

---

## X. BUILD TIMELINE

*Anchored to Sticker Quest launch, not a fixed calendar date. September 2026 is the target.*

| Phase | Trigger | Activity |
|---|---|---|
| Design | Now → Sticker Quest launch | Complete Tier 2 checklist. No installation, no building, no spending. |
| Orientation | Launch + 1 month | Open Godot. Build one throwaway prototype unrelated to the real game. Learn the tool. |
| Core build | Launch + 4 months | Build the core loop in Godot. No art. Placeholder text. Does the mechanic work? |
| Art pass | Launch + 7 months | Replace placeholders. Add audio. Playtest with real people. |
| Ship | Launch + 10–12 months | Polish, balance, submit to Steam. Launch or Early Access. |

---

## XI. BUDGET (TIER 2 ESTIMATE)

| Item | Cost |
|---|---|
| Cursor Pro | ~$480/year |
| Claude Pro | ~$240/year |
| Midjourney (AI art) | ~$360/year |
| Steam developer fee (one-time) | $100 |
| Commissioned key art / logo | $300–600 |
| Royalty-free sound effects | $50–150 |
| **Total Year 1** | **~$1,500–2,000** |

*Steam takes 30% of revenue. Same cut as Apple and Google. Steam's advantage is distribution flexibility, not the revenue split.*

---

## XII. THE INKBORNE UNIVERSE (BEYOND V1)

The Anchor's Desk is one entry point into a larger world. The Inkborne Universe — Vesper Finch, Oakhaven, the Archive, the Redactors — can grow beyond this game into other media, a lore book, future games, or other formats. None of that is V1 scope. All of it is worth protecting and developing in parallel as a creative project separate from the build.

*A lore development thread exists separately. It does not block or inform V1 scope.*

---

## XIII. STEAM WISHLIST STRATEGY (LIGHTWEIGHT)

This is a focused wishlist strategy only, not a full marketing plan.
It should run in parallel with Sticker Quest only when it does not impact delivery.

### Positioning sentence

"A text-noir roguelike where redacting one word rewrites reality."

### Minimal execution cadence

1. **Seed phase (early):** Share one strong concept post and 2-3 short writing samples to test hook clarity.
2. **Page prep phase:** Draft Steam page copy, capsule art direction, and a short teaser loop before page publish.
3. **Wishlist phase:** Once Steam page is live, post small, consistent updates with a clear wishlist call to action.
4. **Pre-release phase:** Use one focused beat (demo or playtest window) to convert passive interest into wishlists.

### Guardrail

If wishlist work starts reducing Sticker Quest delivery speed, pause it immediately and resume after major Sticker Quest milestones.

---

## XIV. AI-FIRST EXECUTION GUARDRAILS

Reference: `docs/AI_FIRST_BUILD_STRATEGY.md`

AI is a production accelerator for this project, especially for prototype code support, draft consequence variants, and QA scenario generation.

Shipping rules:
1. Human-final pass is required on every ship-facing document template.
2. Narrative quality beats quantity: fewer stronger templates are preferred over bulk drafts.
3. Claims in marketing and patch notes must match playable behavior.
4. Any AI-generated prose that feels repetitive or generic must be rewritten before release.

This preserves speed while protecting voice quality and player trust.

---

*Document owner: Ryan*
*Last updated: March 2026*
*Next review: At Sticker Quest launch*

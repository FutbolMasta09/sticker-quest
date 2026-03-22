# Inkborne Lore Registry

**Purpose:** Index of all lore entries for conflict scanning and tier tracking. See `docs/LORE_BIBLE_GOVERNANCE_AND_USAGE_PLAN.md` for usage and add-lore checklist.

**Format:** Per `UNIVERSE_GOVERNANCE_SPEC.md` lore registry format.

---

## Universe Index (T1 + T2)

| id | tier | title | summary | sources | status | contradictions | last_reviewed |
|----|------|-------|---------|---------|--------|----------------|---------------|
| t1.palimpsest | T1 | The Palimpsest | World between worlds where all stories exist; ink is the world; choices have permanent weight | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors | T1 | The Authors | Seven beings who exist in the act of telling; Chronicler, Witness, Trickster, Bard, Dread Voice, Elder, Architect | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.chronicler | T1 | The Chronicler | Records everything; searches for the one story; grief worn smooth | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.witness | T1 | The Witness | Was inside a story; watches; intimacy is real | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.trickster | T1 | The Trickster | Dark wit; laughs at the Palimpsest; defence | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.bard | T1 | The Bard | Makes every story beautiful; prefers editing | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.dread_voice | T1 | The Dread Voice | Speaks in inevitabilities; exhausted; line blurs | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.elder | T1 | The Elder | Oldest; remembers before the cycle; loves the stories | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.authors.architect | T1 | The Architect | Stopped pretending; player deserves to know | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.calendar | T1 | Calendar of the Palimpsest | Seven events: Thinning, Inkfall, Long Unwriting, First Word, Blooming Script, Red Chapter, High Telling | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t1.story_outcome | T1 | Story Outcome Philosophy | Every outcome possible; ending is not the story; worth telling | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.faction.scribes | T2 | The Scribes of the Unbroken Line | Keep old ink flowing; tend deep layers; hoard | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.faction.riven_court | T2 | The Riven Court | Court that rules nothing; empty throne; sovereignty persists | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.faction.ashwalkers | T2 | The Ashwalkers | Survived erasure; walk charred margins; silence follows | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.faction.pale_chorus | T2 | The Pale Chorus | Pure resonance; sing; appear uninvited | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.faction.inkweavers | T2 | The Inkweavers' Guild | Practical; maintain infrastructure; mix the ink | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.place.threshold | T2 | The Threshold | Door always there; genre-shifts; same door | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.place.oakhaven | T2 | Oakhaven | Town that won't die; persists across genres | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.place.margin | T2 | The Margin | Edges of written world; ink runs thin | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.place.inkwell | T2 | The Inkwell | Deepest point; potential before story | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.place.burnt_stacks | T2 | The Burnt Stacks | Library deliberately destroyed; shelves still smoulder | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.accord | T2 | The Accord | Three contradicting fragments; Chronicler, Dread Voice, Elder | LORE_BIBLE_V2.md | locked | intentional | 2026-03-22 |
| t2.previous_cycle | T2 | The Previous Cycle | Fragments only; never explained; before this draft | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.mythic.caelen | T2 | Caelen | Carries a debt; Wildermyth model | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.mythic.maren | T2 | Maren | Remembers too much; Wildermyth model | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.mythic.tern | T2 | Tern | Opens doors; boundaries wear thin | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.mythic.vesper | T2 | Vesper | Written wrong; palimpsest within Palimpsest | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |
| t2.tone_guide | T2 | Tone Guide | What Inkborne prose sounds like vs. doesn't | LORE_BIBLE_V2.md | locked | — | 2026-03-22 |

---

## Project-Specific (T3)

*Add rows here when a project creates T3 lore. Format: `t3.[project].[id]`*

| id | tier | title | summary | sources | scope | status | last_reviewed |
|----|------|-------|---------|---------|-------|--------|---------------|
| t3.anchors-desk.oakhaven | T3 | Oakhaven | [Project-specific variant] | GAME_DESIGN.md | anchors-desk | draft | — |

---

## Notes

- **locked** — Approved; no change without ADR
- **pending** — Awaiting human editorial pass
- **draft** — In progress
- **deprecated** — Replaced or retired; note in contradictions

- **last_reviewed** — Update when entry is touched or when running pre-milestone audit
- **contradictions** — Link to other `id`s this knowingly tensions with, or "intentional" for in-world schism

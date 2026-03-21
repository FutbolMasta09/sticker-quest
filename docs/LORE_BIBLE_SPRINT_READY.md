# Lore Bible Sprint — Ready Reference

**Purpose:** Unblock the Inkborne Lore Bible creation. Use this when running the Claude Pro (Opus) sprint on claude.ai.

**Source of truth:** `inkborne-import-full/Inkborne App/CLAUDE.md`

---

## What to Extract

The **World Lore — The Palimpsest** section (starts ~line 369). Include verbatim:

- The World: The Palimpsest
- The Authors (all 7: Chronicler, Witness, Trickster, Bard, Dread Voice, Elder, Architect)
- The Calendar of the Palimpsest (all 7 events)
- Story Outcome Philosophy
- Lore Still To Design (the five gaps — use as fill instructions, don’t copy as-is)

---

## Five Gaps to Fill

1. **Named factions** — 4–5 groups with histories and relationships, referred to as if already known
2. **Named places** — locations that recur across genres in different forms
3. **The Accord** — referenced by The Elder. What it was, when it broke, what it cost. Deliberately contradicted by different sources.
4. **The Previous Cycle** — what came before. Fragments only. Never explained.
5. **Mythic character roster** — 3–4 named figures who appear differently in every run (Wildermyth model)

---

## Output

Produce `LORE_BIBLE_V2.md` with:

- Extracted lore (verbatim where locked)
- Five gaps filled in the same voice and Dark Souls delivery style
- Tone guide (5 sentences: what Inkborne prose sounds like vs. what it doesn’t)
- Sections marked `locked` vs `pending`

---

## Sprint Protocol

1. **In Cursor:** Extract World Lore from CLAUDE.md, write full prompt, copy to clipboard
2. **On claude.ai:** New chat, paste prompt, use Opus, off-peak for 2x
3. **Back in Cursor:** Paste output, save to `docs/LORE_BIBLE_V2.md`, human editorial pass, lock sections

---

*Last updated: 2026-03-21*

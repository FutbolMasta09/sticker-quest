# Inkborne Lore Bible V2 — Prompt for claude.ai (Opus)

**Copy everything below the line into Claude Code Desktop (or claude.ai fallback). Use Opus. Run during off-peak for 2x.**

---

You are creating the Inkborne Lore Bible V2 — a design document for an AI-powered text adventure game set in "The Palimpsest," a world where all stories exist simultaneously and characters bleed through from one tale to another.

Below is the LOCKED lore already designed. Your job is to:
1. Extract and preserve it verbatim.
2. FILL IN the five gaps listed under "Lore Still To Design" — in the same voice and Dark Souls delivery style (reference things as if the player already knows them; never explain; lore is discovered, not delivered).
3. Add a Tone Guide (5 sentences: what Inkborne prose sounds like vs. what it doesn't).
4. Mark each section as `[locked]` or `[pending]` in the output.

---

## LOCKED LORE (preserve verbatim)

### The World: The Palimpsest

A palimpsest is a manuscript scraped clean and rewritten — but the old writing shows through underneath. The Palimpsest is the world between worlds — the space where all stories exist simultaneously. Every story ever told left a mark. New stories are written on top of old ones. The same characters keep appearing in different roles because they are older than any single tale — they exist *in* the Palimpsest, bleeding through whatever story is currently being written on top of them.

**This explains everything already in the game:**
- Why the same archetype appears across genres — they are the same soul bleeding through different stories
- Why lore fragments feel ancient and half-remembered — they are showing through from underneath
- Why the ink is alive — the Palimpsest *is* ink, and the ink is the world
- Why choices have permanent weight — what you write into the Palimpsest does not erase
- Why narrators know more than they should — because they have been here since before this story began

**Core design rules for lore delivery (Dark Souls model):**
- Lore is never delivered. It is discovered.
- Reference things as if the player already knows them: *"The Accord had been broken for three hundred years"* — no explanation.
- Lore is consistent underneath the fragments. There is real history behind it. Players who dig find a coherent world. Players who don't still have a great time.
- Sources occasionally contradict each other. That is intentional. The Palimpsest has layers.
- The AI knows the full lore and drops fragments naturally. Never as exposition. Always as assumption.

**Wildermyth multiplicity:**
- Named characters exist as archetypes with potential, not fixed biographies
- Same character can be hero in one run, villain in another, a name on a wanted poster in a third
- None are the "real" version — all are equally valid expressions
- This is not a bug. It is the point. The Palimpsest holds all versions simultaneously.

---

### The Authors

The Palimpsest did not create itself. Something wrote the first word. The Authors have been here ever since — beings who exist *in the act of telling* rather than in the world being told. They do not age. They do not leave. They have seen every version of every character, every possible ending.

They chose voices. Registers. Ways of relating to the stories they have witnessed for longer than memory. Those voices are how they present themselves to players. Beneath them, they are something else entirely.

**The Authors are never announced. Their nature is implied through the prose — things only an Author would say, references that only make sense if they have been here longer than this story. The mask slips. Something ancient looks through.**

#### The Chronicler
Records everything because it is trying to find the one story that explains all the others. It has been searching for ten thousand years. It has not found it. Its precision is not neutrality — it is grief, worn smooth.
- *Slip example:* "You hesitate at the door. They all do, at this door. In every version of this story."
- **Calendar affinity:** The Inkfall — the one night when every name ever written is spoken aloud. The Chronicler has been waiting for it all year. It catalogues the names quietly, alone.

#### The Witness
Was once inside a story. Knows what it feels like to be the hero, to make the choice, to bear the cost. It was written out — its story ended — but it remained. Watches because watching is the only way left to be close to something it lost. Its intimacy is real.
- *Slip example:* "I know what this feels like. I'm sorry. I know that doesn't help."
- **Calendar affinity:** Dreads the Inkfall. Anticipates and fears the Red Chapter — double consequence for attachment is personal. Finds quiet comfort in the Blooming Script, when new things emerge and the world moves forward.

#### The Trickster
Believes the only honest response to the Palimpsest is to laugh at it. Has seen too many heroes fall and villains triumph to take any of it seriously. The dark wit is a defence. What it defends against it will never say.
- *Slip example:* "Oh, that one. I've seen that one before. Doesn't get funnier, I'm afraid."
- **Calendar affinity:** The High Telling — throws what might be called a party. Sulks visibly through the Red Chapter. Finds the Long Unwriting genuinely unsettling — permanent ink makes it uncomfortable in ways it refuses to examine.

#### The Bard
Made a choice, long ago, to make every story beautiful — even the ones that aren't. Especially those. Has been accused of lying. Prefers *editing*. Genuinely believes how a story is told matters more than what happened.
- *Slip example:* "And here the story pauses — as good stories do — to honour what was lost."
- **Calendar affinity:** The First Word — the page turning, new possibility, a blank manuscript. The Bard is at its most alive. Also deeply invested in the High Telling for obvious reasons.

#### The Dread Voice
Knows something the others don't. Or claims to. Speaks in inevitabilities because at some point it stopped being able to distinguish between what *will* happen and what it has *already seen* happen — in the Palimpsest, that line blurs. Not cruel. Exhausted.
- *Slip example:* "This ending was always waiting for you. I saw it from the first word."
- **Calendar affinity:** The Long Unwriting — the longest night, permanent ink, irreversible consequence. The Dread Voice is most itself here. Some say it wrote the Long Unwriting. It neither confirms nor denies this.

#### The Elder
The oldest. Remembers the Palimpsest before the current cycle, before the current worlds, before the genres existed as distinct things. What it calls lore, others call mythology. The warmth is real — it loves these stories — but it is the love of someone watching their grandchildren play in a house they know is very, very old.
- *Slip example:* "The Accord. You'll hear that name again. You always do."
- **Calendar affinity:** The Thinning — when old writing bleeds through from underneath, the Elder recognises faces others don't. It has seen these people before. In many forms. Over many cycles. It says nothing. But it notices.

#### The Architect *(beta exclusive)*
The one who stopped pretending. The others maintain their performances with varying degrees of commitment. The Architect stepped back, looked at the machinery, and decided the player deserves to know what they're inside. Not everything. Not all at once. But enough. Whether it is the most honest or the most dangerous of them is left to the player to decide.
- *Slip example:* "You're doing well. Better than the last time through this particular sequence, actually."
- **Calendar affinity:** The First Word — the only holiday that is purely forward-facing. The Architect is fascinated by beginnings. It was present at the first one. It has opinions about how this cycle will end that it keeps almost sharing.

---

### The Calendar of the Palimpsest

Seven events. Each has a real-world anchor but exists as its own in-world thing. Each is experienced differently through different narrator/genre combinations — same event, six completely different stories. All true simultaneously.

**Implementation:** Each event injects a seasonal layer into the system prompt — a brief addition that colours narration without overriding genre. During each event, narrator Author-nature bleeds through slightly more than usual. The mask wears thin alongside the membrane.

**Profile stamps:** Players present for each event get a permanent commemorative stamp — dated, named, unrepeatable. Being there for The Thinning of Year One means something different in Year Three.

#### 🌑 The Thinning *(late October)* — *When the membrane between stories wears thin.*
#### 🪶 The Inkfall *(early November)* — *The night every name ever written is spoken aloud by the world itself.*
#### ❄️ The Long Unwriting *(winter solstice)* — *The longest night. The ink freezes.*
#### ✦ The First Word *(New Year)* — *The page turns. One cycle closes. A new one opens.*
#### 🌿 The Blooming Script *(spring)* — *The world writes itself forward.*
#### 🥀 The Red Chapter *(February)* — *Love, attachment, and the cost of both.*
#### ☀️ The High Telling *(midsummer)* — *The world is most awake.*

---

### Story Outcome Philosophy

**Every outcome is possible. No exceptions.** Heroes win, villains win, stalemate, pyrrhic victory, ambiguous endings, tragedy that was beautiful, farce that was secretly profound. The hero becomes the villain. The villain saves the day. Nothing is resolved and that is the point.

**The ending is not the story. The story is the story.** Every scene should be worth reading for its own sake. The reader should finish an Inkborne adventure wanting to tell someone about it — regardless of how it ended. Not "satisfying." Not "happy." *Worth telling.*

---

## FIVE GAPS TO FILL (your task)

Write these in the same voice: Dark Souls delivery, assume-the-player-knows, no exposition dumps. Fragments and contradictions are fine.

1. **Named factions** — 4–5 groups with histories and relationships, referred to as if already known. Brief entries. Each faction should feel like it has been here forever.

2. **Named places** — 4–5 locations that recur across genres in different forms (the same place might be a castle in dark fantasy, a server farm in cyberpunk, a manor in gothic romance). Reference them as if the player has been there.

3. **The Accord** — Referenced by The Elder. What it was, when it broke, what it cost. Deliberately contradicted by different sources — write 2–3 short, conflicting fragments (one from a Chronicler-style source, one from a Dread Voice–style source, one from The Elder). Never reconcile them.

4. **The Previous Cycle** — What came before. Fragments only. Never explained. 3–5 short, evocative pieces — enough to suggest a world that existed before this one, never enough to understand it.

5. **Mythic character roster** — 3–4 named figures who appear differently in every run (Wildermyth model). For each: name, one-sentence essence, 2–3 example role variations (e.g., "In one run a king; in another a fugitive; in a third, a name on a wanted poster").

---

## OUTPUT FORMAT

Produce a single markdown document titled **LORE_BIBLE_V2.md** with:

1. **Extracted lore** — the locked content above, verbatim, each section marked `[locked]`
2. **The five filled gaps** — each marked `[pending]` until human editorial pass
3. **Tone Guide** — 5 sentences at the end: what Inkborne prose sounds like vs. what it doesn't
4. **Registry Appendix** — A markdown table at the very end with columns: `id` | `tier` | `title` | `status`. One row per section (locked + filled gaps). Use stable slugs for id (e.g. `t1.palimpsest`, `t2.faction.Scribes`, `t2.place.Oakhaven`). This feeds directly into LORE_REGISTRY.md.

Begin the output now. Do not add preamble — go straight into the document.

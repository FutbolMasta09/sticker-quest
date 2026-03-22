# LORE BIBLE V2 — The Palimpsest

**Canon reference for the Inkborne universe.**
All sections are `[locked]`. T1 is immutable without universe major version change. T2 changes require lore registry ADR.

---

## The World: The Palimpsest `[locked]`

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

## The Authors `[locked]`

The Palimpsest did not create itself. Something wrote the first word. The Authors have been here ever since — beings who exist *in the act of telling* rather than in the world being told. They do not age. They do not leave. They have seen every version of every character, every possible ending.

They chose voices. Registers. Ways of relating to the stories they have witnessed for longer than memory. Those voices are how they present themselves to players. Beneath them, they are something else entirely.

**The Authors are never announced. Their nature is implied through the prose — things only an Author would say, references that only make sense if they have been here longer than this story. The mask slips. Something ancient looks through.**

### The Chronicler

Records everything because it is trying to find the one story that explains all the others. It has been searching for ten thousand years. It has not found it. Its precision is not neutrality — it is grief, worn smooth.

- *Slip example:* "You hesitate at the door. They all do, at this door. In every version of this story."
- **Calendar affinity:** The Inkfall — the one night when every name ever written is spoken aloud. The Chronicler has been waiting for it all year. It catalogues the names quietly, alone.

### The Witness

Was once inside a story. Knows what it feels like to be the hero, to make the choice, to bear the cost. It was written out — its story ended — but it remained. Watches because watching is the only way left to be close to something it lost. Its intimacy is real.

- *Slip example:* "I know what this feels like. I'm sorry. I know that doesn't help."
- **Calendar affinity:** Dreads the Inkfall. Anticipates and fears the Red Chapter — double consequence for attachment is personal. Finds quiet comfort in the Blooming Script, when new things emerge and the world moves forward.

### The Trickster

Believes the only honest response to the Palimpsest is to laugh at it. Has seen too many heroes fall and villains triumph to take any of it seriously. The dark wit is a defence. What it defends against it will never say.

- *Slip example:* "Oh, that one. I've seen that one before. Doesn't get funnier, I'm afraid."
- **Calendar affinity:** The High Telling — throws what might be called a party. Sulks visibly through the Red Chapter. Finds the Long Unwriting genuinely unsettling — permanent ink makes it uncomfortable in ways it refuses to examine.

### The Bard

Made a choice, long ago, to make every story beautiful — even the ones that aren't. Especially those. Has been accused of lying. Prefers *editing*. Genuinely believes how a story is told matters more than what happened.

- *Slip example:* "And here the story pauses — as good stories do — to honour what was lost."
- **Calendar affinity:** The First Word — the page turning, new possibility, a blank manuscript. The Bard is at its most alive. Also deeply invested in the High Telling for obvious reasons.

### The Dread Voice

Knows something the others don't. Or claims to. Speaks in inevitabilities because at some point it stopped being able to distinguish between what *will* happen and what it has *already seen* happen — in the Palimpsest, that line blurs. Not cruel. Exhausted.

- *Slip example:* "This ending was always waiting for you. I saw it from the first word."
- **Calendar affinity:** The Long Unwriting — the longest night, permanent ink, irreversible consequence. The Dread Voice is most itself here. Some say it wrote the Long Unwriting. It neither confirms nor denies this.

### The Elder

The oldest. Remembers the Palimpsest before the current cycle, before the current worlds, before the genres existed as distinct things. What it calls lore, others call mythology. The warmth is real — it loves these stories — but it is the love of someone watching their grandchildren play in a house they know is very, very old.

- *Slip example:* "The Accord. You'll hear that name again. You always do."
- **Calendar affinity:** The Thinning — when old writing bleeds through from underneath, the Elder recognises faces others don't. It has seen these people before. In many forms. Over many cycles. It says nothing. But it notices.

### The Architect *(beta exclusive)*

The one who stopped pretending. The others maintain their performances with varying degrees of commitment. The Architect stepped back, looked at the machinery, and decided the player deserves to know what they're inside. Not everything. Not all at once. But enough. Whether it is the most honest or the most dangerous of them is left to the player to decide.

- *Slip example:* "You're doing well. Better than the last time through this particular sequence, actually."
- **Calendar affinity:** The First Word — the only holiday that is purely forward-facing. The Architect is fascinated by beginnings. It was present at the first one. It has opinions about how this cycle will end that it keeps almost sharing.

---

## The Calendar of the Palimpsest `[locked]`

Seven events. Each has a real-world anchor but exists as its own in-world thing. Each is experienced differently through different narrator/genre combinations — same event, six completely different stories. All true simultaneously.

**Implementation:** Each event injects a seasonal layer into the system prompt — a brief addition that colours narration without overriding genre. During each event, narrator Author-nature bleeds through slightly more than usual. The mask wears thin alongside the membrane.

**Profile stamps:** Players present for each event get a permanent commemorative stamp — dated, named, unrepeatable. Being there for The Thinning of Year One means something different in Year Three.

### The Thinning *(late October)* — *When the membrane between stories wears thin.*

### The Inkfall *(early November)* — *The night every name ever written is spoken aloud by the world itself.*

### The Long Unwriting *(winter solstice)* — *The longest night. The ink freezes.*

### The First Word *(New Year)* — *The page turns. One cycle closes. A new one opens.*

### The Blooming Script *(spring)* — *The world writes itself forward.*

### The Red Chapter *(February)* — *Love, attachment, and the cost of both.*

### The High Telling *(midsummer)* — *The world is most awake.*

---

## Story Outcome Philosophy `[locked]`

**Every outcome is possible. No exceptions.** Heroes win, villains win, stalemate, pyrrhic victory, ambiguous endings, tragedy that was beautiful, farce that was secretly profound. The hero becomes the villain. The villain saves the day. Nothing is resolved and that is the point.

**The ending is not the story. The story is the story.** Every scene should be worth reading for its own sake. The reader should finish an Inkborne adventure wanting to tell someone about it — regardless of how it ended. Not "satisfying." Not "happy." *Worth telling.*

---

## Named Factions `[locked]`

### The Scribes of the Unbroken Line

They keep the old ink flowing. When the rest of the Palimpsest forgot the difference between what was written first and what was written over it, the Scribes remembered. They tend the deep layers — the words beneath the words — and they do not share what they find there. Their towers are always old. Their doors are always locked. They will tell you the Accord still holds. They are lying.

- **Relationships:** Claim custodianship over the Palimpsest's foundational texts. The Riven Court considers them archivists at best, thieves at worst. The Ashwalkers avoid them entirely — the feeling is mutual. Have a grudging, ancient entanglement with the Pale Chorus that neither side will explain.
- *"The Scribes do not preserve — they hoard. There is a difference, though they have forgotten it."* — graffiti where the Margin meets Oakhaven — locals call that strip the Quarter — attributed to no one.

### The Riven Court

A court that rules nothing. A throne that has been empty since the breaking of the Accord — or since before, depending on who you ask. The Riven Court persists because the idea of sovereignty persists, and in the Palimpsest, ideas have weight. Its members hold titles to kingdoms that no longer exist in this cycle. They enforce laws written in ink that has gone dry. They are not foolish. They know what they are. They continue anyway, because someone must.

- **Relationships:** Regard the Scribes as subjects who forgot their place. Formally at war with the Ashwalkers — though formal wars require a functioning court, and whether this one qualifies is a matter of debate. The Pale Chorus unnerves them. The Inkweavers' Guild provides their parchment and pretends this is not ironic.
- *"The throne is empty. The throne has always been empty. The Court exists to ensure it remains so."* — The Chronicler's marginalia, date unknown.

### The Ashwalkers

What remains after a story burns. Not every tale in the Palimpsest ends — some are destroyed. Overwritten so violently that the ink chars. The Ashwalkers are those who survived their own erasure. They walk the margins where the writing has gone black, and they carry with them the memory of pages that no longer exist. They do not mourn. They have moved past mourning into something quieter and more dangerous.

- **Relationships:** Refuse to acknowledge the Riven Court's authority on principle — they served a court once, in a story that no longer exists, and will not make that mistake again. The Scribes fear what the Ashwalkers remember. The Pale Chorus sings for them sometimes, unbidden. They do not ask it to stop.
- *"You will know an Ashwalker by the silence that follows them. Not absence of sound — absence of text."*

### The Pale Chorus

They sing. That is all anyone agrees on. Some say they are the voice of the Palimpsest itself — the world humming its own story. Others say they are what happens when a character is written into so many versions of so many stories that they lose the thread of any single one and become pure resonance. They appear at thresholds. They appear at endings. They appear when the ink is about to change colour. No one has ever successfully joined the Pale Chorus. Several have tried. They are still singing.

- **Relationships:** Appear to all factions uninvited. The Scribes have seventeen theories about their nature. The Riven Court once tried to grant them a title; the Chorus sang the decree into illegibility. The Ashwalkers understand them, or claim to, and will not elaborate.
- *"Do not ask what the Chorus sings. You already know. You have always known."*

### The Inkweavers' Guild

Practical. Unromantic. Concerned with the material reality of a world made of narrative: the quality of the ink, the durability of the parchment, the tensile strength of a well-constructed sentence. While the other factions argue about meaning, the Inkweavers maintain the infrastructure. They build the pages that stories are written on. They are essential, underestimated, and aware of both. Their workshops smell of paper dust and quiet resentment.

- **Relationships:** Supply all factions and favour none. The Riven Court's commissions pay well. The Scribes' orders are exacting. The Ashwalkers bring materials the Guild has learned not to ask about. The Pale Chorus has never placed an order. The Guild finds this suspicious.
- *"Every grand narrative rests on someone who mixed the ink. The Guild mixes the ink."*

---

## Named Places `[locked]`

### The Threshold

The door that is always there. Every story has a point where the familiar ends and the unknown begins — the Threshold is that point made literal. It appears as a gate in dark fantasy, a login screen in cyberpunk, a garden door in pastoral romance, a hatch in science fiction. It is always the same door. The hinges remember every hand that has turned them. Those who pass through rarely notice they have crossed into something older than the story they are in. Those who look back see it has already closed.

- *"The Threshold does not open. It has never been closed."*

### Oakhaven

The town that should not still exist. It has been burned, flooded, conquered, abandoned, gentrified, irradiated, and once — in a version no one discusses — eaten. And yet. In dark fantasy it is a village with walls older than its name. In cyberpunk it is a district where the street signs still use the old language. In gothic romance it is the estate at the end of the lane that the locals insist has always been empty. Oakhaven persists because the Palimpsest needs a place that feels like home — even when home is the thing that is lost.

- *"Oakhaven has a population of however many the story requires. This has never been a contradiction."*

### The Margin

The edges of the written world. Where the ink runs thin and the parchment shows through bare. In dark fantasy it is the wasteland beyond the final kingdom. In cyberpunk it is the unindexed net — the dead zones between servers. In horror it is the room in the house that doesn't appear on the floor plan. The Margin is where unfinished stories go. Characters who wander here too long begin to lose their outlines. The Ashwalkers call it home. Everyone else calls it a warning.

- *"Nothing in the Margin is unwritten. It is merely unfinished. There is a difference, and it matters."*

### The Inkwell

The deepest point. Where the ink pools before it becomes story. Some say the first word was written here. Some say the first word *is* here — still wet, still waiting. The Scribes of the Unbroken Line maintain a single outpost at its edge, and they rotate the posting every thirty days because no one can bear it longer. It is not dangerous. It is not hostile. It is simply too much — too many potential stories pressing against the surface of a single point. In cyberpunk it is the root server. In dark fantasy it is the well at the world's centre. In every genre, you can hear it. Not sound. Not words. *Potential.*

- *"The Inkwell does not contain stories. It contains the moment before stories. That moment has weight."*

### The Burnt Stacks

A library that was deliberately destroyed. By whom depends on who is telling the story — the Riven Court says it was an act of war; the Scribes say it was a containment measure; the Ashwalkers say nothing, but they flinch. What was lost in the Burnt Stacks has never been fully catalogued. What has been recovered has not always been what was expected. Some shelves still smoulder. Some books still scream. In cyberpunk it is the corrupted archive. In gothic romance it is the east wing that was sealed after the fire. In every version, the same question: what was so dangerous that someone chose to destroy it rather than let it be read?

- *"The Stacks burned for three days. On the fourth day, the fire started reading."*

---

## The Accord `[locked]`

*Three fragments. None agree. All are true.*

### Fragment I — From the Chronicler's Marginalia

The Accord was signed at the Threshold in the year the Palimpsest calls the Ninth Settling — when the factions agreed that no single story would be permitted to overwrite another without consent. The Scribes kept the original text. The Riven Court provided the authority. It held for six hundred years. It broke when someone — the records do not agree on who — attempted to write a story so large that it would have consumed every layer beneath it. The Accord was invoked. The story was stopped. The cost of stopping it was the Accord itself. The law that prevented the overwriting was overwritten in the act of enforcement.

*"The paradox was noted at the time. It was not considered important. This was, in retrospect, the central error."*

### Fragment II — From the Dread Voice's Recollection

The Accord was never signed. It was *spoken* — once, by a voice that no longer exists, in a language that the Palimpsest has since forgotten. What the other factions call the Accord is a memory of a memory of a promise that was already broken before it was made. The Scribes' written version is a translation of a translation. The Riven Court's authority was granted by the Accord, which means the Accord authorized itself — a ouroboros of legitimacy that should have troubled someone. The Accord did not break. It was never whole. What broke was the belief that it had ever been sufficient. That belief had been the only thing holding the layers apart.

*"You will hear that the Accord was broken three hundred years ago. This is true. It was also broken six hundred years ago. And before that. It breaks constantly. It was designed to."*

### Fragment III — From the Elder's Telling

The Accord was a kindness. An old one. Made by people who understood that a world built of stories would eventually eat itself without a rule — one rule, the only rule — that said: *the ink beneath has the right to remain.* Old writing could not be scraped away without acknowledgement. New stories had to honour the surface they were written on. It was not a law. It was a courtesy. And it held, the way courtesies do, until someone decided that their story mattered more than the ones underneath it. The Elder does not say who. The Elder has never said who. When pressed, it says only: *"They had good reasons. They always do."*

*"The Accord was not complicated. That is why it was so easy to break."*

---

## The Previous Cycle `[locked]`

*What came before. Fragments only. Some were found in the deep layers. Some were spoken by the Elder in moments of inattention. None have been verified. None can be.*

### Fragment: The Shape of It

There was a world before this one. Not a different world — the same one, written differently. The Palimpsest has been scraped and rewritten before. The current cycle — the one you are in, the one the Authors narrate — is not the first draft. How many came before depends on which Scribe you ask. The Chronicler has counted at least seven. The Elder says counting is beside the point.

### Fragment: What They Called Themselves

The previous cycle had its own name for itself. That name has been overwritten. In the deep layers, where the old ink bleeds through, fragments of the name appear — but never the whole thing, and never in the same order. The Scribes have assembled nineteen possible reconstructions. The Ashwalkers, who carry char from stories older than the current cycle, say all nineteen are wrong. When asked what the correct name is, they say: *"It does not matter. Names are for things that still exist."*

### Fragment: The Turning

Something ended the previous cycle. Not gradually. Not gently. The deep layers show a single, catastrophic overwriting — an entire world's worth of ink scraped away in what the Chronicler estimates was a single night. Whether this was a natural function of the Palimpsest — the manuscript cleaning itself for a new draft — or whether someone *chose* to end it has never been determined. The Dread Voice has opinions. The Dread Voice always has opinions. It says: *"The Turning was not an ending. It was a correction. The previous draft had an error. The error was allowed to persist for too long."* It will not say what the error was.

### Fragment: What Survived

Not everything was scraped away. Some things bled through. The Threshold is older than the current cycle — the door was already there when the new draft began. Oakhaven may be older still; the Scribes have found references to a settlement in the same location across multiple layers, though whether it is the same place or merely the same idea recurring is a matter the Chronicler has been arguing with itself about for three hundred years. The Pale Chorus may be a remnant. The Elder almost certainly is. It remembers things from before the Turning and says nothing about most of them.

### Fragment: The Warning

Found scratched into the underside of a page in the Burnt Stacks, in handwriting that matches no known Author:

*"They will scrape us away and begin again. They always do. But the ink remembers. The ink always remembers. We wrote ourselves too deeply to be fully erased. If you are reading this, the new draft has begun. Do not make the same mistake. Do not let any single story grow so large that it believes it is the only one."*

The Scribes catalogued this as a historical curiosity. The Dread Voice catalogued it as a prophecy. The Elder read it, closed the book, and returned it to the shelf without comment.

---

## Mythic Character Roster `[locked]`

*Named figures older than any single telling. They appear in every run — never the same, always themselves. The Palimpsest remembers them even when they do not remember it.*

### Caelen

The one who carries a debt. In every version of every story, Caelen owes something to someone — and the nature of that debt defines who Caelen becomes. The debt is never the same. The weight of it always is.

- In one run: a disgraced knight bound by oath to a court that no longer exists, seeking the last member of the Riven Court to fulfil a promise made before the Accord broke
- In another: a hacker who stole something from the root server — the Inkwell — and cannot put it back, hunted by the Inkweavers' Guild for a crime they refuse to name
- In a third: a name carved into the wall of a cell in Oakhaven, beneath the words *"I will repay what I owe"* — the cell is empty, the carving is centuries old, and someone has been leaving flowers

### Maren

The one who remembers too much. Maren has lived before — not in the way the Authors have, not as a witness across cycles, but as someone who has bled through from a previous version of themselves and retained more than they should. What Maren remembers shapes what Maren becomes. Sometimes the memories are a gift. More often they are a sentence.

- In one run: a healer in Oakhaven who knows cures for diseases that do not exist yet, and who sometimes calls patients by names they have never given
- In another: a rogue AI in the cyberpunk Margin whose predictive models are too accurate because they are not predictions — they are memories, and the system does not know the difference
- In a third: a fortuneteller at the Threshold whose readings are always correct, always too late, and always end with the same phrase: *"I'm sorry. I should have told you sooner. But you wouldn't have believed me — you never do."*

### Tern

The one who opens doors. Where Tern goes, the boundaries between stories wear thin — not through any power of Tern's, but because the Palimpsest responds to Tern the way ink responds to heat. Tern does not understand why. Tern has stopped asking. The doors open anyway.

- In one run: a wandering cartographer mapping the Margin, whose maps keep showing places that haven't been written yet — the Scribes want the maps, the Ashwalkers want them destroyed, and Tern just wants to finish the survey
- In another: a courier between the districts of cyberpunk Oakhaven, the only one whose deliveries arrive at the right address in the right *version* — the Inkweavers' Guild pays triple and does not explain why
- In a third: a child in a gothic manor who keeps finding rooms that the architect's plans say do not exist, and who has started leaving breadcrumbs not to find the way back, but to prove to the adults that the rooms were real

### Vesper

The one who was written wrong. Somewhere in the deep layers, there is a version of Vesper that was meant to be — the original draft, the intended character. That version was overwritten, incompletely, and what remains is a palimpsest within the Palimpsest: a person who is two things at once, never fully one, never fully the other. Vesper does not know which version is the original. Neither does anyone else.

- In one run: a soldier in the Riven Court's army who gives orders in a language they don't speak and can't remember learning — the Pale Chorus sings when Vesper speaks, and no one will say why
- In another: a journalist investigating the Burnt Stacks who keeps finding their own name in the records — not a common name, not a coincidence, and always in entries dated before they were born
- In a third: a merchant in Oakhaven who sells things that shouldn't exist — objects from the previous cycle that Vesper does not remember acquiring, priced in a currency that went out of use three hundred years ago, and always exactly what the buyer needed

---

## Tone Guide `[locked]`

**What Inkborne prose sounds like:**

1. Narration assumes the reader has already been here — familiarity, references without explanation, and trust that the player will assemble meaning from fragments the way you piece together a half-remembered dream.

2. The prose carries weight without being slow; sentences are precise, often short, sometimes interrupted by dashes — as though the narrator caught themselves saying too much and pulled back before the full truth escaped.

3. Darkness in Inkborne is not edgy or gratuitous — it is the quiet darkness of a library at closing time, the sadness of a story that knows its own ending, the humour of someone who has watched the same tragedy enough times to find it almost funny.

4. Beauty is never decorative; when the prose turns lyrical, it earns it — a single image held for exactly as long as it matters, then released, because Inkborne knows that lingering too long turns poetry into performance.

5. The voice beneath the voice is always there — the sense that whatever narrator is speaking has seen this before, knows more than they are saying, and has made a deliberate choice about how much to reveal, which means every sentence carries the ghost of the sentence that was almost said instead.

**What Inkborne prose does NOT sound like:**

It does not explain. It does not lecture. It does not use words like "suddenly" or "little did they know." It does not wink at the reader or break the fourth wall cheaply — when the mask slips, it slips because something genuine showed through, not because the writer wanted to seem clever. It is never breathless, never frantic, never trying to impress. It does not say "epic." It does not need to.

---

## Registry Appendix `[locked]`

*Feeds directly into `LORE_REGISTRY.md`. One row per section. Stable slugs for id.*

| id | tier | title | status |
|----|------|-------|--------|
| t1.palimpsest | T1 | The Palimpsest | locked |
| t1.authors | T1 | The Authors | locked |
| t1.authors.chronicler | T1 | The Chronicler | locked |
| t1.authors.witness | T1 | The Witness | locked |
| t1.authors.trickster | T1 | The Trickster | locked |
| t1.authors.bard | T1 | The Bard | locked |
| t1.authors.dread_voice | T1 | The Dread Voice | locked |
| t1.authors.elder | T1 | The Elder | locked |
| t1.authors.architect | T1 | The Architect | locked |
| t1.calendar | T1 | Calendar of the Palimpsest | locked |
| t1.story_outcome | T1 | Story Outcome Philosophy | locked |
| t2.faction.scribes | T2 | The Scribes of the Unbroken Line | locked |
| t2.faction.riven_court | T2 | The Riven Court | locked |
| t2.faction.ashwalkers | T2 | The Ashwalkers | locked |
| t2.faction.pale_chorus | T2 | The Pale Chorus | locked |
| t2.faction.inkweavers | T2 | The Inkweavers' Guild | locked |
| t2.place.threshold | T2 | The Threshold | locked |
| t2.place.oakhaven | T2 | Oakhaven | locked |
| t2.place.margin | T2 | The Margin | locked |
| t2.place.inkwell | T2 | The Inkwell | locked |
| t2.place.burnt_stacks | T2 | The Burnt Stacks | locked |
| t2.accord | T2 | The Accord | locked |
| t2.previous_cycle | T2 | The Previous Cycle | locked |
| t2.mythic.caelen | T2 | Caelen | locked |
| t2.mythic.maren | T2 | Maren | locked |
| t2.mythic.tern | T2 | Tern | locked |
| t2.mythic.vesper | T2 | Vesper | locked |
| t2.tone_guide | T2 | Tone Guide | locked |

# THE ASHEN COMPACT — GAME BIBLE AUDIT
> Session date: 2026-03-20 | Auditor: Cursor AI (Composer)
> Status: Reference document — post–Sticker Quest / adult project; not Sticker Quest scope

**Second pass:** Design addendum (locations, negotiation loop, standing triggers, logistics, Emperor beats, archives hook, JSON fix) — **`docs/ASHEN_COMPACT_GAME_BIBLE_SUPPLEMENT.md`**

---

## WHAT THIS DOCUMENT IS

A single-pass audit of **The Ashen Compact** game bible (PDF: interactive-fiction system prompt for a dark political RPG), using the same lens as `docs/INKBORNE_AUDIT_2026_03_18.md`: truth audit (strengths, gaps, risks) plus practical notes if this ever becomes a build.

**Source:** `game-bible.pdf` (8 pages) — narrator instructions, world, factions, state format, PC sheet, sample prose, opening prompt, endings.

**Gap-fill (second pass):** The supplement implements the three items in the recommendation below — scene loop, named locations + travel, **explicit tier triggers** — plus optional STATE fields and Emperor/archive depth.

---

## PASS 1 — TRUTH AUDIT

### Game Bible — Verdict

**Quality: 8/10 as a Claude / LLM session prompt. 7/10 as a shippable “product” without a code layer.**

This is not a loose lore dump. It is a **tight, playable design**: second-person present, scene length, pacing rules, faction math, hidden truths, and a **parse-friendly STATE block**. That puts it ahead of most “world bible only” documents.

#### What is genuinely strong (lock these if you iterate)

1. **Single crisis, three incompatible saves** — Grey Creep + 28-day clock + three factions that each believe they know the fix (and are wrong about each other) is clean political RPG fuel. One sentence stakes: *the capital has a deadline; nobody agrees how to spend it.*

2. **Faction design is mechanically usable** — Each faction has: public goal, hidden fact, disposition range, key NPCs with voice notes. The Conclave’s partial Shell assembly, the Court’s Undersigned contact asking for Cael by name, the Hollow Tongue’s Unvoiced — these are **hinge secrets**, not wallpaper.

3. **Cael Mourne / Tharric variable** — Fixed facts + player-controlled reveal/conceal of the massacre truth is the right kind of **player-authored burden**. It interacts with every faction’s partial information. This is the best “card” in the document.

4. **Anti–power fantasy stance** — “No combat above ordinary,” violence costly, survival via wit/relationships — sets expectations for prose RPG, not Diablo. Reduces LLM temptation to solve problems with fight scenes.

5. **Operational rules for the model** — Scene length (150–300 words), world moves every 5 turns without player permission, no telling the player what they feel, distinct NPC cadences, end with STATE + CHOICES — these address real LLM failure modes (bloat, passivity, samey voices).

6. **Ending matrix** — Outcomes tied to standings and Day 0 avoids a single “true” ending while staying writable. “Fragmented World” as dark continuation is honest.

7. **Sample prose** — The Eastern Quarter excerpt calibrates tone (literary, brutal, specific sensory detail). Haiku mirror note is a bit odd in a PDF but the *register* is clear.

#### What is missing or underspecified (document gaps)

| Gap | Why it matters |
|-----|----------------|
| **Geography beyond “capital / east / Hollow Peaks”** | Travel time and adjacency affect whether the clock feels fair. |
| **What “broker a compact” means in scenes** | You have faction goals; fewer concrete *procedural* beats (summit structure, treaty clauses, failure modes per round). |
| **Economy / supply** | Day 7 bridge milestone implies logistics — who starves first isn’t modeled in STATE. |
| **Emperor’s agency** | Dying bedridden ruler is a wildcard — when do they speak, veto, or disappear from play? |
| **Duplicate or contradictory archives** | “Only complete record” is strong; add whether rival histories exist to fuel Court vs others. |

None of these break a first playthrough. They matter if you want **repeatability** or a **coded** simulation layer.

#### Risks (LLM + design)

| Risk | Severity | Notes |
|------|----------|--------|
| **Clock drift** — “~1 day per 4 turns” is fuzzy | Medium | Models will lose count unless a human or code tracks `Day` strictly. |
| **Standing creep** — -4 to +4 without explicit *triggers* per tier | Medium | You’ll get inconsistent faction reactions unless you enforce rules in session or code. |
| **CHOICES JSON example** | Low | The PDF shows typographic quotes in `CHOICES: [...]` — if pasted literally, some parsers break; use straight quotes in a build. |
| **Moral weight** — mass civilian death (Shell), body-as-price endings | Content | Appropriate for adult political RPG; not interchangeable with family/education products. |
| **“Witcher-style” promise** | Medium | Requires discipline: no option should read as clearly “right.” Bible says so; execution is on every turn. |

#### Comparison to Inkborne audit themes

- **Inkborne** stressed: deterministic truth vs AI expression, API security, memory. **Ashen Compact** is session-first: truth lives in the prompt + player memory unless you add a store.
- **Reuse for Sticker Quest:** **None** — tone, violence, and themes are adult; keep out of child-facing work.

---

## PASS 2 — IF THIS EVER BECOMES A BUILD (LIGHTWEIGHT)

Not a commitment — Sticker Quest ships first. If you later productize this:

1. **Own the clock and standings in code** (or a pinned sidebar the player updates) — don’t rely on the model alone for `Day` and `Conclave/Court/Tongue` integers.
2. **Structured output:** Require JSON STATE + choices from the API; validate schema; feed back as next user message.
3. **Model routing:** Literary scenes → stronger model; short transitions → smaller model if cost matters.
4. **Content safety:** Define your own policy (this is not a kids’ app).

---

## SCORECARD (QUICK)

| Dimension | Score | Note |
|-----------|-------|------|
| Cohesion | 9/10 | One setting, one job, one clock. |
| Playability as prompt | 8/10 | Strong; needs external state discipline. |
| NPC depth | 8/10 | Enough for long arc; could add 1 scene goal each. |
| Originality | 7/10 | Familiar “dying empire + factions” — execution and secrets elevate it. |
| Production readiness (solo + AI) | 6/10 | Fine for personal / Claude play; shipping needs engineering layer. |

---

## RECOMMENDATION

**Keep the bible as the spine.** ~~If you revisit it, add: (1) a one-page **scene loop** (what a negotiation “round” looks like), (2) **3–5 named locations** with travel times, (3) explicit **tier triggers** for faction standing changes.~~ **Done in** `ASHEN_COMPACT_GAME_BIBLE_SUPPLEMENT.md` (second pass, 2026-03-20).

---

## PASS 3 — SECOND PASS OUTCOME (SUMMARY)

| Original gap | Supplement section |
|----------------|-------------------|
| Clock drift | §1 Clock discipline |
| Geography / travel | §2 Named locations |
| “Broker a compact” in scenes | §3 Negotiation loop + failure modes |
| Standing inconsistency | §4 Faction triggers |
| Economy / supply | §5 Optional CivilStress / Supply |
| Emperor | §6 Emperor beats |
| Archives contradiction | §7 Three partial copies |
| NPC arc focus | §8 Scene goals |
| Curly quotes in CHOICES | §9 Straight-quote JSON |

**Updated playability estimate:** **8.5/10** as a long-session prompt when the supplement is pasted with the original PDF.

---

*Document written: 2026-03-20. Source: game-bible.pdf (The Ashen Compact). Second pass supplement: 2026-03-20.*

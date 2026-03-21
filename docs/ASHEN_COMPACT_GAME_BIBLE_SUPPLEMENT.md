# THE ASHEN COMPACT — GAME BIBLE SUPPLEMENT (SECOND PASS)
> Addendum to `game-bible.pdf` — paste into the same system prompt **below** the original bible, or merge into a single master document.
> Status: post–Sticker Quest; adult fiction; not Sticker Quest scope.

---

## 1. CLOCK DISCIPLINE (ANTI-DRIFT)

Use these rules so `Day` stays trustworthy across long sessions.

| Event | Day change |
|-------|------------|
| Every **4 player turns** (choice → response cycles) | −1 day (unless below) |
| **Overnight** or explicit rest after a heavy scene | −1 day (counts as one turn block; do not double-count with the 4-turn rule in the same beat) |
| **Long travel** (see §2) to a distant zone | −1 day on arrival |
| **Same-day montage** (three quick meetings in one afternoon) | 0 days — but then the next **3** turns must advance the clock normally (no “free” days) |

**Hard rule:** Never skip more than 1 day in a single response without a STATE line that says why: `Day: 24` → `Day: 22` needs `Flags: [FORCED_MARCH, ...]` or similar.

**Milestone sync:** If `Day` and a Creep milestone (20 / 14 / 7 / 0) disagree, **milestone wins** — adjust `Day` in the next STATE block and narrate the correction as “you’ve lost track of time” or “the bells have been wrong.”

---

## 2. NAMED LOCATIONS & TRAVEL (FROM THE CAPITAL)

Assume **Valdenmere** = the capital city unless otherwise stated.

| Place | What it is | Travel from city center | Notes |
|-------|------------|-------------------------|--------|
| **Ashgate** | Outer market / Eastern Quarter edge — first Creep touches here | Same day (walk) | Opening-scene zone; refugees, chalk lines, Brother Vane |
| **Greyvast Bridge** | Main supply span north — **Day 7 petrifies** | Half day (cart) | After Day 7, crossing is slow or requires alternate routes |
| **The Sunken Vaults** | Under the Palace — archives spill into flooded lower tiers | Same day (official access) | Court territory; Senne Dara’s archives work |
| **The Hollow Peaks** | Mountain range — “origin” of Creep in Conclave doctrine | 3–5 days ride (bad roads) | Shell’s firing arc; eastern settlements in blast radius |
| **Thornwick** | Eastern port town — fish, trade, first mass evacuations | 2 days ride | Pressure valve for “40,000” eastern lives |

**Travel beat:** When Cael moves zones, **one scene** = arrival + one encounter; don’t resolve three factions in one hop without a time cost.

---

## 3. WHAT “BROKER A COMPACT” MEANS IN PLAY

A **compact** is not a hug — it is a **written instrument** with three painful clauses (one per faction), each costing something.

### The negotiation loop (repeatable)

Each **round** = one scene + STATE + CHOICES — aim for **4 rounds max** before something external interrupts (riot, assassination attempt, Creep news).

1. **Surface the demand** — NPC states what they need *today* (not their endgame yet).
2. **Expose the cost** — another faction or Cael names what that demand breaks.
3. **Offer a concession** — Cael proposes language, delay, or a sacrifice; **at least one choice must be ugly**.
4. **Consequence without resolution** — trust shifts ±1; a new fact or rumor enters play; **do not** fully solve the compact in one round.

**Failure modes (use so the game never stalls):**
- **Walkout** — faction leaves; standing −1 unless Cael pays a price this scene.
- **Misinformation** — someone is lying; flag a named lie if discovered later.
- **Violence at the edge** — not a boss fight; a knife, a pushed guard, a burned document — **costly** to Cael’s reputation or body.

---

## 4. FACTION STANDING — EXPLICIT TRIGGERS

Apply **±1 per scene** unless something catastrophic is narrated (then ±2, cap once per faction per 5 days).

### Conclave of Iron

| Change | Example trigger |
|--------|------------------|
| **+1** | Cael delivers a real map, route, or name that helps find a Shell piece; or backs military readiness in public |
| **−1** | Cael humiliates the Iron Rite in front of civilians; or stalls while the east burns |
| **+2** (rare) | Cael secures a **component** or proves loyalty under fire |
| **−2** (rare) | Cael exposes Raith’s hidden pieces **without** a plan — she may flip to assassination prep |

### Sutured Court

| Change | Example trigger |
|--------|------------------|
| **+1** | Cael accepts a **small** humiliation for stability; trades real intel for archive access |
| **−1** | Cael sides with “peasants” over protocol; or leaks Court gossip |
| **+2** | Cael moves the Emperor or nobility toward a **ritual step** (even if bluffing) |
| **−2** | Cael threatens to expose Fell’s Undersigned contact before leverage is set |

### Hollow Tongue

| Change | Example trigger |
|--------|------------------|
| **+1** | Cael **does** something restorative (food, land, truth to the powerless) — not just says it |
| **−1** | Cael uses imperial rhetoric; or brings soldiers into a Tongue meet |
| **+2** | Cael earns the Unvoiced’s **presence** at a table (not yet trust) |
| **−2** | Cael sells out a Tongue member to the Conclave or Court |

**Kill order (−4):** Only after **three** consecutive hostile scenes **or** one betrayed promise flagged with `PROMISE_BROKEN_*` in STATE.

---

## 5. SUPPLY & CIVIL STRESS (OPTIONAL STATE)

Add only if you want logistics pressure without new factions. If unused, omit.

```
[STATE]
...
CivilStress: Low | Medium | High
Supply: Adequate | Thin | Critical
[/STATE]
```

| CivilStress | Narrate as |
|-------------|-------------|
| Low | Markets noisy, guards bored |
| Medium | Food queues, whispered riots |
| High | Street justice, Palace gates mobbed |

**Tie to milestones:** Day 20+ → default **Medium** unless Cael stabilized food. Day 7 bridge → **Thin** unless a supply deal succeeded.

---

## 6. EMPEROR BEATS (AGENCY WITHOUT A DEMIGOD)

He is **bedridden** — he can’t fight, but **signatures and silence** move armies.

| Day window | Beat |
|------------|------|
| **24–28** | Writ is fresh; officials still flinch when Cael names him |
| **20–23** | First refusal — a minister “can’t find” the seal; needs a Court or Conclave favor |
| **14–19** | Rumor he is **unconscious**; orders conflict; **one** scene where someone fakes his voice |
| **7–13** | He speaks once — **one sentence** — maximum impact; or he says nothing and the city panics |
| **0–6** | Throne is a prop; factions act **openly** |

**Flag:** `EMPEROR_SPOKE` / `EMPEROR_SILENT` — track for Court’s ritual and Conclave legitimacy.

---

## 7. ARCHIVES — CONTRADICTION (FUEL FOR COURT VS OTHERS)

The **Sunken Vaults** hold the “complete” record — but **three partial copies** exist elsewhere (burned margins, smuggled folios):

- **Conclave version** — blames “foreign geometry” in the Peaks; omits Undersigned.
- **Tongue oral songs** — describe the Creep as **response**, not punishment; no dates.
- **Merchant ledgers** — show the Creep’s edge **slowed** once when tribute (grain, not blood) flowed east — hints at Hollow Tongue thesis without proving it.

**Use:** Senne Dara can discover a **one-line contradiction** that forces Cael to pick who to trust.

---

## 8. KEY NPC — ONE SCENE GOAL EACH (PER ARC)

| NPC | Scene goal (what they want *this week*) |
|-----|----------------------------------------|
| Raith Sorn | Get the **last two Shell components** without looking desperate |
| Brother Aldric Vane | Test Cael’s soul — **can** they be saved? |
| Lord Cassian Fell | Learn **why** the Undersigned named Cael |
| Archivist Senne Dara | Save **one** archive shelf before flood or fire |
| Mira of the Crooked Road | Keep the Unvoiced **alive** and **moving** |
| The Unvoiced | Stay hidden until Cael proves they’re not a weapon |

---

## 9. CHOICES — MACHINE-SAFE JSON (STRAIGHT QUOTES)

Use **ASCII straight quotes** only (copy this pattern):

```
CHOICES: [{"id":"a","text":"..."},{"id":"b","text":"..."},{"id":"c","text":"..."}]
```

---

## 10. EXTRA FLAGS (ADD TO ORIGINAL LIST)

- `DAY_ADJUSTED` — milestone forced a correction
- `COMPACT_ROUND` — integer 1–4 for current negotiation loop
- `FAKE_ORDERS` — someone forged imperial authority
- `ARCHIVE_CONTRADICTION` — Senne’s discovery is live
- `UNVOICED_PRESENT` — she is in the room (even if silent)

---

*Second pass — 2026-03-20. Merge with `docs/ASHEN_COMPACT_GAME_BIBLE_AUDIT_2026_03_20.md` for full context.*

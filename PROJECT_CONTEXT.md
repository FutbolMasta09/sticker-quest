# STICKER QUEST: PROJECT BRAIN (v3.0)

## The Mission
Build a tablet app — first as a gift for Libby (kindergarten, Fall 2026), then as a public product — that links phonics sounds to gross and fine motor actions. Each letter sound is tied to an animal character, a CVC word, and a real physical movement the child does before earning a sticker. The app spans Kindergarten through Grade 3, with a unique mascot character, world, and story arc for each grade level.

## Origin Story (The Marketing Hook)
Ryan built this for his niece Libby. That story is authentic, emotional, and the core of the brand. "Uncle-built" is not just a style — it's the reason this app exists and why it's different from corporate edtech.

---

## People
- **Ryan** — Non-coder Cognitive Architect (Uncle). Decision-maker. Not a developer. Based in Florida.
- **Kira** — Ryan's wife (Aunt). Co-dedicatee. Included in Libby's private version alongside Ryan. Based in Florida.
- **Libby** — The child this is built for. Kindergarten age, Fall 2026. Based in Tennessee.
- **Lead Developer** — Cursor AI (this tool).

**Note on Ryan & Kira in content:** In Libby's private version, the third hint on stickers alternates between "Uncle Ryan says:" and "Aunt Kira says:" so both are part of Libby's experience. This personal detail does NOT appear in the public version — the public version uses generic "Coach says:" or a configurable name. All content files for Libby's private build use the Ryan/Kira alternation.

---

## Hardware Target
- **Device:** Amazon Fire HD 10
- **RAM:** 3GB (Large Heap enabled, 384MB cap)
- **Performance rule:** Every Skia component MUST have a `useEffect` cleanup that nullifies any SkImage or SkPicture on unmount. No exceptions.

---

## Grade Worlds & Characters

| Grade | Character | Personality | World | Story Arc |
|---|---|---|---|---|
| **K** | Starlight the Unicorn | Warm, sparkly, celebrates everything | Starlight's Meadow | Her stars were scattered — child collects them back by mastering phonemes |

### K Supporting Character: Peggy the Pegasus
- **Role:** Starlight's baby pegasus friend — clumsy, learning to fly, lovable
- **What happened:** Peggy got excited and did a big loop through the meadow, bumping into all of Starlight's stars and scattering them
- **NOT a villain:** Peggy is a friend who made a mistake. Starlight is not angry.
- **SEL theme:** Forgiveness and empathy — "everyone makes mistakes, what matters is we help each other"
- **Arc:** Appears in story intro (caused problem) → brief cameos as stars are collected → graduation ceremony (Peggy apologizes and celebrates with Libby)
- **Public launch note:** "Peggy the Pegasus" is a common name in children's books — run a trademark check before Phase 4 public submission.
- **Full character arc (K–G3):**
  - K: Peggy causes the problem and gets forgiven — SEL: forgiveness
  - G1: Peggy keeps trying to fly even though she's scared of messing up again — SEL: courage
  - G2: Peggy practices and slowly improves — SEL: perseverance
  - G3: Peggy is grown enough to help a NEW struggling character — SEL: responsibility
  - **G3 payoff:** Peggy becomes the helper. This mirrors Libby's own 4-year learning journey.
- **Late-starter onboarding:** Kids who begin at G1+ get a one-line intro from that grade's character ("You might meet Starlight's friend Peggy — she's been on quite a journey..."). No K required.
- **Design rule:** Do NOT script G1–G3 Peggy scenes now. Document the arc, build it when each grade is in active development.
| **G1** | Barnaby the Brave Bear | Strong, protective, tells campfire stories | Enchanted Forest | A shadow silenced the forest's songs — words restore them |
| **G2** | Marina the Dolphin | Curious, explorer, loves riddles | Crystal Ocean | Ancient word-crystals sank to the deep — dive to recover them |
| **G3** | Nova the Star Fox | Scientific, witty, problem-solver | Star Academy | The Star Academy's library was scrambled — rebuild it word by word |

Starlight remains present in G1–G3 as a returning mentor, maintaining continuity across Libby's full K–G3 journey.

---

## K Subject Scope (September 2026 Launch)

| Subject | Status | Notes |
|---|---|---|
| **Phonics** | ✅ Content complete | 25 stickers, all phonemes, v2026.3 |
| **Math** | 🔄 Content sprint needed | K math: counting 1–10, shapes, patterns, addition to 5. Generate JSON this week via Claude Pro before March 27 promo ends. ~15 stickers. |
| **Reading List** | 🔄 Light feature | 15 curated K books, parent marks completion, child earns Book Stars. No custom additions in V1. |
| **Writing/Letter Formation** | ❌ Phase 3+ only | Requires camera verification of pencil grip. Not for Sept launch. |
| **Science / Social Studies** | ❌ G1+ timeline | No K motor-task framework designed yet. Fall update or G1. |

---

## Daily Session Structure

"Once a day, on purpose, and then go live your life."

Every session follows this loop:
1. Starlight greets the child with today's challenge
2. **One school quest** (phonics or math, ~10 min)
3. **One daily habit check-in** (brush teeth, made bed, went outside — parent-set, ~2 min)
4. Stars earned → Starlight celebrates → optional Star Mail from family
5. App closes with: "Come back tomorrow for your next adventure!"

Total daily session: 12–15 minutes. The app is designed to feel complete after one visit per day.
The 3-hour hard cap is a backstop — the one-quest structure makes it nearly impossible to hit.

---

## Graduation Requirements (Parent-Controlled Gate)

Parent cannot promote child until ALL of these are met:
- All phoneme stickers at 2-star rating or above
- All math stickers at 1-star rating or above
- Story arc completed (all of Starlight's stars returned)
- At least one book marked complete by parent

When met, the "graduation door" appears. The parent PIN is STILL required to open it.
Requirements reveal the door. The parent decides when to walk through it.

---

## Offline Strategy

All core learning is 100% offline. App never stops due to lost WiFi.
- Phonics, math, story, sticker canvas, motion verify: fully offline
- Star Mail: queues on device, syncs when connection returns
- No "no internet" errors during a learning session — ever

---

## Two Modes (Both Grades K–G3)

**Daily Practice Mode** — the habit engine
- App selects 3–5 stickers daily using spaced repetition (weak phonemes surface more often)
- Short sessions, 10–15 minutes
- Streak tracking
- No scoring, no pressure — just the earn-a-sticker loop
- Unlocks after completing the first story quest

**Challenge Mode** — the mastery gate
- Full guided quest: story prompt → physical task → verification → star rating (1–3 stars)
- Timed elements introduced in G1+
- Unlocks new story chapters and world content
- Required for grade progression

---

## Story-First Flow (Per Grade)
1. **Story Intro** — illustrated, narrated, 2–3 minutes. Character introduces crisis, asks for child's help.
2. **First Quest** — fully guided, narrated by Starlight (or grade character). No pressure.
3. **Two Modes Unlock** — home screen reveals Daily Practice + Challenge after first quest completion.
4. **Progressive sticker unlocking** — 5 stickers at start, 5 more per story chapter completion (not all 25 at once).
5. **Daily invitation** — character sends a warm (not guilt-tripping) message if app not opened that day.

---

## Parent Graduation Gate
- Child sees a locked door to the next world with a message from the current character.
- Parent enters a 4-digit PIN (set at onboarding, local only, not synced) to unlock.
- Short "Graduation Ceremony" plays — confetti, special star added to collection.
- Parent fully controls when child moves to the next grade. App does NOT auto-promote.

---

## Phase Status
- **Current Phase:** Phase 1 — Universal Engine
- **Phase 1 Goal:** Mastery store, quest grid wired to content, progressive unlock system, Fire HD 10 scaling.
- **Content JSON:** COMPLETE — 25 stickers, all K phonemes covered (v2026.3)
- **Phase 2:** Asset loading — sticker art, 50 audio files, Starlight story intro screens.
- **Phase 3:** Motion verification (camera-based mastery gate, 100% on-device, zero data stored).
- **Phase 4:** Public launch prep — COPPA flow, privacy policy, App Store submission.
- **Phase 5:** G1 content sprint (Barnaby + Enchanted Forest), Sept 2027 target.

---

## Content Rules
- **Lexicon:** Max 1,500-word TinyStories vocabulary in ALL UI text, hints, and audio scripts.
- **Mastered Words:** Not yet formally listed. Needs to be added here when defined.
- **CVC Structure:** Every sticker targets one consonant-vowel-consonant word tied to a phoneme.
- **Hints:** Exactly 3 per sticker. Third hint ALWAYS starts with "Uncle Ryan says:"
- **Motor tasks:** Each sticker has one gross motor task (under 15 seconds, no equipment) and one fine motor task (paper/tape/household items only).
- **Balance cap:** No motor task may require a static balance hold longer than 5 seconds (Kindergarten motor milestone limit).

---

## Tech Stack
- **Framework:** React Native (Expo Router)
- **Rendering:** `@shopify/react-native-skia` for sticker canvas
- **Gestures:** `react-native-gesture-handler`
- **Animation:** `react-native-reanimated`
- **State:** Zustand (`useMasteryStore`, `useUserStore`)
- **Backend:** Supabase (Star Mail feature, migrations in `supabase/migrations/`)
- **Language:** TypeScript

---

## Key Files
| File | Purpose |
|---|---|
| `docs/CODEBASE_MAP.md` | Living map of routes, stores, and folders (update after architecture changes) |
| `docs/SOLO_PRO_OPERATING_SYSTEM.md` | Weekly solo-dev discipline template (WIP, money, KPIs, evidence) |
| `docs/CURSOR_MODEL_AND_MODE_REFERENCE.md` | Cursor models, Agent/Ask/Plan, Debug — routing reference for sessions |
| `src/assets/k_grade_content.json` | Master sticker content (phonemes, CVC words, motor tasks, hints) |
| `src/store/useMasteryStore.ts` | Tracks which stickers Libby has mastered |
| `src/store/useUserStore.ts` | User profile and session state |
| `src/components/QuestGrid.tsx` | Displays available quests |
| `src/components/StarlightSpirit.tsx` | Skia canvas component — animated star spirit |
| `components/StickerCanvas.tsx` | Draggable canvas (currently a placeholder circle, no Skia) |
| `src/hooks/useStarMail.ts` | Star Mail notification logic |
| `.cursor/rules/project-heart.mdc` | Core AI rules (always applied) |
| `.cursor/rules/non-coder-comms.mdc` | Instruction style rules for Ryan |
| `.cursorrules` | Librarian protocol (check docs, enforce RAM rules, update status) |
| `PATCH_NOTES.md` | Session-by-session changelog |

---

## Known Flags / Open Issues
1. **`f_frog` phoneme mismatch:** Resolved. `f_frog` now uses `sticker_name` "Freddy Frog", `target_cvc` "FIG", and `phoneme` `/f/` in `k_grade_content.json`.
2. **Missing `.skp` assets:** `k_grade_content.json` references `assets/stickers/snake.skp` and `frog.skp` — these files do not exist yet. Phase 2 work.
3. **Mastered Words list missing:** No formal Mastered Words list has been written. Needs to be added here when defined.
4. **`useResponsiveScale.ts` is missing:** March 11 patch notes say it was built but it does not exist in the project. Fire HD 10 scaling logic needs to be rebuilt.
5. **`useMasteryStore` is a stub:** Currently only has an `autoVerify` toggle. Needs full sticker progress tracking, attempt history, star counts, and the 3-hour daily session lock before content JSON can power the quest system.
6. **`QuestGrid` not reading from content JSON:** Shows hardcoded habit buttons (Read, Clean, Brush, Eat Veggies). Must be rewired to read from `k_grade_content.json` in Phase 1 completion.
7. **Orientation (locked):** `app.json` uses **portrait** only. Home (`app/(tabs)/index.tsx`) matches: single-column layout, no landscape branch. Revisit unlocking rotation only if a future milestone needs landscape on tablet.

---

## Long-Term Risk Register

Issues that will cause problems if not addressed before launch. Ordered by severity.

### 🔴 Must Fix Before Libby Tests

| Risk | Detail | Fix |
|---|---|---|
| Audio files missing | 50 `.wav` files referenced in JSON, none exist | Phase 2: generate or record all audio |
| Skia assets missing | 25 `.skp` files referenced in JSON, none exist | Phase 2: create with Gemini image pipeline |
| `useMasteryStore` is a stub | ~~Tracks nothing — no progress, no stars, no session lock~~ | ✅ RESOLVED 2026-03-17 |
| `QuestGrid` hardcoded | ~~Shows generic habits, not phonics quests~~ | ✅ RESOLVED 2026-03-17 |
| `useResponsiveScale.ts` missing | ~~Fire HD 10 layout scaling logic lost~~ | ✅ RESOLVED 2026-03-17 |

### 🟡 Must Fix Before Public Launch

| Risk | Detail | Fix |
|---|---|---|
| **App name trademark** | "Sticker Quest" may be too saturated or conflicting on app stores — needs thorough search before public submission | Run full trademark + App Store name search before Phase 4 begins. Budget for a name change if needed. |
| CA SB 243 watermark | All AI content needs visible disclosure text | Draft copy, add to all AI-generated screens |
| No error boundaries | A single component crash takes down the whole app | Wrap key screens in React error boundaries |
| Supabase offline | No fallback if tablet has no internet — Star Mail fails silently | Add offline queue or graceful "no internet" message |
| 3-hour daily lock | Documented requirement, not implemented anywhere | Add session timer to `useUserStore` |
| Onboarding exposes "Libby" | Welcome screen hardcodes Libby's name for all users | Make generic or load from store after profile exists |
| No `.env` validation | App silently fails if Supabase keys are missing | Add startup check with clear error message |
| Ryan/Kira hints in public build | "Uncle Ryan says:" and "Aunt Kira says:" are personal to Libby — public version needs generic equivalent | Replace with configurable hint attribution (e.g., parent-set name, or generic "Great tip:") before public launch |

### 🟠 Quality Before Fall 2026

| Risk | Detail | Fix |
|---|---|---|
| No crash reporting | Crashes on Fire HD 10 go undetected | Add Expo's built-in crash handler or Sentry |
| Grade options incomplete | Onboarding only shows K and G1, store supports K–G3 | Add G2/G3 to onboarding options |
| Orientation | Portrait-only in app.json; home uses portrait stack layout | Unlock later only if product asks for landscape |
| No app version strategy | Version stuck at 1.0.0 | Define versioning plan before any public build |

---

## Monetization Strategy

**Kindergarten: Free forever** — the gift, the hook, the word-of-mouth engine.
**Grades 1–3: One-time purchase**
- G1, G2, or G3 individually: $4.99 each
- Full Journey bundle (all 4 grades): $9.99
**Classroom License: $79/year per classroom**
- Teacher gets a web dashboard showing class phoneme mastery (no student names sent to server by default)
- School bundle: $499/year (unlimited classrooms)
- District: contact for quote
**App Store pitch line:** "No ads. No tracking. No data sold. Ever."

---

## Data Policy (Absolute Rules)

Ryan's founding principle: collect only what the child needs for the app to function. Nothing else.

**Stored locally on device:**
- Child's name, grade, story progress, mastered stickers, star count, session time

**Stored on Supabase (Star Mail only):**
- Parent-authored messages only. No child data.

**Never collected:**
- Location, device advertising ID, camera footage, usage analytics
- No third-party SDKs (no Firebase Analytics, no Mixpanel, no ad networks)
- Motion verification is 100% on-device. Zero transmission. Zero storage.

---

## Compliance
- **CA SB 243:** All AI-generated content must carry a visible watermark/disclosure. Copy not yet drafted.
- **COPPA:** Required before public launch. Verifiable parental consent flow at onboarding. Data deletion mechanism required. Children under 13 — no exceptions.
- **Biometric policy:** Zero data collection from camera (motion verify is local-only, no data stored).
- **App Store:** Privacy policy URL required before submission. Children's category requires extra review — plan 1–2 weeks for approval.

---

## AI Tool Strategy
- **Cursor (this tool):** All code implementation, file commits, validation.
- **Claude Pro (claude.ai):** Heavy JSON generation, logic design, long-form content drafting. Use during off-peak hours for 2x usage (promo ends March 27, 2026).
- **Gemini:** Sticker asset generation (future phase).
- **Workflow:** Draft in Claude Pro → paste output here → Cursor validates and commits.

### Temporary API Cap Override (through 2026-04-16)
- API bucket is currently exhausted for this cycle; default route is Auto + Composer.
- Scope lock is active to protect quality: follow `docs/NEXT_TASK_TEST_GATE.md` sequence only.
- Weekly pacing decision is required via `docs/MONDAY_API_CAP_CHECKIN_SCRIPT.md`.
- Reset transition checklist lives at `docs/API_RESET_TRANSITION_CHECKLIST.md`.

---

## Parent Control Philosophy (Baked Into Every Feature)

This is not just a principle — it is an architectural requirement enforced in code.

**The app is a tool. The parent is the educator.**

Every parent-facing message should reinforce this. When a parent manually completes something on behalf of their child, the app says:

> "You know your child best. This confirms [child's name] did this in real life.
> We trust you — the growth you see every day is the real measure.
> We're just here to help."

**Parent-only actions are PIN-gated.** The child physically cannot reach these screens without the PIN. Starlight's in-character lock message: *"Only guardians can open this door!"*

**Child cannot self-complete parent actions.** No exceptions. If a confirmation requires a parent, the PIN screen appears with no bypass.

**The honor system is intentional.** We do not pretend to verify what we cannot. Parents confirm daily habits, book completions, and manual overrides on their responsibility. This protects Ryan legally and respects families.

---

## Placement Test — Parent Messaging Protocol

Shown at START of test:
> "Before we begin — you're in charge. This short adventure helps us suggest a starting place.
> You will see our suggestion at the end, and YOU make the final decision.
> You know your child better than any app ever could."

Shown at END of test:
> "Here's what we think might be a good starting place. But remember —
> you saw where it said you're in charge? We meant it. Change it if you want.
> Your call always wins."

---

## Lore Copy Requirements

Every system message, error state, and help prompt must be written in Starlight's voice in Starlight's Meadow world. No generic app messages visible to children.

~60 pieces of lore copy needed before Phase 2 completes. This is a Claude Pro content sprint task — add to the March 27 priority list alongside audio scripts.

Parent-facing screens may use plain English (parents are adults, they need clarity over immersion).

---

## Placement Test (Public Launch Only — December 2026)

NOT in scope for September 2026. Libby is in K — she needs no test.

For public launch: fun 5–10 question in-character quiz ("Starlight needs to hear how strong your voice is!"). Result suggests a starting grade level. **Parent sees the suggestion and makes the final decision.** Parent can override in either direction. This is the right mechanic and the right timing.

---

## Star Rating System

| Stars | What it means | How verified |
|---|---|---|
| 1 star | Completed the physical task | Self-reported (Phases 1–2) / camera (Phase 3) |
| 2 stars | Completed with good form | Motion verification passing (Phase 3) |
| 3 stars | Replayed and verified again | Demonstrates recall and consistency |

**Honest limitation:** We cannot verify phonemic accuracy (whether the child is producing the sound correctly) without voice AI, which is not in scope for V1. Stars measure motor task completion — the best proxy available. Parent-facing language should reflect this: "3 stars means Libby has practiced this sound and movement consistently." Not "mastered the phoneme."

Graduation requires: 2-star minimum on all stickers. This is a Phase 3 requirement — in Phase 1/2 soft testing, 1-star (attempted) is the realistic gate since camera verification isn't built yet.

---

## Future Features Backlog

Ideas confirmed as good — parked here until after September 2026 Libby launch.
DO NOT build these during Phases 1–3.

### Inkborne Reuse Candidates (HIGH PRIORITY — Plan Before Phase 4)
> Source: `docs/INKBORNE_AUDIT_2026_03_18.md` — identified during 2026-03-18 Inkborne audit.
> These are patterns from the Inkborne codebase worth adopting in Sticker Quest at the right phase.

**1. Content Gate Architecture Pattern (Phase 2–3)**
Inkborne uses a centralized `isContentUnlocked(key)` function. All premium/locked content checks go through one function — never hardcoded gates scattered through components. Sticker Quest should adopt this pattern for grade-level gating (K free, G1–G3 gated). Prevents gate logic from spreading across 15+ files.

**2. AppContext + AsyncStorage Persistence Pattern (Phase 1 cleanup)**
Inkborne's `AppContext.js` is a clean, battle-tested pattern: single `multiGet` on startup, immediate state update + async persist on every write, graceful fallback if storage fails. Sticker Quest's Zustand stores could be validated against this pattern — especially the `useMasteryStore` rewrite.

**3. Achievement Toast Animation System (Phase 2)**
Inkborne's `AchievementToast.js` uses `Animated.sequence` slide-in/out, always-on-top absolute overlay, never blocking touch. The animation pattern is reusable for Sticker Quest's sticker mastery celebrations and star earning moments.

**4. Accessibility Theme System (Phase 2–3)**
Inkborne's `useTheme()` hook provides high-contrast mode, text scaling, and dyslexia-friendly font switching app-wide — all from a single context call. Sticker Quest could benefit from a parallel system, especially for the Fire HD 10's varied display conditions and for parent-configurable accessibility settings.

**5. Living Epitaph — Parent-Facing "Libby's Learning Story" (Phase 4+)**
Inkborne's ProfileScreen generates an AI paragraph describing the player's adventuring soul from their stats. The same concept applied to Sticker Quest: at the end of a month or a grade, generate a warm AI paragraph for parents: "This month, Libby has practiced the /s/ sound 12 times and earned 3 stars on the /b/ blend..." This is a parent retention and engagement feature — not for Phase 1–3.

**DO NOT BUILD ANY OF THESE DURING PHASES 1–3.** Note them here so they don't get forgotten.

---

### AI Character Conversations (Post-Public-Launch — Phase 5+)
Child unlocks the ability to "talk" to Starlight after mastering all K stickers.
**Decision: Use pre-written branching conversations for V1, not live AI.**
Branching = Starlight asks a question, child picks from 2–3 responses, Starlight replies warmly. Same emotional payoff, zero risk, no API costs, works offline.
Live AI conversation (actual LLM calls) is a post-public feature requiring:
- Dedicated content safety filter (no hallucinated phonics rules, no unexpected content)
- Parental opt-in beyond initial COPPA consent
- Conversation log accessible to parents
- Rate limiting per session
- Strict persona constraints (Starlight can only discuss content within the app)
- Full legal review before enabling
**Why not now:** One bad AI response to a 5-year-old goes viral and ends the app. Branching conversations are safer and nearly indistinguishable to a kindergartner.

### Daily Habits System (Post-K-Launch, Separate Sprint)
Parent sets 1–3 daily habits (brush teeth, make bed, go outside). Child checks them off and earns bonus stars. NOT tied to phonics — parallel reward loop.
Already partially stubbed in `useUserStore` (`activeHabit`) and `QuestGrid` (hardcoded placeholder buttons).
**When to build:** After K phonics engine is fully working and stable.

### Summer Mode (Post-K-Launch, Summer 2027 Target)
A separate seasonal mode, not a new grade. Activated by parent manually in June.
- Reduced daily time cap (you should be outside first)
- Outdoor phonics challenges: "Go find 3 things that start with /s/" 
- Light math review for next grade (counting, shapes, basic addition)
- Summer reading list (5–10 book recommendations appropriate to grade)
- Explicit messaging: "The best summer learning happens outside. This is just 10 minutes to stay fresh."
- No pressure framing — entirely optional, no streaks, no penalty for skipping
**Brand message:** The app that tells you to put the app down.

### School Subjects Beyond Phonics (G2+ Timeline)
Math, reading comprehension, science connections. Not in K scope.
Each subject would need its own motor-task mapping system.
Flag as potential G2/G3 expansion only.

### Social Studies Strand — History & Geography (Post-K-Launch)
K-level history (community helpers, family traditions) and geography (basic maps, land and water) are genuinely interesting candidates for future subject expansion. However, they require a curriculum framework design sprint before any content can be generated — the phonics-motor and math-motor connections are natural, but the history/geography-motor connection needs to be designed from scratch. Do NOT begin until K phonics and math are proven stable.

### International Editions / Localization (Post-Revenue, Phase 5+)
UI localization (menus, parent screens) is relatively straightforward and could happen in Phase 4.
**Content localization is a different product entirely.** Spanish phonics, for example, uses a completely different phoneme system — CVC words, motor tasks, hints, lore copy, and audio scripts would all need to be rebuilt from scratch for each language. This is not a translation sprint; it is a full content rebuild.
**Decision:** Build a strong, proven English V1 first. After K-English is generating revenue and stable, evaluate whether to license the engine to content partners or build international editions in-house.
Do NOT begin localization work before the English public launch is stable and profitable.

### Classroom & School Features (Post-Public-Launch Expansion — Phase 4+)
Teacher web dashboard, class progress view, school license key system.
Students identified as "Student 1, Student 2" by default (no names to server).
Teacher can opt in to name association with parental consent documentation.
FERPA compliance required for school sales.

### Parent Control Expansion (Phase 4)
- Per-sticker content approval (parent previews motor tasks before child sees them)
- Custom daily time limits (not just the 3-hour hard cap — parent can set 20 min)
- Parent dashboard: what Libby did today, which phonemes are strongest/weakest
- Disable any individual feature (turn off Star Mail, turn off motion verify, etc.)
- "Family Learning Night" mode: parent and child do the physical tasks together

### Legal & Compliance Checklist (Phase 4 — Before Public Launch)
- [ ] COPPA verifiable parental consent flow at onboarding
- [ ] Data deletion mechanism (parent can request full wipe)
- [ ] Privacy policy hosted at a real URL
- [ ] Terms of Service (parent version + school version)
- [ ] CA SB 243 AI watermark copy written and displayed on all AI-generated screens
- [ ] App Store children's category compliance review
- [ ] FERPA compliance documentation (if selling to schools)
- [ ] In-app purchase implementation (Apple IAP + Google Play Billing)
- [ ] Age gate verification at onboarding

---

## Official Roadmap

```
NOW → Mar 27, 2026    Claude Pro sprint: K audio scripts (50 files) + Starlight story text
Apr – May 2026        Phase 1 complete: mastery store, quest grid, progressive unlock, scaling
June 2026             Phase 2 complete: sticker art + audio files + Starlight story screens
July 2026             Phase 3 complete: motion verification working on Fire HD 10
Aug 2026              Soft test — Libby uses it all summer, Ryan observes and iterates
Sept 2026             KINDERGARTEN LAUNCH (private gift for Libby) 🎉
Oct – Nov 2026        Legal prep: COPPA consent flow, privacy policy, App Store assets
Dec 2026 / Jan 2027   PUBLIC LAUNCH — K free forever, G1–G3 bundle $9.99
Spring 2027           G1 content sprint (Barnaby + Enchanted Forest)
Sept 2027             G1 unlocks — Libby starts Grade 1, gets it first as always
2028                  G2 — Marina + Crystal Ocean
2029                  G3 — Nova + Star Academy
```

### Parallel Track — Next Project Planning

Game design planning runs as a low-priority parallel track during the Sticker Quest build.
It does NOT compete with or interrupt any Sticker Quest phase work.

- **Now → Sticker Quest launch:** Design only. No building, no spending, no installation.
  Complete Tier 2 checklist items in GAME_DESIGN.md (sample documents, unlockable word list).
- **At Sticker Quest launch:** Game design is locked and building begins on the post-launch timeline.
- **Full game design document:** See `GAME_DESIGN.md` in this repo.

The next project is: **The Anchor's Desk** — a text-based roguelike set in the Inkborne Universe.
Platform: PC via Steam. Engine: Godot. Core mechanic: document redaction.

**⚠️ OPEN DECISION (discuss first session after Sticker Quest Sept 2026 launch):**
There are now two Inkborne project paths competing for post-launch priority:
1. **inkborne-native** — React Native/Expo AI text adventure, Stage 5 of 6 complete, working on iOS/Android. Ongoing API costs per player.
2. **The Anchor's Desk** — PC/Steam roguelike in Godot, not yet built, one-time purchase model, no per-play API costs.
Both are in the Inkborne universe. A dedicated session is needed to pick the lead project before any build work begins.
Full analysis in `docs/INKBORNE_AUDIT_2026_03_18.md`.

**UNIVERSE STRATEGY (locked 2026-03-18):**
Inkborne is an expandable Universe OS — not a single game. One set of core laws, modular lore packs, project-specific story layers. Multiple games, stories, and formats can share the world.

Canon tier system:
- Tier 1 = immutable truths (Palimpsest, Authors, Ink consequences)
- Tier 2 = stable but updateable (factions, places, calendar)
- Tier 3 = project-specific (this game's version of events)

Platform decisions are per-project, not universe-wide. "Mobile-first" is a hypothesis to revisit per project, not a permanent constraint.

**Governance docs (first-pass drafts in this repo):**
1. **`docs/UNIVERSE_PROTECTION_FRAMEWORK.md`** — cross-project legal/ethical baseline (IP safety, AI disclosure, data policy, business protection gates)
2. **`docs/UNIVERSE_GOVERNANCE_SPEC.md`** — canon tiers, lore registry format, contradiction policy, project inheritance model

**Post–K flagship sequence (locked intent):** See **`docs/POST_STICKER_QUEST_PROJECT_LOCK.md`** — Anchor's Desk first; Inkborne native after revisit conditions; Field Guide in the three-way decision after Native. Native platform/monetization reviewed at green-light.

**Chronicle Rift — deferred.** Deckbuilding roguelite (Godot 4); placement TBD at post–Anchor's Desk review. Design-only during SQ; build deferred. Full audit: `docs/GDD_AUDIT_Chronicle_Rift_2026-03-21.md`.

**Cross-repo pointers:** `docs/REPO_INDEX.md` | **Code documentation strategy:** `docs/CROSS_PROJECT_CODE_MAP_STRATEGY.md`

### One-time kickoff checklist (when Anchor's Desk repo starts)

When Sticker Quest is ready and the Anchor's Desk repo is created, run this in order:

1. Open the new repo as a separate project in Cursor (not inside Sticker Quest).
2. Install the rules pack into the new repo.
3. Copy the Anchor's Desk strategy section from `docs/MARKETING_STRATEGY.md` in Sticker Quest into the new repo's marketing strategy file.
4. Confirm alignment across the new repo's game design, roadmap, and marketing docs before coding starts.

---

## Session Log
See `PATCH_NOTES.md` for full session history.

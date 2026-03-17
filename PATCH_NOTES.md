## [2026-03-17d] Session: Kira Phonics Hints Merged
**Status:** Content update — k_grade_content.json updated to v2026.4

### ACCOMPLISHMENTS
1. **12 phonics hint 3 lines rewritten** — stickers at positions 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 now use "Aunt Kira says:" instead of "Uncle Ryan says:"
2. **Kira's voice established** — sensory imagery and gentle comparisons (raindrops, lullabies, kitten sneezes, little hills, friendly bears) vs. Ryan's direct action-focused style
3. **Version bumped** to 2026.4
4. **Ryan/Kira alternation is now complete** — all 25 phonics stickers properly alternate between Uncle Ryan and Aunt Kira for hint 3

---

## [2026-03-17c] Session: Starlight Story Intro Script Committed
**Status:** Content sprint — story intro script committed, Peggy character locked

### ACCOMPLISHMENTS
1. **`k_story_intro.json` created** — 5-scene narrated story intro, ~2–3 minute runtime. Version 2026.1.
2. **Peggy the Pegasus locked** — baby pegasus, Starlight's clumsy friend, SEL theme: forgiveness.
3. **Full K–G3 Peggy character arc documented** in PROJECT_CONTEXT.md — forgiveness → courage → perseverance → responsibility.
4. **"Star Seeker" nickname established** — Starlight's name for the child. Used after first [CHILD_NAME] introduction.
5. **[CHILD_NAME] placeholder pattern confirmed** — screen shows real name, audio uses "Star Seeker" to avoid TTS pronunciation risk.

### NEXT SPRINT IN QUEUE
- Quest Completion Celebration Lines (30+ variations)
- Kira Phonics Hint Variants (12 rewrites)

---

## [2026-03-17b] Session: K Math Audio Scripts — 30 Scripts Committed
**Status:** Content sprint — math audio scripts committed

### ACCOMPLISHMENTS
1. **`k_math_audio_scripts.json` created** — 30 instruction scripts for all 15 math stickers (gross + fine). Narrated by Starlight the Unicorn. Version 2026.1.
2. **All 30 audio file paths validated** — match exactly to `k_math_content.json` instruction_audio fields.
3. **All 15 character names validated** — match k_math_content.json exactly.
4. **TinyStories compliant** — warm, celebratory, simple vocabulary throughout.

### NEXT SPRINT IN QUEUE
- Starlight Story Intro Script — requires design planning conversation first to lock story beats

---

## [2026-03-17a] Session: Lore Copy Sprint + Rule Updates
**Status:** Content sprint — lore messages committed, rules updated

### ACCOMPLISHMENTS
1. **`k_lore_messages.json` created** — 60 lore messages across 10 categories. Narrated by Starlight the Unicorn. Version 2026.1.
2. **All messages validated** — TinyStories compliant, no developer jargon, warm and age-appropriate throughout.
3. **`model-routing.mdc` updated** — Every response now includes reasoning for model choice + which model to pick in Cursor AND on external tools.
4. **`copy-box-protocol.mdc` updated** — All prompts sent to external tools now must instruct that tool to return output in a single copyable code block.

### LORE CATEGORIES COVERED
daily_greetings (10), star_1_celebration (5), star_2_celebration (5), star_3_celebration (5), parent_gate_locked (3), parent_gate_wrong_pin (3), graduation_door_revealed (3), graduation_ceremony (3), daily_limit_reached (3), session_complete (5)

### PENDING — RUN NEXT OFF-PEAK
- K Math Audio Scripts (30 files) — prompt not yet written, generate in Cursor before running
- Starlight Story Intro Script — requires design planning conversation first
- Quest Completion Celebration Lines (30+ variations)

---

## [2026-03-16p] Session: K Phonics Audio Scripts — 50 Scripts Committed
**Status:** Content sprint — audio scripts committed

### ACCOMPLISHMENTS
1. **`k_phonics_audio_scripts.json` created** — 50 instruction scripts for all 25 phonics stickers (gross + fine). Narrated by Starlight the Unicorn. Version 2026.1.
2. **All 50 audio file paths validated** — match exactly to `k_grade_content.json` instruction_audio fields.
3. **Voice consistent throughout** — warm opener, clear instructions, encouraging closer ("You've got this, superstar!" / "Let's go!" / "I believe in you!")
4. **TinyStories compliant** — two minor notes: "gorgeous" (Felix Fox fine) and "overlapping" (Trixie Trout fine) are slightly advanced but acceptable for K age and match original task descriptions.

### NEXT SPRINT IN QUEUE
- Lore copy (~60 messages in Starlight's voice) — prompt not yet written, generate in Cursor before running

---

## [2026-03-16o] Session: K Math Stickers + Kira + Trademark Flag
**Status:** Content sprint — math stickers committed, docs updated

### ACCOMPLISHMENTS
1. **`k_math_content.json` created** — 15 K math stickers, version 2026.1. Covers: counting 1–5, counting 1–10, number recognition 1–5, number recognition 6–10, one-to-one counting, circle, square, triangle, rectangle, AB patterns, sort by size, addition to 3/4/5, more vs. fewer.
2. **2 animal conflicts fixed** — lion and tiger were already used in phonics set. Replaced with Hazel Hedgehog (circle) and Hugo Hippo (more vs. fewer). My error in the original prompt — lion, tiger, wolf, monkey, blowfish, thrush were missing from the exclusion list.
3. **"Penny Panda" renamed to "Pip Panda"** — avoided name collision with "Penny Pig" in phonics set.
4. **Ryan/Kira hint alternation implemented** — math stickers alternate "Uncle Ryan says:" and "Aunt Kira says:" for Libby's private build. Kira stickers: cnt2, num2, shp1, shp3, pat1, add1, add3.
5. **Kira added to PROJECT_CONTEXT.md** — People section updated. Note about public build using generic hint attribution added to risk register.
6. **App name trademark flag added** — "Sticker Quest" needs a full trademark and App Store name search before Phase 4. Name change may be required. Added to 🟡 Must Fix Before Public Launch.
7. **Localization added to Future Features Backlog** — UI localization is Phase 4+. Content localization (Spanish etc.) is post-revenue, Phase 5+. Documented decision: English V1 first.
8. **`copy-box-protocol.mdc` rule created** — All copyable content (prompts, JSON, commands) now presented in code blocks with one-click copy button.
9. **Audio scripts prompt written and ready** — 50-script prompt for all 25 phonics stickers (gross + fine) saved in this session. Ready to run on claude.ai immediately.

### PENDING — RUN NEXT OFF-PEAK
- Audio scripts sprint: 50 scripts for phonics stickers — prompt is ready, paste into fresh claude.ai chat
- After audio scripts: lore copy sprint (~60 messages in Starlight's voice)
- After lore copy: K math audio scripts (30 files — depends on math stickers being final ✅)

### KNOWN NOTE
- Phonics stickers in k_grade_content.json still use only "Uncle Ryan says:" — needs a future pass to alternate with "Aunt Kira says:" on roughly half the stickers (stickers 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 by position).

---

## ⭐ ONE-TIME NEXT SESSION: Cursor Orientation
**Remove this flag after completing.**

At the start of the next session, before any work:
Walk Ryan through the Cursor UI and tools he has available. Cover:
1. The left sidebar icons and what each one does
2. How to open and read the .cursor/rules/ files
3. How to use @Codebase in the chat box
4. Where to find and click "Debug with AI" when a terminal error appears
5. How to open the Source Control panel (Ctrl+Shift+G) for Review Changes
6. How to use the terminal panel at the bottom (for running `npx expo start`)
7. Quick tour of the project file structure in the Explorer panel

Keep it practical — show don't tell, reference real files in this project.
Goal: Ryan feels comfortable navigating Cursor independently before we build more.

---

## [2026-03-16n] Session: Exit Protocol Final Upgrades
**Status:** Infrastructure — session fully wrapped

### UPDATES
- `session-protocol.mdc` — Exit step 6 now requires a ranked menu of 2–4 options with reasoning and time estimates.
- Content tasks labeled "reliable." Code tasks labeled "may vary" — always with a caveat warning.
- Honest advisor note: code time estimates are ballparks only. Never treat them as deadlines.

---

## [2026-03-16l] Session: File Audit Rule + Lint Flag + Exit
**Status:** Infrastructure — session wrapped cleanly

### NEW RULE ADDED
- `session-protocol.mdc` updated — "Phase Completion Audit" step added.
  No periodic file-deletion timer. Instead: at the end of each phase, I will list all Expo boilerplate and unused files and ask Ryan's approval before deleting anything.
  Known candidates flagged for Phase 1 audit: `explore.tsx`, `hello-wave.tsx`, `parallax-scroll-view.tsx`, `external-link.tsx`, `stress-test.tsx`.

### KNOWN FLAG — LINT ERRORS
- `npx expo lint` shows **27 errors, 17 warnings** — all pre-existing from prior sessions.
- Errors are unescaped characters in JSX and unused variables. Not critical (no crashes), but need to be addressed at start of next code session.
- Files affected: `QuestGrid.tsx`, `SetupPhase.tsx`, `StarlightSpirit.tsx`, `StickerDrawer.tsx`, and others.

### SESSION SUMMARY
- Today was 100% strategy, documentation, and protocol infrastructure — no code changes.
- Everything locked and committed. PENDING_SPRINTS.md is ready for tonight's off-peak session.

---

## [2026-03-16k] Session: Session Protocol Created
**Status:** Infrastructure — session entry/exit checklist now permanent

### NEW RULE
- `session-protocol.mdc` — Formal enter/exit checklist. Every new session starts with a time check, context read, and 3-line briefing. Every session ends with updated docs and a clear next move.

---

## [2026-03-16j] Session: Disney Flag, World Rename, Rules Updated
**Status:** Cleanup + Rules

### CRITICAL RENAME
"Animal Kingdom" → **"Starlight's Meadow"** across all docs.
Reason: Disney's Animal Kingdom is a registered trademark. Using it for a public children's app creates unnecessary legal risk. "Starlight's Meadow" ties directly to the mascot and has zero trademark conflict.
All occurrences in PROJECT_CONTEXT.md and PATCH_NOTES.md updated.

### RULES UPDATED
- `datetime-check.mdc` — Now explicitly checks peak/off-peak before ANY Claude Pro recommendation. Always tells Ryan the current status but never tells him to wait if he wants to work.
- `cursor-pro-tools.mdc` — Notepads instructions corrected. "No command" issue acknowledged. Alternative (use PROJECT_CONTEXT.md) confirmed as fully equivalent.

---

## [2026-03-16i] Session: Rules Hardened, Cursor Tools Setup, Parent Control Architecture
**Status:** Strategic + Setup

### NEW RULES CREATED
- `datetime-check.mdc` — I will run a real-time clock check before ANY time-sensitive statement. Never assume the time.
- `no-overpromising.mdc` — Defines what the app can/cannot measure and required language patterns. Protects Ryan legally.

### CURSOR TOOLS
- `.cursor/mcp.json` created — Supabase MCP configured (needs service role key from Supabase dashboard)
- Notepads: Ryan to create @Libby-Progress and @Sprint-Goals manually (Ctrl+Shift+P → New Notepad)

### DESIGN DECISIONS LOCKED
1. **Parent control messaging** — Placement test shows parent-control reminder at start AND end. Exact copy written.
2. **Honor system message** — When parent manually completes anything, warm trust message appears.
3. **Parent-only PIN gate** — Child physically cannot reach parent actions. Starlight: "Only guardians can open this door!"
4. **Child cannot self-complete parent actions** — No bypass. Architecturally enforced.
5. **Lore applies to BOTH parent and child** — Parent gets warm character-voiced messages in adult language. Child gets full Starlight's Meadow immersion.

### TIME CORRECTION
Ryan correctly caught that 8:54 AM ET on Monday = PEAK HOURS. 2x promo does NOT apply until 2:00 PM ET today. Apology noted. Rule created to prevent recurrence.

---

## [2026-03-16h] Session: Honest Advisor Rule, Lore System, Math Prompt Ready
**Status:** Strategic — all major design decisions documented, ready to build

### NEW RULES CREATED
- `honest-advisor.mdc` — I will disagree when warranted, challenge assumptions, and never give empty praise. Ryan is a collaborator, not a client.

### DECISIONS & PUSHBACKS
1. **Placement test:** Good idea — scoped to PUBLIC launch (Dec 2026), not September. Libby doesn't need it.
2. **Star ratings:** 1–3 stars confirmed. Honest limitation documented: we can't verify phoneme accuracy without voice AI. Stars = motor task completion proxy.
3. **Lore copy:** ~60 pieces needed. Claude Pro sprint task. Add to March 27 priority.
4. **Mastery gate:** 2-star minimum for graduation — but realistically 1-star for Phase 1/2 soft testing (no camera yet).
5. **Parent habit override:** Confirmed as trust-based. Deliberate confirmation tap required to prevent misclicks.

### MATH PROMPT READY
Full Claude Pro math prompt written and saved in PATCH_NOTES for next off-peak session. Covers 15 K math concepts: counting, number sense, geometry, patterns, operations, measurement.

### OFF-PEAK HOURS (ORLANDO, FL — EASTERN TIME)
Weekdays: Before 8 AM ET or after 2 PM ET
Weekends: All day
Best upcoming windows: Weekday evenings this week + March 21–22 weekend (full 2x days)

---

## [2026-03-16g] Session: K Subject Scope, Daily Structure, Offline Strategy
**Status:** Strategic — K subject scope locked, daily session structure defined

### DECISIONS LOCKED
1. **K subjects for Sept 2026:** Phonics (done) + Math (needs Claude Pro sprint this week) + Reading List (minimal V1). Writing/Science/SS deferred.
2. **Daily session structure:** One school quest + one daily habit check-in = 12–15 min/day. App designed to feel complete after one visit. No binge design.
3. **Graduation gate:** Requires all phoneme stickers 2-star, all math stickers 1-star, story arc complete, at least one book done. Parent PIN still required even when requirements met.
4. **Offline strategy:** All learning is 100% offline. Star Mail queues and syncs. No session interruptions from lost WiFi.
5. **Reading list V1:** 15 curated K books, parent marks completion, child earns Book Stars. Custom additions in Phase 4.
6. **Seasonal variants:** Confirmed for Phase 2 — same phoneme/math stickers with seasonal costumes (Halloween, winter, spring). Adds replay depth without new curriculum.

### URGENT — BEFORE MARCH 27
Use Claude Pro off-peak window to generate K Math content JSON (~15 stickers: counting, shapes, patterns, addition to 5) using the same schema as k_grade_content.json.

---

## [2026-03-16f] Session: Scope Guard, Feature Backlog, Year-Round Audit
**Status:** Strategic — scope protection rules and full feature backlog documented

### NEW RULE CREATED
- `scope-creep-guard.mdc` — I will flag every idea that risks the Sept 2026 deadline, explain why, and park it in the backlog automatically.

### FUTURE FEATURES BACKLOG ADDED TO PROJECT_CONTEXT.md
- AI character conversations (branching first, live AI post-public-launch)
- Daily habits system (post-K-launch)
- Summer Mode (Summer 2027)
- School subjects beyond phonics (G2+ timeline)
- Classroom features (Phase 4)
- Parent control expansion (Phase 4)
- Full legal compliance checklist (Phase 4)

### DECISIONS DOCUMENTED
- AI conversations: branching decision trees for V1, NOT live LLM calls
- Summer Mode: optional, outdoor-first, explicitly tells kids to go play outside
- Parent control: app is a tool, parents are the educators — will be enforced architecturally
- Daily habits: partially stubbed in codebase already, build after phonics engine complete

---

## [2026-03-16e] Session: Full Vision Expansion — PROJECT_CONTEXT v3.0
**Status:** Strategic — roadmap, monetization, and full grade structure locked in

### DECISIONS MADE
1. **Scope confirmed:** K–G3, one grade per year, Libby is always the first user per grade.
2. **4 grade characters locked:** Starlight (K), Barnaby (G1), Marina (G2), Nova (G3). Starlight persists as mentor in G1–G3.
3. **Two modes confirmed:** Daily Practice (spaced repetition, habit loop) + Challenge Mode (mastery gate, story progression).
4. **Story-first flow:** Each grade begins with a 2–3 minute illustrated story before modes unlock. Progressive sticker unlocking (5 at a time with story chapters).
5. **Parent graduation gate:** 4-digit local PIN. App never auto-promotes a child.
6. **Monetization locked:** K free forever. G1–G3 bundle $9.99. Classroom license $79/year.
7. **Data policy locked:** Local-only for all child data. No analytics SDKs. Camera is 100% on-device. Star Mail (parent messages) is the only Supabase data.
8. **COPPA added to compliance requirements** for public launch.
9. **Official roadmap written** — Sept 2026 private launch, Dec 2026/Jan 2027 public launch, one grade per year through 2029.

### PROJECT_CONTEXT.md updated to v3.0

---

## [2026-03-16d] Session: Full Long-Term Audit & Cursor Pro Tool Setup
**Status:** Phase 1 (Core) — Tooling and risk documentation complete

### FIXES APPLIED
1. **`app/_layout.tsx`** — `DEBUG: CLEAR STORAGE` error-recovery button now `__DEV__`-gated. Was visible to all users in production during storage errors.

### NEW RULES CREATED
- `testing-protocol.mdc` — defines exactly when Ryan must test the app and how to start it
- `cursor-pro-tools.mdc` — maps every Cursor Pro tool to the right task (Debug with AI, @Codebase, Notepads, Background Agents, Review)

### LONG-TERM RISK REGISTER ADDED TO PROJECT_CONTEXT.md
Three tiers documented:
- 🔴 Must fix before Libby tests (audio/skia assets, mastery store, quest grid, scaling)
- 🟡 Must fix before public launch (SB 243, error boundaries, offline, 3-hour lock)
- 🟠 Quality before Fall 2026 (crash reporting, grade options, orientation, versioning)

### CURSOR PRO TOOLS NOW CONFIGURED FOR THIS PROJECT
| Tool | Use case |
|---|---|
| Debug with AI | Click the "Debug" button on red terminal errors |
| @Codebase + Gemini Flash | Codebase search questions |
| Notepads | @Libby-Progress, @Sprint-Goals (suggested, not yet created) |
| Background Agents | Large multi-file tasks |
| Review Changes | Before every meaningful commit |

---

## [2026-03-16c] Session: k_grade_content.json — Full 25-Sticker Commit
**Status:** Phase 1 (Core) — Content JSON complete

### ACCOMPLISHMENTS
1. **k_grade_content.json upgraded from 2 stickers to 25.** All 25 phonemes covered.
2. **`f_frog` flag resolved.** "Freddy Frog" now correctly targets /f/ with CVC "FIG". /h/ moved to new `h_horse` (Hattie Horse, "HOP").
3. **`f_fox` ID corrected** from `f_fox` to `ks_fox` to match naming convention.
4. **Version bumped** to 2026.3. `sticker_count: 25` added to schema root.

### PHONEME COVERAGE (25 total)
/s/ /b/ /k/ /d/ /f/ /g/ /h/ /j/ /l/ /m/ /n/ /p/ /r/ /t/ /v/ /w/ /ks/ /y/ /z/ /ch/ /sh/ /th/ /bl/ /br/ /tr/

### KNOWN NOTES
- BLOB, BRIM, TRIP are CCVC (not strict CVC) — acceptable for blend phonemes, cannot be avoided
- CHIN, SHIP, THIN are digraph+VC — acceptable for digraph phonemes
- br_bronco single-leg kick: brief, hands-braced — does not violate 5s balance cap

### NEXT STEPS
1. **[P1: Core]** Rebuild `useMasteryStore` — needs sticker progress tracking, attempt history, star counts, 3-hour daily lock
2. **[P1: Core]** Rewire `QuestGrid` to read from `k_grade_content.json`
3. **[P1: Core]** Rebuild missing `useResponsiveScale.ts` for Fire HD 10 layout

---

## [2026-03-16b] Session: Full Audit & Critical Fixes
**Status:** Phase 1 (Core) — Audit complete, critical issues patched

### FIXES APPLIED
1. **`app.json`** — Added `largeHeap: true` to Android config. Fire HD 10 now gets 384MB heap as required.
2. **`.cursorrules`** — Fixed dead file references (status.md, decisions.md, context.md → PROJECT_CONTEXT.md, PATCH_NOTES.md). Added non-coder comms reminder.
3. **`index.tsx`** — Debug "CLEAR STORAGE" button now only visible in developer mode (`__DEV__`). Libby will no longer see it.
4. **`StarlightSpirit.tsx`** — Removed hardcoded fake stats ("Today's Stars: 3", "Weekly Goal: 15/20"). Now shows real total from store.

### KNOWN GAPS DOCUMENTED
- `useResponsiveScale.ts` referenced in March 11 notes but MISSING from project — needs rebuild
- `useMasteryStore` is a stub — needs full sticker tracking before content JSON can be used
- `QuestGrid` shows hardcoded habit buttons — not yet reading from k_grade_content.json
- App orientation locked to portrait in app.json but landscape layout code exists in index.tsx

---

## [2026-03-16] Session: Protocol v2.5 Acknowledgment & Content Sprint Prep
**Status:** Phase 1 (Core) — Codebase indexed, content JSON audit complete
**AI Tools Used:** Cursor + Claude Pro (March 2x promo window, off-peak ET)

### ACCOMPLISHMENTS
1. **Full codebase index:** 58 files mapped across all layers.
2. **k_grade_content.json audit:** Flagged phoneme mismatch on `f_frog` (/h/ vs /f/). Motor milestone check passed (no balance violations).
3. **New rules added:** `non-coder-comms.mdc` — enforces plain-English instructions for Ryan.
4. **PROJECT_CONTEXT.md rebuilt:** Expanded from 6 lines to full living project brain (v2.5).
5. **Content sprint initiated:** Full 24-sticker JSON prompt sent to Claude Pro for generation.

### NEXT STEPS
1. **[P1: Content]** Paste Claude Pro's 24-sticker JSON output into Cursor for validation and commit.
2. **[P1: Content]** Resolve `f_frog` phoneme flag (rename character or swap phoneme).
3. **[P1: Content]** Add Mastered Words list to `PROJECT_CONTEXT.md` once defined.
4. **[P2: Assets]** Create `.skp` sticker assets (snake, frog, and all 24 new animals).

### OPEN FLAGS
- `f_frog`: phoneme /h/ conflicts with character name "Felix Frog"
- `.skp` assets: referenced in JSON but not yet created
- `status.md` / `decisions.md`: referenced in `.cursorrules` but do not exist — use `PROJECT_CONTEXT.md`

---

## [2026-03-11] Session: Core Engine & Scaling
**Status:** Phase 1 (Core) - Functional Draggable Canvas
**Current Machine:** Laptop (Roo Code + DeepSeek Pivot)

### ? ACCOMPLISHMENTS
1. **Model Pivot:** Switched to DeepSeek to preserve Claude credits (96% used).
2. **Scaling Logic:** Deployed \src/hooks/useResponsiveScale.ts\ for Fire HD 10 scaling.
3. **Gesture Engine:** Integrated \
eact-native-gesture-handler\; test circle is draggable.

### ??? NEXT STEPS (The Roadmap)
1. **[P2: Content] Asset Mapping:** Convert \k_grade_content.json\ into a sticker library.
2. **[P2: Content] Image Loading:** Swap the Cyan Circle for Skia \<Image />\ components.
3. **[P1: Core] State Sync:** Ensure dragging updates the Zustand store coordinates.

### ?? AI HANDOFF
- **Claude Reset:** Due in ~22 hours. Use Claude for tomorrow's State Sync logic.
- **Gemini:** Use for sticker asset generation and library mapping.

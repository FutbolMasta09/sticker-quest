## [2026-03-19d] Session: Over-the-Top Color + Character Pass + Star Motivation Emphasis
**Status:** Completed — visual/style pass only, behavior unchanged.

### WHAT CHANGED
1. **Star emphasis upgrades**
   - `src/components/StarCounter.tsx`: brighter gold badge, stronger border/shadow, bigger star count.
   - `src/components/StarlightSpirit.tsx`: more character-themed stat copy and warm celebratory panel styling.
   - `app/quest/[id].tsx`: star picker now uses more playful button colors and stronger “Pick your stars!” motivation copy.
2. **Character-y reward feel**
   - `src/components/Achievements.tsx`: achievement container and chips now use bolder gold/lavender styling and stronger text emphasis.
3. **Debug cleanup**
   - Removed leftover quest debug logging from `app/quest/[id].tsx`.

### QUALITY CHECK
- Lint diagnostics for touched files: clean.
- Scope stayed inside locked gate sequence (Step 3: star motivation emphasis).

### NEXT LOCKED STEP
Step 4 from `docs/NEXT_TASK_TEST_GATE.md`: **Onboarding wording simplification**.

### DEFERRED (INTENTIONAL)
- Deep decoration pass (character polish, effects, final palette tuning) is deferred until after the next feature/screens milestone and a Fire HD device check.

---

## [2026-03-19e] Session: Onboarding Wording Simplification (Phase B Step 4)
**Status:** Completed — copy simplification only, no functional changes.

### WHAT CHANGED
1. **`src/components/OnboardingFlow.tsx`**
   - Simplified welcome copy to a short, parent-friendly setup explanation.
   - Simplified step labels/buttons:
     - "Start Setup"
     - "Continue"
     - "Quick Details"
     - "Finish Setup"
   - Simplified field labels/placeholders for faster parent completion.
   - Kept character tone while removing extra verbosity.

### QUALITY CHECK
- Lint diagnostics for edited file: clean.

### TODAY CARRY-FORWARD / DEFERRED
- **Phase B Step 5 (Fire HD readability sanity pass)** deferred because Fire HD tablet was not available today.
- Resume with Step 5 at next session with tablet access.

### TOMORROW SCHEDULE + CARRY-FORWARD
- **Tomorrow scheduled task:** Friday Community/Business block from weekly plan (KPI update + one community post + monetization/admin check).
- **Carry-forward from today:** Run Fire HD readability sanity pass (Step 5) at first available tablet-access session.
- **Work-ahead status:** On-plan (core Thursday build objectives completed; tablet-only validation deferred by device access).
- **Tomorrow sync tasks:** Run entry checklist, confirm if Fire HD is available, and if available execute Step 5 before opening new polish scope.

---

## [2026-03-19c] Session: Color + Cartoon Visual Pass (Phase B Step 2)
**Status:** Completed — style-only polish, no behavior changes.

### CHANGES APPLIED
1. **`src/components/QuestGrid.tsx`**
   - Added playful card container treatment (lavender panel, rounded border).
   - Increased quest card vibrancy (pink/lavender cards, stronger earned-state gold).
   - Improved text emphasis and lock-state readability.
2. **`src/components/OnboardingFlow.tsx`**
   - Shifted onboarding to a warmer, kid-friendly palette (purple + soft gold accents).
   - Improved chip/input/habit card contrast and button pop.
   - Added soft button/card shadows for cartoon-style depth.
3. **`app/(tabs)/index.tsx`**
   - Applied home background tint and brighter section-header chips.
   - Increased section-title and footer text color contrast.

### QUALITY CHECK
- Lint diagnostics on edited files: clean (no new errors).
- Scope discipline maintained: style-only pass inside locked gate sequence.

### NEXT LOCKED STEP
Step 3 from `docs/NEXT_TASK_TEST_GATE.md`: **Star motivation emphasis** (clearer star gain + total-star feedback).

---

## [2026-03-19b] Session: Temporary API Override Implemented + Runtime-Evidence Debug Pass
**Status:** Execution plan activated for cap window (through 2026-04-16)

### PLAN IMPLEMENTATION COMPLETED
1. **Temporary routing override activated** — updated `.cursor/rules/model-routing.mdc` with cap-window routing: Auto+Composer default, Gemini Flash for lookup, premium API escalation only for critical blockers.
2. **Active gate focus locked** — added `docs/API_CAP_OVERRIDE_PROTOCOL.md` that enforces execution only through the current `docs/NEXT_TASK_TEST_GATE.md` sequence.
3. **Runtime-evidence debug instrumentation added** for tutorial step 2 visibility:
   - `src/components/QuestTutorialOverlay.tsx`: DEV logs for tutorial state, hidden branch path, and step action presses.
   - `app/quest/[id].tsx`: DEV logs for quest render state + star selection and a DEV-only on-screen tutorial step badge for Sally Snake.
4. **Usage guardrails operationalized** — one-objective-per-session and one-verified-increment rules now documented in `docs/API_CAP_OVERRIDE_PROTOCOL.md` and linked to Monday check-in script.
5. **Usage-to-roadmap sync applied**:
   - `PROJECT_CONTEXT.md` updated with temporary cap-window execution section.
   - `docs/ROADMAP_TIMELINE.md` updated with constrained-intensity execution note through reset.
   - `docs/WEEKLY_EXECUTION_TRACKER.md` updated with weekly mode decision: **Upgrade Plan**.
6. **Reset transition prepared** — added `docs/API_RESET_TRANSITION_CHECKLIST.md` for reset-week restore and retrospective.

### CURRENT EXECUTION MODE (LOCKED)
- Weekly mode: **Upgrade Plan** (tighten process, protect quality, no scope expansion).
- Session rule: one technical objective per session, verify before moving on.
- Blocker focus: tutorial step 2 visibility remains the active first objective.

### DEBUG RESOLUTION (2026-03-19)
- Added HTTP + console instrumentation to test 5 hypotheses (stickerId type, tutorialStep flow, visibility, unmount, early exit).
- User repro logs confirmed: step 2 renders and is tappable (`rendering-step2`, `step2-continue-pressed`).
- Hypotheses A, B, C, D, E all rejected by evidence — logic path works correctly.
- Removed all debug instrumentation. Tutorial step 2 flow verified working on iOS Simulator. If Fire HD 10 still fails, treat as device-specific Modal/stacking issue for separate investigation.

---

## [2026-03-19a] Session: Tutorial Spotlight Polish + Pause Handoff
**ONE-TIME NEXT SESSION (FIRST ACTION):** Resume tutorial debugging exactly here:
1. Run `DEV: Reset Tutorial`
2. Go to Sally Snake and advance to quest tutorial step 2
3. Verify orange card + "I'm Ready! Tap a Star! ⭐" button render visibly
4. If still not visible, inspect live state in `src/components/QuestTutorialOverlay.tsx` (step 2 block) before any new redesign

**Status:** In progress — step 1 is acceptable for now, step 2 visual polish still failing on-device.

### ACCOMPLISHMENTS
1. **Home tutorial reliability improved** — added `DEV: Reset Tutorial` in `app/(tabs)/index.tsx` so we can restart tutorial testing quickly.
2. **Scroll-to-top safeguard added** — home screen now auto-scrolls to top when tutorial step 0 starts, so the highlighted card is visible.
3. **Step 0 tutorial visual upgrade shipped** — replaced static pointer with larger animated waterfall chevrons in `src/components/TutorialOverlay.tsx`.
4. **Quest tutorial color pass implemented in code** — rebuilt `src/components/QuestTutorialOverlay.tsx` with stronger kid-focused colors, larger emoji, and action button flow.
5. **No new lint issues introduced** — lint checks on edited tutorial files remained clean.

### OPEN ISSUE (BLOCKING POLISH)
- [ ] **On-device mismatch:** Ryan reports no visible change on quest tutorial step 2 (orange card/button not observed), even though code reflects updated design. Needs device-side verification and targeted fix next session.

### NEXT SESSION PLAN (START HERE)
1. Validate step 2 render path on device with reset flow.
2. Confirm whether stale bundle/cache or layering/visibility issue is hiding the new UI.
3. Apply smallest fix needed, then re-test full tutorial path end-to-end.

---

## [2026-03-18d] Session: Universe Strategy — Expandability + Legal/Ethical Protection
**Status:** Strategy only — no code changes.

### DECISIONS AGREED
1. **Inkborne is an expandable universe, not a single game.** The goal is a Universe OS: one set of core laws, modular lore packs, project-specific story layers. Multiple games, stories, and formats can share the same world without contradiction.
2. **Canon tiers locked as the governance model:**
   - Tier 1 = immutable truths (Palimpsest exists, Authors exist, Ink has consequences)
   - Tier 2 = stable but updateable lore (factions, places, calendar rituals)
   - Tier 3 = run-specific / medium-specific truths (this game's version of events)
3. **Platform agnosticism for the universe.** "Originally mobile" was a hypothesis, not a permanent constraint. Universe and lore design will be platform-agnostic. Platform choices are made per project at launch planning time.
4. **Legal/ethical protection framework needed.** A cross-project "Universe Protection Framework" will be created next session covering:
   - Legal claims guard (no overpromising across any project)
   - IP safety (trademark checks, license logs)
   - Privacy + data rules per project type
   - AI governance (disclosure, moderation, incident response)
   - Business protection (terms/privacy templates, entity/insurance checkpoints)
5. **Platform decisions revisited.** All prior "mobile-first" assumptions are open for review. Every project picks platform by fastest safe launch + lowest compliance overhead + lowest validation cost.

### NEXT SESSION ACTION ITEMS
- [ ] **Create Universe Protection Framework** — cross-project legal/ethical baseline, pre-beta and pre-launch gates, and "no-overpromising" wording standard applied to all Inkborne + Sticker Quest projects
- [ ] **Create Universe Governance Spec** — 1-page format reusable for every Inkborne project: canon tiers, lore registry format, contradiction policy, project inheritance model
- [ ] Start new chat and say: "Create the Universe Protection Framework and Universe Governance Spec for the Inkborne universe and Sticker Quest."

---

## [2026-03-18c] Session: Inkborne Universe Full Audit + Build Plan
**Status:** Strategy + documentation only — no code changes to Sticker Quest.

### ACCOMPLISHMENTS
1. **Full two-pass audit of Inkborne universe completed** — scanned both `inkborne-import-full/Inkborne App/` (Vite React web prototype, v9) and `inkborne-import-full/inkborne-native/` (React Native/Expo migration, Stage 5 complete).
2. **Pass 1 (truth audit) delivered** — lore bible assessed as strong foundation (7.5/10), game assessed as real working prototype at 7/10 quality with 20+ built components and a complete adventure loop.
3. **Pass 2 (build plan) delivered** — concrete MVP path (Stage 6–10), flagship evolution path (Phases 3–5), model stack for runtime AI, scope cuts, and a "do this next" prioritized checklist.
4. **Critical security issue flagged** — Anthropic API key is currently exposed in client (`anthropic-dangerous-direct-browser-access: true`). Must be proxied through Supabase Edge Function before expanding beta.
5. **Sticker Quest reuse items identified** — AppContext pattern, content gate architecture, achievement toast system, accessibility theme system, and living epitaph concept flagged for future Sticker Quest phases.
6. **Inkborne project priority question documented** — Ryan wants to decide: inkborne-native text adventure vs The Anchor's Desk as the post-Sticker Quest lead project. Flagged for dedicated discussion.
7. **Full audit saved** to `docs/INKBORNE_AUDIT_2026_03_18.md`.
8. **PROJECT_CONTEXT.md updated** — Inkborne reuse items added to Future Features Backlog, priority flag added.

### DECISIONS AGREED
- Sticker Quest remains primary through September 2026. No Inkborne build work until post-launch.
- Lore Bible is NOT starting from scratch — extract from `CLAUDE.md`, fill five documented gaps.
- inkborne-native is the lead Inkborne project (most momentum, Stage 5 of 6 complete).
- All three Inkborne projects catalogued: web prototype (origin), inkborne-native (primary), The Anchor's Desk (separate PC/Steam game in Godot).

### OPEN ITEMS FOR NEXT INKBORNE SESSION (post September 2026)
- [ ] **Priority decision:** inkborne-native text adventure vs The Anchor's Desk — which leads?
- [ ] Fix API key exposure (Supabase Edge Function proxy) — BLOCKER before any public beta
- [ ] Wire seasonal calendar into `buildSystem()` — 2 hours, high payoff
- [ ] Wire world state injection into adventure prompts — 1 line, immediate payoff
- [ ] Lore Bible extraction sprint (claude.ai, Opus, 2x window)
- [ ] Voice ID audition session on ElevenLabs

### NOTE FOR AMBER NEXT SESSION
Amber feedback implementation (tutorial, color/cartoon pass, star emphasis, onboarding copy, readability check) remains the first priority when Sticker Quest code work resumes. See `[2026-03-18b]` entry below.

---

## [2026-03-18b] Session: Amber Remote Test Executed (PASS) + Protocol Hardening
**ONE-TIME NEXT SESSION (FIRST ACTION):** Execute Amber feedback build sequence in strict order:
1. Tutorial V1 (first-run guidance, skippable)
2. Color + cartoon visual pass (more vibrant kid appeal)
3. Star motivation emphasis
4. Onboarding copy simplification
5. Fire HD readability check + re-test prep

**Status:** Remote Fire HD validation completed successfully; next session is implementation-focused.

### ACCOMPLISHMENTS
1. **Live Amber remote test completed end-to-end** on Fire HD 10 using backup APK delivery path after tunnel failure.
2. **Smoke path passed fully** — home load, quest open, star selection, return-home, and no freeze/errors.
3. **Persistence verified** — app relaunched, user stayed signed in, and star totals remained intact.
4. **Qualitative feedback captured** — Amber confirmed Libby fit and star engagement, requested tutorial guidance plus more colorful/cartoon-forward visual polish.
5. **Amber logs updated** — `docs/TONIGHT_AMBER_TEST_RESULTS.md` and `docs/AMBER_TEST_HISTORY.md` now reflect real outcomes and next actions.
6. **Session protocol upgraded** — added Amber triage at entry, Amber maintenance at exit, and pre-close safety check when Ryan forgets to request full exit protocol.

### DECISIONS LOCKED
- Keep stars as the core motivation mechanic.
- Prioritize colorful/cartoon visual pass for parent-perceived appeal.
- Add a short onboarding tutorial before broader parent-facing launch tests.

### OPEN ITEMS
- [ ] Run prompt-coaching checkpoint in next session per prior protocol requirement.
- [ ] Implement the five-step Amber feedback build sequence above.

---

## [2026-03-18a] Session: Lint Stabilization + Amber Remote Test Readiness
**ONE-TIME NEXT SESSION (FIRST ACTION):** Prep for Amber call first, then run Amber Fire HD smoke test and complete `docs/TONIGHT_AMBER_TEST_RESULTS.md` live. If primary path fails by minute 10, switch to backup decision flow in `docs/AMBER_REMOTE_TEST_RUNBOOK.md`.
**ONE-TIME NEXT SESSION (SECOND ACTION):** Run prompt-coaching checkpoint: read last session reminder from `docs/PROMPT_WEEKLY_SCORECARD.md`, then log at least one coached task in `docs/PROMPT_COACHING_LOG.md` if any meaningful prompt work happens.
**ONE-TIME NEXT SESSION (THIRD ACTION):** Execute Amber feedback implementation plan in this order: (1) Tutorial V1 (first-run guidance), (2) Color + cartoon visual pass (more color, higher kid appeal), (3) Star motivation emphasis, (4) Onboarding copy simplification, (5) Fire HD readability check + re-test prep.

**Status:** Code quality stabilized; remote test packet fully documented; backup path prepared but requires EAS login/config completion.

### ACCOMPLISHMENTS
1. **Lint stabilized to clean baseline** — `npx expo lint` now passes with 0 errors, 0 warnings after fixing hook-order issue and JSX/unescaped text issues.
2. **Marketing + memory lock completed** — added `docs/MARKETING_STRATEGY.md`, `docs/MARKETING_STRATEGY_TEMPLATE.md` in rules pack, and Anchor repo kickoff trigger checklist in `PROJECT_CONTEXT.md`.
3. **Feedback + AI transparency language documented** — reusable parent and indie copy blocks added, with single-channel feedback intake policy.
4. **Amber remote test packet created** — added:
   - `docs/AMBER_REMOTE_TEST_RUNBOOK.md`
   - `docs/TONIGHT_AMBER_TEST_PACKET.md`
   - `docs/TONIGHT_AMBER_TEST_RESULTS.md`
   - `docs/POST_TEST_BRANCH_PLAN.md`
   - `docs/AMBER_TEST_HISTORY.md`
   - `docs/BACKUP_APK_PLAN.md`
5. **Primary + backup delivery paths defined** — primary is Expo Go + tunnel; backup is preview APK flow with minute-10 switch decision.
6. **Clarification rule made permanent + portable** — added `clarification-gate.mdc` to project rules and starter rules pack; updated `scripts/build-rules-pack.js` so future projects inherit it.
7. **Backup APK groundwork prepared** — `eas.json` added with `preview` APK profile and `production` app bundle profile.

### OPEN ITEMS BEFORE TONIGHT CALL
- [x] Run `npx eas-cli login` (machine currently not logged in).
- [x] Complete EAS first-time Android configure if prompted.
- [x] Confirm whether backup APK link can be generated before call.
- [x] Run live Fire HD smoke test with Amber and log outcome in `docs/TONIGHT_AMBER_TEST_RESULTS.md`.

### TEST OUTCOME + PLAN LOCK (added after live call)
- Fire HD remote smoke test passed on backup APK path.
- Persistence check passed (app reopened, user remained signed in, stars persisted).
- Amber feedback signals:
  - Libby-fit: yes
  - Core engagement: stars are motivating
  - Improvement priority: more colorful/cartoon visual design
  - Launch readiness improvement: add quick tutorial/onboarding guidance
  - Parent market signal: likely interest from other parents after polish
- Next build plan is now locked to the five-step Amber feedback sequence listed in ONE-TIME NEXT SESSION (THIRD ACTION).

---

## [2026-03-17k] Session: Game Design — The Anchor's Desk Concept Locked
**ONE-TIME NEXT SESSION:** Add marketing plans to the roadmap — Sticker Quest (detailed, timely) and The Anchor's Desk (Steam wishlist strategy only, not a full plan). ~20–30 min. See session notes below for context.


**Status:** Design only — no code changes. Parallel track to Sticker Quest.

### ACCOMPLISHMENTS
1. **Game concept locked** — The Anchor's Desk: a text-based roguelike set in the Inkborne Universe. Hybrid of simple roguelike structure (The Hollow Road) with Inkborne skin (Vesper Finch, Oakhaven, redaction mechanic, noir tone).
2. **All five Tier 1 design decisions locked** — Concept, core loop sentence, platform (PC/Steam), engine (Godot), V1 scope boundary (IN/OUT list).
3. **`GAME_DESIGN.md` written** — Full design document covering core loop, Ink resource, Lexical Strictness, document types, turn structure, V1 scope, budget, build timeline, and pre-launch checklist with Tier 1 items complete.
4. **`PROJECT_CONTEXT.md` updated** — Official Roadmap now includes a parallel track section pointing to `GAME_DESIGN.md` and noting that game design work does not compete with Sticker Quest phases.
5. **Solo dev ceiling mapped** — Documented four tiers of complexity for a solo non-coder with AI tools and moderate budget. Saved to Cursor plans.
6. **Utility app debate resolved** — Sticker Quest IS the utility app / first-ship learning experience. Go straight from Sticker Quest to the game.

### DECISIONS MADE
- Platform: PC via Steam (not mobile for V1)
- Engine: Godot (not React Native — purpose-built for games, GDScript is AI-assisted)
- Game timeline anchored to Sticker Quest launch, not a fixed calendar date
- G1–G3 Sticker Quest: post-K backlog only, not planned until K ships
- LLC planning: noted as future goal, not a current design or code decision

### OPEN — INKBORNE TIER 2 CHECKLIST (no urgency, before Sticker Quest launch)
- [ ] Write 3–5 sample document templates in Vesper's voice (~30 min)
- [ ] Name unlockable words 11–15 and draft lore unlock snippets (~20 min)

---

## [2026-03-17j] Session: Prompt Coaching System + Cross-Project Carryover
**Status:** Prompt training workflow implemented and made reusable

### ACCOMPLISHMENTS
1. **Prompt coaching system implemented in `docs/`** — added `PROMPT_COACHING_PLAYBOOK.md`, `PROMPT_TEMPLATE.md`, `PROMPT_COACHING_LOG.md`, `MODEL_ROUTING_CHEAT_SHEET.md`, `PROJECT_PROFILE_TEMPLATE.md`, and `PROMPT_WEEKLY_SCORECARD.md`.
2. **Live coaching loop executed on real Sticker Quest task** — ran draft -> upgraded prompt -> execution -> scoring, and logged the result in `PROMPT_COACHING_LOG.md`.
3. **Session behavior upgraded** — playbook now requires:
   - start-of-session reminder from last session's scorecard
   - end-of-session scorecard summary (what went well + what to improve next)
4. **Cross-project carryover added** — copied prompt coaching docs into `starter/rules-pack/docs/` so new projects inherit the same workflow by default.
5. **Project status cleanup** — updated `PROJECT_CONTEXT.md` to mark the `f_frog` mismatch as resolved (content file already had the fix).

### NEXT STEPS
1. Keep logging each meaningful coached task in `docs/PROMPT_COACHING_LOG.md`.
2. At session start, read and report the "Last Session Reminder" block.
3. At session close, give the scorecard recap and update weekly metrics.

---

## [2026-03-17i] Session: Celebration Overlay + Star Selector Fix + Lessons Log
**Status:** Quest loop polished and fully verified on device

### BUILT
1. **`app/quest/[id].tsx`** — Updated. Replaced single "I Did It!" button with three self-report buttons: "I Tried" (1 star), "I Did It!" (2 stars), "I Nailed It!" (3 stars). Added Starlight celebration overlay: random `sticker_earned` line, sticker emoji, stars earned, animated fade-in (300ms) → hold (1.8s) → fade-out (300ms) → `router.back()`.
2. **`app/(tabs)/index.tsx`** — Fixed. Switched `stars` from `getTotalStars()` function call to an explicit Zustand selector (`state.progress` reduce). Added `useFocusEffect` to force a re-render when the screen comes back into focus after navigation.
3. **`src/components/QuestGrid.tsx`** — Fixed. Switched from `getProgress()` and `getUnlockedCount()` function calls to explicit `state.progress` and inline `completedCount` selectors. Cards now reliably update when returning from quest screen.
4. **`LESSONS_LEARNED.md`** — NEW. Running log of platform bugs and hard-won patterns. 8 entries covering: lineHeight clipping, SafeAreaView vs useSafeAreaInsets, Zustand background screen re-renders, two-store divergence, Animated.sequence pattern, PowerShell heredoc issue, && separator issue.
5. **`session-protocol.mdc`** — Updated. Added LESSONS_LEARNED.md check to session protocol. Added rule to always ask Ryan before running exit checklist.

### TESTED ON DEVICE
- All 5 unlocked stickers + Gus Goat (6th): star buttons work, celebration overlay plays, grid cards and header star count update correctly on return.

### ROOT CAUSE NOTE
Zustand background screen re-render issue: React Navigation deprioritizes re-renders for screens mounted behind the active screen in the stack. Explicit selectors + `useFocusEffect` is the reliable pattern going forward. Documented in LESSONS_LEARNED.md.

---

## [2026-03-17h] Session: Phase 1 Core Loop — Completed and Tested
**Status:** Phase 1 core loop complete and verified on device

### BUILT
1. **`src/components/SessionLockScreen.tsx`** — NEW. Full-screen lock screen for the 3-hour daily limit. Uses Starlight's `daily_limit_reached` voice lines (random pick on mount). Shows total stars earned. Dark purple background. Auto-triggers via 60-second poll in `index.tsx` — lock appears without app restart.
2. **`app/quest/[id].tsx`** — NEW. Quest detail screen. Reads sticker data from `k_grade_content.json` by ID. Shows: animal emoji, sticker name, phoneme badge, CVC word badge, current star count, both motor tasks (gross + fine), all 3 hints in yellow-bordered cards. "I Did It!" button records 1-star attempt and returns to grid. Custom header with back button.
3. **`src/components/QuestGrid.tsx`** — Updated. Sticker cards now navigate to `/quest/[id]` on tap. Removed unused `columns` variable.
4. **`app/(tabs)/index.tsx`** — Updated. `stars` now reads from `useMasteryStore.getTotalStars()` instead of `useUserStore.stars` — single source of truth. Added `SessionLockScreen` gate. Removed unused `moderateScale`.
5. **`components/themed-text.tsx`** — Fixed. Removed hardcoded `lineHeight: 32` from `title` style. This was silently clipping capital letters when `fontSize` was overridden above 32 (e.g., the 38px greeting). Root cause of multi-session "greeting cut off" bug.
6. **`src/components/Achievements.tsx`** — Fixed. Achievement badge text color changed from `#FFD700` to `#5C3800` — gold text on gold badge was unreadable.

### TESTED ON DEVICE
- Lock screen: tested by setting SESSION_LIMIT_MINUTES to 0.17 — triggered instantly on mount as expected (existing session already exceeded limit). Reverted to 180.
- Quest detail screen: tapped sticker → detail screen opened → "I Did It!" → returned to grid with 1 star on card.
- Star counter: confirmed total stars update live after recording attempt. Data persists across reloads.

### KNOWN NOTES
- `useUserStore.stars` is now unused for display — flagged for Phase 1 dead code audit.
- 25 pre-existing lint errors (`react/no-unescaped-entities`) in `VisualStressTest.tsx`, `OnboardingFlow.tsx`, `PerformanceView.tsx`, `SetupPhase.tsx` — not introduced this session, flagged for separate cleanup.
- Animal emojis are placeholders for Phase 2 sticker art.

---

## [2026-03-17g] Session: Phase 1 Core Engine — First Build
**Status:** Phase 1 code — three core files built

### BUILT
1. **`src/hooks/useResponsiveScale.ts`** — NEW. Scale hook for Fire HD 10. Provides `scale()`, `verticalScale()`, `moderateScale()`, `isTablet`. Baseline: 390px wide (iPhone 14). Clamped between 0.75x and 1.9x.
2. **`src/store/useMasteryStore.ts`** — REBUILT from stub. Full sticker progress tracking: stars (0–3), attempts, dates. Session tracking with 3-hour daily lock. Progressive unlock (5 stickers at start, +5 per chapter). Persists to AsyncStorage.
3. **`src/components/QuestGrid.tsx`** — REBUILT. Now reads from k_grade_content.json. Shows all 25 phonics stickers in a responsive grid. Locked stickers greyed out. Star count per sticker. Animal emoji placeholders until Phase 2 art arrives.
4. **`app/(tabs)/index.tsx`** — Updated to use `useResponsiveScale` instead of inline math. Calls `startSession()` on mount via useEffect.

### KNOWN NOTES
- QuestGrid tapping an unlocked sticker does nothing yet — quest flow screen is Phase 2 work
- Animal emojis are placeholders for the real .skp sticker art
- Math stickers (k_math_content.json) not yet wired — phonics only for now

---

## [2026-03-17f] Session: Sticker Earned Celebrations + Copy-Box Rule Update
**Status:** Content update + rule fix

### ACCOMPLISHMENTS
1. **30 sticker_earned celebration lines added** to k_lore_messages.json — v2026.2. Every opener unique, mix of punchy and warm, Starlight personality moments included (tail-wagging joke, "I say that every time").
2. **copy-box-protocol.mdc updated** — External prompts must now ask for design notes/analysis INSIDE the code block, not as separate text. Ryan can copy everything in one click.

---

## [2026-03-17e] Session: Chapter Transitions + Peggy Cameos Committed
**Status:** Content sprint — story chapter arc complete

### ACCOMPLISHMENTS
1. **`k_story_chapters.json` created** — 5 chapter transition scripts and 5 Peggy cameo lines. Version 2026.1.
2. **Peggy's full K arc is now complete** — guilt → hope → effort → pride → joy. Growth moment in cameo_5 (full loop, no bumps).
3. **Story progression tied to star milestones** — chapter unlocks at 5, 10, 15, 20, 25 stars earned.
4. **SEL theme fully delivered** — cameo_4 "I used to feel so bad about the stars, but now I feel strong. Thank you for not giving up on me."

### ALL MAJOR CONTENT SPRINTS COMPLETE
Every planned Claude Pro content sprint for Phase 1 and Phase 2 is now done:
- k_grade_content.json v2026.4 (25 phonics stickers, Ryan/Kira alternation)
- k_math_content.json v2026.1 (15 math stickers)
- k_phonics_audio_scripts.json (50 scripts)
- k_math_audio_scripts.json (30 scripts)
- k_lore_messages.json (60 messages)
- k_story_intro.json (5-scene opening with Starlight + Peggy)
- k_story_chapters.json (5 chapter transitions + 5 Peggy cameos)

### NEXT — PHASE 1 CODE WORK
- Rebuild useMasteryStore (sticker progress, star counts, 3-hour session lock)
- Rewire QuestGrid to read from k_grade_content.json
- Rebuild useResponsiveScale.ts for Fire HD 10

---

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

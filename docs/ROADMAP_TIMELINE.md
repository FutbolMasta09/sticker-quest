# Sticker Quest — Roadmap Timeline

Tracks where the project started, where it is now, and the full schedule to launch and beyond. Update the Progress Tracker and Pace Check at every phase milestone.

---

## PACE CHECK
*(Update at every milestone)*

| Phase / Milestone | Target Date | Actual Date | Status |
|---|---|---|---|
| Phase 1 — Universal Engine | May 2026 | TBD | IN PROGRESS |
| Phase 2 — Content Layer | June 2026 | TBD | NOT STARTED |
| Phase 3 — Motion Verification | July 2026 | TBD | NOT STARTED |
| Libby Private Launch | September 2026 | TBD | NOT STARTED |
| Phase 4 — Public Launch Prep | Oct–Nov 2026 | TBD | NOT STARTED |
| Public Launch (App Store) | Dec 2026 / Jan 2027 | TBD | NOT STARTED |
| Phase 5 — Grade 1 Sprint | Spring 2027 | TBD | NOT STARTED |
| Phase 6 — Grade 2 Sprint | 2027 | TBD | NOT STARTED |
| Phase 7 — Grade 3 Sprint | 2028 | TBD | NOT STARTED |

**Verdict:** ON TRACK — Phase 1 is active and ahead of internal pace. Core quest loop built in first 6 days.

**Temporary execution note (through 2026-04-16):** API capacity is capped for premium routing this cycle. Delivery pace stays active, but workload intensity is constrained to one must-ship objective per session with runtime verification before opening new scope.

---

## SECTION A — Day 1 vs. Today

**Project started:** 2026-03-11
**Last updated:** 2026-03-17

| Area | Day 1 (2026-03-11) | Today (2026-03-17) |
|---|---|---|
| Screens built | 1 (home with draggable circle) | 6+ (home, quest detail, celebration, quest-complete, session lock, onboarding gate) |
| Features working | Gesture engine, Fire HD 10 scaling | Full quest loop: QuestGrid → detail → star self-report → celebration → session lock |
| Stores | Stub useMasteryStore, stub useUserStore | useMasteryStore fully wired (progress, stars, attempts, dates, 3-hour session lock) |
| Content | 2 stub stickers in JSON | 25 phonics stickers + 15 math stickers, 50 phonics audio scripts, 30 math audio scripts, 60 lore messages, 5-scene story intro, chapter transitions, Peggy cameos |
| Backend | None | Supabase Star Mail backend wired |
| Known blockers | Stub stores, hardcoded grid, no quest loop | Math stickers not yet wired to QuestGrid, 27 lint errors, missing .skp sticker art (Phase 2), missing .wav audio files (Phase 2) |
| Phase | Phase 1 (just started) | Phase 1 (in progress, core loop complete) |

---

## SECTION B — Master Timeline

| Phase | Goal | Target Date | Key Deliverables |
|---|---|---|---|
| **Phase 1** | Universal Engine | May 2026 | Quest grid from JSON, mastery store, progressive unlock, session lock, Fire HD 10 scaling, math stickers wired, lint clean |
| **Phase 2** | Content Layer | June 2026 | 40 sticker art files (.skp), 80+ audio files (.wav), Starlight story screens rendered, audio playback wired |
| **Phase 3** | Motion Verification | July 2026 | Camera-based gross motor verification, 100% on-device processing, no data transmission |
| **Libby Private Launch** | K complete for Libby | September 2026 | Full K session works end-to-end, parent PIN gate, 3-hour daily lock, Tier 2 child safety test passed |
| **Phase 4** | Public Launch Prep | Oct–Nov 2026 | COPPA compliance, privacy policy, App Store submission, public onboarding copy |
| **Public Launch** | K on App Store | Dec 2026 / Jan 2027 | App live, Kindergarten content complete, review cycle passed |
| **Phase 5** | Grade 1 Sprint | Spring 2027 | Barnaby + Enchanted Forest content, G1 quest grid, phonics and math for Grade 1 |
| **Phase 6** | Grade 2 Sprint | 2027 | G2 content, new character or world expansion TBD |
| **Phase 7** | Grade 3 Sprint | 2028 | G3 content, app mature and stable |

---

## SECTION B2 — Planning deadlines (monthly & weekly alignment)

**Purpose:** Fixed **planning targets** so monthly reviews and Saturday weekly finalization can work backward from launch and beyond. These are **targets** — the **Pace Check** table (top of file) records what actually happened.

**How to use**

| Cadence | What to do |
|--------|------------|
| **Saturday (weekly)** | Pick tasks that protect the **next upcoming** planning deadline below. Carry-forward from `WEEKLY_EXECUTION_TRACKER` / session notes. |
| **Monthly review** | Compare progress to the next 1–2 deadlines; slide **tentative** calendar blocks if the roadmap slips. See `docs/developer-blueprint/CADENCE_SCHEDULE.md`. |
| **Big-picture calendar** | Block **tentative** week-of / end-of-month markers using these dates (soft, not shame). |

| Milestone | Planning deadline (target) | Notes |
|-----------|---------------------------|--------|
| **Phase 1 — Universal Engine** | **2026-05-31** | End of May — engine + Phase 1 checklist complete |
| **Phase 2 — Content Layer** | **2026-06-30** | End of June |
| **Phase 3 — Motion Verification** | **2026-07-31** | End of July |
| **Libby private launch (K complete)** | **2026-09-30** | End of September — Libby has the app |
| **Phase 4 — Public launch prep** | **2026-11-30** | End of Nov — submission-ready (store copy, privacy, COPPA path) |
| **App Store submission (target)** | **2026-12-31** | End of Dec — submit for review (fits Dec/Jan public window) |
| **Public launch (live)** | **2027-01-31** | End of Jan — app live (aligns with Dec 2026 / Jan 2027 window) |
| **Phase 5 — Grade 1 sprint** | **2027-05-31** | Spring 2027 planning anchor |
| **Phase 6 — Grade 2 sprint** | **2027-12-31** | Year-end planning anchor (adjust when scope firms up) |
| **Phase 7 — Grade 3 sprint** | **2028-12-31** | Long-range anchor (adjust when scope firms up) |

**Rule:** If a deadline becomes unrealistic, **update the plan and the Pace Check** — don’t hide slippage. Scope guardrails in PROJECT_CONTEXT still apply.

---

## SECTION C — Progress Tracker

---

### Phase 1 — Universal Engine
**Target:** May 2026 | **Status:** IN PROGRESS | **Completed:** TBD

**Done:**
- [x] useResponsiveScale (Fire HD 10 scaling)
- [x] useMasteryStore (progress, stars, attempts, dates, 3-hour session lock)
- [x] QuestGrid reading from k_grade_content.json
- [x] Progressive unlock (5 at start, +5 per chapter)
- [x] Quest detail screen (/quest/[id])
- [x] Star self-report (1/2/3 stars)
- [x] Celebration overlay
- [x] Session lock screen with Starlight lore
- [x] Onboarding gate in _layout.tsx
- [x] Supabase Star Mail backend

**Remaining:**
- [ ] Wire math stickers (k_math_content.json) into QuestGrid
- [ ] Fix 27 lint errors (unescaped entities, unused vars)
- [ ] Phase 1 dead code audit (explore.tsx, stress-test.tsx, boilerplate components)
- [ ] Tier 1 device test — Ryan's iPhone
- [ ] Tier 2 device test — Fire HD 10 with Amber and Libby
- [ ] Phase 1 postmortem done
- [ ] Rule upgrade pass done
- [ ] Rules pack rebuilt after upgrade pass

---

### Phase 2 — Content Layer
**Target:** June 2026 | **Status:** NOT STARTED | **Completed:** TBD

- [ ] 25 phonics sticker art files (.skp) created and placed in assets
- [ ] 15 math sticker art files (.skp) created and placed in assets
- [ ] 80+ audio files (.wav) recorded or generated and placed in assets
- [ ] Audio playback wired to quest detail screen
- [ ] Starlight story intro screens rendered (5 scenes)
- [ ] Chapter transition screens rendered
- [ ] Peggy cameo screens rendered
- [ ] All Skia components have useEffect cleanup (SkImage/SkPicture)
- [ ] Device test passed — all content loads on Fire HD 10
- [ ] Phase 2 postmortem done
- [ ] Rule upgrade pass done
- [ ] Rules pack rebuilt after upgrade pass

---

### Phase 3 — Motion Verification
**Target:** July 2026 | **Status:** NOT STARTED | **Completed:** TBD

- [ ] Camera permission flow implemented
- [ ] Gross motor task capture working (on-device only)
- [ ] No camera data transmitted off device — confirmed
- [ ] Motion verification result stored locally in useMasteryStore
- [ ] Fallback path if camera unavailable
- [ ] Device test passed on Fire HD 10 (RAM + camera performance)
- [ ] Phase 3 postmortem done
- [ ] Rule upgrade pass done
- [ ] Rules pack rebuilt after upgrade pass

---

### Libby Private Launch — Kindergarten Complete
**Target:** September 2026 | **Status:** NOT STARTED | **Completed:** TBD

- [ ] Full 15-minute session tested as Libby (end-to-end)
- [ ] Parent PIN gate working
- [ ] 3-hour daily time lock working
- [ ] Child safety checklist passed
- [ ] All TinyStories / mastered words compliance verified
- [ ] No developer jargon visible in UI
- [ ] Tier 2 test session with Amber and Libby in Tennessee — passed
- [ ] Libby has app in her hands

---

### Phase 4 — Public Launch Prep
**Target:** Oct–Nov 2026 | **Status:** NOT STARTED | **Completed:** TBD

- [ ] COPPA compliance reviewed
- [ ] Privacy policy written and linked
- [ ] Public onboarding copy written (no "Uncle Ryan says" references)
- [ ] App Store metadata written (title, description, screenshots)
- [ ] App Store submission completed
- [ ] Review cycle passed
- [ ] Phase 4 postmortem done

---

### Phase 5 — Grade 1 Sprint
**Target:** Spring 2027 | **Status:** NOT STARTED | **Completed:** TBD

- [ ] G1 phonics content JSON complete (Barnaby + Enchanted Forest)
- [ ] G1 math content JSON complete
- [ ] G1 sticker art files created
- [ ] G1 audio files recorded or generated
- [ ] G1 quest grid wired and tested
- [ ] Device test passed on Fire HD 10
- [ ] Phase 5 postmortem done

---

## SECTION D — Marketing Timeline (Execution Plan)

Use this section to keep marketing aligned with build phases and prevent last-minute launch scramble.

### Sticker Quest Marketing Plan (Detailed + Time-Aware)

| Window | Primary Goal | Actions | Exit Criteria |
|---|---|---|---|
| Mar-Apr 2026 (Phase 1 active) | Foundation | Lock core brand message ("Uncle-built for Libby"), collect 5-10 polished in-app screenshots from stable screens, draft one-paragraph app story for future store copy. | Brand one-liner and screenshot folder ready. |
| May-Jun 2026 (Phase 1 -> 2) | Proof of progress | Capture short progress clips (quest loop, celebration, session lock), write parent-facing value bullets (offline, no ads, no tracking), start a changelog-style build diary. | Reusable media pack + value bullets drafted. |
| Jul-Aug 2026 (Phase 3 + soft test prep) | Trust and readiness | Record one complete 10-15 minute test session internally, document safety/privacy statements in plain English, draft private launch announcement copy for family/friends. | Private launch message and trust copy approved. |
| Sep 2026 (Libby private launch) | Private launch storytelling | Share launch story with close circle, collect qualitative parent feedback, log recurring questions to refine future public-facing copy. | Feedback summary with top 5 insights. |
| Oct-Nov 2026 (Phase 4 prep) | Public store readiness | Finalize App Store description, screenshots, and compliance wording; prep simple website/landing page with privacy policy link and "K free forever" positioning. | Submission-ready store package complete. |
| Dec 2026-Jan 2027 (public launch window) | Launch + early traction | Publish launch post, ask early parents for honest reviews, track first 30-day feedback themes and prioritize top 3 fixes. | 30-day post-launch review completed. |

**Operational note:** Before any public posting begins, define one primary feedback intake channel and publish it consistently in every post CTA.

### The Anchor's Desk Marketing Plan (Steam Wishlist Strategy Only)

This is intentionally lightweight and does not compete with Sticker Quest delivery.

| Window (relative to Sticker Quest launch) | Goal | Actions | Exit Criteria |
|---|---|---|---|
| Launch + 0 to 2 months | Audience seed | Reserve game name/handles, post one clear concept pitch ("redact one word, reality changes"), share 2-3 tone snippets to test resonance. | Core pitch validated by initial reactions. |
| Launch + 3 to 5 months | Wishlist page prep | Draft Steam capsule text, collect placeholder key art direction, prepare a short teaser GIF or mock sequence. | Steam page assets checklist ready. |
| Launch + 6 to 8 months | Wishlist activation | Publish Steam page, announce wishlist CTA in devlog updates, post small weekly updates (document snippet + consequence). | Wishlist baseline established and trending weekly. |
| Launch + 9 to 12 months | Pre-release momentum | Share demo timing window, run a tight "wishlist + playtest" beat, iterate store copy based on click-through and wishlist conversion. | Release window supported by active wishlist growth. |

---

## HOW TO UPDATE THIS FILE

**At session close when a milestone is hit:**
- Mark completed items with `[x]`
- Update the Pace Check table with actual dates
- Update Section A "Today" column
- Revise the Verdict line to reflect current pace

**At phase completion:**
- Set phase Status to COMPLETE and fill in actual completion date
- Run a 5-minute postmortem and rule upgrade pass
- Rebuild the rules pack: `npm run rules:pack:build`

**Never delete old entries** — mark them done or note slippage. The history is the point.

# STICKER QUEST: PROTOCOLS MASTER LIST

Your reference card for every protocol in this project.
All protocol rules live in `.cursor/rules/` and are automatically loaded by Cursor.

---

## SESSION PROTOCOLS
*How every work session starts and ends.*

### Enter Session
**File:** `.cursor/rules/session-protocol.mdc`
**Triggers:** Start of every new Cursor chat
1. Check current ET time (peak vs. off-peak)
2. Pull latest from GitHub
3. Read PROJECT_CONTEXT.md
4. Read last 2 PATCH_NOTES entries
5. Surface top open Known Flag
6. Check .env has real values (if Supabase work planned)
7. Give Ryan a 3-line briefing
8. Ask what Ryan wants to work on

### Exit Session
**File:** `.cursor/rules/session-protocol.mdc`
**Triggers:** End of any session where meaningful work was done
1. Update PATCH_NOTES.md
2. Update PROJECT_CONTEXT.md if decisions changed
3. Run linter (`npx expo lint`) — fix errors before committing
4. Flag any new npm packages installed
5. Commit and push to GitHub
6. Give Ryan the "Your next move:" line
7. Flag anything time-sensitive

---

## CONTENT PROTOCOLS
*How new content is created and validated.*

### Claude Pro Sprint
**File:** `.cursor/rules/claude-pro-sprint.mdc`
**Triggers:** Any time Ryan is about to use claude.ai for content generation
1. Check time — confirm peak/off-peak, warn if task may cross peak boundary
2. Confirm deliverable and confirm it's on the priority list
3. Confirm prompt is written and ready in Cursor
4. Tell Ryan exactly what format Claude's output will be in
5. After Ryan pastes output: run Content Addition Checklist, fix issues, commit

**Current priority order (before March 27):**
1. K Math stickers JSON (prompt ready in PATCH_NOTES.md)
2. K audio scripts (50 files)
3. Lore copy (~60 messages)
4. K Math audio scripts (30 files)

### Content Addition Checklist
**File:** `.cursor/rules/feature-checklist.mdc`
**Triggers:** Any time new JSON content is added from Claude Pro
- Schema valid, CVC/concept valid, exactly 3 hints
- Hint 3 starts with "Uncle Ryan says:"
- TinyStories compliant, motor milestone safe
- mastery_gate set, ID naming correct, no duplicates
- sticker_count and version updated

---

## DEVELOPMENT PROTOCOLS
*How code is written and features are built.*

### New Feature Checklist
**File:** `.cursor/rules/feature-checklist.mdc`
**Triggers:** Before writing code for any new feature
- Offline? Skia cleanup? Parent PIN? Child bypass?
- TinyStories? In lore? Fire HD 10 RAM? No overpromising?
- Scope check? Test required?

### Testing Protocol
**File:** `.cursor/rules/testing-protocol.mdc`
**Triggers:** After any change to Skia, stores, navigation, gestures, or layout
- Generates a TEST REQUIRED block with specific steps
- How to start the app: `npx expo start` → scan QR with Expo Go
- How to hard reset: `npx expo start --clear`
- Red errors → use "Debug with AI" button in terminal

---

## SAFETY PROTOCOLS
*What gets checked before a child uses the app.*

### Child Safety Review
**File:** `.cursor/rules/child-safety-review.mdc`
**Triggers:** Before Libby's first test AND before any public release
- Content safety: no hardcoded names, TinyStories, no debug text
- Parent control: PIN gates, graduation requirements, time limits
- Data safety: no external data, offline camera, no tracking SDKs
- Technical: offline mode, Skia cleanup, Fire HD 10 performance
- Pre-public additions: COPPA, privacy policy, CA SB 243 watermark

---

## COMMUNICATION PROTOCOLS
*How I talk to Ryan and make decisions.*

### Non-Coder Communication
**File:** `.cursor/rules/non-coder-comms.mdc`
- Max 3 steps per instruction block
- No tech jargon without plain-English explanation
- Always name the app or website to go to
- Plain English at all times

### Honest Advisor
**File:** `.cursor/rules/honest-advisor.mdc`
- Never agree without explaining why
- Never disagree without specific reasoning
- Challenge assumptions, flag risks, push back on bad ideas
- Ryan is a collaborator, not a client to flatter

### Scope Creep Guard
**File:** `.cursor/rules/scope-creep-guard.mdc`
- Any feature not needed for September 2026 → flagged and parked in backlog
- Format: "⚠️ SCOPE GUARD: [explanation] — added to backlog"

### No Overpromising
**File:** `.cursor/rules/no-overpromising.mdc`
- Never claim the app measures what it cannot verify
- Stars = motor task completion, not phonemic mastery
- Required language patterns documented

---

## TIME PROTOCOLS
*How time-sensitive decisions are handled.*

### Date/Time Check
**File:** `.cursor/rules/datetime-check.mdc`
- Real clock checked before ANY time-sensitive statement
- Peak hours: 8 AM – 2 PM ET weekdays (standard Claude limits)
- Off-peak: before 8 AM / after 2 PM ET weekdays + all weekend (2x fuel)
- Promo ends: March 27, 2026
- If task may cross peak boundary → warn Ryan and ask if he wants to proceed

### Model Routing / Next Move
**File:** `.cursor/rules/model-routing.mdc`
- Every response ends with "Your next move:" pointing Ryan to the right tool
- Routes tasks to: Cursor (code), Claude Pro off-peak (content), Gemini (future assets)

---

## CORE PROJECT RULES
*Always active, always applied.*

| Rule | File | What it enforces |
|---|---|---|
| Project Identity | `project-heart.mdc` | Brand, hardware limits, Skia memory guard |
| Cursor Pro Tools | `cursor-pro-tools.mdc` | Which Cursor feature to use for what |

---

*Last updated: 2026-03-16*
*All rules are in `.cursor/rules/` and load automatically in every Cursor session.*

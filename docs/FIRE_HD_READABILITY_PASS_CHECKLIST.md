# Fire HD Readability Pass Checklist

**Purpose:** Solo sanity pass before or alongside an Amber test. Validates that text, contrast, and tap targets are usable on Fire HD 10 after the color/cartoon visual updates.

**When to run:** When you have the Fire HD 10 in hand (solo or coordinated with Amber).

**Time estimate:** 10–15 minutes.

---

## Pre-Pass Setup

Before opening the app on the tablet:

- [ ] **Build ready** — App runs locally with no red errors (`npx expo start`)
- [ ] **Delivery path chosen:**
  - **Expo Go + tunnel:** `npx expo start --tunnel` → scan QR or open link on Fire HD
  - **Preview APK:** `npx eas-cli build --platform android --profile preview` → install from URL
- [ ] **Reference docs open:** `docs/AMBER_RECURRING_TEST_PACKET.md`, `docs/TONIGHT_AMBER_TEST_RESULTS.md` (if doing Amber call)

---

## Screen-by-Screen Checklist

### 1. Onboarding (if testing fresh install)

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Step labels readable | ☐ | "Start Setup", "Continue", "Quick Details", "Finish Setup" |
| Field labels clear | ☐ | Child name, grade, habits — no tiny text |
| Buttons easy to tap | ☐ | At least 44pt touch target |
| Chip/card contrast | ☐ | Habit chips readable on background |

---

### 2. Home Screen

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Greeting text readable | ☐ | "[Name]'s stars" — not clipped, good size |
| Star counter visible | ☐ | Gold badge, total stars clear |
| Quest cards readable | ☐ | Sticker name, star count, lock state distinguishable |
| Quest card tap targets | ☐ | Cards feel tappable, no accidental misses |
| Tutorial overlay (if shown) | ☐ | Chevrons/pointer clear; "Got it" / "Skip" tappable |
| Section headers | ☐ | "Today's Quests", "Your Stars" — readable |

---

### 3. Quest Detail Screen

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Phoneme badge | ☐ | /s/, /b/, etc. — readable |
| CVC word badge | ☐ | CAT, BUG, etc. — clear |
| Motor task text | ☐ | Gross and fine instructions — no tiny font |
| Hint cards | ☐ | Yellow-bordered hints — contrast OK |
| Star picker buttons | ☐ | "I Tried", "I Did It!", "I Nailed It!" — all tappable |
| Back button | ☐ | Easy to reach, no dead zones |

---

### 4. Celebration Overlay

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Sticker earned message | ☐ | Random Starlight line — readable |
| Stars earned display | ☐ | Clear feedback |
| Fade in/out | ☐ | Not jarring, no flicker |

---

### 5. Session Lock Screen

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Lore message | ☐ | Starlight voice line — readable |
| Total stars shown | ☐ | Clear |
| Dark purple background | ☐ | Text contrast adequate |

---

## Overall Readability

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| No text clipped | ☐ | Greetings, headers, badges — nothing cut off |
| Contrast sufficient | ☐ | Text legible on all backgrounds |
| Tap targets adequate | ☐ | Buttons and cards feel responsive |
| Color/cartoon feel | ☐ | Amber requested "more colorful and cartoony" — does it read that way? |

---

## Pass/Fail Definition

- **Pass:** All checks pass or have only minor nitpicks (document in Notes).
- **Fail:** Any critical check fails (text unreadable, buttons hard to tap, contrast too low). Log exact screen + element and fix before next Amber test.

---

## After the Pass

1. Mark each section Pass/Fail in the tables above.
2. If **Pass:** Update `docs/NEXT_TASK_TEST_GATE.md` — Step 5 complete; consider scheduling Amber follow-up if ready.
3. If **Fail:** Add fixes to next session; do not schedule Amber until pass.
4. Log outcome in `docs/TONIGHT_AMBER_TEST_RESULTS.md` (if Amber was on call) or note in `PATCH_NOTES.md` (solo pass).

---

## Related Docs

- `docs/NEXT_TASK_TEST_GATE.md` — Step 5 is this pass
- `docs/AMBER_RECURRING_TEST_PACKET.md` — Full test flow with Amber
- `docs/AMBER_REMOTE_TEST_RUNBOOK.md` — Delivery paths (tunnel vs APK)
- `docs/BACKUP_APK_PLAN.md` — APK build if tunnel fails

---

*Last updated: 2026-03-21*

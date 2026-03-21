# Amber Test — Step-by-Step Runbook

**Use this every time we test with Amber.** Follow all three sections in order.

**Walk-through rule:** At the start of every Amber test prep, Ryan says: "Walk me through step by step." The AI will:
1. Give a short summary of what we're doing (this test's focus and flow)
2. Then give Step 1 only
3. Wait for Ryan to report back before giving the next step
4. One step at a time — never give multiple steps at once

**End-of-test rule:** When the test is done, the AI will give Ryan a closing summary: what we tested, and pass or fail.

**Script format:** Never give Ryan exact verbatim lines to say. Use bullet points or key points so he can use his own words.

---

## Section 1 — PREP (Before Calling Amber)

Do this before the call starts. Allow 15–30 minutes.

---

### 1.1 Get the app link ready

**Primary path (Expo Go + tunnel):**

1. Open terminal in Cursor at project root.
2. Run: `npx expo start --tunnel`
3. Wait for the QR code and link to appear.
4. Copy the Expo link from the terminal.
5. You will send this to Amber when the call starts.

**Backup path (preview APK) — prepare if tunnel has failed before:**

1. Run: `npx eas-cli build --platform android --profile preview`
2. Wait for build to finish (check [expo.dev](https://expo.dev) builds).
3. Copy the install URL.
4. Send URL to Amber so she can install before or during the call.

**Decision:** If the last test used backup because tunnel failed, consider building the APK 1–2 days before and sending the link early so Amber can install ahead of time.

---

### 1.2 Prepare test-specific instructions

**Fill this in for this specific test** (replace the example with today’s focus):

| Item | For this test |
|------|----------------|
| **What we're validating** | Readability + visual polish — did we address her "more colorful" feedback? |
| **Any new screens or flows** | Same flow as last time; visual updates applied |
| **Special things to watch for** | Does it feel more colorful and kid-friendly? Any readability/contrast issues on Fire HD? |

**Current standard validation order:**
1. Tutorial flow (first-run guidance usable)
2. Decoration/readability (colorful, clear, readable)
3. Core smoke flow (home → quest → star tap → home)
4. Persistence (close/reopen keeps state)

---

### 1.3 Pre-flight checks

**On your side:**
- [ ] App runs locally with no red errors (`npx expo start` works)
- [ ] Link is ready (tunnel running, or APK URL copied)
- [ ] `docs/TONIGHT_AMBER_TEST_RESULTS.md` is open — you will fill this during the call
- [ ] This runbook is open for reference

**Message to Amber before the call:**

> "Thanks again for helping with this test. I have a short session ready. Plan is 25–40 minutes total, but the critical path is only about 12–18 minutes. If setup takes longer, we'll run just the quick smoke path and stop. This build is focused on [today's focus, e.g., readability and visual polish] — more content is planned next."

---

### 1.4 Confirm with Amber (by text before call)

- [ ] Fire HD is charged and on Wi-Fi
- [ ] Time window confirmed (35–50 min for first-time setup, 10–20 min for follow-ups)
- [ ] She has the install link (APK) if you're using backup path

---

## Section 2 — TESTING (During the Call)

Use this script while Amber has the tablet. Total: ~12–18 minutes for core path.

---

### 2.1 Opening the app

**Key points to convey:**
- Short confidence pass: tutorial, how it looks, quick flow, reopen check
- Libby's app first; validating foundation before more polish
- She opens the link (or app) and tells you when she sees the home screen

**Decision point — by minute 10:**
- If the app is **not** open: stop and switch to backup path (send APK link) or schedule a separate install session.
- If the app **is** open: continue with the test steps below.

---

### 2.2 What to test (in order)

**Step A — Tutorial**
- Ask if she sees the tutorial and if it's easy to follow (or skip)
- Pass: sees it, can follow or skip (or skip it without confusion).
- **Fail:** Can't see it, or it’s confusing. Log exact screen and what she said.

**Step B — Decoration / readability**
- Ask if the screen feels colorful, clear, easy to read (before she taps anything)
- Pass: yes or minor nitpicks
- Fail: too plain, hard to read, contrast issues — log what she said

**Step C — Smoke flow**
1. Have her tap one quest card
2. Have her tap a star button (I Tried, I Did It!, I Nailed It!)
3. Ask if it returns to home and feels responsive
- Pass: all three work
- **Fail:** Any step freezes, errors, or doesn’t work. Log exact step and behavior.

**Step D — Persistence**
- Have her close the app fully, reopen it
- Ask if stars and progress are still there
- Pass: yes. Fail: no — log what was missing

**Step E — General**
- Ask if anything looked wrong — have her describe exactly what she saw

---

### 2.3 Pass/fail rules

| Outcome | Rule |
|--------|------|
| **PASS** | Tutorial OK + decoration/readability OK + all 5 smoke steps OK + persistence OK. No freeze, no red error. |
| **FAIL** | Any required step fails, freezes, or throws an error. |

**If anything fails:** Log the exact step, screen, and what Amber said. Do not continue adding new features until that step passes.

---

### 2.4 During the call — log in real time

In `docs/TONIGHT_AMBER_TEST_RESULTS.md`:
- Mark Pass/Fail for each step as you go.
- Add short notes for anything unusual.
- Capture her exact words when something is wrong or unclear.

---

## Section 3 — AFTER TESTING (Post-Call)

Do this right after the call. Allow 5–10 minutes.

---

### 3.1 If the test FAILED

**Analyze what went wrong:**

1. **First failing step:** Which step failed? (tutorial / decoration / smoke 1–5 / persistence)
2. **Exact behavior:** What did Amber see? Freeze? Error text? Wrong screen?
3. **Root cause (best guess):** *(e.g., tunnel dropped / modal not visible on Fire HD / tap target too small)*

**Plan the retest:**
- What needs to be fixed before the next test?
- Add those fixes to your next session.
- Do **not** schedule another Amber test until the failing step is fixed and verified (e.g., on your own device or simulator).

**Update docs:**
- `docs/TONIGHT_AMBER_TEST_RESULTS.md` — set Final outcome: FAIL, record first failing step and next action.
- `docs/AMBER_TEST_HISTORY.md` — add a row with date, outcome FAIL, first failing step, and next action.

---

### 3.2 If the test PASSED

**Ask the two required feedback questions** (if not already answered):

1. What did you like? — Capture her exact words.
2. What do you think we should change? — Capture her exact words.

**Analyze and capture:**
- **What she liked:** Add to `docs/TONIGHT_AMBER_TEST_RESULTS.md` under "What she likes."
- **What she thinks we should change:** Add under "What she thinks we should change."
- Use her words, not paraphrases.

**Optional (if time):** Ask any of these and log answers:
- "As Libby's mom, do you think Libby would enjoy this daily?"
- "Did the tutorial make the first steps clear, or was anything confusing?"
- "Do the colors and character style feel fun and kid-friendly?"
- "What would need to improve before you'd confidently recommend it?"

---

### 3.3 Update all result docs

In `docs/TONIGHT_AMBER_TEST_RESULTS.md`:
- [ ] Session metadata (date, time, device, delivery path)
- [ ] All focus checks and smoke steps marked Pass/Fail
- [ ] Final outcome: PASS or FAIL
- [ ] Recommended next action
- [ ] "What she likes" and "What she thinks we should change" filled in
- [ ] Completion checklist at bottom — all boxes checked

In `docs/AMBER_TEST_HISTORY.md`:
- [ ] Add a new row: date | delivery path | duration | outcome | first failing step (if fail) | next action

---

### 3.4 Decide next steps

| If | Then |
|----|------|
| **PASS** | Mark test gate complete. Use Amber's "likes" and "changes" to prioritize the next build. Unblock next major feature per `docs/NEXT_TASK_TEST_GATE.md`. |
| **FAIL** | Fix the failing step first. Schedule retest only after the fix is verified. |

---

### 3.5 End summary (deliver to Ryan)

When the call is done, give Ryan:

- **What we tested:** Brief list (e.g., tutorial, decoration/readability, smoke flow, persistence).
- **Outcome:** PASS or FAIL.
- **If FAIL:** First failing step and next action.
- **If PASS:** Top feedback (what she liked, what she thinks we should change).


## Quick Reference — File Checklist

| File | When |
|------|------|
| `docs/AMBER_TEST_STEP_BY_STEP.md` | Open at start — follow all three sections |
| `docs/TONIGHT_AMBER_TEST_RESULTS.md` | Open during call — fill live |
| `docs/AMBER_TEST_HISTORY.md` | Update at end — add summary row |
| `docs/FIRE_HD_READABILITY_PASS_CHECKLIST.md` | Use if this test focuses on readability |
| `docs/NEXT_TASK_TEST_GATE.md` | Update if test passes — unblock next work |

---

---

## Walk-Through Protocol (Every Amber Test)

When Ryan says "walk me through step by step" or "prepare for amber call":

1. **Start:** Give a short summary of what we're doing, then Step 1 only.
2. **Prep phase:** Guide him through Section 1 (link, test-specific focus, pre-flight, message).
3. **Testing phase:** Guide him through Section 2 one step at a time — key points only, no verbatim scripts. Wait for him to report back before the next step.
4. **After phase:** When the call ends, guide him through Section 3 — analyze, capture feedback, update docs.
5. **End:** Deliver the closing summary (Section 3.5): what we tested, pass or fail, and top feedback.

Document each step as you go so nothing is skipped.

---

*Last updated: 2026-03-21*

# Amber Remote Test Runbook

Use this when Ryan is in Florida and Amber/Libby are in Tennessee.

---

## Session length estimate

- First remote setup + test: 35-50 minutes total
  - 15-25 min install/setup
  - 10-15 min guided test
  - 5-10 min notes wrap-up
- Follow-up sessions: 10-20 minutes

---

## How Amber gets the test on her tablet

Primary delivery path: Expo Go + tunnel session.

1. Ryan starts the app in tunnel mode from his laptop:
   - `npx expo start --tunnel`
2. Ryan sends Amber the Expo project link shown in terminal output.
3. Amber opens Expo Go on the Fire HD 10 and opens that link.
4. App loads directly in Expo Go for the live smoke test.

Notes:
- This is best for same-day remote testing and quick iteration.
- For later repeat sessions without Ryan online, use a preview install build link.

---

## Backup delivery path (if Expo Go fails)

Backup path: install a preview APK build link and open app directly.

1. Ryan prepares a preview Android build (APK).
2. Ryan sends Amber one install link.
3. Amber installs once and opens app from tablet home screen.
4. Run the same smoke script after install.

Use this backup if:
- Expo Go is unavailable on the device
- tunnel link does not open reliably
- network blocks live bundle loading

---

## Backup APK prep commands (Ryan side)

One-time setup:

1. `npx eas-cli login`
2. `npx eas-cli build:configure`
3. Ensure `eas.json` contains a `preview` profile that builds APK.

Build and share:

1. `npx eas-cli build --platform android --profile preview`
2. Wait for build completion and copy install URL.
3. Send install URL to Amber.

If one-time setup cannot be finished before the call, keep tonight as primary-path test and schedule a short backup-install session later.

---

## Delivery decision tree (tonight)

- T+0 to T+10 min: try primary path (Expo Go + tunnel).
- If not running by T+10: switch to backup path decision.
- If backup build is not ready tonight: run a planning-only call, confirm schedule for install session, and do not force a rushed setup.

---

## Pre-flight checks (before call starts)

Ryan:

1. App starts locally with no red errors.
2. Tunnel link is generated and copied.
3. Test packet docs are open.
4. Results sheet is ready for live logging.

Amber:

1. Fire HD is charged and on stable Wi-Fi.
2. Expo Go is installed (for primary path).
3. Free storage is available for app install/update.
4. 35-50 minute window is reserved with minimal interruptions.

---

## Scheduling message template

Use this text in message form:

"I have a short Sticker Quest test ready. First test is about 35-50 minutes total (setup + quick run). After that, sessions should be 10-20 minutes. Could you send 2 time windows that work this week?"

---

## Ryan prep checklist (before call)

1. Confirm current build status and latest lint pass.
2. Write the exact 3-5 steps Amber should tap through (no dev terms).
3. Prepare a pass/fail checklist for each step.
4. Open a notes file to log results in real time.

---

## Live test script (on call)

1. Open app and reach home screen.
2. Tap one quest card.
3. Tap a star-rating result in quest flow.
4. Return to home screen.
5. Confirm no red errors, no freeze, and no broken navigation.

If setup time is running long, skip extras and run only this smoke path.

---

## Pass/fail checklist

- App opens and stays responsive.
- Quest screen loads correctly.
- Star selection works.
- Return-to-home works.
- No red terminal/runtime errors reported.

If any item fails, log exact screen and action before retrying.

---

## What counts as "test complete"

A session is officially complete only when all are true:

1. All 5 smoke steps have Pass/Fail marked.
2. Any failure includes exact screen + action + error text.
3. Final outcome is set to PASS or FAIL in the results file.
4. A next action is written (ship forward, fix-first, or re-test).

If any one of these is missing, status stays "partial" and needs follow-up.

Additionally, mark delivery path used:
- Primary (Expo Go + tunnel)
- Backup (preview APK install)

---

## Result log template

- Date:
- Device:
- Tester:
- Build version/branch:
- Passed steps:
- Failed steps:
- Error text (if any):
- Next action:

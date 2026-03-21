# Amber Prep — This Call

**Date:** 2026-03-21  
**Test focus:** Second Amber test — readability and visual polish (color/cartoon, star emphasis, onboarding) after her feedback.

---

## Link ready?

**Important:** You currently have `npx expo start` running. That link (`exp://192.168.12.223:8081`) only works on your local network. Amber in Tennessee cannot use it.

**Choose one:**

### Option A — Try tunnel first (primary)
1. Press **Ctrl+C** in the terminal to stop the current Expo server.
2. Run: `npx expo start --tunnel`
3. Wait for the link (starts with `exp://` or shows a URL).
4. Copy that link to send to Amber.

**Note:** Last time the tunnel failed (`TypeError: Cannot read properties of undefined`). If it fails again by minute 10, switch to Option B.

### Option B — Use backup APK (more reliable)
1. Run: `npx eas-cli build --platform android --profile preview`
2. Wait for build at [expo.dev](https://expo.dev) (builds tab).
3. Copy the install URL.
4. Send to Amber **before the call** so she can install ahead of time.

**Recommendation:** If you have 30+ minutes before the call, build the APK now and send the link. That way you're not blocked if tunnel fails again.

---

## Message to send Amber before the call

> Thanks again for helping with this test. I have a short session ready. Plan is 25–40 minutes total, but the critical path is only about 12–18 minutes. If setup takes longer, we'll run just the quick smoke path and stop. This build has the visual updates we talked about — more color, clearer star feedback, simpler onboarding. I'd love to hear if it feels better. More content is planned next.

---

## Pre-flight checklist

- [ ] Link ready (tunnel running, or APK URL sent to Amber)
- [ ] `docs/TONIGHT_AMBER_TEST_RESULTS.md` open — you'll fill during the call
- [ ] `docs/AMBER_TEST_STEP_BY_STEP.md` open for Section 2 (Testing)
- [ ] Amber confirmed: Fire HD charged, Wi-Fi, time window

---

## Test focus for this call

| Step | What to validate |
|------|------------------|
| Tutorial | Still easy to follow? |
| Decoration/readability | **Does it feel more colorful and kid-friendly now?** (Her main ask last time) |
| Smoke flow | Home → quest → star tap → home |
| Persistence | Close/reopen keeps stars |
| After | "What do you like?" and "What do you think we should change?" |

---

*Delete this file after the call or overwrite for next time.*

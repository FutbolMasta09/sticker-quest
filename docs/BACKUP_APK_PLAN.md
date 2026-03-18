# Backup APK Plan (if Expo Go path fails)

Purpose: ensure remote testing can continue even if Expo Go is unavailable on Fire HD.

---

## Goal

Create one Android preview APK install link Amber can open from Tennessee.

---

## One-time prerequisites

1. EAS account login available to Ryan.
2. Project connected to EAS (`build:configure` completed).
3. `eas.json` includes a `preview` APK profile. (Prepared in this repo.)
4. Android app identifier decision confirmed (if prompted during setup).

---

## Build flow

1. Run `npx eas-cli build --platform android --profile preview`.
2. Wait for cloud build to finish.
3. Copy generated install URL.
4. Send URL to Amber.
5. Amber installs and launches from Fire HD home screen.

---

## Timing expectation

- First-time setup: may vary (account/config prompts).
- Build time: may vary by queue/load.
- Install + launch on tablet: typically 5-10 minutes.

---

## Fallback if APK cannot be prepared in time

- Keep tonight as primary Expo Go test attempt.
- If primary fails and backup is unavailable, mark session as partial and schedule a short backup-install session.

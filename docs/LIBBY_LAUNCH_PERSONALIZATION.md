# Libby Launch Personalization

Things to add closer to September 2026, when Libby gets the app as her private gift. Do not build these until nearer launch — personalize at the right moment.

---

## First-time open message

When Libby opens the app for the first time, show a message that the app is a gift from **Aunt Kira and Uncle Ryan**.

- One-time only (first launch)
- Warm, personal, kid-friendly
- Public build: generic or omitted

---

## Birthday message

On Libby's birthday, show a special message (e.g., from Aunt Kira and Uncle Ryan, or Starlight celebrating her).

- **Libby's birthday:** *(add date later)*
- One-time per year (or one-time ever — TBD)
- Warm, celebratory
- **Remind Amber:** When we add this, tell Amber so she makes sure Libby sees it on her birthday
- Public build: generic or omitted

---

## Update delivery (how Amber gets updates)

**Goal:** Push updates without Amber deleting the app or scanning a new QR code. Like a mini "public launch" for Libby — install once, updates arrive automatically.

**Solution:** **EAS Update (Expo Updates)** — over-the-air (OTA) updates. Amber installs the app once (via APK or link). When Libby opens the app, it checks for updates and downloads them in the background. No reinstall, no new QR code. Ryan publishes updates from Cursor/terminal; they roll out on next app open.

**Setup:** Enable `expo-updates` in the project and configure EAS Update. Add to build prep before Libby Launch.

---

## Next session

Discuss additional Libby personalization ideas (graduation message, Star Mail from family, etc.). Confirm EAS Update setup for Libby's version.

---

*Add more personalization notes as we get closer to Libby Launch.*

# LESSONS LEARNED
*Running log of bugs, surprises, and hard-won knowledge from building Sticker Quest.*
*Updated during sessions as new patterns emerge. Reference this before touching related code.*

---

## UI & LAYOUT

### lineHeight must be >= fontSize or text gets clipped
**Discovered:** 2026-03-17 | **File:** `components/themed-text.tsx`
**What happened:** The title style had `lineHeight: 32` hardcoded. When a component overrode `fontSize` to 38, the capital letters ("Hi", "Libby") were physically sliced off at the top — React Native only allocates `lineHeight` worth of vertical space per line, regardless of font size.
**Rule:** Never hardcode `lineHeight` in a base style that other components override. Either omit it (React Native auto-calculates ~1.2× font size) or make it proportional.
**Fix:** Removed `lineHeight: 32` from the `title` style in `ThemedText`.

### useSafeAreaInsets() is more reliable than SafeAreaView in tab screens
**Discovered:** 2026-03-17 | **File:** `app/(tabs)/index.tsx`
**What happened:** `SafeAreaView` with and without `edges` prop failed to reliably push content below the Dynamic Island on iPhone 17 Pro Max when nested inside Expo Router's tab navigator. Multiple fix attempts failed.
**Rule:** Inside tab screens, skip `SafeAreaView`. Import `useSafeAreaInsets` and apply `paddingTop: insets.top + yourPadding` directly to the ScrollView's `contentContainerStyle`. This gives explicit, unambiguous control.

### Text contrast — always check both text AND background color
**Discovered:** 2026-03-17 | **File:** `src/components/Achievements.tsx`
**What happened:** Achievement badge text was `#FFD700` (bright gold) on a `rgba(255,215,0,0.15)` background — gold on gold. Completely unreadable. Only caught on device.
**Rule:** When setting a badge or chip text color, always check it against the badge background, not just the screen background.

---

## ZUSTAND & STATE

### Background screens may not re-render on Zustand updates — use selectors + useFocusEffect
**Discovered:** 2026-03-17 | **Files:** `app/(tabs)/index.tsx`, `src/components/QuestGrid.tsx`
**What happened:** After completing a quest and navigating back, the star count and sticker card didn't update even though `recordAttempt` had correctly updated the store. Root cause: React Navigation can deprioritize re-renders for screens mounted in the background of a navigation stack.
**Fix 1 — Explicit selectors:** Instead of calling store functions like `getTotalStars()` or `getProgress()`, subscribe directly to the state slice:
```tsx
// Fragile — function called on render, may miss updates in background
const stars = useMasteryStore(s => s.getTotalStars());

// Reliable — Zustand tracks this slice precisely
const stars = useMasteryStore(
  state => Object.values(state.progress).reduce((sum, p) => sum + p.stars, 0)
);
```
**Fix 2 — useFocusEffect:** Add a focus listener that forces a re-render when the screen becomes active:
```tsx
const [, forceRefresh] = useState(0);
useFocusEffect(useCallback(() => { forceRefresh(n => n + 1); }, []));
```
**Rule:** Any screen that reads Zustand state AND can be navigated away from should use explicit selectors + `useFocusEffect` as a safety net.

### Two stores can silently diverge — pick one source of truth
**Discovered:** 2026-03-17 | **Files:** `useUserStore.ts`, `useMasteryStore.ts`
**What happened:** `useUserStore.stars` was a simple counter. `useMasteryStore.getTotalStars()` computed the real total from sticker progress. After `recordAttempt` was called, only `useMasteryStore` updated. The header star counter (reading `useUserStore.stars`) showed stale data.
**Rule:** Never maintain the same logical value in two stores. Pick one as the source of truth and delete or deprecate the other. `useUserStore.stars` is now unused and flagged for Phase 1 audit.

---

## NAVIGATION

### router.back() from an animation callback works — but the screen behind must be reactive
**Discovered:** 2026-03-17 | **File:** `app/quest/[id].tsx`
**What happened:** `router.back()` was called from inside `Animated.sequence.start()` callback. Navigation worked fine. The issue was not the async call itself but the background screen's subscription model (see Zustand section above).
**Rule:** Calling `router.back()` from async callbacks (animation, setTimeout, Promise) is safe. If the destination screen looks stale, the fix is in that screen's subscription — not the navigation call.

---

## REACT NATIVE

### Animated.sequence is a playlist — start() callback fires after the last item finishes
**Discovered:** 2026-03-17 | **File:** `app/quest/[id].tsx`
**What happened:** Needed a fade-in → hold → fade-out → navigate back sequence.
**Pattern:**
```tsx
Animated.sequence([
  Animated.timing(anim, { toValue: 1, duration: 300, useNativeDriver: true }),
  Animated.delay(1800),
  Animated.timing(anim, { toValue: 0, duration: 300, useNativeDriver: true }),
]).start(() => router.back()); // fires after fade-out completes
```
**Rule:** The `.start(callback)` fires once after the entire sequence finishes. Use this for "do something after the full animation" patterns.

---

## TOOLING

### PowerShell does not support heredoc (<<'EOF') syntax
**Discovered:** 2026-03-17 | **Context:** git commit messages
**What happened:** `git commit -m "$(cat <<'EOF' ... EOF)"` threw a parser error in PowerShell. This is a bash/zsh syntax that PowerShell does not understand.
**Fix:** Write the message to a temp file and use `-F`:
```powershell
Set-Content -Path "$env:TEMP\commitmsg.txt" -Value "Your message here"
git commit -F "$env:TEMP\commitmsg.txt"
```
**Rule:** On Windows/PowerShell, always use `Set-Content` + `git commit -F` for multi-line commit messages.

### && is not a valid statement separator in older PowerShell
**Discovered:** 2026-03-17 | **Context:** chained shell commands
**What happened:** `cd "path" && npx expo lint` failed with "token '&&' is not a valid statement separator."
**Fix:** Use the `working_directory` parameter in the Shell tool instead of chaining with `&&`. Or use `;` (runs regardless of exit code) if chaining is unavoidable.

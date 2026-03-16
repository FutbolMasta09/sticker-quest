# PENDING CLAUDE PRO SPRINTS

Prompts that have been prepared but not yet run on claude.ai.
Checked automatically at the start of every off-peak session.

**How this works:**
- When a Claude Pro prompt is ready but Ryan wants to run it later, it gets added here.
- At the start of every off-peak session, I surface the top item from this list.
- When a sprint is completed and validated, it gets moved to the COMPLETED section.

---

## QUEUE (Run These Next — In Priority Order)

### 1. K Math Stickers JSON
**Priority:** HIGH — needed before Phase 1 can complete
**Estimated time:** 5–10 minutes on claude.ai
**Prompt location:** PATCH_NOTES.md entry [2026-03-16h]
**Output format:** JSON array of 15 objects, starting with [ ending with ]
**What to do after:** Paste output here in Cursor → Content Addition Checklist → commit to k_grade_content.json
**Added:** 2026-03-16

### 2. K Audio Scripts (Phonics — 50 files)
**Priority:** HIGH — needed for Phase 2
**Estimated time:** 15–20 minutes on claude.ai (may need 2 sessions)
**Prompt:** Not yet written — generate in Cursor before running
**Output format:** JSON array of audio script objects, one per sticker, gross + fine motor instruction text
**What to do after:** Paste here → validate TinyStories compliance → save to audio scripts file
**Added:** 2026-03-16

### 3. Lore Copy (~60 messages)
**Priority:** MEDIUM — needed for Phase 2 before Libby tests
**Estimated time:** 10–15 minutes on claude.ai
**Prompt:** Not yet written — generate in Cursor before running
**Output format:** JSON object with event keys mapped to Starlight's message strings
**What to do after:** Paste here → validate lore voice + TinyStories → save to lore file
**Added:** 2026-03-16

### 4. K Math Audio Scripts (30 files)
**Priority:** MEDIUM — needed for Phase 2, after math stickers are validated
**Estimated time:** 10 minutes on claude.ai
**Prompt:** Not yet written — depends on math stickers being finalized first
**Added:** 2026-03-16

---

## COMPLETED SPRINTS

### K Phonics Stickers JSON (25 stickers)
**Completed:** 2026-03-16
**Result:** Committed to src/assets/k_grade_content.json v2026.3

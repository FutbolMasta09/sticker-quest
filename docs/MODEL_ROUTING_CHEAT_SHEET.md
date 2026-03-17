# Model Routing Cheat Sheet

Use this to reduce waste and keep high-value models for high-value tasks.

## Task -> Best Model

- Codebase discovery ("where is X?"): Gemini Flash with `@Codebase`
- Small code edits (1-3 files): Claude Sonnet
- Complex implementation (stores/navigation/state): Claude Sonnet
- Hard blocker after failed attempts: Claude Opus
- Large content generation (JSON/scripts): external Claude Pro (off-peak when possible)

## Routing Rules

1. Search first with Gemini Flash before coding.
2. Use Sonnet only when writing or fixing code.
3. Escalate to Opus only when Sonnet fails or architecture is unclear.
4. For long-form content, generate outside Cursor and paste results back for validation.

## Escalation Ladder

1. Gemini Flash (discover)
2. Sonnet (implement)
3. Opus (unstick)

## Anti-Waste Checks

Before using premium capacity, ask:

- Is this a search question that Gemini can answer?
- Is this content generation better done in external Claude Pro?
- Is there a clear definition of done so retries are minimized?

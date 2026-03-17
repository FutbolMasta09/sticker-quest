# Model Routing Cheat Sheet

## Task -> Best Model

- Search and discovery: Gemini Flash + `@Codebase`
- Small and medium code edits: Claude Sonnet
- Hard blocker or architecture deadlock: Claude Opus
- Long content generation: external Claude Pro

## Routing Rules

1. Search first with Gemini Flash.
2. Use Sonnet for implementation.
3. Escalate to Opus only when needed.
4. Keep expensive model usage for high-leverage tasks.

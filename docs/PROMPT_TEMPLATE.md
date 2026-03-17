# Prompt Template (Copy/Paste)

Use this structure for code or planning requests.

## Core Template

```md
Task: [one clear objective]

Project context:
- Project: [name]
- Current phase: [phase]
- Relevant files: [path1], [path2]

Constraints:
- Must do: [required behavior]
- Must not do: [forbidden behavior]
- Scope limits: [what is out of scope]

Definition of done:
1. [deliverable 1]
2. [deliverable 2]
3. [verification or output check]

Output format:
- [bullet summary / checklist / table / patch notes]

Model and tool preference:
- Search: [Gemini Flash + @Codebase]
- Implementation: [Claude Sonnet]
- Escalation for hard blocker: [Claude Opus]
```

## Sticker Quest Example (Strong)

```md
Task: Rewire Quest Grid to read live sticker content.

Project context:
- Project: Sticker Quest
- Current phase: Phase 1
- Relevant files: src/components/QuestGrid.tsx, src/assets/k_grade_content.json, src/store/useMasteryStore.ts

Constraints:
- Must do: respect progressive unlock rules
- Must not do: hardcode habit buttons
- Scope limits: do not add new screens

Definition of done:
1. Quest cards render from content JSON
2. Locked cards show locked state
3. Star progress reflects mastery store state

Output format:
- Short change summary plus files changed

Model and tool preference:
- Search: Gemini Flash + @Codebase
- Implementation: Claude Sonnet
```

## Sticker Quest Example (Weak -> Better)

Weak:

```md
Fix the grid stuff and make it better.
```

Better:

```md
Task: Fix Quest Grid so it pulls stickers from `k_grade_content.json`.
Constraints: keep existing style; do not add routes.
Definition of done: cards map from JSON, unlock count follows mastery, locked cards are disabled.
Output format: brief summary + changed files.
```

## Fast Prompt Upgrade Checklist

Before sending, check:

1. One objective only
2. At least two relevant files listed
3. At least one explicit constraint
4. Clear definition of done
5. Output format requested

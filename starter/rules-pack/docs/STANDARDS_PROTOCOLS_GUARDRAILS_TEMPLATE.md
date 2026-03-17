# Standards / Protocols / Guardrails Starter

Use this as a copy-paste starter when beginning a new app or game project in Cursor.

## Why this helps
- Keeps sessions consistent from day one.
- Reduces drift in coding quality and communication style.
- Makes handoffs cleaner when chats get long.

## Starter rule pack (recommended)

Create these files in the new project's `.cursor/rules/` folder:

1. `workflow-rulesheet.mdc` (`alwaysApply: true`)
2. `coding-standards-general.mdc` (`alwaysApply: true`)
3. `communication-style-general.mdc` (`alwaysApply: true`)
4. Project-specific rule files (testing, domain constraints, safety, deadlines)

## Minimal frontmatter template

```md
---
description: Short sentence describing the rule
alwaysApply: true
---
```

## Workflow skeleton
- Session start checks
- In-session update cadence
- Safe editing and git guardrails
- Session close checklist

## Coding standards skeleton
- Smallest viable change first
- Match existing patterns
- Lint/type/test checks after substantive edits
- No destructive actions without approval

## Communication skeleton
- Plain-language explanations first
- 3-step instruction format for user actions
- Honest agreement/disagreement with reasons
- Short progress updates during long work

## How to activate on a new project
**Step 1 — Create a `.cursor/rules` folder in the new project in Cursor.**
Add the three starter `.mdc` files from this repository as your baseline.

**Step 2 — Add one project-specific rule file.**
Define constraints unique to that project (platform limits, privacy, testing requirements).

**Step 3 — Start the first chat with a setup request.**
Say: "Use the rules in `.cursor/rules` as always-on guidance and confirm the active rule set before coding."

## Important note
Rules do not auto-sync across unrelated repositories. Each new project needs this starter pack copied into its own `.cursor/rules/` folder.

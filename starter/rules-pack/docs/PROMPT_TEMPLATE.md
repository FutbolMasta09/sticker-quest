# Prompt Template

```md
Task: [one clear objective]

Project profile:
- Project name: [name]
- Stack: [framework/language]
- Current phase: [phase]
- Primary risks: [risk1], [risk2]
- Non-negotiables: [constraint1], [constraint2]
- Key files for this task: [path1], [path2]

Constraints:
- Must do: [required behavior]
- Must not do: [forbidden behavior]
- Scope limits: [out of scope]

Definition of done:
1. [deliverable 1]
2. [deliverable 2]
3. [verification]

Output format:
- [summary/checklist/table]

Model routing:
- Search: Gemini Flash + @Codebase
- Build/fix: Claude Sonnet
- Hard blocker: Claude Opus
```

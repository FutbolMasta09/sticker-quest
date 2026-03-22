# Research Digest: Building Deep Games with AI Tools and Zero Runtime Costs

**Source:** Claude Opus report (2026) — "Building deep games with AI tools and zero runtime costs"  
**Date captured:** March 2026  
**Purpose:** Capture key takeaways for the project pool. Do not treat as a veto on API-driven projects.

---

## Accuracy Verdict

**Overall: Largely accurate.** Framework rankings, asset pipeline advice, procedural-generation techniques, and case studies are well-supported. Minor caveats: some success examples involve people with technical intuition (not pure non-coders); specific numbers (1,000 jam entries, 8,000 Steam games) should be verified for currency.

---

## Project-Specific Takeaways

| Project | Relevance | Action |
|---------|-----------|--------|
| **Sticker Quest** | Low | No changes. Edtech, not a deep game. Report validates build-time content, zero runtime. |
| **The Anchor's Desk** | High | Validated. Add Steam AI disclosure + file-size discipline to checklists. |
| **Inkborne native** | High (exception) | Report argues zero runtime; Inkborne uses API. Design toward more static structure (storylets, pre-authored scaffolding) to reduce API cost. |
| **Ashen Compact** | High (exception) | Same as Inkborne. Pre-generate structure; API fills variation. |
| **Field Guide** | Medium | Creature/loot patterns, data-driven design apply when in build. |
| **Chronicle Rift** | High | Deckbuilder = Tier 1. Ironhand pattern is a reference when resuming. |

---

## Universal Patterns (All Projects)

- **Data-driven design** — JSON configs for content; logic separate from data. Already in use.
- **Spec-driven development** — Write game rules before generating code. Reinforces GAME_DESIGN.md approach.
- **200–300 line max per file** — Keeps AI context manageable. Apply to Godot scripts.
- **Storylet pattern** (Fallen London) — Preconditions, effects, selection engine. Useful for narrative projects; can reduce API calls in Inkborne/Ashen Compact.

---

## Asset Pipeline (Build-Time AI)

- **Art:** LoRA training for consistent character/style. Midjourney for concept; SD/Flux for production.
- **Music:** Suno Pro (commercial use, stem separation). Udio reportedly restricts offline embedding.
- **Voice/SFX:** ElevenLabs. Commercial license on paid plans.
- **Writing:** Hierarchical generation — world bible → regions → NPCs → dialogue. Ship as static JSON.

---

## Legal & Distribution

- **Steam:** AI disclosure required for player-facing AI content (art, audio, narrative). Code assistants exempt.
- **Copyright:** AI-only works not copyrightable (Thaler). AI-assisted works with substantial human contribution can be protected.
- **Midjourney:** Images public by default; Pro for private generation.

---

## Honest Limits (From Report)

- First 80% fast; last 20% takes 80% of effort — especially with AI-generated code.
- AI degrades as codebases grow. Smaller, focused modules help.
- No true non-coder has yet shipped a commercially successful Steam game purely via vibe coding.
- Recommendation: Learn one framework, master spec-driven development, ship small first.

---

## Reference

Full report: `inkborne-import-full/Research on Building deep games with AI tools and zero runtime costs.pdf`  
Analysis session: March 2026 (Cursor Ask mode)

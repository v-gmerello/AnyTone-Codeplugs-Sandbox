---
description: "Use when creating or changing project Markdown, architecture docs, handoff state, plans, ADRs, or contributor guidance."
applyTo: "**/*.md"
---

# Documentation Instructions

- Write concise, professional Markdown with repository-relative links.
- Keep documentation synchronized with implementation in the same change.
- Do not describe planned functionality as implemented.
- Clearly distinguish implemented, proposed, blocked, and completed work.
- Avoid duplicating large sections; link to the durable source of truth.
- Use Mermaid only when a diagram materially improves understanding.
- Never include secrets, personal codeplugs, DMR IDs, private frequencies, or
  fabricated contact details.
- Keep `docs/CURRENT_STATE.md` concise and operational.
- Keep `docs/CODEBASE_SUMMARY.md` a compressed map of real code and extension
  points.
- Keep `docs/IMPLEMENTATION_PLAN.md` authoritative for phase status and gates.
- Record lasting architecture decisions as ADRs under `docs/decisions/`.
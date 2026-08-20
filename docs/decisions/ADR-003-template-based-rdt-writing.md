# ADR-003: Template-Based RDT Writing

## Status

Accepted

## Context

AnyTone RDT is proprietary and version-dependent. Initial file headers show
related structures between the D878UVII Plus and D168UV, but file lengths and
model/version markers differ. Generating every target byte from incomplete
knowledge risks corruption or unsafe radio behavior.

## Decision

The first native D168UV writer will require a clean target RDT template produced
by the exact supported D168UV CPS profile. It will modify only regions supported
by controlled evidence, preserve unknown regions byte for byte, recalculate
known integrity data, and reparse the result before download.

Support is declared for exact profiles, not model names alone. Unknown profiles
or unresolved structural and RF issues block output.

## Alternatives Considered

- Generate D168UV files from scratch: simpler user input but requires complete
  format knowledge before any safe output.
- Rename or truncate a D878UVII Plus file: easy but ignores different layouts,
  capacities, references, and integrity data.
- CSV-only conversion: safer documented boundary but not the selected first
  product workflow; it remains a possible fallback after model stabilization.

## Consequences

- Users provide both a source codeplug and matching target template.
- Unknown target settings survive while understood programming is replaced.
- Writer progress depends on one-variable-at-a-time sanitized fixtures.
- Every output requires semantic reparse plus CPS and physical read-back
  validation before a profile is advertised.
- A future from-scratch writer requires new evidence and a superseding ADR.

## Date

2026-08-20
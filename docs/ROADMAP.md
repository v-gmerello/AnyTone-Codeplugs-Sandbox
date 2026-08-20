# Roadmap

Roadmap status reflects capability, not calendar promises. Detailed gates and
dependencies live in [Implementation Plan](IMPLEMENTATION_PLAN.md).

## Phase 1 - Core Scaffold

**Status:** COMPLETED.

- React/Vite frontend and Spring Boot backend.
- Health API and browser status workflow.
- Tests, lint, builds, Maven Wrapper, and GitHub Actions.
- Security, architecture, handoff, and contribution documentation.

## Phase 2 - Controlled Format Research

**Status:** BLOCKED pending radio access and sanitized samples.

- Record exact model, CPS, firmware, region, length, and SHA-256.
- Create empty and one-variable-at-a-time RDT fixtures.
- Identify records, occupancy maps, indices, encodings, and integrity behavior.
- Maintain a reproducible evidence ledger and capability matrix.

## Phase 3 - Read-Only RDT Profiles

**Status:** PLANNED.

- Detect exact supported profiles.
- Parse both radio formats with bounded readers.
- Build a canonical immutable model.
- Reject corrupt, truncated, and unknown inputs.

## Phase 4 - Compatibility Planning

**Status:** PLANNED.

- Map radio IDs, contacts, RX groups, channels, zones, and scan lists.
- Rebuild semantic references and apply D168UV limits.
- Report preserved, adapted, decision-required, unsupported, and blocking data.
- Block unsafe RF or structural outcomes.

## Phase 5 - Template-Based D168UV Output

**Status:** PLANNED.

- Require a target template from the exact D168UV CPS profile.
- Modify only understood records and preserve unknown regions.
- Recalculate integrity, reparse output, and compare semantics.
- Produce RDT, manifest, hashes, and compatibility report.

## Phase 6 - Converter UX and API

**Status:** PLANNED.

- Add stateless analyze and convert endpoints under `/api/v1`.
- Add source/template selection, compatibility review, explicit decisions,
  validation, and download.
- Add upload limits, cleanup, and accessible failure behavior.

## Phase 7 - CPS and Radio Validation

**Status:** BLOCKED until converter implementation and physical access.

- Validate minimal output in exact target CPS.
- Review all RF and DMR settings.
- Write minimally, read back immediately, and compare semantics.
- Expand support only for exact verified profiles.

## Phase 8 - Production Hardening

**Status:** PROPOSED.

- Malformed-input, fuzz, property, capacity, and performance tests.
- Dependency and security review.
- License, security contact, compatibility policy, and recovery guidance.
- Initial `0.x.x` release for explicitly verified profiles.

## Phase 9 - Extended Radio Features

**Status:** PROPOSED.

- Roaming, APRS, GPS, Bluetooth, messages, keys, and general settings.
- Additional CPS/firmware profiles.
- Optional CSV fallback if evidence shows value.

Persistence, remote accounts, cloud deployment, direct USB programming, and
firmware operations are not planned without separate product and security
decisions.
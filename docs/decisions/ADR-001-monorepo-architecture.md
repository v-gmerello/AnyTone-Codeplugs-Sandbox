# ADR-001: Monorepo Architecture

## Status

Accepted

## Context

The project needs a React frontend, Spring Boot backend, shared API evolution,
CI, and documentation that stays synchronized. It begins with one product and a
small contributor surface.

## Decision

Keep frontend, backend, GitHub automation, and documentation in one Git
repository. Each application remains independently buildable with its native
toolchain. Cross-application communication occurs only through documented HTTP
contracts.

## Alternatives Considered

- Separate frontend and backend repositories: stronger repository isolation but
  coordinated API and documentation changes would span pull requests.
- One combined build system: convenient root command but adds orchestration and
  coupling before the project needs it.
- Backend-served frontend bundle: simpler deployment artifact but couples
  development and release cycles unnecessarily at this stage.

## Consequences

- API, tests, CI, and docs can change atomically.
- Contributors need both Node.js and Java for full-stack validation.
- CI runs separate jobs so one toolchain does not contaminate the other.
- Repository-wide changes require care to avoid unrelated scope.

## Date

2026-08-20
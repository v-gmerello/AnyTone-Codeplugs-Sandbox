---
description: "Use when adding or changing frontend tests, backend tests, test fixtures, mocks, or validation commands."
applyTo:
  - "frontend/src/**/*.test.{js,jsx}"
  - "frontend/src/test/**/*.js"
  - "backend/src/test/**/*.java"
---

# Testing Instructions

- Test observable behavior and public contracts, not private implementation
  details.
- Keep tests deterministic, independent, focused, and readable.
- Cover success, failure, boundaries, and security-relevant rejection paths.
- Frontend tests use Vitest and React Testing Library from the user's
  perspective.
- Backend tests use JUnit 5, Spring Boot Test, and MockMvc where HTTP behavior is
  involved.
- Do not use real personal codeplugs in tests. Fixtures must be minimal,
  sanitized, documented, and reviewed before versioning.
- Every future RDT format rule requires controlled evidence, a golden case, and
  at least one negative or boundary case.
- Run the narrowest relevant test after editing, then all affected validation
  gates before completion.
- Do not add meaningless context-load tests as a substitute for behavior tests;
  a context smoke test may complement, not replace, contract coverage.
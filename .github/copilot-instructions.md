# Repository Instructions

## Required Context

Before significant work:

1. Read `docs/CURRENT_STATE.md` for the operational handoff.
2. Read `docs/IMPLEMENTATION_PLAN.md` before executing planned work.
3. Read `docs/ARCHITECTURE.md` before architecture changes.
4. Read `docs/CODEBASE_SUMMARY.md` before broad structural changes.
5. Read relevant ADRs under `docs/decisions/`.

## Working Method

- Understand the controlling code path before editing.
- Preserve existing architecture and valid user changes.
- Prefer modifying an existing module over creating duplicate behavior.
- Avoid premature abstractions and unnecessary dependencies.
- Implement the smallest coherent change, test it, document it, and summarize
  the result.
- Do not commit, push, publish releases, or create branches unless requested.

## Architecture

- Keep frontend and backend independently buildable.
- Frontend dependency direction is pages to features to components to API
  services. React components must not call `fetch` directly.
- Backend dependency direction is controller to service to domain, RDT, and
  validation modules. Controllers contain HTTP concerns only.
- Use JavaScript, not TypeScript.
- Use Java 21 and constructor injection. Never use field injection.
- Do not add a database, JPA, Spring Security, authentication, cloud services,
  or deployment infrastructure without an accepted ADR and explicit scope.

## Tests and Validation

- Update tests whenever behavior changes.
- Run the narrowest relevant check immediately after an edit, then run full
  affected-area validation before completion.
- Frontend gates: `npm run lint`, `npm run test`, and `npm run build`.
- Backend gates: `mvnw.cmd test` and `mvnw.cmd package` on Windows.
- Do not add tests that only mirror implementation details.

## Documentation and Handoff

- Treat Markdown documentation as part of the implementation.
- Update `docs/CURRENT_STATE.md` after meaningful changes.
- Update `docs/CODEBASE_SUMMARY.md` after structural changes.
- Update `docs/IMPLEMENTATION_PLAN.md` when phase status changes.
- Update `CHANGELOG.md` for meaningful project changes.
- Create an ADR for decisions that constrain future implementation.
- Distinguish implemented, proposed, blocked, and planned functionality.

## Security and Radio Data

- Never hardcode or commit secrets, credentials, tokens, personal codeplugs,
  DMR IDs, private frequencies, messages, or recovery data.
- Only minimal, reviewed, sanitized fixtures may live under
  `backend/src/test/resources/fixtures/`.
- Do not log uploaded file contents or personal radio identifiers.
- Treat untrusted binary input as hostile: validate size, profile, bounds,
  references, and integrity before processing.
- Never silently alter RF parameters or claim compatibility without evidence
  for the exact radio, CPS, firmware, and format profile.
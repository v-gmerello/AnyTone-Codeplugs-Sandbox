# Architecture Decision Records

ADRs preserve decisions that constrain future implementation and explain why
the chosen direction exists.

## Index

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADR-001-monorepo-architecture.md) | Accepted | Keep frontend, backend, CI, and docs in one repository |
| [ADR-002](ADR-002-local-stateless-processing.md) | Accepted | Process codeplugs locally without application persistence |
| [ADR-003](ADR-003-template-based-rdt-writing.md) | Accepted | Build D168UV output from an exact validated target template |

## Process

Create the next sequential ADR when a decision has durable architectural,
security, compatibility, dependency, or operational consequences. Include
context, decision, alternatives, consequences, and date.

Accepted ADRs are not rewritten to hide history. If a decision changes, create a
new ADR and mark the old record Superseded with a link to its replacement.
---
description: "Use when implementing or reviewing Java and Spring Boot backend code, REST APIs, validation, or RDT processing."
applyTo: "backend/**/*.java"
---

# Backend Instructions

- Target Java 21 and package code under `io.github.vgmerello.anytone`.
- Follow `controller -> service -> domain / rdt / validation` dependency
  direction.
- Keep controllers limited to HTTP mapping, validation, status codes, and DTO
  boundaries. Put orchestration and domain behavior in services.
- Use constructor injection, records for suitable immutable DTOs, composition,
  and no static mutable state.
- Never expose persistence entities through APIs. Do not add persistence until
  the project explicitly requires it.
- Centralize safe error responses. Do not expose stack traces or log secrets,
  uploaded content, DMR IDs, or other personal data.
- Validate every boundary of untrusted binary input and reject unknown RDT
  profiles rather than guessing.
- Add JUnit 5 and Spring tests for behavior, validation, and API contracts.
- Do not add Spring Security, JPA, a database, or external infrastructure unless
  explicitly approved and documented by an ADR.
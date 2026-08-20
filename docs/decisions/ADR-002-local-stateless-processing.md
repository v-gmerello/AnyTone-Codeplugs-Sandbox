# ADR-002: Local Stateless Processing

## Status

Accepted

## Context

Codeplugs may contain DMR IDs, call signs, messages, private frequencies, and
recovery configuration. Conversion does not inherently require accounts,
history, collaboration, or a database.

## Decision

Run the browser and backend locally. Process each future codeplug request
statelessly and do not persist uploaded content or results in an application
database. Do not send codeplug content to external services.

## Alternatives Considered

- Browser-only conversion: strongest locality but Java was selected for the
  backend and binary processing benefits from one controlled server boundary.
- Hosted conversion service: easier access but creates authentication, storage,
  isolation, privacy, and operational obligations.
- Local database history: convenient repeat access but unnecessary retention of
  sensitive content.

## Consequences

- The initial threat model and operations remain small.
- Users run both processes locally.
- Requests must contain all data needed for analysis or conversion.
- Temporary resources require guaranteed cleanup.
- Remote deployment or persistence requires a new ADR and security design.

## Date

2026-08-20
# Security Architecture

## Scope and Trust Model

The current application is a local development service with no accounts,
persistence, uploads, or converter endpoints. Browser input and future RDT files
are untrusted. The application must not be exposed as a multi-user internet
service without a new threat model.

## Current Controls

- No hardcoded credentials or required secrets.
- Environment-based configuration.
- CORS restricted to one configured local origin.
- Stack traces, exception names, and binding details suppressed in responses.
- Centralized safe JSON error handling.
- Minimal dependency set and reproducible lockfiles/wrapper.
- Real `.rdt` and `.csv` files ignored except reviewed fixture paths.
- Build output, logs, keys, and local environment files ignored.
- Stateless architecture with no application database.

## Input Validation

Client-side validation improves usability but is never authoritative. Future
backend upload endpoints must validate:

- request and aggregate file size;
- file count and expected multipart names;
- extension, header signature, exact profile, and expected length;
- every binary read boundary, count, index, and reference;
- text encoding and enum values;
- structural integrity and checksum behavior;
- target RF limits and compatibility decisions.

Unknown profiles, truncated files, overflow, unresolved references, and unsafe
RF changes must fail closed.

## File Handling

Future processing should prefer memory for bounded codeplug sizes. If temporary
files are necessary, use generated names outside web roots, avoid user-provided
paths, set restrictive access, and delete them in guaranteed cleanup. Never
execute, deserialize as objects, or serve uploaded content inline.

## Logging and Errors

Do not log RDT bytes, CSV rows, filenames supplied by users, DMR IDs, call signs,
messages, credentials, tokens, or private frequencies. Log stable event codes,
supported profile names, sizes, timings, and generated correlation IDs only when
needed.

Clients receive actionable but non-sensitive error codes. Server stack traces
remain in controlled local logs and are never API fields.

## Authentication and Authorization

Authentication is intentionally absent because the current product is local and
stores no user data. This is not an authorization design for remote deployment.

Exposing upload or conversion endpoints to other users without authentication,
authorization, isolation, quotas, and request ownership would be a security
vulnerability. Any remote or multi-user architecture requires a dedicated ADR,
threat model, and Spring Security evaluation before implementation.

## CORS

`APP_CORS_ALLOWED_ORIGIN` must contain the exact trusted frontend origin. Do not
configure wildcard production CORS or dynamically reflect `Origin` headers.
CORS does not replace authentication or network access controls.

## Dependency Security

- Review lockfile and Maven changes in pull requests.
- Prefer framework and standard-library capability over new dependencies.
- Run package manager audit and repository security scanning where available.
- Apply supported dependency updates through focused, tested changes.
- Remove unused dependencies promptly.

## Radio Safety

Binary correctness is a security and safety concern. Never silently alter RX/TX
frequency, offset, power, bandwidth, tone, Admit criteria, Color Code, Time Slot,
or Talkgroup. Generated files require structural reparse, compatibility review,
exact CPS validation, minimal radio write, and read-back before broader use.

## Public Reporting

See the root [Security Policy](../SECURITY.md). Do not place vulnerability
details or personal radio data in public issues.
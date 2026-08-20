# Backend

## Architecture

The backend is a Java 21 Spring Boot REST application built with Maven. The
current scaffold exposes health, CORS configuration, Actuator, and centralized
error handling. It has no conversion domain behavior or persistence.

Target dependency direction:

```text
controller -> service -> model / rdt / validation
```

## Package Responsibilities

- `io.github.vgmerello.anytone` - application entry point.
- `config` - Spring adapter configuration such as CORS.
- `controller` - HTTP routes, input validation, status, and DTO boundaries.
- `dto` - immutable external request and response representations.
- `exception` - safe API error representation and centralized handling.
- Future `service` - use-case orchestration and transaction boundaries.
- Future `model` - framework-independent canonical codeplug concepts.
- Future `mapper` - explicit DTO/domain conversion when mapping is non-trivial.
- Future `repository` - persistence only if a persistence requirement is
  accepted; no repository exists in the stateless scaffold.
- Future `rdt` and `validation` - versioned binary adapters and invariants.

Packages are created when they have a concrete responsibility. Empty layers are
not represented by placeholder classes.

## Current Components

- `Application` starts Spring Boot.
- `HealthController` returns an immutable `HealthResponse` record.
- `WebConfiguration` restricts `/api/**` CORS to one configured origin.
- `GlobalExceptionHandler` converts validation and unexpected exceptions into
  stable safe responses and logs unexpected server failures.

## Coding Conventions

- Use Java 21 and constructor injection.
- Prefer immutable values and records for DTOs.
- Keep controllers free of business logic.
- Keep RDT parsing independent of Spring MVC.
- Use composition and explicit interfaces only where multiple implementations
  or a test boundary requires them.
- Do not use field injection or static mutable state.
- Never expose stack traces or sensitive uploaded content to clients or logs.

## Configuration

`application.yml` defines the application name, safe error-response behavior,
Actuator exposure, and the CORS origin. `APP_CORS_ALLOWED_ORIGIN` overrides the
local `http://localhost:5173` default.

## Error Handling

API errors contain:

```json
{
  "timestamp": "2026-08-20T12:00:00Z",
  "code": "VALIDATION_FAILED",
  "message": "The request contains invalid data.",
  "path": "/api/example"
}
```

Unexpected failures return HTTP 500 with a generic message. Future domain
exceptions should receive focused handlers and meaningful non-sensitive codes.

## Testing

`ApplicationTest` verifies Spring configuration startup. `HealthControllerTest`
uses MockMvc to verify status, JSON content type, and body. New services should
have fast unit tests; endpoint behavior should have focused MVC or integration
tests.

Windows commands:

```powershell
.\mvnw.cmd test
.\mvnw.cmd package
```

## Extension Guidelines

Future conversion should enter through versioned controllers and delegate to a
`ConversionService`. Readers first produce a canonical immutable model. A pure
planner then creates an auditable conversion plan. Only a profile-specific
writer may edit binary target records, followed by independent validation and
reparse comparison.

Do not add JPA, a database, Spring Security, or remote storage during native RDT
work unless the product trust model changes and an ADR accepts that change.
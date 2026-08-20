# Dependencies

This document describes architectural dependencies, not generated dependency
trees. Exact versions are controlled by `frontend/package-lock.json` and Spring
Boot dependency management in `backend/pom.xml`.

## Frontend Runtime

### React

- Purpose: declarative component and state model for the browser UI.
- Why: provides the requested UI framework and established testing ecosystem.
- Scope: runtime.

### React DOM

- Purpose: mounts React into the browser document.
- Why: required by the React browser entry point.
- Scope: runtime.

## Frontend Development

### Vite and React Plugin

- Purpose: development server, JSX transformation, and production bundling.
- Why: fast, minimal JavaScript React toolchain.
- Scope: development and build only.

### ESLint, JavaScript Rules, Hooks, and Refresh Plugins

- Purpose: static checks for JavaScript, React hooks, and development exports.
- Why: catches invalid patterns before runtime and CI.
- Scope: development only.

### Vitest and jsdom

- Purpose: test runner and simulated browser environment.
- Why: integrates with Vite and supports fast component tests.
- Scope: development/test only.

### React Testing Library and jest-dom

- Purpose: user-oriented rendering queries and DOM assertions.
- Why: encourages accessible behavior tests instead of implementation coupling.
- Scope: development/test only.

## Backend Runtime

### Spring Boot Starter Web

- Purpose: embedded HTTP server, Spring MVC, and JSON serialization.
- Why: implements the requested REST backend with managed compatible versions.
- Scope: runtime.

### Spring Boot Starter Validation

- Purpose: Jakarta Bean Validation integration.
- Why: provides authoritative backend boundary validation for future requests.
- Scope: runtime.

### Spring Boot Starter Actuator

- Purpose: operational health and application information endpoints.
- Why: establishes a standard process-monitoring baseline.
- Scope: runtime.

## Backend Development

### Spring Boot Starter Test

- Purpose: JUnit 5, Spring Test, MockMvc, assertions, and test utilities.
- Why: supports context and HTTP contract testing with managed versions.
- Scope: test only.

### Spring Boot Maven Plugin

- Purpose: packages an executable Spring Boot JAR.
- Why: provides a reproducible application artifact and run goal.
- Scope: build only.

### Maven Wrapper

- Purpose: selects Maven 3.9.11 without requiring a global Maven installation.
- Why: aligns developer and CI builds.
- Scope: development and CI tooling.

## Excluded Dependencies

The scaffold intentionally excludes TypeScript, routers, global state managers,
UI frameworks, databases, JPA, Spring Security, cloud SDKs, containers, binary
parsing libraries, and deployment tools. Add a dependency only when concrete
behavior requires it, and update this document in the same change.
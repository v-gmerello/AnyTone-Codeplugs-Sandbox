# Current State

## Last Updated

2026-08-20

## Current Architecture

The repository is a monorepo with an independently buildable React/Vite
frontend and Java 21 Spring Boot backend. The browser calls the backend through
a centralized REST client. Processing is designed to remain local and stateless.

## Implemented

- React status workspace with loading, connected, and unavailable states.
- Centralized JSON API client and health service.
- `GET /api/health` returning `{"status":"UP"}`.
- Configurable local CORS and centralized safe API errors.
- ESLint, Vitest, React Testing Library, JUnit 5, MockMvc, and Maven Wrapper.
- GitHub Actions CI, repository templates, Copilot instructions, and public
  engineering policies.
- Architecture, development, security, testing, and handoff documentation.

## Partially Implemented

- None in the scaffold milestone.

## Not Implemented

- RDT upload, inspection, parsing, conversion, or download.
- Radio, CPS, or firmware communication.
- Persistence, authentication, deployment, or production hosting.

## Known Issues

- No software license or private security contact has been selected.
- Exact sanitized RDT fixtures and CPS/firmware metadata are not yet available.
- Native RDT work is blocked until controlled samples can establish the format.

## Technical Debt

- Add RDT evidence and validation documents when format research begins.
- Replace license and security contact placeholders before public distribution.

## Current Branch

`main`

## Important Files

- `README.md` - public entry point.
- `docs/IMPLEMENTATION_PLAN.md` - phase status and validation gates.
- `docs/CODEBASE_SUMMARY.md` - compressed code map.
- `frontend/src/App.jsx` - frontend composition root.
- `frontend/src/services/api/apiClient.js` - HTTP boundary.
- `backend/src/main/java/io/github/vgmerello/anytone/Application.java` - backend
  entry point.
- `.github/workflows/ci.yml` - automated validation.

## Current API Endpoints

- `GET /api/health` - application health contract.
- `GET /actuator/health` - Spring Boot operational health.

## Environment Variables

- `VITE_API_URL` - frontend API base; defaults to `http://localhost:8080/api`.
- `APP_CORS_ALLOWED_ORIGIN` - allowed browser origin; defaults to
  `http://localhost:5173`.

## Tests Status

- Frontend: 3 tests passing for loading, success, and failure states.
- Backend: 2 tests passing for context startup and the health HTTP contract.

## Build Status

- Frontend lint, 3 tests, and Vite production build pass locally.
- Backend tests and executable JAR packaging pass locally on Java 21.
- Live smoke validation passed on ports 5173 and 8080: the health endpoint
  returned HTTP 200, `{"status":"UP"}`, and the configured CORS origin.
- GitHub Actions run `32393537347` passed for scaffold commit `e3035e1`.

## Recent Architecture Decisions

- Use a monorepo for coordinated full-stack and documentation changes.
- Keep codeplug processing local and stateless.
- Plan native D168UV output by modifying a validated target template rather
  than synthesizing unknown binary regions.

## Next Recommended Action

Collect sanitized one-variable RDT fixtures and exact CPS, firmware, and region
metadata for Phase 10 (Controlled RDT Format Research).
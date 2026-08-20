# CI/CD

## Workflow

`.github/workflows/ci.yml` defines continuous integration only. It does not
deploy, publish artifacts, create releases, or require repository secrets.

## Triggers

- Pushes to `main`.
- Pull requests targeting `main`.

Concurrent runs for the same workflow and Git ref cancel older in-progress runs.
Workflow permissions are read-only for repository content.

## Frontend Validation

The `frontend` job uses Ubuntu and Node.js 24:

1. check out source;
2. restore npm cache using `frontend/package-lock.json`;
3. run `npm ci`;
4. run ESLint;
5. run Vitest;
6. build the Vite production bundle.

The job fails on dependency installation, lint, test, or build errors.

## Backend Validation

The `backend` job uses Ubuntu and Temurin Java 21:

1. check out source;
2. restore the Maven dependency cache;
3. mark the Maven Wrapper executable;
4. run backend tests;
5. package the executable JAR without repeating tests.

The job fails on compilation, test, or package errors.

## Expected Result

Both jobs must pass before merge. Local commands in [Development](DEVELOPMENT.md)
mirror CI. A successful local build does not replace remote validation because
clean Linux runners catch lockfile, casing, line-ending, and environment issues.

## Deployment

Deployment is intentionally not configured. Future hosting requires decisions
for privacy, authentication, authorization, storage, TLS, upload isolation,
observability, and cost before a deployment workflow is added.
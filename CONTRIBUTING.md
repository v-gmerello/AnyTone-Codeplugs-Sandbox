# Contributing

Thank you for contributing to AnyTone Codeplug Sandbox. The project handles
radio programming data, so changes must favor traceability, conservative
validation, and reproducible evidence over assumptions.

## Development Setup

Install Git, a supported Node.js release, and Java 21. Then run:

```bash
cd frontend
npm ci
npm run dev
```

In another terminal on Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

See [Development](docs/DEVELOPMENT.md) for complete setup and validation steps.

## Branches

Create focused branches from an up-to-date `main` branch:

- `feature/<short-description>`
- `fix/<short-description>`
- `refactor/<short-description>`
- `docs/<short-description>`

Do not commit directly to a protected `main` branch.

## Commits

Use Conventional Commit prefixes:

- `feat:` for user-visible functionality
- `fix:` for defect corrections
- `docs:` for documentation-only changes
- `test:` for test changes
- `refactor:` for behavior-preserving restructuring
- `chore:` for maintenance
- `ci:` for automation
- `build:` for build-system changes

Keep commits focused and buildable when practical. Never include credentials,
personal codeplugs, DMR IDs, private frequencies, or generated build output.

## Coding Standards

- Follow the dependency directions in [Architecture](docs/ARCHITECTURE.md).
- Keep React rendering separate from API access.
- Keep Spring controllers limited to HTTP concerns.
- Prefer small, explicit modules over premature abstractions.
- Do not add dependencies without documenting their architectural purpose.
- Treat unknown RDT bytes and unsupported settings conservatively.

## Tests

Before opening a pull request, run:

```bash
cd frontend
npm run lint
npm run test
npm run build
```

```powershell
cd backend
.\mvnw.cmd test
.\mvnw.cmd package
```

Behavior changes require tests. Binary-format rules will additionally require
sanitized fixtures, negative cases, and documented evidence.

## Documentation

Documentation is part of the implementation. Update relevant guides whenever
behavior, configuration, architecture, dependencies, or workflows change.
Meaningful changes should also update:

- `docs/CURRENT_STATE.md`
- `docs/CODEBASE_SUMMARY.md` when structure changes
- `docs/IMPLEMENTATION_PLAN.md` when phase status changes
- `CHANGELOG.md` when users or contributors are affected

Create an Architecture Decision Record for choices that constrain future work.

## Pull Requests

Pull requests should explain the problem, solution, test evidence, security
impact, architecture impact, and documentation changes. Keep the scope small
enough to review. Resolve high-priority review findings before merge.

The recommended merge strategy is squash merge to keep `main` concise while
preserving a complete discussion in the pull request.
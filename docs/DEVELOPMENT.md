# Development

## Prerequisites

- Git
- Node.js 20.19+, 22.12+, or a newer supported LTS release
- npm bundled with the selected Node.js release
- Java 21 JDK

Maven is provided through `backend/mvnw` and `backend/mvnw.cmd`.

Verify the toolchain:

```bash
git --version
node --version
npm --version
java --version
```

## Clone the Repository

```bash
git clone https://github.com/v-gmerello/AnyTone-Codeplugs-Sandbox.git
cd AnyTone-Codeplugs-Sandbox
```

## Install Frontend Dependencies

```bash
cd frontend
npm ci
```

Use `npm install` only when intentionally changing dependencies and the lockfile.

## Start the Backend

Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Linux or macOS:

```bash
cd backend
chmod +x mvnw
./mvnw spring-boot:run
```

The backend starts at `http://localhost:8080`.

## Start the Frontend

In another terminal:

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173`. The status panel should change from Checking to
Connected when the backend is available.

## Build

Frontend:

```bash
cd frontend
npm run build
```

Backend on Windows:

```powershell
cd backend
.\mvnw.cmd package
```

Generated output is written to `frontend/dist/` and `backend/target/`; both are
ignored by Git.

## Test and Lint

```bash
cd frontend
npm run lint
npm run test
```

```powershell
cd backend
.\mvnw.cmd test
```

See [Testing](TESTING.md) for scope and conventions.

## Recommended Workflow

1. Read [Current State](CURRENT_STATE.md) and the relevant implementation phase.
2. Create a focused branch from current `main`.
3. Identify the owning module and add or update a behavior-focused test.
4. Implement the smallest coherent change.
5. Run focused validation, then all affected build gates.
6. Update documentation, handoff state, and changelog where relevant.
7. Review `git diff` and `git status` for secrets and generated files.
8. Open a pull request using the repository template.

## Troubleshooting

See [Troubleshooting](TROUBLESHOOTING.md) for ports, CORS, tool versions,
dependency installation, Maven, and test failures.
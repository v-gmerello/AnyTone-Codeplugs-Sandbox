# Troubleshooting

## Frontend Does Not Start

Run `node --version` and confirm it satisfies `frontend/package.json`. Then run
`npm ci` from `frontend/`. Delete `node_modules` and repeat `npm ci` only when
the install is inconsistent; do not delete the lockfile as a first response.

## Backend Does Not Start

Run `java --version` and confirm Java 21. Start from `backend/` with
`.\mvnw.cmd spring-boot:run` on Windows. Inspect the first root-cause exception,
not only the final Maven summary.

## Node.js Version Problems

Use a supported LTS release: Node.js 20.19+, 22.12+, or newer. Version managers
can isolate project runtimes. Reinstall dependencies after changing major Node
versions if native or platform packages behave inconsistently.

## Java Version Problems

`JAVA_HOME` must point to a Java 21 JDK, not a JRE or older JDK.

PowerShell example:

```powershell
$env:JAVA_HOME = "C:\path\to\jdk-21"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
java --version
```

## Port 5173 Is Already in Use

Stop the other Vite process or run:

```bash
npm run dev -- --port 5174
```

Then set `APP_CORS_ALLOWED_ORIGIN=http://localhost:5174` before starting the
backend.

## Port 8080 Is Already in Use

Stop the conflicting process or temporarily start Spring on another port:

```powershell
.\mvnw.cmd spring-boot:run "-Dspring-boot.run.arguments=--server.port=8081"
```

Set `VITE_API_URL=http://localhost:8081/api` and restart Vite.

## CORS Errors

Confirm the browser origin exactly matches `APP_CORS_ALLOWED_ORIGIN`, including
scheme and port. Restart the backend after changing the value. Do not solve CORS
by configuring `*`.

## Backend Unavailable in the UI

1. Open `http://localhost:8080/api/health` directly.
2. Confirm the response is `{"status":"UP"}`.
3. Check `VITE_API_URL` for the `/api` suffix.
4. Restart Vite after changing frontend environment variables.
5. Inspect browser network errors and backend logs without publishing secrets.

## Maven Build Failure

Verify Java 21 and network access to Maven Central. Use the wrapper rather than a
different global Maven version. Run `.\mvnw.cmd test -e` for additional context;
use debug output only locally because it may contain machine paths.

## npm Install Failure

Confirm registry/network access, supported Node.js, and an unchanged lockfile.
Use `npm cache verify`, then retry `npm ci`. Avoid `--force` or disabling audit as
a routine fix.

## Test Failures

Run the failing suite directly, read the first assertion/root cause, and confirm
no local environment override changed behavior. Do not update expectations merely
to make an unexplained regression pass.

## Environment Configuration Problems

Check variable names and process scope. Vite reads values when its process
starts; Spring reads values at backend startup. Local `.env.local` files belong
under `frontend/` and must remain untracked.

## Line Ending or Wrapper Problems

On Unix, run `chmod +x backend/mvnw`. Git attributes normalize `mvnw` to LF and
`mvnw.cmd` to CRLF. Do not rewrite generated wrapper scripts manually.
# Configuration

## Principles

Configuration is externalized, environment-specific, and free of credentials in
Git. Development defaults should make local startup simple without becoming
unrestricted production defaults.

## Environment Variables

| Variable | Application | Default | Purpose |
| --- | --- | --- | --- |
| `VITE_API_URL` | Frontend | `http://localhost:8080/api` | REST API base URL |
| `APP_CORS_ALLOWED_ORIGIN` | Backend | `http://localhost:5173` | Single allowed browser origin for `/api/**` |

`VITE_API_URL` is embedded by Vite at build time. Restart the Vite server after
changing it. `APP_CORS_ALLOWED_ORIGIN` is resolved by Spring at application
startup.

## Frontend Configuration

`frontend/.env.example` contains the supported variable. To override locally,
create `frontend/.env.local`:

```dotenv
VITE_API_URL=http://localhost:8080/api
```

Local `.env` variants are ignored by Git. Only `.env.example` files may be
committed.

## Backend Configuration

`backend/src/main/resources/application.yml` defines:

- application name;
- safe server error behavior;
- Actuator endpoint exposure;
- local CORS default.

PowerShell override example:

```powershell
$env:APP_CORS_ALLOWED_ORIGIN = "http://localhost:4173"
.\mvnw.cmd spring-boot:run
```

For production-like environments, set the exact deployed frontend origin. Do
not use `*` or reflect arbitrary request origins.

## Environment-Specific Configuration

Prefer environment variables supplied by the process manager or deployment
platform. If Spring profiles are introduced, keep non-secret defaults in
versioned `application-<profile>.yml` files and inject secrets separately.

The current project has no production deployment and no secrets.

## Never Commit

- `.env`, `.env.local`, or machine-specific overrides;
- credentials, tokens, API keys, private keys, or certificates;
- personal RDT/CSV files, DMR IDs, messages, or private frequencies;
- logs, temporary uploads, `node_modules`, `dist`, or `target`;
- CPS recovery backups.

Before committing, inspect `git status` and review staged content. See
[Git Workflow](GIT_WORKFLOW.md) for accidental-secret recovery.
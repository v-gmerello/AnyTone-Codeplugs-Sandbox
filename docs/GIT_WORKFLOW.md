# Git Workflow

## Repository Strategy

Use one repository for frontend, backend, CI, and documentation. `main` is the
integration branch and should remain buildable. Protect `main` in GitHub once CI
has completed its first successful run.

## Branches

Create short-lived branches from current `main`:

- `feature/<description>`
- `fix/<description>`
- `refactor/<description>`
- `docs/<description>`

Use lowercase words separated by hyphens. Delete merged branches.

## Commits

Use Conventional Commits:

```text
feat: add codeplug profile inspection
fix: reject truncated channel records
docs: update format evidence protocol
test: cover invalid target references
refactor: isolate binary cursor bounds checks
chore: initialize application scaffold
ci: cache Maven dependencies
build: update Spring Boot
```

Keep commits focused and understandable. Buildable commits are preferred.

## Pull Requests

- Explain problem, solution, testing, architecture, security, and docs impact.
- Keep unrelated formatting or refactoring out of feature changes.
- Require passing frontend/backend jobs where affected.
- Require at least one reviewer for behavior or architecture changes.
- Require an ADR for decisions with durable consequences.
- Require sanitized evidence for RDT format claims.

Squash merge is recommended for focused feature branches. Rebase or update the
branch before merge when required by repository protection rules.

## Review Expectations

Reviewers prioritize correctness, data loss, unsafe RF changes, malformed input,
privacy, dependency direction, tests, and documentation accuracy. Style-only
preferences should not block a correct change that follows repository standards.

## Protected Main Recommendation

Configure GitHub to:

- require a pull request;
- require frontend and backend CI jobs;
- require conversations to be resolved;
- prevent force pushes and branch deletion;
- dismiss stale approvals after material changes;
- restrict bypass to emergency maintainers.

## Sensitive Files Before Commit

Run:

```bash
git status --short
git diff --cached
```

Confirm that `.env*`, codeplugs, CSV exports, keys, logs, `node_modules`, `dist`,
and `target` are absent.

## Accidental Secret Commit

1. Stop sharing and do not push further.
2. Revoke or rotate the credential immediately; deleting Git history alone is
   not sufficient.
3. Contact repository maintainers privately.
4. Remove the file from current tracking and strengthen ignore rules.
5. Coordinate history rewriting with all collaborators if the secret was pushed.
6. Verify caches, forks, releases, CI logs, and artifacts.
7. Document the incident privately without reproducing the secret.

Never paste a secret into an issue, pull request, commit message, or recovery
instruction.
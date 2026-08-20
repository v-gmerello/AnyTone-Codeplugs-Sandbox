# Testing

## Philosophy

Tests protect observable behavior, contracts, validation rules, and high-risk
boundaries. They should be deterministic, focused, and understandable without
reconstructing implementation details.

## Frontend

The frontend uses Vitest, jsdom, React Testing Library, and jest-dom matchers.

Locations:

- `frontend/src/**/*.test.jsx` - component and application behavior.
- `frontend/src/test/setup.js` - shared matcher setup.

Current coverage verifies:

- application rendering;
- health request loading state;
- successful health response;
- failed health request.

Commands:

```bash
cd frontend
npm run test
npm run test:watch
```

Test through roles, names, and visible text. Mock the API service boundary rather
than duplicating `fetch` internals.

## Backend

The backend uses JUnit 5, Spring Boot Test, Spring Test, and MockMvc.

Locations:

- `backend/src/test/java/` - unit, context, and HTTP contract tests.
- Future `backend/src/test/resources/fixtures/` - reviewed sanitized fixtures.

Current coverage verifies:

- Spring application context startup;
- `GET /api/health` returns HTTP 200;
- response content type is JSON;
- response body contains `{"status":"UP"}`.

Windows command:

```powershell
cd backend
.\mvnw.cmd test
```

## What to Test

- Public behavior and API contracts.
- Success, failure, boundaries, and malformed input.
- Mapping and validation rules with meaningful variation.
- Security-relevant rejection paths.
- Accessibility state and user-visible errors.
- Determinism and preservation invariants for future binary output.

## What Not to Test

- Framework behavior already guaranteed by React or Spring.
- Private method structure or incidental CSS implementation.
- Constant getters with no behavior.
- Real user codeplugs or personal data.
- Context startup as a substitute for endpoint or service behavior.

## Future RDT Testing

Each binary rule must have:

1. a minimal sanitized fixture and provenance manifest;
2. controlled before/after samples changing one field;
3. a golden semantic expectation;
4. a malformed, negative, or boundary case;
5. an evidence reference in format research documentation.

Reader tests will cover truncation, length, profile, encoding, index, reference,
and integrity failures. Writer tests will cover parse-write-parse equivalence,
unchanged unknown template regions, deterministic hashes, and target limits.

Automated tests precede CPS validation. CPS validation precedes physical radio
write and read-back.

## CI Expectations

GitHub Actions runs frontend install, lint, tests, and build plus backend tests
and package. A pull request is not ready while an affected validation gate fails.
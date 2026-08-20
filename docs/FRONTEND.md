# Frontend

## Architecture

The frontend is a JavaScript React application built by Vite. It currently
renders one health workspace that proves browser-to-API state handling without
introducing converter behavior.

Dependency direction:

```text
pages -> features -> components
pages/features -> hooks -> services/api
```

## Directories

- `public/` - static browser assets.
- `src/assets/` - assets imported by JavaScript or CSS.
- `src/components/` - reusable presentation components.
- `src/features/` - domain-oriented UI modules; currently system status only.
- `src/hooks/` - reusable React state and effects.
- `src/layouts/` - shared application frames.
- `src/pages/` - route-level screen composition.
- `src/services/api/` - the only backend communication boundary.
- `src/styles/` - global style foundation and tokens.
- `src/test/` - shared test setup.

Create `utils/` only when a framework-independent utility has a real consumer.
Do not create placeholder modules.

## Component Responsibilities

- `App` composes the active layout and page.
- `AppLayout` owns shared page structure, not feature state.
- `HomePage` composes the initial screen and obtains health state.
- `HealthStatusPanel` maps status to accessible presentation.
- `StatusBadge` renders a stable status indicator with text and color.

Components are functional and receive data through props. No router or global
state package is needed for the current single screen.

## State Management Philosophy

Prefer local component state and focused custom hooks. Introduce context only
for genuinely shared state with a clear lifetime. A global state dependency
requires demonstrated cross-feature complexity and an ADR.

`useHealthStatus` owns the health request lifecycle and protects against state
updates after unmount.

## API Usage

`apiClient.js` resolves `VITE_API_URL`, sends consistent `Accept` headers,
parses JSON or text, and throws `ApiError` for unsuccessful responses.
Endpoint modules such as `healthApi.js` express resource-specific calls.

React components and hooks must not call `fetch` directly. New endpoint methods
belong under `services/api/`.

## Styling Approach

Global design tokens and layout styles live in `src/styles/global.css`. The
visual language is a restrained technical workspace: high-contrast surfaces,
teal signal states, amber emphasis, compact monospace technical values, and no
decorative component library.

Use semantic HTML, visible focus, accessible names, text plus color for status,
stable dimensions, and responsive layouts. Prefer CSS classes over inline
styles. Do not add Tailwind, Bootstrap, or a component framework without need.

## Naming Conventions

- Components and component files: `PascalCase.jsx`.
- Hooks: `useFeatureName.js`.
- Service modules: `resourceApi.js`.
- CSS classes: descriptive lowercase BEM-like names.
- Tests: colocated `*.test.jsx` for component-level behavior.

## Testing

Vitest runs in jsdom and React Testing Library exercises behavior visible to the
user. Current tests cover initial rendering, pending health, successful health,
and unavailable health. Mock the service module rather than browser internals.

Commands:

```bash
npm run lint
npm run test
npm run build
```

## Extension Guidelines

Add the future conversion workflow under `src/features/conversion/`. Keep page
composition thin, place multipart calls in a dedicated API service, and model
the workflow as explicit analyze, decision, validation, and download states.
Do not expose a download while blocking compatibility issues remain.
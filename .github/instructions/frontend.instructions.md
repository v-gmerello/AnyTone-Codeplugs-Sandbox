---
description: "Use when implementing or reviewing React, Vite, JavaScript, HTML, or CSS in the frontend application."
applyTo: "frontend/**/*.{js,jsx,css,html}"
---

# Frontend Instructions

- Use JavaScript and functional React components only. Do not add TypeScript.
- Follow `pages -> features -> components -> services/api` dependency direction.
- Put route-level composition in `pages`, domain workflows in `features`, and
  reusable presentation in `components`.
- Keep all backend communication under `services/api`; components must not call
  `fetch` directly.
- Prefer local state and focused hooks. Do not add global state libraries
  without a demonstrated cross-feature need and an ADR.
- Use semantic HTML, accessible names, keyboard navigation, visible focus, and
  text in addition to color for status.
- Keep styling in CSS files, preserve responsive behavior, and avoid inline CSS
  when normal class-based CSS is suitable.
- Add behavior-focused Vitest and React Testing Library coverage for changed UI.
- Avoid unnecessary dependencies, duplicated utilities, and speculative
  converter interfaces.
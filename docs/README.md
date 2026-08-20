# Documentation

This directory is the durable project record. Documents describe only current
behavior as implemented; proposed RDT conversion work is marked accordingly.

## Read First

- [Current State](CURRENT_STATE.md) - concise operational handoff and next step.
- [Codebase Summary](CODEBASE_SUMMARY.md) - compressed map of modules and rules.
- [Implementation Plan](IMPLEMENTATION_PLAN.md) - phased execution source of truth.
- [Architecture](ARCHITECTURE.md) - durable boundaries and dependency direction.

## Getting Started

- [Development](DEVELOPMENT.md) - prerequisites, setup, run, and build commands.
- [Configuration](CONFIGURATION.md) - environment variables and defaults.
- [Troubleshooting](TROUBLESHOOTING.md) - common local failures and remedies.

## Architecture

- [Frontend](FRONTEND.md) - React structure, state, API, CSS, and tests.
- [Backend](BACKEND.md) - Spring Boot layers, conventions, and extension points.
- [API](API.md) - HTTP conventions and current endpoints.
- [Dependencies](DEPENDENCIES.md) - significant runtime and development libraries.

## Development Management

- [Roadmap](ROADMAP.md) - completed, planned, and proposed product phases.
- [Current State](CURRENT_STATE.md) - what works now and what does not.
- [Codebase Summary](CODEBASE_SUMMARY.md) - AI and developer context recovery.
- [Implementation Plan](IMPLEMENTATION_PLAN.md) - tasks, gates, risks, and status.

## Engineering

- [Testing](TESTING.md) - test strategy and commands.
- [Security](SECURITY.md) - trust boundaries and secure defaults.
- [Git Workflow](GIT_WORKFLOW.md) - branches, commits, reviews, and recovery.
- [CI/CD](CI_CD.md) - GitHub Actions behavior; deployment is not configured.
- [Versioning](VERSIONING.md) - Semantic Versioning policy.

## Architecture Decisions

- [Decision Index](decisions/README.md)
- [ADR-001: Monorepo Architecture](decisions/ADR-001-monorepo-architecture.md)
- [ADR-002: Local Stateless Processing](decisions/ADR-002-local-stateless-processing.md)
- [ADR-003: Template-Based RDT Writing](decisions/ADR-003-template-based-rdt-writing.md)
# Architecture

The application is a small Express server that exposes a
REST API for managing student tasks.

- `src/index.js` — HTTP entrypoint and route definitions
- `src/store.js` — file-backed task persistence
- `src/calc.js` — total and utility helpers
- `src/auth/` — minimal username/password helpers
- `components/` — shared UI modules
- `config/` — environment and backup configuration
- `assets/` — media files used by the front end

## Data flow

Requests arrive at `src/index.js`, call the store, and return JSON.

## Security notes

Password hashing is intentionally simplified for education.
Do not reuse this pattern in production.

> Everything is scoped to a single repository, so version control
> history is part of the project's implementation, not an afterthought.

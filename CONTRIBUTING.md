
# Contributing to Prismotive

Thank you for your interest in contributing to Prismotive.

Prismotive is an open-source TypeScript library for
browser-based visual effects.

## Development Requirements

- Compatible Node.js LTS version
- npm
- Git
- A code editor with TypeScript support

## Local Setup

Clone the repository:

```bash
git clone https://github.com/devigitlearn/prismotive.git
cd prismotive
npm ci
```

Install the Chromium browser used for tests:

```bash
npx playwright install chromium
```

## Development Commands

| Command | Purpose |
|---|---|
| `npm run typecheck` | TypeScript validation |
| `npm run lint` | Static analysis |
| `npm run format:check` | Formatting verification |
| `npm test` | Unit and integration tests |
| `npm run test:browser` | Browser tests |
| `npm run test:all` | All tests |
| `npm run build` | Library build |

## Contribution Guidelines

1. Open an issue before proposing a significant new feature.
2. Keep changes focused on the stated problem.
3. Do not modify unrelated files.
4. Add tests for new behaviour and bug fixes.
5. Preserve public API compatibility unless a breaking change
   is explicitly approved.
6. Follow the established architecture and formatting conventions.
7. Update relevant documentation when behaviour changes.

## Before Submitting a Pull Request

Run:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test:all
npm run build
```

## Commit Messages

Use descriptive commit messages.

Examples:

- `feat: add custom theme validation`
- `fix: prevent duplicate scheduler registration`
- `test: cover particle expiration edge cases`
- `docs: document animation lifecycle`

## Architecture Decisions

Significant architectural changes should be documented using
Architecture Decision Records in `docs/adr/`.

## Security

Please refer to SECURITY.md for vulnerability reporting guidance.

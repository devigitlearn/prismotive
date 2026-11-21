
# Prismotive — Architecture Decision Registry

This directory contains Architecture Decision Records (ADRs)
for Prismotive.

## Status Definitions

- **Accepted:** Decision approved and documented.
- **Planned:** Decision identified; detailed ADR pending.
- **Superseded:** Replaced by a newer ADR.
- **Rejected:** Considered but not adopted.

## ADR Index

| ID | Decision | Status |
|---|---|---|
| ADR-0001 | Modular architecture | Accepted |
| ADR-0002 | Hybrid CSS and Canvas rendering | Accepted |
| ADR-0003 | Shared animation scheduler | Accepted |
| ADR-0004 | Shared lifecycle contracts | Planned |
| ADR-0005 | Centralised theme engine | Planned |
| ADR-0006 | ESM-first distribution | Planned |
| ADR-0007 | SSR-safe imports | Planned |
| ADR-0008 | Vite, Vitest and Playwright | Planned |
| ADR-0009 | Single-package repository | Planned |
| ADR-0010 | Function-based public API | Planned |
| ADR-0011 | Single-target instances | Planned |
| ADR-0012 | Typed configuration defaults | Planned |
| ADR-0013 | Hexadecimal colour validation | Planned |
| ADR-0014 | Atomic partial updates | Planned |
| ADR-0015 | Restricted public exports | Planned |
| ADR-0016 | Structured errors | Planned |
| ADR-0017 | Instance ownership | Planned |
| ADR-0018 | Idempotent destruction | Planned |
| ADR-0019 | Independent automatic suspension | Planned |
| ADR-0020 | Transactional initialisation | Planned |
| ADR-0021 | Scheduler failure isolation | Planned |
| ADR-0022 | Detached target cleanup | Planned |
| ADR-0023 | Runtime configuration validation | Planned |
| ADR-0024 | Bounded rendering workloads | Planned |
| ADR-0025 | Consumer DOM ownership | Planned |
| ADR-0026 | Asynchronous error reporting | Planned |
| ADR-0027 | Public documentation separation | Planned |

## ADR Numbering Rules

1. Never reuse an existing ADR identifier.
2. Never renumber existing ADRs.
3. Document significant architectural changes.
4. Supersede outdated decisions instead of silently rewriting them.
5. Keep implementation details separate from architectural rationale.

## New ADR Template

Each ADR should include:

- Title
- Status and date
- Context
- Decision
- Alternatives considered
- Rationale
- Consequences
- Verification requirements, where applicable

The next available identifier is ADR-0028.

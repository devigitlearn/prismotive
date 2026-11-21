
# ADR-0001: Modular, Framework-Independent Architecture

- Status: Accepted
- Date: 2026-11-21

## Context

Prismotive provides multiple animation effects that share
configuration, themes, lifecycle management, and resource cleanup.

The library must support different frontend frameworks without
depending on any particular framework.

## Decision

Adopt independent effect modules supported by a shared core.

Effect engines must not depend directly on one another.

The public API will be framework-independent.

## Alternatives Considered

1. Framework-specific React components
2. A single monolithic animation engine
3. Independent effect modules with shared infrastructure

## Rationale

The modular approach supports:

- Independent testing
- Reusable shared infrastructure
- Clear ownership boundaries
- Tree-shaking opportunities
- Future effect additions

## Consequences

Positive:

- Improved maintainability
- Reduced coupling between effects
- Framework-independent integration

Trade-offs:

- Shared contracts require careful design.
- Module boundaries must be maintained.
- Tree shaking must be verified, not assumed.

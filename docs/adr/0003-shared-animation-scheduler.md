
# ADR-0003: Shared Canvas Animation Scheduler

- Status: Accepted
- Date: 2026-11-21

## Context

Multiple wave and cursor trail instances may run simultaneously.

Independently managed animation loops increase lifecycle
management complexity.

## Decision

Canvas effects will use a shared animation scheduler based
on `requestAnimationFrame()`.

The scheduler will coordinate registered rendering tasks.

CSS border animations will not use the Canvas scheduler.

## Alternatives Considered

1. One animation loop per instance
2. Shared scheduling for Canvas effects
3. Fixed-interval timer scheduling

## Rationale

Shared scheduling provides consistent timing and centralised
registration, suspension, and cleanup.

The scheduler will maintain at most one pending frame request
per document per loaded Prismotive library copy.

## Consequences

Positive:

- Centralised lifecycle coordination
- Consistent frame timestamps
- Easier idle-state management
- Predictable scheduler ownership

Trade-offs:

- Scheduler implementation is more complex.
- A failing task must not interrupt other tasks.
- Shared scheduling does not automatically guarantee better FPS.

## Verification Required

- Task registration and removal
- Frame timestamp handling
- Idle scheduler suspension
- Failure isolation
- Cleanup after destruction
- Multiple simultaneous animations

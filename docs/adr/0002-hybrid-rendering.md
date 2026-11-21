
# ADR-0002: Hybrid CSS and Canvas Rendering

- Status: Accepted
- Date: 2026-11-21

## Context

Prismotive includes animated borders, flowing waves,
and interactive cursor trails.

These effects have different rendering requirements.

## Decision

Use:

- CSS for animated borders
- Canvas 2D for animated waves
- Canvas 2D for cursor trails

## Alternatives Considered

1. CSS for every effect
2. Canvas for every effect
3. WebGL for every effect
4. Hybrid CSS and Canvas 2D rendering

## Rationale

CSS is suitable for styling and animating HTML borders.

Canvas 2D provides direct control over mathematical wave
rendering and particle drawing.

A hybrid approach avoids unnecessary rendering complexity.

## Consequences

Positive:

- Rendering technology matches the effect.
- Border effects can use native CSS animation.
- Canvas supports independent wave and particle calculations.

Trade-offs:

- Two rendering approaches must be maintained.
- Browser compatibility must be tested.
- CSS style isolation requires careful design.
- Canvas resolution and memory usage must be managed.

## Verification Required

- Border layout preservation
- Canvas rendering behaviour
- Browser compatibility
- Animation performance
- Accessibility behaviour

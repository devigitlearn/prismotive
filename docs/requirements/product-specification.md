
# Prismotive — Product Specification

**Status:** Approved design baseline  
**Initial version:** 0.1.0  
**Target stable release:** 1.0.0

## Vision

Prismotive is a lightweight, framework-independent TypeScript library
for animated borders, flowing waves, and interactive cursor trails
with customisable colour themes.

**Tagline:** Colour in motion.

## Problem Statement

Developers who need decorative animations often implement custom
CSS or Canvas logic or combine several specialised libraries.

Prismotive aims to provide three reusable visual effects through
a consistent, type-safe API with predictable resource management.

## Target Audience

- Frontend developers
- Portfolio website developers
- UI engineers
- Creative web developers
- Developers building landing pages and design systems

## Version 1.0.0 Scope

### Animation Engines

1. Animated gradient borders — CSS rendering
2. Animated waves — Canvas 2D rendering
3. Interactive cursor trails — Canvas 2D rendering

### Built-in Themes

- Rainbow
- Ocean
- Sunset
- Aurora
- Gold

Developers can also define custom colour palettes.

### Shared Capabilities

- TypeScript declarations
- Framework-independent API
- Animation lifecycle controls
- Runtime configuration validation
- Consistent error reporting
- Reduced-motion support
- Deterministic resource cleanup
- Multiple independent animation instances
- SSR-safe module imports

## Public Functions

- `animatedBorder()`
- `animatedWave()`
- `cursorTrail()`
- `createTheme()`

These are planned public APIs, not implemented functionality.

## Non-functional Targets

- Zero runtime dependencies
- ESM-first distribution
- Tree-shakable modules
- Strict TypeScript checks
- Accessibility-aware behaviour
- Efficient animation scheduling
- Predictable DOM ownership and cleanup
- Automated unit, integration, and browser testing

Performance targets will be validated through benchmarks.
No bundle-size or frame-rate guarantee is currently established.

## Out of Scope for Version 1.0.0

- WebGL rendering
- Scroll-triggered animation effects
- Animation sequencing
- Additional particle physics engines
- Dedicated framework-specific components
- Animation plugin system

## Current Implementation Status

The repository contains the TypeScript, build, testing,
linting, and formatting foundations.

The animation engines and public functions have not yet
been implemented.

Prismotive is not ready for production use.

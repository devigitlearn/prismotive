# Prismotive

**Colour in motion.**

Prismotive is a lightweight, framework-independent TypeScript library for animated borders, flowing waves, and interactive cursor trails with customisable colour themes.

## Project Status

Prismotive is currently under active development.

The package is not yet available for production use.

## Planned Features

- Animated gradient borders
- Animated Canvas-based waves
- Interactive cursor trails
- Five built-in colour themes
- Custom colour palettes
- Animation lifecycle controls
- TypeScript support
- Framework-independent API
- Accessibility and reduced-motion support

## Built-in Themes

- Rainbow
- Ocean
- Sunset
- Aurora
- Gold

## Technology

- TypeScript
- CSS Animations
- Canvas 2D
- Vite
- Vitest
- Playwright

## Development

The project is currently in the repository initialisation phase.

Installation instructions and API documentation will be added as implementation progresses.

### TypeScript Development

Prismotive is developed using TypeScript with strict type checking.

**Prerequisites

- Node.js 24.x or a compatible supported version
- npm

**Install development dependencies

```bash
npm install
```

**Run TypeScript validation

```bash
npm run typecheck
```

**Generate TypeScript declaration files

```bash
npm run build:types
```

TypeScript declaration files are generated in `dist/`, which is excluded from Git.

The JavaScript library build will be configured separately using Vite.

Prismotive is not yet available for production use.

### Library Build

Prismotive uses Vite Library Mode to generate its ECMAScript module distribution.

**Build the library

```bash
npm run build
```

The build performs three operations:

1. Validates TypeScript source code.
2. Generates the JavaScript distribution using Vite.
3. Generates TypeScript declaration files.

Expected distribution files:

```text
dist/
├── index.js
└── index.d.ts
```

Source maps may also be generated when JavaScript is emitted.

The package uses ESM-only distribution. CommonJS support is not currently planned for version 1.0.0.

The `dist/` directory is generated and excluded from Git.

Prismotive is currently under development and its animation APIs are not yet implemented.

## Licence

MIT

### Package Configuration

Prismotive uses npm and follows an ESM-first architecture.

The initial development version is `0.1.0`.

The package is marked as private to prevent accidental npm
publication during development.

Build scripts, public entry points, and development dependencies
will be configured in subsequent milestones.

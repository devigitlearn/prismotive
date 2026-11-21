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

### Automated Testing

Prismotive uses Vitest for unit and integration testing and Playwright for browser testing.

**Run unit and integration tests

```bash
npm test
```

**Run tests in watch mode

```bash
npm run test:watch
```

**Install the Chromium testing browser

```bash
npx playwright install chromium
```

**Run browser tests

```bash
npm run test:browser
```

**Run all tests

```bash
npm run test:all
```

**Run the complete library build

```bash
npm run build
```

The initial tests verify the testing infrastructure. Animation-specific tests will be introduced as the individual engines and shared modules are implemented.

Browser compatibility testing will be expanded to Firefox and WebKit in a later milestone.

### Code Quality

Prismotive uses ESLint and Prettier to maintain consistent, readable and maintainable code.

**Run static analysis

```bash
npm run lint
```

**Automatically fix supported lint issues

```bash
npm run lint:fix
```

**Format TypeScript source and configuration files

```bash
npm run format
```

**Verify formatting without modifying files

```bash
npm run format:check
```

Before submitting changes, contributors should run:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test:all
npm run build
```

ESLint handles code-quality analysis, Prettier handles formatting, and TypeScript provides compile-time type checking.

Code-quality tools are development dependencies and are not required by consumers of the published Prismotive package.

## Licence

MIT

### Package Configuration

Prismotive uses npm and follows an ESM-first architecture.

The initial development version is `0.1.0`.

The package is marked as private to prevent accidental npm
publication during development.

Build scripts, public entry points, and development dependencies
will be configured in subsequent milestones.

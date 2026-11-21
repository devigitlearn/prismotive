
# Prismotive — Public API Specification

**Status:** Planned API, not yet implemented

## General Convention

All animation functions accept a target and optional configuration.

```typescript
effectFunction(target, options);
```

## Target Types

```typescript
type AnimationTarget = string | HTMLElement;
```

String targets use CSS selector resolution.

Each call targets one HTML element.

## Animation Functions

### animatedBorder()

```typescript
animatedBorder(target, options?)
```

Planned configuration:

| Option | Default |
| --- | --- |
| theme | rainbow |
| duration | 4000 ms |
| thickness | 2 px |
| borderRadius | Inherited |
| direction | clockwise |
| glow | false |
| opacity | 1 |

### animatedWave()

```typescript
animatedWave(target, options?)
```

Planned configuration:

| Option | Default |
| --- | --- |
| theme | rainbow |
| amplitude | 30 px |
| frequency | 1 |
| speed | 1 |
| lineCount | 7 |
| lineWidth | 2 |
| glow | false |

### cursorTrail()

```typescript
cursorTrail(target, options?)
```

Planned configuration:

| Option | Default |
| --- | --- |
| theme | rainbow |
| length | 50 particles |
| particleSize | 6 px |
| fadeDuration | 800 ms |
| glow | true |
| touchEnabled | true |

## Shared Configuration

Planned shared options include:

- theme
- opacity
- glow
- respectReducedMotion
- pauseWhenHidden
- pauseWhenOffscreen
- onError

## Built-in Theme Presets

```typescript
type ThemePreset =
  | 'rainbow'
  | 'ocean'
  | 'sunset'
  | 'aurora'
  | 'gold';
```

## Custom Themes

```typescript
const theme = createTheme({
  colors: ['#FF0080', '#7928CA', '#00D4FF'],
});
```

Custom themes will initially support hexadecimal RGB colours.

## Animation Instance

```typescript
interface AnimationInstance<TOptions> {
  readonly state: 'running' | 'paused' | 'destroyed';

  pause(): void;
  resume(): void;
  update(options: Partial<TOptions>): void;
  destroy(): void;
}
```

This interface is a design sketch. The final TypeScript definition
will include the required generic constraints.

## Update Semantics

- Updates apply only to supplied properties.
- Unspecified properties retain their existing values.
- Configuration is validated before application.
- Invalid updates must not partially change configuration.
- Updates on destroyed instances are prohibited.

## Instance Ownership

Only one instance of the same effect type may exist on
a target element at a time.

Different effect types may coexist on one target.

## Error Handling

The public API will expose `PrismotiveError` with stable error codes.

Asynchronous rendering failures will use the `onError` callback.

## Implementation Notice

These APIs are planned and are not exported by the current package.

Examples are specifications, not executable usage instructions.

## Implementation Status

Implemented:

- `createTheme()` — custom theme validation and creation
- Five internal, immutable built-in palettes

Planned:

- Built-in theme-name resolution
- `animatedBorder()`
- `animatedWave()`
- `cursorTrail()`
- Animation lifecycle controls
- Structured Prismotive error codes

`createTheme()` currently uses native exceptions for invalid
inputs. Integration with structured Prismotive errors is planned.

### Theme Resolution

**Implementation status: Implemented internally

Prismotive uses an internal `resolveTheme()` function to convert built-in theme names or custom theme objects into validated, immutable palettes.

Supported built-in themes:

- `rainbow`
- `ocean`
- `sunset`
- `aurora`
- `gold`

A built-in preset resolves to its existing immutable theme object.

Custom themes are validated through `createTheme()`. Valid immutable and normalised themes retain their references; mutable themes are copied and frozen.

Unknown preset names, malformed theme objects and invalid colour values are rejected.

`resolveTheme()` is an internal implementation utility and is not exported from the public package entry point.

Structured Prismotive error codes will be integrated in a subsequent core development step.

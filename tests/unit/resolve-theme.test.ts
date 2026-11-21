import { describe, expect, it } from 'vitest';

import { createTheme } from '../../src/themes/create-theme.js';
import { PRESET_THEMES } from '../../src/themes/presets.js';
import { resolveTheme } from '../../src/themes/resolve-theme.js';

describe('resolveTheme', () => {
  it.each(['rainbow', 'ocean', 'sunset', 'aurora', 'gold'] as const)(
    'resolves the %s preset',
    (name) => {
      const result = resolveTheme(name);

      expect(result).toBe(PRESET_THEMES[name]);
      expect(Object.isFrozen(result)).toBe(true);
      expect(Object.isFrozen(result.colors)).toBe(true);
    },
  );

  it('preserves the same preset reference', () => {
    const first = resolveTheme('ocean');
    const second = resolveTheme('ocean');

    expect(first).toBe(second);
  });

  it('preserves a valid immutable custom theme', () => {
    const custom = createTheme({
      colors: ['#FF0000', '#00FF00'],
    });

    expect(resolveTheme(custom)).toBe(custom);
  });

  it('normalizes mutable custom themes', () => {
    const input = {
      colors: ['#f0a', '#abc'],
    };

    const result = resolveTheme(input);

    expect(result.colors).toEqual(['#FF00AA', '#AABBCC']);

    expect(result).not.toBe(input);
  });

  it('does not retain a mutable color array', () => {
    const input = {
      colors: ['#FF0000', '#00FF00'],
    };

    const result = resolveTheme(input);

    input.colors[0] = '#0000FF';

    expect(result.colors[0]).toBe('#FF0000');
  });

  it('returns immutable custom themes', () => {
    const result = resolveTheme({
      colors: ['#FF0000', '#00FF00'],
    });

    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.colors)).toBe(true);
  });

  it('rejects unknown preset names', () => {
    expect(() => resolveTheme('forest' as never)).toThrow(RangeError);
  });

  it('rejects inherited object property names', () => {
    expect(() => resolveTheme('toString' as never)).toThrow(RangeError);

    expect(() => resolveTheme('__proto__' as never)).toThrow(RangeError);
  });

  it('rejects invalid color formats', () => {
    expect(() =>
      resolveTheme({
        colors: ['red', '#00FF00'],
      }),
    ).toThrow(TypeError);
  });

  it('rejects invalid palette lengths', () => {
    expect(() =>
      resolveTheme({
        colors: ['#FF0000'],
      }),
    ).toThrow(RangeError);
  });

  it('validates frozen but malformed themes', () => {
    const invalid = Object.freeze({
      colors: Object.freeze(['not-a-color', '#FFFFFF']),
    });

    expect(() => resolveTheme(invalid)).toThrow(TypeError);
  });

  it('rejects null input', () => {
    expect(() => resolveTheme(null as never)).toThrow(TypeError);
  });

  it('rejects undefined input', () => {
    expect(() => resolveTheme(undefined as never)).toThrow(TypeError);
  });

  it('rejects array input', () => {
    expect(() => resolveTheme([] as never)).toThrow(TypeError);
  });
});

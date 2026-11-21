import { describe, expect, it } from 'vitest';

import { createTheme } from '../../src/themes/create-theme.js';
import { PRESET_THEMES } from '../../src/themes/presets.js';

describe('createTheme', () => {
  it('creates a theme with valid hexadecimal colors', () => {
    const theme = createTheme({
      colors: ['#FF0000', '#00FF00'],
    });

    expect(theme.colors).toEqual(['#FF0000', '#00FF00']);
  });

  it('normalizes shorthand hexadecimal colors', () => {
    const theme = createTheme({
      colors: ['#f0a', '#abc'],
    });

    expect(theme.colors).toEqual(['#FF00AA', '#AABBCC']);
  });

  it('normalizes lowercase colors', () => {
    const theme = createTheme({
      colors: ['#abcdef', '#123abc'],
    });

    expect(theme.colors).toEqual(['#ABCDEF', '#123ABC']);
  });

  it('allows duplicate colors', () => {
    const theme = createTheme({
      colors: ['#FFFFFF', '#FFFFFF'],
    });

    expect(theme.colors).toHaveLength(2);
  });

  it('rejects fewer than two colors', () => {
    expect(() => createTheme({ colors: ['#FFFFFF'] })).toThrow(RangeError);
  });

  it('rejects more than 32 colors', () => {
    expect(() =>
      createTheme({
        colors: Array(33).fill('#FFFFFF'),
      }),
    ).toThrow(RangeError);
  });

  it('rejects invalid hexadecimal colors', () => {
    expect(() =>
      createTheme({
        colors: ['red', '#FFFFFF'],
      }),
    ).toThrow(TypeError);
  });

  it('rejects malformed options', () => {
    expect(() =>
      createTheme(
        null as unknown as {
          colors: string[];
        },
      ),
    ).toThrow(TypeError);
  });

  it('rejects non-string color values at runtime', () => {
    expect(() =>
      createTheme({
        colors: [123, '#FFFFFF'] as unknown as string[],
      }),
    ).toThrow(TypeError);
  });

  it('does not mutate or retain the input array', () => {
    const input = ['#FF0000', '#00FF00'];

    const theme = createTheme({
      colors: input,
    });

    input[0] = '#0000FF';

    expect(theme.colors[0]).toBe('#FF0000');
  });

  it('returns a frozen theme and color array', () => {
    const theme = createTheme({
      colors: ['#FF0000', '#00FF00'],
    });

    expect(Object.isFrozen(theme)).toBe(true);
    expect(Object.isFrozen(theme.colors)).toBe(true);
  });
});

describe('built-in theme presets', () => {
  it('contains exactly five presets', () => {
    expect(Object.keys(PRESET_THEMES)).toEqual(['rainbow', 'ocean', 'sunset', 'aurora', 'gold']);
  });

  it.each(Object.entries(PRESET_THEMES))('%s has a valid immutable palette', (_name, theme) => {
    expect(theme.colors.length).toBeGreaterThanOrEqual(2);
    expect(theme.colors.length).toBeLessThanOrEqual(32);

    for (const color of theme.colors) {
      expect(color).toMatch(/^#[0-9A-F]{6}$/);
    }

    expect(Object.isFrozen(theme)).toBe(true);
    expect(Object.isFrozen(theme.colors)).toBe(true);
  });

  it('freezes the preset catalogue', () => {
    expect(Object.isFrozen(PRESET_THEMES)).toBe(true);
  });
});

import type { Theme, ThemeOptions } from './types.js';

const MIN_COLORS = 2;
const MAX_COLORS = 32;

const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/**
 * Validates and normalizes a hexadecimal color.
 *
 * Supported formats:
 * - #RGB
 * - #RRGGBB
 *
 * All colors are returned as uppercase #RRGGBB.
 */
function normalizeColor(color: string): string {
  if (!HEX_COLOR_PATTERN.test(color)) {
    throw new TypeError(`Invalid theme color: "${color}". Expected #RGB or #RRGGBB.`);
  }

  const hex = color.slice(1).toUpperCase();

  if (hex.length === 3) {
    return `#${hex
      .split('')
      .map((character) => character.repeat(2))
      .join('')}`;
  }

  return `#${hex}`;
}

/**
 * Creates a validated, immutable colour theme.
 *
 * @param options - Custom theme configuration.
 * @returns An immutable theme containing normalized colors.
 *
 * @throws {TypeError} If options or colors are invalid.
 * @throws {RangeError} If the number of colors is outside
 * the supported range.
 */
export function createTheme(options: ThemeOptions): Theme {
  if (options === null || typeof options !== 'object' || !Array.isArray(options.colors)) {
    throw new TypeError('Theme options must contain an array of colors.');
  }

  const { colors } = options;

  if (colors.length < MIN_COLORS || colors.length > MAX_COLORS) {
    throw new RangeError(`A theme must contain between ${MIN_COLORS} and ${MAX_COLORS} colors.`);
  }

  const normalizedColors = Array.from(colors, (color) => {
    if (typeof color !== 'string') {
      throw new TypeError('Theme colors must be strings.');
    }

    return normalizeColor(color);
  });

  return Object.freeze({
    colors: Object.freeze(normalizedColors),
  });
}

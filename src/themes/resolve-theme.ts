import { createTheme } from './create-theme.js';
import { PRESET_THEMES } from './presets.js';

import type { Theme, ThemeInput, ThemePreset } from './types.js';

/**
 * Resolves a built-in preset name or a custom theme into
 * a validated, immutable Theme object.
 *
 * Presets and existing valid immutable themes retain
 * their original object references.
 *
 * Mutable custom themes are copied and frozen.
 *
 * @throws {RangeError} For unknown preset names.
 * @throws {TypeError} For invalid theme objects or colors.
 */
export function resolveTheme(input: ThemeInput): Theme {
  if (typeof input === 'string') {
    if (!Object.hasOwn(PRESET_THEMES, input)) {
      throw new RangeError(`Unknown Prismotive theme: "${input}".`);
    }

    return PRESET_THEMES[input as ThemePreset];
  }

  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('Theme must be a preset name or a valid theme object.');
  }

  // Always validate custom themes, even if they are frozen.
  const normalized = createTheme(input);

  // Preserve immutable references only when their values
  // are already valid and normalized.
  if (
    Object.isFrozen(input) &&
    Object.isFrozen(input.colors) &&
    input.colors.every((color, index) => color === normalized.colors[index])
  ) {
    return input;
  }

  return normalized;
}

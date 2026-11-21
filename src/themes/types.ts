export type ThemePreset = 'rainbow' | 'ocean' | 'sunset' | 'aurora' | 'gold';

export interface Theme {
  readonly colors: readonly string[];
}

export interface ThemeOptions {
  readonly colors: readonly string[];
}

export type ThemeInput = ThemePreset | Theme;

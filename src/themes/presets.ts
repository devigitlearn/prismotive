import { createTheme } from './create-theme.js';

import type { Theme, ThemePreset } from './types.js';

export const PRESET_THEMES: Readonly<Record<ThemePreset, Theme>> = Object.freeze({
  rainbow: createTheme({
    colors: ['#FF365E', '#FFB446', '#F5E34A', '#39DC87', '#38BDF8', '#A855F7'],
  }),

  ocean: createTheme({
    colors: ['#164FBD', '#008ABB', '#00C6EF', '#74F2E6'],
  }),

  sunset: createTheme({
    colors: ['#8B36D5', '#EF4280', '#FF7742', '#FFCE62'],
  }),

  aurora: createTheme({
    colors: ['#19E8AA', '#00B9DC', '#7469ED', '#BD5FF4'],
  }),

  gold: createTheme({
    colors: ['#88621A', '#C99B38', '#FFE29A', '#AE802C'],
  }),
});

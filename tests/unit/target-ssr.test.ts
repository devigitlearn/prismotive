// @vitest-environment node

import { describe, expect, it } from 'vitest';

import { resolveTarget } from '../../src/core/target.js';

describe('target resolution in Node.js', () => {
  it('allows importing the module without browser APIs', () => {
    expect(typeof resolveTarget).toBe('function');
  });

  it('rejects target resolution outside the browser', () => {
    expect(() => resolveTarget('#card')).toThrow('UNSUPPORTED_ENVIRONMENT');
  });
});

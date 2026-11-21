import { describe, expect, it } from 'vitest';

describe('Prismotive testing foundation', () => {
  it('executes TypeScript unit tests', () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];

    expect(colors).toHaveLength(3);
    expect(colors[0]).toBe('#FF0000');
  });

  it('supports floating-point assertions', () => {
    const midpoint = 0.1 + 0.2;

    expect(midpoint).toBeCloseTo(0.3);
  });
});

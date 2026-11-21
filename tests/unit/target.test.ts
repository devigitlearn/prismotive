// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { resolveTarget } from '../../src/core/target.js';

describe('resolveTarget', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="card" class="card"></div>
      <div id="second" class="card"></div>
      <section id="hero"></section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('resolves an ID selector', () => {
    const element = resolveTarget('#card');

    expect(element.id).toBe('card');
  });

  it('resolves a class selector', () => {
    const element = resolveTarget('.card');

    expect(element.id).toBe('card');
  });

  it('returns only the first matching element', () => {
    expect(resolveTarget('.card').id).toBe('card');
  });

  it('resolves the document body', () => {
    expect(resolveTarget('body')).toBe(document.body);
  });

  it('accepts an existing HTML element', () => {
    const element = document.getElementById('hero');

    expect(resolveTarget(element as HTMLElement)).toBe(element);
  });

  it('rejects an empty selector', () => {
    expect(() => resolveTarget('')).toThrow('INVALID_TARGET');
  });

  it('rejects a whitespace-only selector', () => {
    expect(() => resolveTarget('   ')).toThrow('INVALID_TARGET');
  });

  it('rejects a malformed CSS selector', () => {
    expect(() => resolveTarget('[')).toThrow('INVALID_SELECTOR');
  });

  it('rejects a selector with no matching element', () => {
    expect(() => resolveTarget('#missing')).toThrow('TARGET_NOT_FOUND');
  });

  it('rejects a detached HTML element', () => {
    const element = document.createElement('div');

    expect(() => resolveTarget(element)).toThrow('TARGET_DETACHED');
  });

  it('rejects an element removed after creation', () => {
    const element = document.getElementById('card') as HTMLElement;

    element.remove();

    expect(() => resolveTarget(element)).toThrow('TARGET_DETACHED');
  });

  it('rejects null', () => {
    expect(() => resolveTarget(null as never)).toThrow('INVALID_TARGET');
  });

  it('rejects undefined', () => {
    expect(() => resolveTarget(undefined as never)).toThrow('INVALID_TARGET');
  });

  it('rejects arrays', () => {
    expect(() => resolveTarget([] as never)).toThrow('INVALID_TARGET');
  });

  it('rejects non-HTML elements', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    document.body.append(svg);

    expect(() => resolveTarget(svg as never)).toThrow('INVALID_TARGET');
  });

  it('rejects an element from another document', () => {
    const otherDocument = document.implementation.createHTMLDocument('Other');

    const foreignElement = otherDocument.createElement('div');

    otherDocument.body.append(foreignElement);

    expect(() => resolveTarget(foreignElement)).toThrow('TARGET_DETACHED');
  });

  it('preserves the original cause for invalid selectors', () => {
    try {
      resolveTarget('[');
      expect.fail('Expected resolveTarget to throw.');
    } catch (error) {
      expect(error).toBeInstanceOf(SyntaxError);

      if (!(error instanceof Error)) {
        throw error;
      }

      expect(error.message).toContain('INVALID_SELECTOR');
      expect(error.cause).toBeInstanceOf(DOMException);
    }
  });
});

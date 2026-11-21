/**
 * Supported animation target input.
 *
 * A target may be a CSS selector or an existing HTML element.
 */
export type AnimationTarget = string | HTMLElement;

/**
 * Resolves and validates the target of a Prismotive animation.
 *
 * @throws {Error} When browser APIs are unavailable.
 * @throws {TypeError} For unsupported target types.
 * @throws {SyntaxError} For malformed CSS selectors.
 * @throws {Error} When a target cannot be found or is detached.
 */
export function resolveTarget(target: AnimationTarget): HTMLElement {
  // Browser APIs must only be accessed when the function is called.
  if (typeof document === 'undefined' || typeof HTMLElement === 'undefined') {
    throw new Error('UNSUPPORTED_ENVIRONMENT: Animation targets require a browser environment.');
  }

  let element: HTMLElement;

  if (typeof target === 'string') {
    if (target.trim().length === 0) {
      throw new TypeError('INVALID_TARGET: CSS selector must not be empty.');
    }

    let matched: Element | null;

    try {
      matched = document.querySelector(target);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'SyntaxError') {
        throw new SyntaxError(`INVALID_SELECTOR: "${target}" is not a valid CSS selector.`, {
          cause: error,
        });
      }

      throw error;
    }

    if (matched === null) {
      throw new Error(`TARGET_NOT_FOUND: No element matches "${target}".`);
    }

    if (!(matched instanceof HTMLElement)) {
      throw new TypeError('INVALID_TARGET: Target must be an HTML element.');
    }

    element = matched;
  } else {
    if (!(target instanceof HTMLElement)) {
      throw new TypeError('INVALID_TARGET: Target must be a CSS selector or HTMLElement.');
    }

    element = target;
  }

  // Keep the initial implementation scoped to the current document.
  if (element.ownerDocument !== document || !element.isConnected) {
    throw new Error('TARGET_DETACHED: Target must be connected to the current document.');
  }

  return element;
}

import { expect, test } from '@playwright/test';

test.describe('Prismotive browser testing foundation', () => {
  test('can render and inspect HTML elements', async ({ page }) => {
    await page.goto('about:blank');

    await page.setContent(`
      <main>
        <h1 data-testid="heading">Prismotive</h1>
        <button type="button">Get Started</button>
      </main>
    `);

    await expect(page.getByTestId('heading')).toHaveText('Prismotive');

    await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible();
  });

  test('can execute JavaScript in the browser', async ({ page }) => {
    await page.goto('about:blank');

    const result = await page.evaluate(() => {
      return typeof document.createElement('canvas').getContext;
    });

    expect(result).toBe('function');
  });
});

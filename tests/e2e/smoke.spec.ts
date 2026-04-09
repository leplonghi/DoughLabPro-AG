import { expect, test } from '@playwright/test';

test('public landing and plans remain reachable', async ({ page }) => {
    await page.goto('/#/landing', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('heading', { name: /precision baking software/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /start free/i })).toBeVisible();

    await page.getByRole('button', { name: /view plans/i }).click();
    await expect(page.getByRole('heading', { name: /compare free and pro clearly/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /continue with free/i })).toBeVisible();
});

test('auth wall exposes a guided path instead of a dead end', async ({ page }) => {
    await page.goto('/#/calculator', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('button', { name: /access your lab/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /compare plans & pricing/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /explore product tour/i })).toBeVisible();
});

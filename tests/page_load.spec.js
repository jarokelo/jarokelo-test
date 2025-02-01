import { expect, test } from '@playwright/test';
import { PROTECTED_URLS, URLS } from './const';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const baseURL = process.env.BASE_URL;

test.describe('Page Load Tests', () => {
    for (const [pageName, url] of Object.entries(URLS)) {
        test(`${pageName} page should load without redirect`, async ({ page }) => {
            const response = await page.goto(url);
            expect(response?.status()).toBe(200);
            expect(page.url()).toBe(`${baseURL}${url}`);
        });
    }
});

test.describe('Page Redirect Tests', () => {
    for (const [pageName, url] of Object.entries(PROTECTED_URLS)) {
        test(`${pageName} page should redirect to login page`, async ({ page }) => {
            const response = await page.goto(url);
            expect((await response.request().redirectedFrom().response()).status()).toBe(302);
            expect(page.url()).toBe(`${baseURL}${URLS.login}`);
        });
    }
});

test.describe('Protected Page Load Tests', () => {
    const storageState = 'playwright/.auth/user.json'; // TODO: Move to global constant
    test.use({ storageState });

    for (const [pageName, url] of Object.entries(PROTECTED_URLS)) {
        test.skip(!fs.existsSync('./' + storageState), 'no credentials for user');
        test(`${pageName} page should load`, async ({ page }) => {
            const response = await page.goto(url);
            expect(response?.status()).toBe(200);
            expect(page.url()).toBe(`${baseURL}${url}`);
        });
    }
});

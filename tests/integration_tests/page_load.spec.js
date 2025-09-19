import { expect, test } from '@playwright/test';
import { ADMIN_URLS, PROTECTED_URLS, PUBLIC_URLS, SUPER_ADMIN_URLS } from '../urls.js';
import dotenv from 'dotenv';
import fs from 'fs';
import config from '../../playwright.config.js';

dotenv.config();
const baseURL = config.use.baseURL;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.beforeEach(async ({ page }) => {
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`
    });
});

test.describe('Public Page Load Tests', () => {
    for (const [pageName, url] of Object.entries(PUBLIC_URLS)) {
        test(`${pageName} page should load without redirect`, async ({ page }) => {
            const response = await page.goto(url);
            expect(response?.status()).toBe(200);
            expect(page.url()).toBe(`${baseURL}${url}`);
        });
    }
});

test.describe('Protected Page Redirect Tests', () => {
    for (const [pageName, url] of Object.entries(PROTECTED_URLS)) {
        test(`${pageName} page should redirect to login page`, async ({ page }) => {
            const response = await page.goto(url);
            expect((await response.request().redirectedFrom().response()).status()).toBe(302);
            expect(page.url()).toBe(`${baseURL}${PUBLIC_URLS.login}`);
        });
    }
});

test.describe('Protected Page Load Tests', () => {
    const storageState = 'playwright/.auth/user.json';
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

test.describe('Admin Page Load Tests', () => {
    const storageState = `playwright/.auth/admin.json`;
    test.use({ storageState });

    for (const [pageName, url] of Object.entries(ADMIN_URLS)) {
        test.skip(!fs.existsSync('./' + storageState), 'no credentials for user');
        test(`${pageName} page should load`, async ({ page }) => {
            const response = await page.goto(url);
            expect(response?.status()).toBe(200);
            expect(page.url()).toBe(`${baseURL}${url}`);
        });
    }
});

test.describe('Super Admin Page Redirect Tests', () => {
    const storageState = `playwright/.auth/admin.json`;
    test.use({ storageState });

    for (const [pageName, url] of Object.entries(SUPER_ADMIN_URLS)) {
        test(`${pageName} page should redirect to login page`, async ({ page }) => {
            const response = await page.goto(url);
            expect((await response.request().redirectedFrom().response()).status()).toBe(302);
            expect(page.url()).toBe(`${baseURL}citizen`);
        });
    }
});

test.describe('Super Admin Page Load Tests', () => {
    const storageState = `playwright/.auth/super_admin.json`;
    test.use({ storageState });

    for (const [pageName, url] of Object.entries(SUPER_ADMIN_URLS)) {
        test.skip(!fs.existsSync('./' + storageState), 'no credentials for user');
        test(`${pageName} page should load`, async ({ page }) => {
            const response = await page.goto(url);
            expect(response?.status()).toBe(200);
            expect(page.url()).toBe(`${baseURL}${url}`);
        });
    }
});

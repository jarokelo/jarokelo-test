import { test as setup, expect } from '@playwright/test';
import { PROTECTED_URLS, PUBLIC_URLS } from './urls';
import dotenv from 'dotenv';

dotenv.config();
const ten_seconds = 10_000;

const users = {
    user: {
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
    },
    verified_user: {
        email: process.env.VERIFIED_USER_EMAIL,
        password: process.env.VERIFIED_USER_PASSWORD,
    },
}

setup.describe('Authenticate user', async () => {
    for (const [name, { email, password }] of Object.entries(users)) {
        setup.skip(!email || !password, `no credentials for ${name}`);
        setup(`authenticate as ${name}`, async ({ page }) => {
            await page.goto(PUBLIC_URLS.login);
            await page.locator('#loginform-email').fill(email);
            await page.locator('#loginform-password').fill(password);
            await page.locator('button[type="submit"]').click();

            await page.waitForLoadState('networkidle', { timeout: ten_seconds });

            const userMenuLink = await page.locator('.header__user-menu__link--button');
            const href = await userMenuLink.getAttribute('href');
            expect(href).toContain(PROTECTED_URLS.profile);

            await page.context().storageState({ path: `playwright/.auth/${name}.json` });
        });
    }
});

const admins = {
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
    super_admin: {
        email: process.env.SUPER_ADMIN_EMAIL,
        password: process.env.SUPER_ADMIN_PASSWORD,
    },
}

setup.describe('Authenticate admin', async () => {
    for (const [name, { email, password }] of Object.entries(admins)) {
        setup.skip(!email || !password, `no credentials for ${name}`);
        setup(`authenticate as ${name}`, async ({ page }) => {
            await page.goto('citizen/login');
            await page.locator('#loginform-email').fill(email);
            await page.locator('#loginform-password').fill(password);
            await page.locator('button[type="submit"]').click();

            await page.waitForURL('citizen')
            expect(page.url()).toBe(process.env.BASE_URL + 'citizen');

            await page.context().storageState({ path: `playwright/.auth/${name}.json` });
        });
    }
});

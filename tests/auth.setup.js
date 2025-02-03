import { test as setup, expect } from '@playwright/test';
import { PROTECTED_URLS, PUBLIC_URLS } from './urls';
import dotenv from 'dotenv';

dotenv.config();
const TEN_SECONDS = 10_000;

const AUTH = {
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        loginUrl: 'citizen/login',
        confirmLogin: confirmAdminLogin,
    },
    super_admin: {
        email: process.env.SUPER_ADMIN_EMAIL,
        password: process.env.SUPER_ADMIN_PASSWORD,
        loginUrl: 'citizen/login',
        confirmLogin: confirmAdminLogin,
    },
    user: {
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
        loginUrl: PUBLIC_URLS.login,
        confirmLogin: confirmUserLogin,
    },
    verified_user: {
        email: process.env.VERIFIED_USER_EMAIL,
        password: process.env.VERIFIED_USER_PASSWORD,
        loginUrl: PUBLIC_URLS.login,
        confirmLogin: confirmUserLogin,
    },
}

async function confirmAdminLogin(page) {
    await page.waitForURL('citizen')

    expect(page.url()).toBe(process.env.BASE_URL + 'citizen');
}

async function confirmUserLogin(page) {
    await page.waitForLoadState('networkidle', { timeout: TEN_SECONDS });

    const userMenuLink = await page.locator('.header__user-menu__link--button');
    const href = await userMenuLink.getAttribute('href');
    expect(href).toContain(PROTECTED_URLS.profile);
}

setup.describe('Authenticate', async () => {
    for (const [name, { email, password, loginUrl, confirmLogin }] of Object.entries(AUTH)) {
        setup.skip(!email || !password, `no credentials for ${name}`);
        setup(`authenticate as ${name}`, async ({ page }) => {
            await page.goto(loginUrl);
            await page.locator('#loginform-email').fill(email);
            await page.locator('#loginform-password').fill(password);
            await page.locator('button[type="submit"]').click();

            await confirmLogin(page);

            await page.context().storageState({ path: `playwright/.auth/${name}.json` });
        });
    }
});

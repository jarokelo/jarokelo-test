import { test as setup, expect } from '@playwright/test';
import { PROTECTED_URLS, URLS } from './const';
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

setup.describe('Authenticate', async () => {
    setup.use({ ignoreHTTPSErrors: true }); // TODO: Check if necessary, as it does not solve localhost issue
    for (const [name, { email, password }] of Object.entries(users)) {
        setup.skip(!email || !password, `no credentials for ${name}`); // TODO: Make this appear in the report
        setup(`authenticate as ${name}`, async ({ page }) => {
            await page.goto(URLS.login);
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

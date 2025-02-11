import { setRandomViewport } from '../playwright.config';
import { LoginPage } from '../pages/login_page';
import { expect, test } from '@playwright/test';
import { PROTECTED_URLS, PUBLIC_URLS } from './urls';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const EMPTY_FIELD = '';
const VALID_EMAIL = process.env.USER_EMAIL
const VALID_PASSWORD = process.env.USER_PASSWORD;
const INVALID_EMAIL = 'invalid@example.com';
const INVALID_PASSWORD = 'Password123';
const ERROR_INVALID_CREDENTIALS = 'Hibás felhasználói név vagy jelszó';
const ERROR_EMPTY_EMAIL = 'E-mail cím nem lehet üres.';
const ERROR_EMPTY_PASSWORD = 'Jelszó nem lehet üres.';
const TEN_SECONDS = 10_000;

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page);
    await setRandomViewport(page);
    await Login.gotoBaseUrl();
    await Login.clearCookies();
    await page.waitForTimeout(1000);

    if (await Login.userMenuIcon.isVisible()) {
        await Login.userMenuIcon.click();
    } else {
        await Login.loginIcon.click();
    }
});

const loginErrorTests = [
    {
        description: 'valid email and invalid password',
        email: VALID_EMAIL,
        password: INVALID_PASSWORD,
        errorMessage: [ERROR_INVALID_CREDENTIALS],
    },
    {
        description: 'invalid email and valid password',
        email: INVALID_EMAIL,
        password: VALID_PASSWORD,
        errorMessage: [ERROR_INVALID_CREDENTIALS],
    },
    {
        description: 'invalid email and invalid password',
        email: INVALID_EMAIL,
        password: INVALID_PASSWORD,
        errorMessage: [ERROR_INVALID_CREDENTIALS],
    },
    {
        description: 'empty email field and valid password',
        email: EMPTY_FIELD,
        password: VALID_PASSWORD,
        errorMessage: [ERROR_EMPTY_EMAIL],
    },
    {
        description: 'valid email and empty password field',
        email: VALID_EMAIL,
        password: EMPTY_FIELD,
        errorMessage: [ERROR_EMPTY_PASSWORD],
    },
    {
        description: 'empty email field and empty password field',
        email: EMPTY_FIELD,
        password: EMPTY_FIELD,
        errorMessage: [ERROR_EMPTY_EMAIL, ERROR_EMPTY_PASSWORD],
    },
];

test.describe('Login Tests', () => {
    test('should succeed with valid email and valid password', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.login(VALID_EMAIL, VALID_PASSWORD);

        await page.waitForLoadState('networkidle', { timeout: TEN_SECONDS });

        const userMenuLink = await page.locator('.header__user-menu__link--button');
        const href = await userMenuLink.getAttribute('href');
        expect(href).toContain(PROTECTED_URLS.profile);
    });

    for (const { description, email, password, errorMessage } of loginErrorTests) {
        test(`should fail with ${description}`, async ({ page }) => {
            const Login = new LoginPage(page);
            await Login.login(email, password);

            await expect(page.url()).toBe(BASE_URL + PUBLIC_URLS.login);

            for (const message of errorMessage) {
                await expect(page.getByText(message)).toBeVisible();
            }
        });
    }
});

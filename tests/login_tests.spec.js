import { setRandomViewport } from '../playwright.config';
import { LoginPage } from '../pages/login_page';
import { expect, test } from '@playwright/test';

const EMPTY_FIELD = '';
const VALID_EMAIL = 'antaltesztelo@gmail.com';
const VALID_PASSWORD = 'Teszt01';
const INVALID_EMAIL = 'invalid@example.com';
const INVALID_PASSWORD = 'Password123';
const ERROR_INVALID_CREDENTIALS = 'Hibás felhasználói név vagy jelszó';
const ERROR_EMPTY_EMAIL = 'E-mail cím nem lehet üres.';
const ERROR_EMPTY_PASSWORD = 'Jelszó nem lehet üres.';

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

test('login test with valid email and valid password', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login(VALID_EMAIL, VALID_PASSWORD);
    await page.waitForURL('');
    try {
        await expect(Login.userImage).toBeVisible();
    } catch {
        await expect(Login.userProfile).toBeVisible();
    }
});

const loginErrorTests = [
    {
        description: 'valid email and invalid password',
        email: VALID_EMAIL,
        password: INVALID_PASSWORD,
        errorMessage: ERROR_INVALID_CREDENTIALS,
    },
    {
        description: 'invalid email and valid password',
        email: INVALID_EMAIL,
        password: VALID_PASSWORD,
        errorMessage: ERROR_INVALID_CREDENTIALS,
    },
    {
        description: 'invalid email and invalid password',
        email: INVALID_EMAIL,
        password: INVALID_PASSWORD,
        errorMessage: ERROR_INVALID_CREDENTIALS,
    },
    {
        description: 'empty email field and valid password',
        email: EMPTY_FIELD,
        password: VALID_PASSWORD,
        errorMessage: ERROR_EMPTY_EMAIL,
    },
    {
        description: 'valid email and empty password field',
        email: VALID_EMAIL,
        password: EMPTY_FIELD,
        errorMessage: ERROR_EMPTY_PASSWORD,
    },
    {
        description: 'empty email field and empty password field',
        email: EMPTY_FIELD,
        password: EMPTY_FIELD,
        errorMessage: [ERROR_EMPTY_EMAIL, ERROR_EMPTY_PASSWORD],
    },
];

for (const { description, email, password, errorMessage } of loginErrorTests) {
    test(`login test with ${description}`, async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.login(email, password);
        await page.waitForURL('');
        try {
            await expect(Login.userImage).not.toBeVisible();
        } catch {
            await expect(Login.userProfile).not.toBeVisible();
        }

        if (Array.isArray(errorMessage)) {
            for (const msg of errorMessage) {
                await expect(page.getByText(msg)).toBeVisible();
            }
        } else if (errorMessage) {
            await expect(page.getByText(errorMessage)).toBeVisible();
        }
    });
}

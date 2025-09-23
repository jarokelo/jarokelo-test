import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';
import dotenv from 'dotenv';

dotenv.config();

let Login;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.describe('UI Elements Visibility', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        Login = new LoginPage(page);
        await page.setExtraHTTPHeaders({
            'Authorization': `Bearer ${AUTH_TOKEN}`
        });
        await Login.gotoLoginPage();
        await Login.clearCookies();
    });

    const elementsToTest = [
        { name: 'loginIcon' },
        { name: 'emailTextbox' },
        { name: 'passwordTextbox' },
        { name: 'loginSubmitButton' },
        { name: 'showPasswordIcon' },
        { name: 'googleLoginButton' },
        { name: 'rememberMeCheckbox' },
        { name: 'forgottenPasswordLink' },
        { name: 'signUpLink' },
    ];

    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async () => {
            await expect(Login[element.name]).toBeVisible();
        });
    }
});

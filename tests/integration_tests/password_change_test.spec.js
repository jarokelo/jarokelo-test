import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';
import { ProfileManagementPage } from '../../pages/profile_management_page';
import dotenv from 'dotenv';

dotenv.config();

const VALID_EMAIL = process.env.USER_EMAIL;
const VALID_PASSWORD = process.env.USER_PASSWORD;
const NEW_PASSWORD = process.env.NEW_PASSWORD;
const FIVE_SECONDS = 5_000;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;
const ERROR_INVALID_CREDENTIALS = 'Hibás felhasználói név vagy jelszó';
const SUCCESSFUL_PASSWORD_CHANGE = 'Jelszó módosítva!';

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page);
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`
    });
    await Login.gotoLoginPage();
    await Login.clearCookies();
    await Login.emailTextbox.fill(VALID_EMAIL);
    await Login.passwordTextbox.fill(VALID_PASSWORD);
    await Login.loginSubmitButton.click();
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

});

test('Password change test', async ({ page }) => {
    const profile_management = new ProfileManagementPage(page);
    const login = new LoginPage(page);

    await profile_management.gotoProfileManagementPage();
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

    await profile_management.changePassword(VALID_PASSWORD, NEW_PASSWORD);
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

    await expect(page.locator('.alert-success')).toContainText(SUCCESSFUL_PASSWORD_CHANGE);

    await profile_management.logoutLink.click();
    await login.gotoLoginPage();
    await login.emailTextbox.fill(VALID_EMAIL);
    await login.passwordTextbox.fill(NEW_PASSWORD);
    await login.loginSubmitButton.click();
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

    await expect(page.getByText(ERROR_INVALID_CREDENTIALS)).toHaveCount(0);


    await profile_management.gotoProfileManagementPage();
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

    await profile_management.changePassword(NEW_PASSWORD, VALID_PASSWORD);
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

    await expect(page.locator('.alert-success')).toContainText(SUCCESSFUL_PASSWORD_CHANGE);
});

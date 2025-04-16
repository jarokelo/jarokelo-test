import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login_page';


test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.clearCookies();
});

test('Login page elements are visible', async ({ page }) => {
    const Login = new LoginPage(page);
    await expect(Login.loginIcon).toBeVisible();
    await expect(Login.emailTextbox).toBeVisible();
    await expect(Login.passwordTextbox).toBeVisible();
    await expect(Login.loginSubmitButton).toBeVisible();
    await expect(Login.showPasswordIcon).toBeVisible();
    await expect(Login.googleLoginButton).toBeVisible();
    await expect(Login.rememberMeCheckbox).toBeVisible();
    await expect(Login.forgottenPasswordLink).toBeVisible();
    await expect(Login.signUpLink).toBeVisible();
});

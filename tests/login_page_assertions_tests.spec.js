import { setRandomViewport } from '../playwright.config';
import { LoginPage } from '../pages/login_page';
import { expect, test } from '@playwright/test';

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
    await page.waitForTimeout(1500);
});

test('login page elements are visible', async ({ page }) => {
    const Login = new LoginPage(page);
    await expect(Login.emailTextbox).toBeVisible();
    await expect(Login.passwordTextbox).toBeVisible();
    await expect(Login.loginSubmitButton).toBeVisible();
    await expect(Login.googleLoginButton).toBeVisible();
    await expect(Login.rememberMeCheckbox).toBeVisible();
    await expect(Login.showPasswordIcon).toBeVisible();
    await expect(Login.forgottenPasswordLink).toBeVisible();
    await expect(Login.signUpLink).toBeVisible();
    await expect(Login.cookieIcon).toBeVisible();
});

test('password visibility toggle test', async ({ page }) => {
    const Login = new LoginPage(page);
    await expect(Login.passwordTextbox).toHaveAttribute('type', 'password');
    await Login.showPasswordIcon.waitFor();
    await Login.showPasswordIcon.click();
    await page.waitForTimeout(500);
    await expect(Login.passwordTextbox).toHaveAttribute('type', 'text');
});

test('password value test', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.passwordTextbox.fill('solum');
    await page.waitForTimeout(500);
    await Login.showPasswordIcon.click();
    await page.waitForTimeout(500);
    await expect(Login.passwordTextbox).toHaveValue('solum');
});

test('Google login button opens a google login pop-up window', async ({ page }) => {
    const Login = new LoginPage(page);
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        await Login.googleLoginButton.click()
    ]);
    const popupUrl = popup.url();
    expect(popupUrl).toContain('accounts.google.com');
});

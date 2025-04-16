import { setRandomViewport } from '../playwright.config';
import { LoginPage } from '../pages/login_page';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page);

    await setRandomViewport(page);
    await Login.gotoBaseUrl();
    await page.waitForURL('https://staging.jarokelo.hu/', { timeout: 2200 });
    await Login.clearCookies();
    if (await Login.userMenuIcon.isVisible()) {
        await Login.userMenuIcon.click();
    } else {
        await Login.loginIcon.click();
    }
    await page.waitForURL('https://staging.jarokelo.hu/bejelentkezes', { timeout: 2200 });
});

test('password visibility toggle test', async ({ page }) => {
    const Login = new LoginPage(page);
    await expect(Login.passwordTextbox).toHaveAttribute('type', 'password');
    await Login.showPasswordIcon.waitFor();
    await Login.showPasswordIcon.click();
    await expect(Login.passwordTextbox).toHaveAttribute('type', 'text');
});


test('password value test', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.passwordTextbox.fill('solum');
    await Login.showPasswordIcon.click();
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

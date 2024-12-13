const { LoginPage } = require('../pages/login_page');
const { test, expect } = require('@playwright/test');
import { setRandomViewport } from '../playwright.config';


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
    await Login.login('a123lohar@gmail.com', 'Teszt01');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).toBeVisible();
});

test('login test with invalid email and valid password', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('false@anything.com', 'Teszt01');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('Hibás felhasználói név vagy jelszó')).toBeVisible();
});

test('login test with valid email and invalid password', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('a123lohar@gmail.com', 'Something');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('Hibás felhasználói név vagy jelszó')).toBeVisible();
});

test('login test with invalid email and invalid password', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('false@anything.com', 'Something');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('Hibás felhasználói név vagy jelszó')).toBeVisible();
});

test('login test with empty email field and valid password', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('', 'Teszt01');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('E-mail cím nem lehet üres.')).toBeVisible();
});

test('login test with valid email and empty password field', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('a123lohar@gmail.com', '');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('Jelszó nem lehet üres.')).toBeVisible();
});

test('login test with empty email field and empty password field', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login('', '');
    await page.waitForTimeout(2000);
    await expect (Login.userImage || Login.userProfile).not.toBeVisible();
    await expect (page.getByText('E-mail cím nem lehet üres.')).toBeVisible();
    await expect (page.getByText('Jelszó nem lehet üres.')).toBeVisible();
});
















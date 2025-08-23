import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { ProblemReportingPage } from '../pages/problem_reporting_page';
const fs = require('fs');
import dotenv from 'dotenv';

dotenv.config();

const VALID_EMAIL = process.env.USER_EMAIL;
const VALID_PASSWORD = process.env.USER_PASSWORD;
const THREE_SECONDS = 3_000;
const TWO_SECONDS = 2_000;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

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
});

test('Automated report', async ({ page }, testInfo) => {
    const reportingPage = new ProblemReportingPage(page);

    await page.getByRole('link', { name: 'Bejelentek egy problémát' }).click();

    await reportingPage.reportName.fill('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
    await reportingPage.reportDescription.fill('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    const cityData = JSON.parse(fs.readFileSync('./fixtures/city.json', 'utf-8'));
    const cities = cityData.cities;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    await reportingPage.selectCity(randomCity);

    const picturePath = './images/report.jpg';
    await page.setInputFiles('input[type="file"]', picturePath);

    await page.waitForTimeout(TWO_SECONDS);
    await reportingPage.mapBox.click();

    await reportingPage.submitButton.click();

    await expect(page).toHaveURL('/problema-bejelentese/sikeres?scenario=default', { timeout: THREE_SECONDS });

    testInfo.annotations.push({ type: 'SelectedCity', description: randomCity });
});

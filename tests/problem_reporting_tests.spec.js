import { expect, test } from '@playwright/test';
import { ProblemReportingPage } from '../pages/problem_reporting_page';
const fs = require('fs');
import dotenv from 'dotenv';

dotenv.config();

const THREE_SECONDS = 3_000;
const TWO_SECONDS = 2_000;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;
const REPORT_NAME = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
const REPORT_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

test.use({ storageState: 'playwright/.auth/user.json' });

test.beforeEach(async ({ page }) => {
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`
    });
});

test('Automated report', async ({ page }, testInfo) => {
    const reportingPage = new ProblemReportingPage(page);

    await reportingPage.gotoProblemReportingPage();
    await reportingPage.clearCookies();

    await reportingPage.reportName.fill(REPORT_NAME);
    await reportingPage.reportDescription.fill(REPORT_DESCRIPTION);

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

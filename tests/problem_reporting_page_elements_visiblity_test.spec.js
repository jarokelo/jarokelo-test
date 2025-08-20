import { expect, test } from '@playwright/test';
import { ProblemReportingPage } from '../pages/problem_reporting_page';
import dotenv from 'dotenv';

dotenv.config();

let ProblemReporting;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.describe('UI Elements Visibility', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        ProblemReporting = new ProblemReportingPage(page);
        await page.setExtraHTTPHeaders({
            'Authorization': `Bearer ${AUTH_TOKEN}`
        });
        await ProblemReporting.gotoProblemReportingPage();
        await ProblemReporting.clearCookies();
    });

    const elementsToTest = [
        { name: 'reportName' },
        { name: 'reportDescription' },
        { name: 'citySelect' },
        { name: 'problemLocation' },
        { name: 'mapBox' },
        { name: 'showOnMapButton' },
        { name: 'fileUploadDropzone' },
        { name: 'videoLinkInfo' },
        { name: 'lastName' },
        { name: 'firstName' },
        { name: 'anonymousReportCheckbox' },
        { name: 'submitButton' },
    ];

    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async () => {
            await expect(ProblemReporting[element.name]).toBeVisible();


        });
    }
});

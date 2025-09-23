import { expect, test } from '@playwright/test';
import { MainPage } from '../../pages/main_page';
import dotenv from 'dotenv';

dotenv.config();

let Main;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.describe('UI Elements Visibility', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        Main = new MainPage(page);
        await page.setExtraHTTPHeaders({
            'Authorization': `Bearer ${AUTH_TOKEN}`
        });
        await Main.gotoBaseUrl();
        await Main.clearCookies();
    });

    const elementsToTest = [
        { name: 'loginButton', action: null },
        { name: 'cookieIcon', action: null },
        { name: 'jarokeloLogo', action: null },
        { name: 'reportDropdown', action: null },
        { name: 'newReportLink', action: 'reportDropdown' },
        { name: 'howItWorksLink', action: 'reportDropdown' },
        { name: 'previousReportsLink', action: 'reportDropdown' },
        { name: 'mapSearchLink', action: 'reportDropdown' },
        { name: 'supportUsDropdown', action: null },
        { name: 'privateSupportLink', action: 'supportUsDropdown' },
        { name: 'companySupportLink', action: 'supportUsDropdown' },
        { name: 'supportersAndPartnersLink', action: 'supportUsDropdown' },
        { name: 'volunteerLink', action: null },
        { name: 'forMunicipalitiesDropdown', action: null },
        { name: 'municipalPartnershipLink', action: 'forMunicipalitiesDropdown' },
        { name: 'healthyStreetsLink', action: 'forMunicipalitiesDropdown' },
        { name: 'blogLink', action: null },
        { name: 'aboutUsDropdown', action: null },
        { name: 'whatIsJarokeloGoodForLink', action: 'aboutUsDropdown' },
        { name: 'theTeamLink', action: 'aboutUsDropdown' },
        { name: 'contactUsLink', action: 'aboutUsDropdown' },
        { name: 'hundredThousandArticle', action: null },
        { name: 'reportProblemLargeButton', action: null },
        { name: 'indexReportsDataContainer', action: null },
        { name: 'NewsletterSubscribeForm', action: null },
        { name: 'supportBox', action: null },
        { name: 'supportBoxMedia', action: null },
        { name: 'applicationBox', action: null },
        { name: 'applicationBoxMedia', action: null },
        { name: 'writeToUsFooterLink', action: null },
        { name: 'joinUsFooterLink', action: null },
        { name: 'supportUsFooterLink', action: null },
        { name: 'followUsOnFacebookFooterLink', action: null },
        { name: 'followUsOnInstagramFooterLink', action: null },
        { name: 'followUsOnLinkedinFooterLink', action: null },
        { name: 'reportsAndPublicBenefitStatementsFooterLink', action: null },
        { name: 'privacyPolicyFooterLink', action: null },
        { name: 'termsOfUseFooterLink', action: null },
    ];

    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async () => {
            if (element.action) {
                await Main[element.action].hover();
            }

            await expect(Main[element.name]).toBeVisible();
        });
    }
});

import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main_page';

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
    await page.waitForTimeout(1000);
});

const elementsToTest = [
    { name: 'loginButton', action: null },
    { name: 'cookieIcon', action: null },
    { name: 'jarokeloLogo', action: null },
    { name: 'newReportDropdown', action: null },
    { name: 'newReportLink', action: 'newReportDropdown' },
    { name: 'howItWorksLink', action: 'newReportDropdown' },
    { name: 'reportsDropdown', action: null },
    { name: 'previousReportsLink', action: 'reportsDropdown' },
    { name: 'mapSearchLink', action: 'reportsDropdown' },
    { name: 'statisticsLink', action: 'reportsDropdown' },
    { name: 'supportUsDropdown', action: null },
    { name: 'supportUsLink', action: 'supportUsDropdown' },
    { name: 'joinUsLink', action: 'supportUsDropdown' },
    { name: 'onePercentLink', action: 'supportUsDropdown' },
    { name: 'forMunicipalitiesLink', action: 'supportUsDropdown' },
    { name: 'partnersAndSupportersLink', action: 'supportUsDropdown' },
    { name: 'healthyStreetsLink', action: null },
    { name: 'blogLink', action: null },
    { name: 'aboutUsDropdown', action: null },
    { name: 'whatIsTheJarokeloGoodForLink', action: 'aboutUsDropdown' },
    { name: 'contactUsLink', action: 'aboutUsDropdown' },
    { name: 'theTeamLink', action: 'aboutUsDropdown' },
    { name: 'reportsAndPublicBenefitStatementsLink', action: 'aboutUsDropdown' },
    { name: 'privacyPolicyLink', action: 'aboutUsDropdown' },
    { name: 'termsOfUseLink', action: 'aboutUsDropdown' },
    { name: 'likeUsOnFacebookLink', action: null },
    { name: 'followUsOnInstagramLink', action: null },
    { name: 'followUsOnLinkedinLink', action: null },
    { name: 'readOurBlogLink', action: null },
    { name: 'subscribeToOurRssFeedLink', action: null },
    { name: 'writeToUsLink', action: null },
    { name: 'joinUsFooterLink', action: null },
    { name: 'requestHelpLink', action: null },
    { name: 'howItWorksFooterLink', action: null },
    { name: 'statisticsFooterLink', action: null },
    { name: 'theTeamFooterLink', action: null },
    { name: 'jarokeloWidgetLink', action: null },
    { name: 'reportsAndPublicBenefitStatementsFooterLink', action: null },
    { name: 'supportLargeButton', action: null },
    { name: 'reportProblemLargeButton', action: null },
    { name: 'indexReportsDataContainer', action: null },
    { name: 'NewsletterSubscribeForm', action: null },
];

test.describe('UI Elements Visibility', () => {
    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async ({ page }) => {
            const Main = new MainPage(page);

            if (element.action) {
                await Main[element.action].click();
            }

            await expect(Main[element.name]).toBeVisible();
        });
    }
});

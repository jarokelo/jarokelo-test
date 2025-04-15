import { expect, test } from "@playwright/test";
import { MainPage } from "../pages/main_page";

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await page.waitForURL('https://staging.jarokelo.hu/', { timeout: 2200 });
    await Main.clearCookies();
});

const samePageElements = [
    {
        name: "loginButton_navigation",
        actions: ["loginButton"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentkezes",
    },
    {
        name: "jarokeloLogo_navigation",
        actions: ["jarokeloLogo"],
        expectedUrl: "https://staging.jarokelo.hu/",
    },
    {
        name: "newReportLink_navigation",
        actions: ["newReportDropdown", "newReportLink"],
        expectedUrl: "https://staging.jarokelo.hu/problema-bejelentese",
    },
    {
        name: "howItWorksLink_navigation",
        actions: ["newReportDropdown", "howItWorksLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/problema-bejelentese/hogyan-mukodik",
    },
    {
        name: "previousReportsLink_navigation",
        actions: ["reportsDropdown", "previousReportsLink"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentesek",
    },
    {
        name: "mapSearchLink_navigation",
        actions: ["reportsDropdown", "mapSearchLink"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentesek/terkep",
    },
    {
        name: "statisticsLink_navigation",
        actions: ["reportsDropdown", "statisticsLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/bejelentesek/statisztikak/varosok/budapest",
    },
    {
        name: "supportUsLink_navigation",
        actions: ["supportUsDropdown", "supportUsLink"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass",
    },
    {
        name: "joinUsLink_navigation",
        actions: ["supportUsDropdown", "joinUsLink"],
        expectedUrl: "https://staging.jarokelo.hu/csatlakozz",
    },
    {
        name: "onePercentLink_navogation",
        actions: ["supportUsDropdown", "onePercentLink"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass/egyszazalek",
    },
    {
        name: "forMunicipalitiesLink_navigation",
        actions: ["supportUsDropdown", "forMunicipalitiesLink"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass/onkormanyzatoknak",
    },
    {
        name: "partnersAndSupportersLink_navigation",
        actions: ["supportUsDropdown", "partnersAndSupportersLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/tamogass/partnerek-es-tamogatok",
    },
    {
        name: "whatIsTheJarokeloGoodForLink_navigation",
        actions: ["aboutUsDropdown", "whatIsTheJarokeloGoodForLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/mire-jo-a-jarokelo",
    },
    {
        name: "contactUsLink_navigation",
        actions: ["aboutUsDropdown", "contactUsLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/kapcsolat",
    },
    {
        name: "theTeamLink_navigation",
        actions: ["aboutUsDropdown", "theTeamLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/csapat",
    },
    {
        name: "reportsAndPublicBenefitStatementsLink_navigation",
        actions: ["aboutUsDropdown", "reportsAndPublicBenefitStatementsLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/egyesulet",
    },
    {
        name: "privacyPolicyLink_navigation",
        actions: ["aboutUsDropdown", "privacyPolicyLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/rolunk/adatkezelesi-tajekoztato",
    },
    {
        name: "termsOfUseLink_navigation",
        actions: ["aboutUsDropdown", "termsOfUseLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/rolunk/felhasznalasi-feltetelek",
    },
    {
        name: "writeToUsLink_navigation",
        actions: ["writeToUsLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/kapcsolat",
    },
    {
        name: "joinUsFooterLink_navigation",
        actions: ["joinUsFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/csatlakozz",
    },
    {
        name: "requestHelpLink_navigation",
        actions: ["requestHelpLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/hivatal",
    },
    {
        name: "howItWorksFooterLink_navigation",
        actions: ["howItWorksFooterLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/problema-bejelentese/hogyan-mukodik",
    },
    {
        name: "statisticsFooterLink_navigation",
        actions: ["statisticsFooterLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/bejelentesek/statisztikak/varosok/budapest",
    },
    {
        name: "theTeamFooterLink_navigation",
        actions: ["theTeamFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/csapat",
    },
    {
        name: "jarokeloWidgetLink_navigation",
        actions: ["jarokeloWidgetLink"],
        expectedUrl: "https://staging.jarokelo.hu/widget/configure",
    },
    {
        name: "reportsAndPublicBenefitStatementsFooterLink_navigation",
        actions: ["reportsAndPublicBenefitStatementsFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/egyesulet",
    },
    {
        name: "supportLargeButton_navigation",
        actions: ["supportLargeButton"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass",
    },
    {
        name: "reportProblemLargeButton_navigation",
        actions: ["reportProblemLargeButton"],
        expectedUrl: "https://staging.jarokelo.hu/problema-bejelentese",
    },
];

const newPageElements = [
    {
        name: "healthyStreetsLink_navigation",
        action: "healthyStreetsLink",
        expectedUrl: "https://egeszsegesutcak.hu/",
    },
    {
        name: "blogLink_navigation",
        action: "blogLink",
        expectedUrl:
            "https://jarokelok.blog.hu/?utm_source=jarokelo&utm_medium=main-menu",
    },
    {
        name: "likeUsOnFacebookLink_navigation",
        action: "likeUsOnFacebookLink",
        expectedUrl: "https://www.facebook.com/jarokelohu",
    },
    {
        name: "followUsOnInstagramLink_navigation",
        action: "followUsOnInstagramLink",
        expectedUrl: "https://www.instagram.com/jarokelo/",
    },
    {
        name: "followUsOnLinkedinLink_navigation",
        action: "followUsOnLinkedinLink",
        expectedUrl: "https://www.linkedin.com/company/jarokelo-hu/",
    },
    {
        name: "readOurBlogLink_navigation",
        action: "readOurBlogLink",
        expectedUrl: "https://jarokelok.blog.hu/",
    },
    {
        name: "subscribeToOurRssFeedLink_navigation",
        action: "subscribeToOurRssFeedLink",
        expectedUrl: "https://jarokelo.hu/rss/index",
    },
];

test.describe("Same page navigation test", () => {
    for (const element of samePageElements) {
        test(`${element.name} URL test`, async ({ page }) => {
            const Main = new MainPage(page);

            if (element.actions) {
                for (const actions of element.actions) {
                    await Main[actions].click();
                }
            }

            const pageUrl = page.url();
            expect(pageUrl).toBe(element.expectedUrl);
        });
    }
});

test.describe("New page navigation test", () => {
    for (const element of newPageElements) {
        test(`${element.name} URL test`, async ({ page, context }) => {
            const Main = new MainPage(page);

            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                Main[element.action].click(),
            ]);

            await newPage.waitForLoadState();
            const actualUrl = newPage.url();
            await expect(actualUrl).toBe(element.expectedUrl);
        });
    }
});

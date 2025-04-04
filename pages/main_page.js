export class MainPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.loginButton = page.locator('xpath=//*[@id="w1"]/li/a');
        this.cookieIcon = page.locator('#cookieMinimizeIcon #cookieIcon');

        this.jarokeloLogo = page.getByRole('heading', { name: 'Járókelő', exact: true }).getByRole('link');

        this.newReportDropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/a');
        this.newReportLink = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[1]/a');
        this.howItWorksLink = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[2]/a');

        this.reportsDropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/a');
        this.previousReportsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[1]/a');
        this.mapSearchLink = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[2]/a');
        this.statisticsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[3]/a');

        this.supportUsDropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/a');
        this.supportUsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[1]/a/span');
        this.joinUsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[2]/a/span');
        this.onePercentLink = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[3]/a/span');
        this.forMunicipalitiesLink = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[4]/a/span');
        this.partnersAndSupportersLink = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[5]/a/span');

        this.healthyStreetsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[5]/a');

        this.blogLink = page.locator('xpath=/html/body/header/div/nav/ul/li[6]/a');

        this.aboutUsDropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/a');
        this.whatIsTheJarokeloGoodForLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[1]/a');
        this.contactUsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[3]/a');
        this.theTeamLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[4]/a');
        this.reportsAndPublicBenefitStatementsLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[5]/a');
        this.privacyPolicyLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[6]/a');
        this.termsOfUseLink = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[7]/a');

        this.likeUsOnFacebookLink = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[1]/a/span')
        this.followUsOnInstagramLink = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[2]/a/span');
        this.followUsOnLinkedinLink = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[3]/a/span');
        this.readOurBlogLink = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[4]/a/span');
        this.subscribeToOurRssFeedLink = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[5]/a/span');

        this.writeToUsLink = page.locator('xpath=/html/body/footer/div/div[1]/div[1]/p[1]/a/strong');
        this.joinUsFooterLink = page.locator('xpath=/html/body/footer/div/div[1]/div[1]/p[2]/a/strong');
        this.requestHelpLink = page.locator('xpath=/html/body/footer/div/div[1]/div[1]/p[3]/a/strong');

        this.howItWorksFooterLink = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[1]/a');
        this.statisticsFooterLink = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[2]/a');
        this.theTeamFooterLink = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[3]/a');
        this.jarokeloWidgetLink = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[4]/a');
        this.reportsAndPublicBenefitStatementsFooterLink = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[5]/a');

        this.supportLargeButton = page.locator('xpath=/html/body/main/section/aside[1]/div/div/div[1]/div/a');
        this.reportProblemLargeButton = page.locator('xpath=/html/body/main/section/article/div/div/a');

        this.indexReportsDataContainer = page.locator('id=index-reports');
        this.NewsletterSubscribeForm = page.locator('id=mc_embed_shell');
    }

    async gotoBaseUrl() {
        await this.page.goto('/');
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoProblemReportingPage() {
        await this.reportProblemLargeButton.click();
    }
}

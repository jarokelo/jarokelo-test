const { MainPage } = require('../pages/main_page');
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
    await page.waitForTimeout(1000);
});
    


test('Belépek_button should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Belépek_button).toBeVisible();
});

test('Cookie_icon should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.cookie_icon).toBeVisible();
});

test('járókelő_logo should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.járókelő_logo).toBeVisible();
});

test('Új_bejelentés_dropdown should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Új_bejelentés_dropdown).toBeVisible();
});

test('Új_bejelentés_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Új_bejelentés_dropdown.click();
    await expect (Main.Új_bejelentés_navigation_link).toBeVisible();
});

test('Hogyan_működik_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Új_bejelentés_dropdown.click();
    await expect (Main.Hogyan_működik_navigation_link).toBeVisible();
});

test('Bejelentések_dropdown should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Bejelentések_dropdown).toBeVisible();
});

test('Korábbi_bejelentések_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Bejelentések_dropdown.click();
    await expect (Main.Korábbi_bejelentések_navigation_link).toBeVisible();
});

test('Térképes_kereső_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Bejelentések_dropdown.click();
    await expect (Main.Térképes_kereső_navigation_link).toBeVisible();
});
    
test('Statisztikák_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Bejelentések_dropdown.click();
    await expect (Main.Statisztikák_navigation_link).toBeVisible();
});

test('Támogass_dropdown should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Támogass_dropdown).toBeVisible();
});

test('Támogass_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Támogass_dropdown.click();
    await expect (Main.Támogass_navigation_link).toBeVisible();
});

test('Csatlakozz_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Támogass_dropdown.click();
    await expect (Main.Csatlakozz_navigation_link).toBeVisible();
});

test('Egy_százalék_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Támogass_dropdown.click();
    await expect (Main.Egy_százalék_navigation_link).toBeVisible();
});

test('Önkormányzatoknak_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Támogass_dropdown.click();
    await expect (Main.Önkormányzatoknak_navigation_link).toBeVisible();
});

test('Partnerek_és_támogatók_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Támogass_dropdown.click();
    await expect (Main.Partnerek_és_támogatók_navigation_link).toBeVisible();
});

test('Egészséges_utcák_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Egészséges_utcák_navigation_link).toBeVisible();
});

test('Blog_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Blog_navigation_link).toBeVisible();
});

test('Rólunk_dropdown should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Rólunk_dropdown).toBeVisible();
});

test('Mire_jó_a_járókelő_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.Mire_jó_a_járókelő_navigation_link).toBeVisible();
});

test('Kapcsolat_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.Kapcsolat_navigation_link).toBeVisible();
});

test('A_csapat_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.A_csapat_navigation_link).toBeVisible();
});

test('Beszámolók_és_közhasznú_jelentések_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.Beszámolók_és_közhasznú_jelentések_navigation_link).toBeVisible();
});

test('Adatkezelési_tájékoztató_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.Adatkezelési_tájékoztató_navigation_link).toBeVisible();
});

test('Felhasználási_feltételek_navigation_link should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await Main.Rólunk_dropdown.click();
    await expect (Main.Felhasználási_feltételek_navigation_link).toBeVisible();
});

test('Lájkolj_minket_a_facebookon_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Lájkolj_minket_a_facebookon_footer).toBeVisible();
});

test('Kövess_minket_Instagramon_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Kövess_minket_Instagramon_footer).toBeVisible();
});

test('Kövess_minket_LinkedInen_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Kövess_minket_LinkedInen_footer).toBeVisible();
});

test('Olvasd_a_blogunkat_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Olvasd_a_blogunkat_footer).toBeVisible();
});

test('Iratkozz_fel_RSS_feedünkre_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Iratkozz_fel_RSS_feedünkre_footer).toBeVisible();
});

test('Írj_nekünk_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Írj_nekünk_footer).toBeVisible();
});

test('Csatlakozz_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Csatlakozz_footer).toBeVisible();
});

test('Segítséget_kérek_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Segítséget_kérek_footer).toBeVisible();
});

test('Hogyan_működik_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Hogyan_működik_footer).toBeVisible();
});

test('Statisztika_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Statisztika_footer).toBeVisible();
});

test('A_csapat_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.A_csapat_footer).toBeVisible();
});

test('Járókelő_widget_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Járókelő_widget_footer).toBeVisible();
});

test('Beszámolók_és_közhasznú_jelentések_footer should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Beszámolók_és_közhasznú_jelentések_footer).toBeVisible();
});

test('Támogatom_large_button should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Támogatom_large_button).toBeVisible();
});

test('Bejelentek_egy_problémát_large_button should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.Bejelentek_egy_problémát_large_button).toBeVisible();
});

test('index_reports_data_container should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.index_reports_data_container).toBeVisible();
});

test('newsletter_subscribe_form should be visible', async ({ page }) => {
    const Main = new MainPage(page);
    await expect (Main.newsletter_subscribe_form).toBeVisible();
});










const { expect } = require('@playwright/test');
exports.MainPage = class MainPage {
  
  
  
  constructor(page) {
    
    this.page = page;
    this.Belépek_button = page.locator('xpath=//*[@id="w1"]/li/a');
    this.cookieIcon = page.locator('id=cookieIcon');

    this.járókelő_logo = page.locator('xpath=/html/body/header/div/h1/a/svg/use');

    this.Új_bejelentés_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/a');
    this.Új_bejelentés_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[1]/a');
    this.Hogyan_működik_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[2]/a');

    this.Belentések_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/a');
    this.Korábbi_bejelentések_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[1]/a');
    this.Térképes_kereső_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[2]/a');
    this.Statisztikák_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[3]/a');

    this.Támogass_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/a');
    this.Támogass_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[1]/a/span');
    this.Csatlakozz_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[2]/a/span');
    this.Egy_százalék_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[3]/a/span');
    this.Önkormányzatoknak_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[4]/a/span');
    this.Partnerek_és_támogatók_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[5]/a/span');

    this.Egészséges_utcák_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[5]/a');

    this.Blog_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[6]/a');

    this.Rólunk_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/a');
    this.Mire_jó_a_járókelő_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[1]/a');
    this.Kapcsolat_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[3]/a');
    this.A_csapat_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[4]/a');
    this.Beszámolók_és_közhasznú_jelentések_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[5]/a');
    this.Adatkezelési_tájékoztató_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[6]/a');
    this.Felhasználási_feltételek_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[7]/a');

    this.Lájkolj_minket_a_facebookon_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[1]/a/span')
    this.Kövess_minket_Instagramon_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[2]/a/span');
    this.Kövess_minket_LinkedInen_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[3]/a/span');
    this.Olvasd_a_blogunkat_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[4]/a/span');
    this.Iratkozz_fel_RSS_feedünkre_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[3]/ul/li[5]/a/span');

    this.Írj_nekünk_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[3]/a');
    this.Csatlakozz_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[1]/p[2]/a/strong');
    this.Segítséget_kérek_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[1]/p[3]/a/strong');
    
    this.Hogyan_működik_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[1]/a');
    this.Statisztika_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[2]/a');
    this.A_csapat_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[3]/a');
    this.Járókelő_widget_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[4]/a');
    this.Beszámolók_és_közhasznú_jelentések_footer = page.locator('xpath=/html/body/footer/div/div[1]/div[5]/ul/li[5]/a');
    
    this.Támogatom_large_button = page.locator('xpath=/html/body/main/section/aside[1]/div/div/div[1]/div/a');
    this.Bejelentek_egy_problémát_large_button = page.locator('xpath=/html/body/main/section/article/div/div/a');

    this.index_reports_data_container = page.locator('id=index-reports');
    this.newsletter_subscribe_form = page.locator('id=mc_embed_shell');
    
  }
}

    
    

    






    
    
    
    
    
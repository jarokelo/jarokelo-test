const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {
  
  
  
  constructor(page) {
    
    this.page = page;
    this.clearCookie = page.locator('id=cookieReject');
    this.userMenuIcon = page.locator('xpath=/html/body/header/div/div/a[2]');
    this.loginIcon = page.locator('xpath=//*[@id="w1"]/li/a');
    this.email_textbox = page.locator('id=loginform-email');
    this.password_textbox = page.locator('id=loginform-password');
    this.login_submit_button = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[5]/button');
    this.user_image = page.locator('xpath=/html/body/header/div/div/a[2]/img');
    this.user_profile = page.locator('xpath=//*[@id="w1"]/li/a');
    
  }
  
  async gotoBaseUrl(){
    await this.page.goto('/');
  }
  
  async clearCookies(){
    await this.clearCookie.click();
  }
  
  async gotoLoginPage(){
    await this.loginLink.click();
  }
    
  async login(email, password){
    await this.email_textbox.fill(email);
    await this.password_textbox.fill(password);
    await this.login_submit_button.click();
  }
}
  
    
    
    
  


      

      
      
      
      
    
    
    
    
    
    
    
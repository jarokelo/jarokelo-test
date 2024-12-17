const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {
  
  
  
  constructor(page) {
    
    this.page = page;
    this.clearCookie = page.locator('id=cookieReject');
    this.userMenuIcon = page.locator('xpath=/html/body/header/div/div/a[2]');
    this.loginIcon = page.locator('xpath=//*[@id="w1"]/li/a');
    this.emailTextbox = page.locator('id=loginform-email');
    this.passwordTextbox = page.locator('id=loginform-password');
    this.loginSubmitButton = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[5]/button');
    this.userImage = page.locator('xpath=/html/body/header/div/div/a[2]/img');
    this.userProfile = page.locator('xpath=//*[@id="w1"]/li/a');
    this.showPasswordIcon = page.locator('#login-form').getByRole('img').nth(1);
    this.googleLoginButton = page.locator('xpath=//*[@id="w0"]/div/a');
    this.rememberMeCheckbox = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[4]/div/div[1]/div/label/div');
    this.forgottenPasswordLink = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[4]/div/div[2]/strong/a');
    this.signUpLink = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[6]/p[2]/strong/a');
    this.cookieIcon = page.locator('id=cookieIcon');
    this.helpBlock = page.locator('xpath=//*[@id="login-form"]/div/div/div/section/div/div[3]/div[2]');
    
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
    await this.emailTextbox.fill(email);
    await this.passwordTextbox.fill(password);
    await this.loginSubmitButton.click();
  }
}
  
    
    
    
  


      

      
      
      
      
    
    
    
    
    
    
    
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.get('http://www.amazon.com/');
driver.findElement(By.linkText('Sign in')).click();
driver.findElement(By.id('ap_email')).sendKeys("PUT_USERNAME_HERE");
driver.findElement(By.id('ap_password')).sendKeys("PUT_PASSWORD_HERE");
driver.findElement(By.id('signInSubmit')).click();

for (i = 0; i < 12; i++) {
	driver.get("https://www.amazon.com/Amazon-1-US-Email-eGift-Card/dp/B004LLIKVU/ref=sr_1_1?s=gift-cards&ie=UTF8&qid=1484266737&sr=1-1&keywords=gift+card");
	driver.findElement(By.id('gc-order-form-custom-amount')).sendKeys('1.01');
	driver.findElement(By.id('gc-order-form-recipients')).sendKeys("robertjskelton@gmail.com");
	driver.findElement(By.id('gc-order-form-senderName')).sendKeys(i);
	driver.findElement(By.id('gc-order-form-submit')).click();
	driver.findElement(By.id('continue-top')).click();
	driver.wait(until.titleIs('Place Your Order - Amazon.com Checkout'), 3000);
	driver.findElement(By.xpath("//input[@name='placeYourOrder1']")).click();
}

driver.quit();

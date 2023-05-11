const { Browser } = require('selenium-webdriver');
const Page = require('./page.js');
const Key = require('webdriverio');


class TemporaryMailPage extends Page {

    get copyMailBtn() {return $('button[class="iconx"]') };
    get newEmail() {return $('[class="mail-item-sub"]') };
    get price() {return $('body > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)') };
    get messageFrame() { return '#fullmessage' };
    get price() {return $('//table[1]/tbody[1]/tr[2]/td[2]') } ;

    async openNewTab() {
        await super.openNewTab('https://tempmailo.com/'); 
    }
    
    //Copying adress of the temporary email
    async copyMail() {
        await this.copyMailBtn.waitForExist();
        await this.copyMailBtn.click();
    }

    async switchWin() {
        await browser.switchWindow('Cloud Pricing Calculator');
    }

    //Recieving the email with price from calculator
    async recieveMail() {
        await this.newEmail.waitUntil(async function () {
            return (await this.getText()) === 'Google Cloud Price Estimate';
        });
        await this.newEmail.click();
    }

    //Obtain the price of the estimate from email
    async emailPrice() {
        await this.waitAndSwitchToFrame(this.messageFrame);
        const priceEmail = await this.price.getText();
        return priceEmail;
    }   

    
    
    
    
}

module.exports = new TemporaryMailPage();
const HomePage = require('../pages/home.page.js')
const SearchPage = require('../pages/search.page.js')
const CalculatorPage = require('../pages/calculator.page.js')
const TemporaryMailPage = require('../pages/temporarymail.page.js')
const calculatorPage = require('../pages/calculator.page.js')

describe('Cloud Computing Service', ()=>{

    it('should open the caclculator and verify prices with email', async () => {
        await HomePage.open();
        await HomePage.search('Google Cloud Platform Pricing Calculator');
        
        await SearchPage.searchResult.click();
        
        //Filling in the form with the following data
        await CalculatorPage.cookieAgree();
        await CalculatorPage.closeChatBot();
        await CalculatorPage.switchToFrames();
        await CalculatorPage.numberOfInstances('4');
        await CalculatorPage.operatingSystemSoftware();
        await CalculatorPage.vmClass();
        await CalculatorPage.instanceType();
        await CalculatorPage.GPU();
        await CalculatorPage.localSSD();
        await CalculatorPage.datacenterLocation();
        await CalculatorPage.committedUsage();
        await CalculatorPage.estimate();
        const cloudPrice = await CalculatorPage.cloudPrice();
        
        //Copying adress of the temporary email
        await TemporaryMailPage.openNewTab();
        await TemporaryMailPage.copyMail();
        await TemporaryMailPage.switchWin();
        
        //Sending the email
        await CalculatorPage.switchToFrames();
        await CalculatorPage.sendEmail();
        await CalculatorPage.switchWin();
        
        //Recieving and getting the price from the email
        await TemporaryMailPage.recieveMail();
        const emailPrice = await TemporaryMailPage.emailPrice();

        //Compearing the prices
        if (emailPrice === cloudPrice) {
            console.log("Total Estimated Monthly Cost in the letter matches what is displayed in the calculator");
        }
        else { console.log("Total estimated monthly cost in the letter does not match what is shown in the calculator"); }


        

    })

})





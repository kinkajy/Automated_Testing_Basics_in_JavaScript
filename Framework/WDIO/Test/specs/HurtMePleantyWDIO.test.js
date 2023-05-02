const HomePage = require('../pages/home.page.js')
const SearchPage = require('../pages/search.page.js')
const CalculatorPage = require('../pages/calculator.page.js')

describe('Cloud Computing Service', ()=>{

    it('should open the caclculator and verify prices', async () => {
        await HomePage.open();
        await HomePage.search('Google Cloud Platform Pricing Calculator');
        await SearchPage.searchResult.click();
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
        await CalculatorPage.dataCheck();
        
    })

})

 
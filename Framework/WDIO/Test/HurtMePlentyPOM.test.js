const homepage = require('../Page/homepage');
var testdata = require('../TestData/HurtMePlenty_Data.json')


describe('Describe', function(){
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('POM Google Cloud check', async function(){
        await homepage.enter_url(testdata.page.url);
        await homepage.enter_search('Google Cloud Platform Pricing Calculator');
        await homepage.locateAndClickByXpth("(//a[contains(@class, 'gs-title')])[1]");

        await homepage.clickByCss('devsite-snackbar[type="cookie-notification"] button');
        //await homepage.clickByCss('md-checkbox[ng-model=".close"]');

        console.log("switching to the iframe...");
        //await new Promise(r => setTimeout(r, 200));
        await homepage.frameSwithByCss('iframe[name^="goog_"]');      
        //await new Promise(r => setTimeout(r, 500));
        await homepage.frameSwithByCss('#myFrame');      

        
        console.log("Field: number of instances");
        //homepage.enterTextByXpath('(//input[starts-with(@id, "input_")])[1]',testdata.fieldsData.numberOfInstances);
        await homepage.enterTextByCss('[id^="input_"][ng-model="listingCtrl.computeServer.quantity"]',testdata.fieldsData.numberOfInstances);
        

        console.log("Field: operating system");
        //homepage.clickByCss('#select_value_label_84');
        //homepage.clickByCss('#select_option_94');
        //homepage.clickByXpath("(//md-select[starts-with(@id, 'select_')])[1]");
        //homepage.clickByXpath(`//md-option[@value=${testdata.fieldsData.operatingSystem}]`);
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.os"]');
        await homepage.clickByCss(`md-option[value=${testdata.fieldsData.operatingSystem}]`);
        
        console.log("Field: provisioning model");
        //homepage.clickByXpath("(//md-select[starts-with(@id, 'select_')])[2]");
        //homepage.clickByXpath('//md-option[@value="regular"]');
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.class"]');
        await homepage.clickByCss(`md-option[value=${testdata.fieldsData.provisioningModel}]`);

        console.log("Instance type");
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.series"]');
        await homepage.clickByCss(`md-option[value=${testdata.fieldsData.series}]`);
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.instance"]');
        await homepage.clickByCss(`md-option[value=${testdata.fieldsData.instanceType}]`);

        console.log("GPUs");
        await homepage.clickByXpath('(//md-checkbox[@aria-label="Add GPUs"]/div[@class="md-container md-ink-ripple"])[1]');
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.gpuType"]');
        await homepage.clickByCss(`md-option[value=${testdata.fieldsData.gpuType}]`);
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.gpuCount"]');
        await homepage.clickByCss(`md-option[value="${testdata.fieldsData.numberOfGPUs}"][ng-repeat="item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]"]`);

        console.log("LocalSSD");
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.ssd"]');
        await homepage.clickByCss(`md-option[value="${testdata.fieldsData.localSSD}"][ng-repeat="item in listingCtrl.dynamicSsd.computeServer"]`);
        
        console.log("Datacenter location");
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.location"]');
        await homepage.clickByCss(`md-option[value="${testdata.fieldsData.datacenterLocation}"][ng-repeat="item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer"]`);

        console.log("Committed usage");
        await homepage.clickByCss('md-select[ng-model="listingCtrl.computeServer.cud"]');
        await homepage.clickByCss(`md-option[value="${testdata.fieldsData.committedUsage}"][class="md-ink-ripple"][id="select_option_131"]`);

        console.log("Estimate");
        await homepage.clickByCss('button[ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]');
               

        console.log("end of test");
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})
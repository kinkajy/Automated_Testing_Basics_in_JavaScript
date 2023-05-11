const { Browser } = require('selenium-webdriver');
const Page = require('./page.js');
const Key = require('webdriverio');

class CalculatorPage extends Page {

    get cookie() {return $('devsite-snackbar[type="cookie-notification"] button') };
    get closeButton() {return $('cloudx-chat').shadow$('span[class="close"]')};
   
    get firstFrame()  { return 'iframe[name^="goog_"]' };
    get secondFrame() { return '#myFrame' };
    get chatBotFrame() { return 'cloudx-chat' };
    
    get instances() { return $('[id^="input_"][ng-model="listingCtrl.computeServer.quantity"]') };
    
    get operatingSystem() { return $('md-select[ng-model="listingCtrl.computeServer.os"]') };
    get operatingSystemFree() { return $('md-option[value="free"]') };
    
    get provisioningModel() {return $('md-select[ng-model="listingCtrl.computeServer.class"]') };
    get provisioningModelRegular() {return $(`md-option[value="regular"]`) };
    
    get series() {return $('md-select[ng-model="listingCtrl.computeServer.series"]') };
    get seriesN1() {return $('md-option[value="n1"]') };
    get machineType() {return $('md-select[ng-model="listingCtrl.computeServer.instance"]') };
    get machineTypeN1St8() {return $(`md-option[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]`) };

    get addGPU() {return $('(//md-checkbox[@aria-label="Add GPUs"]/div[@class="md-container md-ink-ripple"])[1]') };
    get GPUType() {return $('md-select[ng-model="listingCtrl.computeServer.gpuType"]') };
    get GPUTypeV100() {return $('md-option[value="NVIDIA_TESLA_V100"]') };
    get numberOfGPUs() {return $('md-select[ng-model="listingCtrl.computeServer.gpuCount"]') };
    get numberOfGPUs1() {return $('md-option[value="1"][ng-repeat="item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]"]') };
    
    get localSSDField() {return $('md-select[ng-model="listingCtrl.computeServer.ssd"]') };
    get localSSD2gb() {return $('md-option[value="2"][ng-repeat="item in listingCtrl.dynamicSsd.computeServer"]') };

    get datacenter() {return $('md-select[ng-model="listingCtrl.computeServer.location"]') };
    get frankfurt() {return $('md-option[value="europe-west3"][ng-repeat="item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer"]') };

    get committedUsageField() {return $('md-select[ng-model="listingCtrl.computeServer.cud"]') };
    get committedUsage1year() {return $('md-option[value="1"][id="select_option_134"]') };

    get estimateBtn() {return $('button[ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]') };

    //check
    get vmClassCheck() {return $('md-list-item[ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]') };
    get instanceTypeCheck() {return $('(//md-list-item[@role="listitem"])[5]') };
    get regionCheck() {return $('(//md-list-item[@role="listitem"])[1]') };
    get localSSDCheck() {return $(' md-list-item[ng-if="item.items.ssd && item.items.ssd != 0"]') };
    get comntermCheck() {return $('md-list-item[ng-if="item.items.termText && item.items.termText.length != 0"]') };

    //email
    get emailEstimateBtn() {return $('button[title="Email Estimate"]') };
    get emailField() {return $('[ng-model="emailQuote.user.email"]') };
    get emailSendBtn() {return $('[ng-disabled="emailForm.$invalid"]') };

    get price() {return $('.cpc-cart-total .md-title .ng-binding') };


    async cookieAgree() {
        await this.cookie.waitForExist();
        await this.cookie.click();
    }

    async closeChatBot() {
        await this.closeButton.waitForExist();
        await this.closeButton.click();
    }  
       
    async switchToFrames() {
        await this.waitAndSwitchToFrame(this.firstFrame);
        await this.waitAndSwitchToFrame(this.secondFrame);
    }
     
    async numberOfInstances(numberOfInstances) {
        await this.instances.waitForExist();
        await this.instances.setValue(numberOfInstances);
    }

    async operatingSystemSoftware() {
        await this.operatingSystem.click();
        await this.operatingSystemFree.click();
    }

    async vmClass() {
        await this.provisioningModel.click();
        await this.provisioningModelRegular.click();
    }

    async instanceType() {
        await this.series.click();
        await this.seriesN1.waitForExist();
        await this.seriesN1.click();
        await this.machineType.click();
        await this.machineTypeN1St8.click();
    }

    async GPU() {
        await this.addGPU.click();
        await this.GPUType.click();
        await this.GPUTypeV100.click();
        await this.numberOfGPUs.click();
        await this.numberOfGPUs1.click();
    }

    async localSSD() {
        await this.localSSDField.waitForExist();
        await this.localSSDField.click();
        await this.localSSD2gb.click();
    }

    async datacenterLocation() {
        await this.datacenter.click();
        await this.frankfurt.click();
    }

    async committedUsage() {
        await this.committedUsageField.click();
        await this.committedUsage1year.click();
    }

    async estimate() {
        await this.estimateBtn.click();
    }  

    //Verification of the correspondence of the data of the required fields
    async dataCheck() {
        await expect(this.vmClassCheck).toHaveTextContaining('Provisioning model: Regular');
        await expect(this.instanceTypeCheck).toHaveTextContaining('Instance type: n1-standard-8');
        await expect(this.regionCheck).toHaveTextContaining('Region: Frankfurt');
        await expect(this.localSSDCheck).toHaveTextContaining('Local SSD: 2x375 GiB');
        await expect(this.comntermCheck).toHaveTextContaining('Commitment term: 1 Year');
    }

    //Sending the price of the calculated estimates
    async sendEmail() {
        await this.emailEstimateBtn.waitForExist();
        await this.emailEstimateBtn.click();
        await this.emailField.click();
        await browser.keys(['Control', 'v']);
        await this.emailSendBtn.click();
    }

    async switchWin() {
        await browser.switchWindow('Temp Mail');
    }

    //Obtain the price of the estimate that has been calculated and parse it
    async cloudPrice() {
        const priceCloud = await this.price.getText();
        const regex = /USD \d{1,3},\d{1,3}.\d{1,3}/;
        const parsedPrice = priceCloud.match(regex);
        return parsedPrice[0];
    }
       
}

module.exports = new CalculatorPage(); 
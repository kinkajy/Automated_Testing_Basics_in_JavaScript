module.exports = class Page  {

    constructor() {
        this.title = 'Google Cloud Pricing Calculator'
    }
    open (path) {
        return browser.url(path)
    }

    async switchToFrame (frame) {
        await $(frame).waitForExist();
        const frameElement = await browser.findElement('css selector', frame);
        await browser.switchToFrame(frameElement);      
    }
   
}
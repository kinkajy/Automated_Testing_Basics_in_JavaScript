module.exports = class Page  {

    constructor() {
        this.title = 'Google Cloud Pricing Calculator'
    }
    
    open (path) {
        return browser.url(path)
    }

    openNewTab (path) {
        return browser.newWindow(path)
    }

    async waitAndSwitchToFrame (frame) {
        await $(frame).waitForExist();
        const frameElement = await browser.findElement('css selector', frame);
        await browser.switchToFrame(frameElement);      
    }

    switchWin (match) {
        return browser.switchWindow(match);
    }
   
}
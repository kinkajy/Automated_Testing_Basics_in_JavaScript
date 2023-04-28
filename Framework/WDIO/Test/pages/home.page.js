const Page = require('./page.js');

class HomePage extends Page {

    get searchInput() { return $('input[name=q]') }
    
    async search (searchValue) {
        await this.searchInput.setValue(searchValue);
        await browser.keys('Enter'); 
    }

    async open() {
        await super.open('https://cloud.google.com/'); 
    }
}

module.exports = new HomePage();

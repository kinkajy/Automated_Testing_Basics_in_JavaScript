const Page = require('./page.js');

class SearchPage extends Page {
    
    get searchResult() { return $("(//a[contains(@class, 'gs-title')])[1]") }

}

module.exports = new SearchPage();
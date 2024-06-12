# fanwiki-scraper
A web scraper for Fandom Wiki using axios and cheerio.
# Set up
```bash
npm i github:rizxyu/fanwiki-scraper
```
# Cara Pemakaian
```javascript
const FanWiki = require('fanwiki-scraper'); // Path sesuai dengan struktur direktori
const fanwiki = new FanWiki();

(async () => {
    const searchResults = await fanwiki.search('Terraria');
    console.log(searchResults);
})();
```
# Fitur Yang Tersedia
* Search
* Get info

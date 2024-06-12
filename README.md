# FanWiki Scraper

A powerful web scraper for Fandom Wiki built using axios and cheerio.

## Overview

FanWiki Scraper is a Node.js module designed to fetch and extract data from various Fandom Wiki pages. Whether you're looking for game guides, anime information, or any other wiki content, this scraper can help you gather the data you need efficiently.

## Features

- **Search**: Perform searches across Fandom Wikis and retrieve detailed results.
- **Get Info**: (Coming Soon) Extract specific information from a given URL.

## Installation

To install FanWiki Scraper, use the following command:

```bash
npm i github:WizzTeamOfficial/fanwiki-scraper
```

## Usage

```javascript
const FanWiki = require('fanwiki-scraper');
const fanwiki = new FanWiki();

(async () => {
    const searchResults = await fanwiki.search('Terraria');
    console.log(searchResults);
})();

```

## Available Methods
``communitySearch(query)``
``simpleSearch(query)``
<p>Search for a specific query across Fandom Wikis.</p>

**Parameters:**

- query (string): The search term.
  
**Returns:**
- An array of search results with details including title, URL, thumbnail, and description.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

## Credits
- Author: [Rizxyu](https://github.com/rizxyu)

Thank you for using FanWiki Scraper! Your contributions and feedback are greatly appreciated.

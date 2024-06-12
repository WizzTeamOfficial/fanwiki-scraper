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
npm i github:rizxyu/fanwiki-scraper
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
`search(query)`
<p>Search for a specific query across Fandom Wikis.</p>

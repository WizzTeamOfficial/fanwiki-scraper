const axios = require('axios');
const cheerio = require('cheerio');

/*
 * Put Your Credit Here
 * Dont sell this code, because it is free
 *
 * Author: github.com/orgs/WizzTeamOfficial
 * All Contribute: Rizxyu, Fauzan, MuhammadRestu
 */

class FanWiki {
    constructor() {
        this.other_baseURL = {
            games: {
                terraria: "https://terraria.fandom.com/",
                minecraft: "https://minecraft.fandom.com/",
                genshin_impact: "https://genshin-impact.fandom.com/"
            },
            anime: {
                onepiece: "https://onepiece.fandom.com/"
            },
            manhwa: {
                solo_leveling: "solo-leveling.fandom.com",
                tower_of_god: "towerofgod.fandom.com"
            }
        };
    }
    async simpleSearch(query) {
        try {
        const response = await axios.get(`https://services.fandom.com/mobile-fandom-app/unified-search/summary?query=${encodeURIComponent(query)}&language=in`, { headers: { 
         "Access-Control-Allow-Origin": "*", 
         "Referrer-Policy": "strict-origin-when-cross-origin", 
         "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36" 
        }
      })
        const result = {
            status: 200,
            result: response.data
        }
        return result
        } catch (e) {
            return { status: 500, error: "Service Unavailable"}
            console.log("error: ", e)
        }
    }
    async communitySearch(query) {
        const baseUrl = "https://community.fandom.com/wiki/Special:Search?query=";
        const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');
        const url = `${baseUrl}${encodedQuery}&scope=cross-wiki`;

        try {
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);
            const results = [];

            $('.unified-search__result').each((index, element) => {
                const result = {};
                const titleElement = $(element).find('a.unified-search__result__title');
                result.title = titleElement.text().trim();
                result.url = titleElement.attr('href');
                result.thumbnail = titleElement.data('thumbnail');
                result.desc = $(element).find('.unified-search__result__content').text().trim();
                results.push(result);
            });

            return {
                status: 200,
                message: "success get data"
                results
            };
        } catch (error) {
            console.log("Error fetching search results:", error);
            return {status: 500, message: "Service Unavailable"};
        }
    }
}

module.exports = FanWiki;

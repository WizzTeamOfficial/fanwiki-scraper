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
        const response = await axios.get("https://services.fandom.com/mobile-fandom-app/unified-search/summary?query=" + encodeURIComponent(query) + "&language=in")
        const result = {
            status: 200,
            result: response.data
        }
        return result
        } catch (e) {
            return { status: 500, error: "Service unavailable"}
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
                author: "github.com/rizxyu",
                credit: "Thank you for you all contribution on this repo",
                results
            };
        } catch (error) {
            console.log("Error fetching search results:", error);
            return [];
        }
    }

    // Fungsi untuk mendapatkan informasi dari URL tertentu
    async communityGetDetails(url) {
        console.log("Coming soon");
    }

    // Fungsi untuk mencari di wiki lain
    async searchInOtherWiki(category, wikiName, query) {
        console.log("Coming soon");
    }
                           }
module.exports = FanWiki

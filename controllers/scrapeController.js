const cheerio = require('cheerio');
const axios = require('axios');

module.exports = {
    findUSNews: (req, res) => {
        axios.get("https://money.usnews.com/money/personal-finance/saving-and-budgeting").then(function (response) {

            let $ = cheerio.load(response.data);

            let allArticles = [];

            $(".medium-top").each(function (i, element) {

                let result = {};

                result.title = $(this).find("h3").text().trim();
                result.excerpt = $(this).find(".show-for-medium-up").find('.block-flush').text().trim();
                result.link = $(this).find("a").attr("href");

                allArticles.push(result);

            })
            res.json(allArticles);
        });
    },
    findToday: (req, res) => {
        axios.get("https://www.usatoday.com/money/personal-finance").then(function (response) {

            let $ = cheerio.load(response.data);

            let allArticles = [];

            $(".hgpm-item").each(function (i, element) {

                let result = {};

                result.title = $(this).find(".js-list-wrap").find(".hgpm-list-text").find(".js-asset-headline").text().trim();
                result.excerpt = $(this).find(".js-list-wrap").find(".hgpm-list-text").find(".hgpm-back-listview-text").text().trim();
                let todayLink = $(this).find("a").attr("href");
                result.link = `https://www.usatoday.com${todayLink}`

                allArticles.push(result);

            })
            res.json(allArticles);
        })
    },
    findStreet: (req, res) => {
        axios.get("https://www.thestreet.com/personal-finance").then(function (response) {

            let $ = cheerio.load(response.data);

            let allArticles = [];

            $(".news-list__item").each(function (i, element) {

                let result = {};

                result.title = $(this).find(".news-list__block").find(".news-list__body").find("a").find("h3").text().trim();
                result.excerpt = $(this).find(".news-list__block").find(".news-list__body").find("p").text().trim()
                let streetLink = $(this).find("a").attr("href");
                result.link = `https://www.thestreet.com${streetLink}`

                allArticles.push(result);

            })
            res.json(allArticles);
        })
    }

};
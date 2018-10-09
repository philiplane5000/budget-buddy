const cheerio = require('cheerio');
const request = require('request');

module.exports = {

    findArticles: function (req, res) {

        request("https://money.usnews.com/money/personal-finance/saving-and-budgeting", function (error, res, html) {

           // let $ = cheerio.load(html);

            let allArticles = [];

            $("#main-articles").each(function (i, element) {

                let result = {}

                result.image =  $(this).find("pictures").attr("srcset");
                result.title = $(this).find("a").text().trim();
                result.excerpt = $(this).find(".block-flush").text().trim();
                result.link = $(this).find("a").attr("href");

                allArticles.push(result);

            })

        });

        // console.log(allArticles)
        res.json(allArticles);

    }

}
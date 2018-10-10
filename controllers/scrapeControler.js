const cheerio = require('cheerio');
const axios = require('axios');

let findArticles = (req, res) => {

        axios.get("https://money.usnews.com/money/personal-finance/saving-and-budgeting").then(function (response) {

            let $ = cheerio.load(response.data);

            let allArticles = [];

            $(".medium-top").each(function (i, element) {

                let result = {}

                result.title = $(this).find("h3").text().trim();
                result.excerpt = $(this).find(".show-for-medium-up").find('.block-flush').text().trim();
                result.link = $(this).find("a").attr("href");

                allArticles.push(result);

            })

            res.json(allArticles);

        });

    }

    module.exports.findArticles = findArticles;
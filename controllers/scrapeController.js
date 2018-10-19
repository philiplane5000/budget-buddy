const cheerio = require('cheerio')
const axios = require('axios')

module.exports = {
    findCnbc: (req, res) => {
        axios.get("https://www.cnbc.com/personal-finance").then(function (response) {

            let $ = cheerio.load(response.data)

            let allArticles = []

            $(".desc_size160_105").each(function (i, element) {

                let result = {}

                result.title = $(this).find(".headline").find("a").text().trim()

                result.excerpt = $(this).find("p").text().trim()

                result.picture = $(this).find("a").find("img").attr("data-img-src")

                let cnbcLink = $(this).find("a").attr("href")

                result.link = `https://www.cnbc.com${cnbcLink}`

                allArticles.push(result)

            })
            res.json(allArticles)
        })
    },
    findToday: (req, res) => {
        axios.get("https://www.usatoday.com/money/personal-finance").then(function (response) {

            let $ = cheerio.load(response.data)

            let allArticles = []

            $(".hgpm-item").each(function (i, element) {

                let result = {}

                result.title = $(this).find(".js-list-wrap").find(".hgpm-list-text").find(".js-asset-headline").text().trim()

                result.excerpt = $(this).find(".js-list-wrap").find(".hgpm-list-text").find(".hgpm-back-listview-text").text().trim()

                result.picture = $(this).find(".js-list-wrap").find(".js-asset-image").attr("data-src")

                let todayLink = $(this).find("a").attr("href")

                result.link = `https://www.usatoday.com${todayLink}`

                allArticles.push(result)

            })
            res.json(allArticles)
        })
    },
    findStreet: (req, res) => {
        axios.get("https://www.thestreet.com/personal-finance").then(function (response) {

            let $ = cheerio.load(response.data)

            let allArticles = []

            $(".news-list__item").each(function (i, element) {

                let result = {}

                result.title = $(this).find(".news-list__block").find(".news-list__body").find("a").find("h3").text().trim()

                result.excerpt = $(this).find(".news-list__block").find(".news-list__body").find("p").text().trim()

                result.picture = $(this).find("a").find("img").attr("src")

                let streetLink = $(this).find("a").attr("href")
                result.link = `https://www.thestreet.com${streetLink}`

                allArticles.push(result)

            })
            res.json(allArticles)
        })
    }

}

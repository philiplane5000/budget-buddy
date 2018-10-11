const budgetController = require("../controllers/budgetController")
const scrapeController = require("../controllers/scrapeController")
const path = require("path")

module.exports = function (app) {

    app.get("/api/budgets/", budgetController.findAll)

    app.post("/api/budgets/", budgetController.create)

    app.get("/api/budgets/:id",budgetController.findById)

    app.put("/api/budgets/:id",budgetController.update)

    app.delete("/api/budgets/:id", budgetController.remove)

    app.get("/api/scrape", scrapeController.findArticles)

    // // If no API routes are hit, send the React app
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    })

}

const budgetController = require("../controllers/budgetController")
const userController = require("../controllers/userController")
const scrapeController = require("../controllers/scrapeController")
const path = require("path")

module.exports = function (app) {

    //USER ROUTES:
    app.get("/api/user/:uid", userController.findByUid)

    app.get("/api/user/budget/:uid", userController.getBudgetbyUserUid)

    app.post("/api/user/new/:uid", userController.createNewUser)

    app.put("/api/user/update/:uid", userController.updateBudgetByCategory)

    app.get("/api/users/", userController.findAllUsers)

    //BUDGET ROUTES:
    app.get("/api/budgets/", budgetController.findAll)

    app.post("/api/budgets/", budgetController.create)

    app.get("/api/budgets/:id", budgetController.findById)

    app.put("/api/budgets/:id", budgetController.update)

    app.delete("/api/budgets/:id", budgetController.remove)

    app.get("/api/scrape/cnbc", scrapeController.findCnbc)

    app.get("/api/scrape/usatoday", scrapeController.findToday)

    app.get("/api/scrape/street", scrapeController.findStreet)

    // // If no API routes are hit, send the React app
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    })

}

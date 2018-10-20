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

    app.get('/api/user/articles/:uid', userController.getArticlesbyUserUid)

    app.put('/api/user/savedarticles/:uid', userController.saveArticle)

    app.put('/api/user/deletearticle/:uid', userController.deleteArticle)

    app.get("/api/scrape/cnbc", scrapeController.findCnbc)

    app.get("/api/scrape/usatoday", scrapeController.findToday)

    app.get("/api/scrape/street", scrapeController.findStreet)

    // // If no API routes are hit, send the React app
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    })

}

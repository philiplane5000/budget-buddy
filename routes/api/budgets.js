const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");
const scrapeController = require("../../controllers/scrapeControler")

// Matches with "/api/budgets"
router.route("/")
  .get(budgetController.findAll)
  .post(budgetController.create);

// Matches with "/api/budgets/:id"
router.route("/:id")
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

  // Matches with "/api/budgets/scrape"
  router.route("/scrape")
    .get(scrapeController.findArticles)

module.exports = router;
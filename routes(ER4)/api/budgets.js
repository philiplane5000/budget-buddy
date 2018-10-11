const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");
// const scrapeController = require("../../controllers/scrapeController")

// Matches with "/api/budgets"
router.route("/")
  .get(budgetController.findAll)
  .post(budgetController.create)

// Matches with "/api/budgets/:id"
router.route("/:id")
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;
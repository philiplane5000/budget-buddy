const router = require("express").Router();
const budgetRoutes = require("./budgets");

// Book routes
router.use("/budgets", budgetRoutes);

module.exports = router;
const router = require("express").Router();
const budgetRoutes = require("./budgets");

// Budget routes
router.use("/budgets", budgetRoutes);

module.exports = router;
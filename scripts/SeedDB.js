const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget"
);

const budgetSeed = [
  {
    category: "meals",
    label: "Meals Out",
    amount: 150
  },
  {
    category: "groceries",
    label: "Groceries",
    amount: 250
  },
  {
    category: "household",
    label: "Household Items",
    amount: 200
  },
  {
    category: "recreation",
    label: "Recreation",
    amount: 150
  },
  {
    category: "transportation",
    label: "Transportation",
    amount: 150
  },
  {
    category: "misc",
    label: "Misc",
    amount: 100
  },

];

db.Budget
  .remove({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

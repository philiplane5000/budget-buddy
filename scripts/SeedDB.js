const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget"
);

const budgetSeed = [
  {
    meals: 150,
  },
  {
    groceries: 250,
  },
  {
    household: 100,
  },
  {
    transportation: 200,
  },
  {
    recreation: 125,
  },
  {
    misc: 150
  }
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

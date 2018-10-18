const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget"
);

const budgetSeed = [
  {
    category: "meals",
    label: "Meals Out",
    amount: 180
  },
  {
    category: "groceries",
    label: "Groceries",
    amount: 250
  },
  {
    category: "household",
    label: "Household",
    amount: 200
  },
  {
    category: "transportation",
    label: "Transportation",
    amount: 120
  },
  {
    category: "recreation",
    label: "Recreation",
    amount: 100
  },
  {
    category: "misc",
    label: "Misc",
    amount: 150
  },

];

db.User
  .remove({})
  .then(() => db.User.collection.save({
      uid: 'I15ynLa647YgRWSOnMYBTNzUs9S2',
      displayName: 'Philip Taft-Dick',
      budgets: budgetSeed
  }))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    meals: { type: Number, required: true },
    groceries: { type: Number, required: true },
    household: { type: Number, required: true },
    transportation: { type: Number, required: true },
    recreation: { type: Number, required: true },
    misc: { type: Number, required: true },

  });
  
  const Budget = mongoose.model("Budget", budgetSchema);
  
  module.exports = Budget;
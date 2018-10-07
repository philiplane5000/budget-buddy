const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    category: { type: String, required: true},
    label: { type: String, required: true},
    amount: { type: Number, required: true}
  });
  
  const Budget = mongoose.model("Budget", budgetSchema);
  
  module.exports = Budget;


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BudgetSchema = new Schema({
    category: { type: String, required: true, unique: true},
    label: { type: String, required: true},
    amount: { type: Number, required: true, default: 0}
  });
  
  const Budget = mongoose.model("Budget", BudgetSchema);
  
  module.exports = Budget

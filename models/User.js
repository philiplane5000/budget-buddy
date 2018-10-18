const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    category: { type: String, required: true, unique: true},
    label: { type: String, required: true},
    amount: { type: Number, required: true, default: 0}
  });

const UserSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    budgets: [BudgetSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
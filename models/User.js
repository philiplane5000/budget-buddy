const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    amount: { type: Number, required: true, default: 0 },
    category: { type: String, required: true, unique: false },
});

// BudgetSchema.index({_id: 1}, {unique: true})
// BudgetSchema.index({category: 1}, {unique: false})

//(UNSURE ABOUT BEHAVIOR OF ID)
const ArticleSchema = new Schema({
    _id: { type: Schema.Types.ObjectId},
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const UserSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    budgets: [BudgetSchema],
    articles: [ArticleSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
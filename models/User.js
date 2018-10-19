const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    category: { type: String, required: true, unique: true },
    label: { type: String, required: true },
    amount: { type: Number, required: true, default: 0 }
});

const ArticleSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { _id: false });

const UserSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    budgets: [BudgetSchema],
    articles: [ArticleSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
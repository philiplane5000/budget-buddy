const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    amount: { type: Number, required: true, default: 0 },
    category: { type: String, required: true, unique: false },
});

const ArticleSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    title: { type: String, required: false },
    excerpt: { type: String, required: false },
    link: { type: String, required: false },
    picture: {type: String, required: false},
    saved: {type: Boolean, default: true}
});

const UserSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    budgets: [BudgetSchema],
    articles: [ArticleSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
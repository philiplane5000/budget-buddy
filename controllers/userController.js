const db = require('../models')
const BudgetSeed = require('../scripts/BudgetSeed')

module.exports = {
    //FIND ONE USER BY GOOGLE UID:
    findByUid: function (req, res) {
        db.User
            .findOne({ uid: req.params.uid })
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));
    },
    //CREATE NEW USER WITH EMPTY BUDGET VALUES:
    createNewUser: function (req, res) {
        db.User
            .create({ uid: req.params.uid, budgets: BudgetSeed, articles: [] })
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));
    },
    //UPDATE THE BUDGET BY CATEGORY AND INCOMING AMOUNT
    updateBudgetByCategory: function (req, res) {
        db.User
            .find({ uid: req.params.uid })
            .then(User => {
                return User[0].budgets.map(budget => {
                    if (budget.category === req.body.category) {
                        budget.amount = req.body.amount;
                        return budget
                    } else {
                        return budget
                    }
                })
            })
            .then(updatedBudget => {
                db.User
                    .update({ uid: req.params.uid }, { $set: { budgets: updatedBudget } })
                    .then(response => {
                        res.json(response)
                    })
            })
    },
    saveArticle: function (req, res) {
        db.User
            .update({ uid: req.params.uid }, { $push: { articles: req.body } })
            .then(response => {
                res.json(response)
            })
    },

    deleteArticle: function (req, res) {
        // console.log(req.body)
        // console.log(req.params.uid)
        db.User
            .find({ uid: req.params.uid })
            .then(User => {
                return User[0].articles.filter(article => {
                    return article.title !== req.body.title
                })
            })
            .then(updatedArticles => {
                db.User
                    .update({ uid: req.params.uid }, { $set: { articles: updatedArticles } })
                    .then(response => {
                        res.json(response)
                    })
            })
    },
    //GET SPECIFIC USER DATA BY GOOGLE UID:
    getBudgetbyUserUid: function (req, res) {
        db.User
            .findOne({ uid: req.params.uid }, 'budgets')
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));
    },

    getArticlesbyUserUid: function (req, res) {
        db.User
            .findOne({ uid: req.params.uid }, 'articles')
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));
    },
    //RETRIEVE ALL USERS:
    findAllUsers: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
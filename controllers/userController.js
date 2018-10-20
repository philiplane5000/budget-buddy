const db = require('../models')
const BudgetSeed = require('../scripts/BudgetSeed')

module.exports = {

    getBudgetbyUserUid: function (req, res) {
        db.User
            .findOne({ uid: req.params.uid }, 'budgets')
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));

    },
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

    // Person.update({'items.id': 2}, {'$set': {
    //     'items.$.name': 'updated item2',
    //     'items.$.value': 'two updated'
    // }}, function(err) { ...
    updateBudgetByCategory: function (req, res) {
        console.log(req.body)
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
                    .update({ uid: req.params.uid }, { $set: { budgets: updatedBudget}})
                    .then(response => {
                        res.json(response)
                    })
            })
        // console.log(req.query)
        // console.log(req.body)
        // console.log(req.params.uid)
    },

    //RETRIEVE ALL USERS:
    findAllUsers: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
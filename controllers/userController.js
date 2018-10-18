const db = require('../models')

module.exports = {
    //FIND ONE USER BY GOOGLE UID:
    findByUid: function (req, res) {
        db.User
            .findOne({uid: req.params.uid})
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
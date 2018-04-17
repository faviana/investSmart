const db = require("../models");

console.log("investors controller banana");

// Defining methods for the investorsController
module.exports = {
  findAll: function(req, res) {
    db.Investor
      .find(req.query)
      .sort({ date: -1 })
      .then(dbInvestor => res.send(dbInvestor))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Investor
      .findById(req.params.id)
      .then(dbInvestor => res.json(dbInvestor))
      .catch(err => res.status(422).json(err));
  },

  findAllByUser: function(req, res) {
    db.Investor
    .find({userNameId: req.params.userId})
    .then(dbAllInvestors => res.json(dbAllInvestors))
  .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("investor create req.body:", req.body);
    db.Investor
      .create(req.body)
      .then(dbInvestor => res.json(dbInvestor))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Investor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbInvestor => res.json(dbInvestor))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("investers controller removed")
    db.Investor
      .findById({ _id: req.params.id })
      .then(dbInvestor => dbInvestor.remove())
      .then(dbInvestor => res.json(dbInvestor))
      .catch(err => res.status(422).json(err));
  }
};

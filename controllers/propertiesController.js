const db = require("../models");

// Defining methods for the propertiesController
module.exports = {
  findAll: function(req, res) {
    db.Properties
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel1 => res.json(dbModel1))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Properties
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Properties
      .create(req.body)
      .then(function(dbModel){
        return db.Investor.findByIdAndUpdate({}, { $push: { propertiesID: dbModel._id } }, { new: true});
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Properties
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Properties
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

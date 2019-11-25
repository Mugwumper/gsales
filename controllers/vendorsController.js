const db = require("../models");
require("mongoose");

// Defining methods for the familyController
module.exports = {

  create: function(req, res) {
    console.log("vendorsController.create called");
    console.log(req.body);
    db.Vendors.create(req.body)
      .then(function(doc) {
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $push: { vendors: doc._id }, 
          new: true }
        )
        .then(function(dbVen) {
          console.log(dbVen);
        })
        .catch(function(err) {
          console.log(err);
        });
        dbModel => res.json(dbModel);
      })
      .catch(err => console.log(err));
  },

  update: function(req, res) { // unused as of yet
    db.Vendors.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getVendors: function(req, res) {
    console.log("vendorsController.getVendors called");
    console.log(req.body.email);
    db.Users.find({ email: req.body.email }, "vendors name")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    console.log("vendorsController.delete called");
    console.log(req.body);
    db.Vendors
      .findById({ _id: req.body.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .then(function(doc) {
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $pull: { vendors: doc._id }, 
            new: true }
        )
        .then(function(dbVen) {
          console.log(dbVen);
        })
        .catch(function(err) {
          console.log(err);
        });
        dbModel => res.json(dbModel);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

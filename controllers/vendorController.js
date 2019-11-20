const db = require("../models");
//var mongoose = require('mongoose');

// Defining methods for the vendorController
module.exports = {
  findAll: function(req, res) {
    db.Vendors
      .find(req.query)
      .sort({ birthday: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Vendors
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("vendorController.create called");
    console.log(req.body);
    //userEmail = req.body.userEmail;
    db.Vendors
      .create(req.body)
      .then(function (doc) {
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $push: { family: doc._id } }
        )
        .then(function(dbFam) {
            console.log(dbFam);
          })
        .catch(function(err) {
          console.log(err);
        });

        doc => res.json(doc)
      })
      //.catch(err => res.status(422).json(err));
      .catch(err => console.log(err));
  },  
  update: function(req, res) {
    db.Vendors
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Vendors
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  getVendors: function(req, res) {
    console.log("vendorController.getVendors called");
    console.log(req.body.email);
    db.Users
      .find({ email: req.body.email }, 
            'family name birthday')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  delete: function(req, res) {
    console.log("familyController.delete called");
    console.log(req.body);
    db.Vendors
      //.findById({ _id: mongoose.Types.ObjectId(req.body.id) })
      .findById({ _id: req.body.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .then(function (doc) { 
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $pull: { family: doc._id } }
        )
        .then(function(dbFam) {
            console.log(dbFam);
          })
        .catch(function(err) {
          console.log(err);
        });
        dbModel => res.json(dbModel)
      })
      .catch(function(err) {
        console.log(err);
      });
  }  
};

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Vendors collection and inserts the people below
// in order to initially populate the database, 
// run the following command at the project root: `npm run seed`.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gsale"
);

const id1 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562654");
const ven1 = new mongoose.Types.ObjectId("5d95ece648a17c63d80dca08");
const ven2 = new mongoose.Types.ObjectId("5d9694c0f4104658b0a69021");
const id4 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562655");
const ven3 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562656");
const ven4 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562657");
const ven5 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562658");
const ven6 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562659");
const ven7 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562660");

const userSeed = [
  {
    _id : id1,    
    email : "crystal@bell.com",
    password : "1234567",
    vendors : [ 
      ven1, 
      ven2,
      ven3,
      ven4,
      ven5,
      ven6,
      ven7
  ]
},
  {
    _id : id4,
    email : "migelrodregiz12@yahoo.com",
    password : "1234567"
  }
];

const vendorsSeed = [
  {
    _id : ven1,
    name : "Jimmy Page"
  },
  {
    _id : ven2,
    name: "Kim Jung-un"
  },
  {
    _id : ven3,
    name: "Eddie Murphy"
  },
  {
    _id : ven4,
    name: "Mr Rogers"
  },
  {
    _id : ven5,
    name: "Jim Henson"
  },
  {
    _id : ven6,
    name: "Harrison Ford"
  },
  {
    _id : ven7,
    name: "Madonna"
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log("Users collection: " + data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Vendors
  .remove({})
  .then(() => db.Vendors.collection.insertMany(vendorsSeed))
  .then(data => {
    console.log("Vendors collection: " + data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


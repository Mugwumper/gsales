var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vendor_Schema = new Schema({
  name:      { type: String,  required: true, unique: true },
  birthday:  { type: String,  required: true  },
  // link to the Events collection
//  events:    { type: [{ type: Schema.Types.ObjectId, ref: 'Events'}]}
});

// var autoPopulateEvents = function(next) {
//   this.populate('events');
//   next();
// };

// vendor_Schema
//   .pre('findOne', autoPopulateEvents)
//   .pre('find', autoPopulateEvents);

var Vendors = mongoose.model("Vendors", vendor_Schema);

module.exports = Vendors; //export the Vendors model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vendors_Schema = new Schema({
  name:      { type: String,  required: true, unique: true },
  // link to the Events collection
//  events:    { type: [{ type: Schema.Types.ObjectId, ref: 'Events'}]}
});

// var autoPopulateEvents = function(next) {
//   this.populate('events');
//   next();
// };

// vendors_Schema
//   .pre('findOne', autoPopulateEvents)
//   .pre('find', autoPopulateEvents);

var Vendors = mongoose.model("Vendors", vendors_Schema);

module.exports = Vendors; //export the Vendors model
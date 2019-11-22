var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:  { type: String, unique: true, required: true },
  vendors: { type: [{ type: Schema.Types.ObjectId, ref: 'Vendors'}]}
 });

var autoPopulateEvents = function(next) {
  this.populate('vendors');
  next();
};

UserSchema
  .pre('findOne', autoPopulateEvents)
  .pre('find',    autoPopulateEvents);

var Users = mongoose.model("Users", UserSchema);

module.exports = Users; //export the model

module.exports = mongoose.model('Users', UserSchema);
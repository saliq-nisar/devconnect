const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number
});
userSchema.index({ name: 1 }); // normal index
userSchema.index({ age: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);

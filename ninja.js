const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ninjaSchema = new Schema({
  ninja: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    required: false
  }
  // Add geo location
}, { timestamps: true });

const Ninja = mongoose.model('ninja', ninjaSchema);
module.exports = Ninja;
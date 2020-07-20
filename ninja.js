const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const ninjaSchema = new Schema({
  ninja: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Ninja = mongoose.model('Ninja', ninjaSchema);
module.exports = Ninja;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const geoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// create ninja Schema
const ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    required: false
  },
  geometry: geoSchema 
  // Add geo location
}, { timestamps: true });

const Ninja = mongoose.model('ninja', ninjaSchema);
module.exports = Ninja;
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of ninjas from the database
router.get('/ninjas', (req, res, next) => {

  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  
  Ninja.aggregate().near({ 
    near: {
      type: "Point", 
      coordinates: [lng, lat] 
    },
      maxDistance: 1000000, 
      spherical: true, 
      distanceField: "dis" 
  })
  .then(result => {
    res.send(result);
  })
  .catch(next);

});

// Add a new ninja to the db
router.post('/ninjas', (req, res, next) => {

  Ninja.create(req.body)
  .then(result => {
    res.send(result);
  })
  .catch(next);
});

// Update a ninja in the db
router.put('/ninjas/:id', (req, res, next) => {

  const id = req.params.id;

  Ninja.findByIdAndUpdate(id, req.body)
  .then(result => {

    Ninja.findById(id)
    .then(result => res.send(result))
    .catch(next);

  })
  .catch(next);
});

// Delete a ninja from the db
router.delete('/ninjas/:id', (req, res, next) => {
  
  const id = req.params.id;

  Ninja.findByIdAndDelete(id)
  .then(ninja => {
    res.send(ninja);
  })
  .catch(next);
});

module.exports = router;
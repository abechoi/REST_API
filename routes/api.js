const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
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
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

// Delete a ninja from the db
router.delete('/ninjas/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
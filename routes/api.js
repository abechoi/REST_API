const express = require('express');
const router = express.Router();

// Get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});

// Add a new ninja to the db
router.post('/ninjas', (req, res) => {
  res.send({ type: 'POST' });
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
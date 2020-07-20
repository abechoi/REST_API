const express = require('express');
const bodyParser = require('body-parser'); // deprecated

// set up express app
const app = express();

// Middleware- Initialize routes
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/api/', require('./routes/api'));

// listen for requests
// process.env.port is a setup variable for an environment like Heroku
app.listen(process.env.port || 4000, () => {
  console.log('Listening for requests...');
});

/*
method: GET, url: '/api', data: { name: 'Yoshi' }
app.get('/api', (req, res) => {
  console.log('GET request');
  res.send({ name: 'Yoshi' });
});
*/
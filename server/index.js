const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
const mongo = require('../mongodb');

const SaveTemplate = require('../mongodb/savedExercises.js');
const port = 3000;

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/fullbody', (req, res) => {
  db.fullBody()
    .then((template) => res.status(200).send(template))
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred');
    });
})

app.get('/templates', (req, res) => {
  SaveTemplate.find({}, (err, data) => {
    if (err) {
      res.status(500).send('An error occurred');
    }
    res.status(200).send(data);
  })
})

app.post('/exercise', (req, res) => {
  console.log(req.body);
  db.insert(req.body)
    .then((success) => res.status(201).send('Successful post'))
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred')});
})

app.post('/savetemplate', (req, res) => {
  SaveTemplate.create(req.body, (err, success) => {
    if (err) {
      res.status(500).send('An error occurred');
    }
    res.status(201).send('Template Saved');
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
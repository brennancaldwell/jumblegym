const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
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

app.post('/exercise', (req, res) => {
  console.log(req.body);
  db.insert(req.body)
    .then((success) => res.status(201).send('Successful post'))
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred')});
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
const express = require('express');
const app = express();
const path = require('path');
const db = require('../db');
const port = 3000;

app.use(express.static('./public'));

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
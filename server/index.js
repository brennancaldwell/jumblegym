const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('./public/dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
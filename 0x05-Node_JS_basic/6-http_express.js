const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// eslint-disable-next-line no-unused-vars
app.listen(1245, (req, res) => {
});

module.exports = app;

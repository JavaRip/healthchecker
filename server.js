const express = require('express');
const path = require('path');

const app = express();
const port = process.env.HEALTHCHECKER_PORT || 8080;

app.get('/healthcheck', (req, res) => { res.sendStatus(200) });
app.get('/test_page', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, () => {
  console.log(`healthchecker listening on ${port}`);
});

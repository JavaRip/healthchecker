const express = require('express');
const path = require('path');

const port = process.env.HEALTHCHECKER_PORT || 8080

express().get('/healthcheck', (req, res) => { res.sendStatus(200) })
express().get('/index', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')) })
express().listen(port, () => { console.log(`healthchecker listening on ${port}`) })

const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());

consign()
    .include('./controllers')
    .into(app);

module.exports = app;

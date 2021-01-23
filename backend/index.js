const express = require('express');
const app = express();
const router = require('./src/controller/cartController');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(3001, () => {
  console.log('App is running...');
});

module.exports = app;

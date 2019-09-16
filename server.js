const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const sitesController = require('./controllers/sitesController');
const bitesController = require('./controllers/bitesController');
// const favorites = require('./controllers/favoritesController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/sites', sitesController);
app.use('/bites', bitesController);

app.use((e, req, res, next) => {
  if (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to seeNYC default route!');
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

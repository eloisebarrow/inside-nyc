const express = require('express');
const { Destination } = require('../models/models')

const sitesController = express.Router();

sitesController.get('/', async (req, res) => {
  const allSites = await Destination.findAll({
    where: {
      type: "sites"
    }
  })
  res.json(allSites)

})

module.exports = sitesController

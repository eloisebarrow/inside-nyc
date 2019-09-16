const express = require('express');
const { Destination } = require('../models/models')

const bitesController = express.Router();

bitesController.get('/', async (req, res) => {
  const allBites = await Destination.findAll({
    where: {
      type: "bites"
    }
  })
  res.json(allBites)

})

module.exports = bitesController

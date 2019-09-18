const { Router } = require('express');
const { Destination, User } = require('../models/models');
const { restrict } = require('../auth');

const favoritesController = Router();

favoritesController.get('/', restrict, async (req, res, next) => {
  try {
    const user = await User.findByPk(res.locals.user.id);
    const favorites = await user.getDestinations();
    res.json(favorites);
  } catch (e) {
    next(e);
  }
});

favoritesController.post('/:id', restrict, async (req, res, next) => {
  try {
    const newFavorite = await Destination.findByPk(req.params.id);
    const user = await User.findByPk(res.locals.user.id);
    await user.addDestination(newFavorite);
    res.status(200);
  } catch (e) {
    next(e);
  }
});

favoritesController.delete('/:id', restrict, async (req, res, next) => {
  try {
    const deleteFavorite = await Destination.findByPk(req.params.id);
    const user = await User.findByPk(res.locals.user.id);
    await user.removeDestination(deleteFavorite);
    res.status(200);
  } catch (e) {
    next(e);
  }
});

module.exports = favoritesController;

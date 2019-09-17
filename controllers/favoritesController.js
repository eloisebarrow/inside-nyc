const { Router } = require('express');
const { Destination, User } = require('../models/models');
const { restrict } = require('../auth')

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

// favoritesController.post('/', async (req, res, next) => {
//   try {
//     const newDesination = await Desination.create(req.body);
//     res.json(newDesination);
//   } catch (e) {
//     next(e);
//   }
// });
//
// favoritesController.put('/:id', async (req, res, next) => {
//   try {
//     const desination = await Desination.findByPk(req.params.id);
//     await desination.update(req.body)
//     res.json(desination);
//   } catch (e) {
//     next(e);
//   }
// });
//
// favoritesController.delete('/:id', async (req, res, next) => {
//   try {
//     const desination = await Desination.findByPk(req.params.id);
//     await desination.destroy();
//     res.json(desination);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = favoritesController;

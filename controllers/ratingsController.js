const { Router } = require('express');
const { Destination, User, Rating } = require('../models/models');
const { restrict } = require('../auth');

const ratingsController = Router();

ratingsController.post('/', restrict, async (req, res, next) => {
  try {
    const destination = await Destination.findByPk(req.body.destinationId);
    const ratingValue = req.body.rating;
    const user = await User.findByPk(res.locals.user.id);
    const rating = await Rating.create({
      rating: ratingValue,
    })
    await rating.setUser(user);
    await rating.setDestination(destination);
    res.json(rating);
  } catch (e) {
    next(e);
  }
});

ratingsController.put('/:id', restrict, async (req, res, next) => {
  try {
    const destination = await Destination.findByPk(req.body.destinationId);
    const ratingValue = req.body.rating;
    const ratingId = req.params.id;
    const user = await User.findByPk(res.locals.user.id);

    const rating = await Rating.findByPk(ratingId)
    await rating.update(
      { rating: ratingValue }
    )
    res.json(rating);
  } catch (e) {
    next(e);
  }
});

module.exports = ratingsController;

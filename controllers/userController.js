const { Router } = require('express');
const { User, Rating, Destination } = require('../models/models');
const { hashPassword, genToken, checkPassword, restrict } = require('../auth')

const userController = Router();

const buildAuthResponse = (user) => {
  const { id, username, nickname, ratings } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username, nickname, ratings }, token }
};

userController.post('/register', async (req, res, next) => {
  try {
    const { email, nickname, password } = req.body;
    const password_digest = await hashPassword(password);
    const user = await User.create({ email, nickname, password_digest });
    const responseData = buildAuthResponse(user);
    res.json(responseData);
  } catch (e) {
    next(e);
  };
});

userController.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      include: [
        { model: Rating }
      ]
    });
    const passwordIsCorrect = await checkPassword(password, user.password_digest)
    if (passwordIsCorrect) {
      const responseData = buildAuthResponse(user);
      res.json(responseData);
    } else {
      res.status(401).send('Unauthorized');
    }
  } catch (e) {
    next(e);
  }
})

userController.get('/verify', restrict, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      },
      include: [
        { model: Rating }
      ]
    });
    const {password_digest, ...responseData} = user.dataValues;
    res.json(responseData);
  } catch (e) {
    next(e);
  }
})

module.exports = userController;

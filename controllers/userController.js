const { Router } = require('express');
const { User } = require('../models/models');
const { hashPassword, genToken, checkPassword, restrict } = require('../auth')

const userController = Router();

const buildAuthResponse = (user) => {
  const { id, username, nickname } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username, nickname }, token }
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
    const user = await User.findByPk(res.locals.user.id);
    res.json(user)
  } catch (e) {
    next(e);
  }
})

module.exports = userController;

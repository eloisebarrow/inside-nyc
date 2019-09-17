const { Router } = require('express');
const { User } = require('../models/models');
const { hashPassword, genToken, checkPassword } = require('../auth')

const userController = Router();

const buildAuthResponse = (user) => {
  const { id, username, nickname } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username, nickname }, token }
};

userController.post('/register', async (req, res, next) => {
  try {
    const { username, nickname, password } = req.body;
    const password_digest = await hashPassword(password);
    const user = await User.create({ username, nickname, password_digest });
    const responseData = buildAuthResponse(user);
    res.json(responseData);
  } catch (e) {
    next(e);
  };
});

userController.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
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

module.exports = userController;

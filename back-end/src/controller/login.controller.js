const loginService = require('../service/login.service');

const createUser = async (req, res, next) => {
  const user = req.body;
  try {
    const data = await loginService.createUser(user);
    return res.status(201).json(data);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const loginUser = async (req, res, next) => {
  const user = req.body;
  try {
    const data = await loginService.loginUser(user);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createUser,
  loginUser,
};

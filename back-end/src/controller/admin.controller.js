const adminService = require('../service/admin.service');

const allUser = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const users = await adminService.allUsersNotAdmin(token);
    return res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
};

const createUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const userData = req.body; // { ...cadastro, "role": "seller" }
  try {
    const createdUser = await adminService.createUser(userData, token);
    return res.status(201).json(createdUser);
  } catch (err) {
    return next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = req.body; // { "email": "algum@email.com" }
  try {
    await adminService.deleteUser(user, token);
    return res.status(204).json();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  allUser,
  createUser,
  deleteUser,
};

const { registerValidations } = require('./loginValidations');
const ConflictError = require('../errors/conflictError');
const InvalidParams = require('../errors/invalidParam');

const verifyAdminRole = (role) => {
  if (role !== 'administrator') {
    throw new InvalidParams('You must be an admin to utilize this route.');
  }
};

const validateRole = (role) => {
  if (!role) throw new InvalidParams('Field "role" is required.');
  const checkRoles = role === 'customer' || role === 'seller' || role === 'administrator';
  if (!checkRoles) throw new InvalidParams('Invalid role.');
};

const checkUserExistence = (userFound) => {
  if (userFound) throw new ConflictError('Email or Name already registered.');
};

const adminRegisterValidations = ({ email, password, name, role }) => {
  registerValidations({ email, password, name });
  validateRole(role);
};

module.exports = {
  verifyAdminRole,
  validateRole,
  checkUserExistence,
  adminRegisterValidations,
};

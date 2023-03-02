const md5 = require('md5');

const encryptPassword = (password) => {
  const encryptedPassword = md5(password);
  return encryptedPassword;
};

const checkPassword = (loginPassword, userPassword) => {
  const loginPasswordCript = encryptPassword(loginPassword);
  const isValid = loginPasswordCript === userPassword;
  return isValid;
};

module.exports = {
  encryptPassword,
  checkPassword,
};

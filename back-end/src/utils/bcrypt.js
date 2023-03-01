const bcrypt = require('bcryptjs');

const encryptPassword = (password) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
};

const checkPassword = (loginPassword, userPassword) => {
  const isValid = bcrypt.compareSync(loginPassword, userPassword);
  return isValid;
};

module.exports = {
  encryptPassword, 
  checkPassword,
};

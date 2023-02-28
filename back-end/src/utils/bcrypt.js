import bcrypt from 'bcryptjs';

export function encryptPassword(password) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
}

export function checkPassword(loginPassword, userPassword) {
  const isValid = bcrypt.compareSync(loginPassword, userPassword);
  return isValid;
}

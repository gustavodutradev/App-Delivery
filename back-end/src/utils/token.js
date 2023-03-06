const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const InvalidParam = require('./errors/invalidParam');

const secret = fs.readFileSync(
  path.resolve(__dirname, '../../jwt.evaluation.key'),
  { encoding: 'utf-8' },
);

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role } }, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  try {
    const tokenData = jwt.verify(token, secret);
    return tokenData;
  } catch (err) {
    throw new InvalidParam('Inválid token!');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};

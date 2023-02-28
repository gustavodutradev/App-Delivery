const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync("./jwt.evaluation.key", { encoding: "utf-8" });
const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
}

function generateToken(user) {
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role }, secret, jwtConfig });

  return token;
}

function verifyToken(token) {
  try {
    const tokenData = jwt.verify(token, secret);
    return tokenData;
  } catch (err) {
    throw new Error('Inválid token!');
  }
}
module.exports = {
  generateToken, verifyToken
}
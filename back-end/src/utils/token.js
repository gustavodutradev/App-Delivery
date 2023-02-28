import jwt from 'jsonwebtoken';
const fs = require('fs');

const secret = fs.readFileSync("./back-end/jwt.evaluation.key", { encoding: "utf-8" });
const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
}

export function generateToken(user) {
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role }, secret, jwtConfig });

  return token;
}

export function verifyToken(token) {
  try {
    const tokenData = jwt.verify(token, secret);
    return tokenData;
  } catch (err) {
    throw new Error('Inválid token!');
  }
}
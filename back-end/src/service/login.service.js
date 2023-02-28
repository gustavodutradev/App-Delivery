const { Users } = require('../database/models');
const { checkPassword, encryptPassword } = require('../utils/bcrypt');
const { generateToken } = require('../utils/token');
const NotFound = require('../utils/errors/notFound');


async function createUser(user) {
    const { name, email, role, password } = user;
    const passwordCrypt = encryptPassword(password);
    const newUser = await Users.create({ ...user, password: passwordCrypt });
    const token = generateToken(newUser);
    return { name, email, role, token }

}

async function loginUser(user) {
    const { email, password } = user;
    const userFound = await Users.findOne({ where: { email } });
    const { name, role } = userFound;
    const isValidPassword = checkPassword(password, userFound.password);
    const token = generateToken(userFound);
    if (!userFound) throw new NotFound('Email or Password is invalid!');
    if (!isValidPassword) throw new NotFound('Email or Password is invalid!');
    return { name, email, role, token }
}

module.exports = {
    createUser,
    loginUser,
}
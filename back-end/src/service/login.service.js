import userModel from '../database/models/Users';
import { checkPassword, encryptPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/token';
import NotFound from '../utils/errors/notFound';


async function createUser(user) {
    const { name, email, role, password } = user;
    const passwordCrypt = encryptPassword(password);
    const newUser = await userModel.create({ ...user, password: passwordCrypt });
    const token = generateToken(newUser);
    return { name, email, role, token }

}

async function loginUser(user) {
    const { email, password } = user;
    const userFound = await userModel.findOne({ where: { email } });
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
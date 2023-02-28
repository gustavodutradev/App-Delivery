import userModel from '../database/models/Users';

async function createUser(user) {
    const {name, email, role, password} = user;
    const passwordCrypt = encryptPassword(password);
    const newUser = await userModel.create({...user, password: passwordCrypt});
    const token = generateToken(newUser);
    return {name, email, role , token}
  
} 

async function loginUser(){

}
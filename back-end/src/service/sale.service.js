const Users = require("../database/models/Users");
const { verifyToken } = require("../utils/token");

const getAllSellers = async (token) => {
    verifyToken(token)
    const sellers = await Users.findAll({where: {role:'seller' }})  
    return sellers;
}

module.exports = { getAllSellers}
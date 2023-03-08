const { User } = require('../database/models');
const { verifyToken } = require('../utils/token');

const getAllSellers = async (token) => {
    verifyToken(token);
    const sellers = await User.findAll({ where: { role: 'seller' } });
    return sellers;
};

module.exports = { getAllSellers };
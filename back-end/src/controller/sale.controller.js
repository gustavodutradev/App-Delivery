const { getAllSellers } = require('../service/sale.service');

const getAllSeller = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const allUser = await getAllSellers(token);
        console.log(allUser);
        return res.status(200).json(allUser);
    } catch (error) {
        return next(error);
    }
};
module.exports = { getAllSeller };
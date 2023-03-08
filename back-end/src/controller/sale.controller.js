const saleService = require('../service/sale.service');

const getAllSeller = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const allUser = await saleService.getAllSellers(token);
    return res.status(200).json(allUser);
  } catch (error) {
    return next(error);
  }
};

// obj do body = {
//     userId,
//     sellerId,
//     products: lista de produtos,
//     address: {
//         street,
//         number,
//     }, 
//     totalPrice,
// };

const createSale = async (req, res, next) => {
  const token = req.headers.authorization;
  const sale = req.body;
  try {
    const saleData = await saleService.createSale(sale, token);
    return res.status(201).json(saleData);
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  getAllSeller,
  createSale,
};
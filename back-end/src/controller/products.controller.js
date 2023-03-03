const productsService = require('../service/products.service');

const getProducts = async (_req, res, next) => {
  try {
    const allProducts = await productsService.getProducts();
    return res.status(200).json(allProducts);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getProducts,
};

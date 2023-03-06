const { Product } = require('../database/models');
const { productNotFound } = require('../utils/validations/productsValidations');

const getProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await Product.findByPk(id);
  productNotFound(productById);
  return productById;
}

module.exports = {
  getProducts,
  getProductById,
};

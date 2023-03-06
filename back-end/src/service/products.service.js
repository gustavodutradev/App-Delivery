const { Product } = require('../database/models');

const getProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await Product.findByPk(id);

  return productById;
}

module.exports = {
  getProducts,
  getProductById,
};

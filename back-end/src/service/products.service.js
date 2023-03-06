const { Product } = require('../database/models');
const { productNotFound, validateProductFields } = require('../utils/validations/productsValidations');

const getProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await Product.findByPk(id);
  productNotFound(productById);
  return productById;
};

const createProduct = async (newProduct) => {
  validateProductFields(newProduct);
  const createdProduct = await Product.create(newProduct);
  return createdProduct;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct
};

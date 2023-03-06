const { Product } = require('../database/models');
const { verifyToken } = require('../utils/token');
const { productNotFound, validateProductFields, userNotAuthorized } = require('../utils/validations/productsValidations');

const getProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await Product.findByPk(id);
  productNotFound(productById);
  return productById;
};

const createProduct = async (newProduct, token) => {
  validateProductFields(newProduct);
  
  const userData = verifyToken(token);
  const { data: { role } } = userData;
  userNotAuthorized(role);

  const createdProduct = await Product.create(newProduct);
  return createdProduct;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct
};

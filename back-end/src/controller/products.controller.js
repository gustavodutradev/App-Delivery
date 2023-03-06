const productsService = require('../service/products.service');

const getProducts = async (_req, res, next) => {
  try {
    const allProducts = await productsService.getProducts();
    return res.status(200).json(allProducts);
  } catch (err) {
    return next(err);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productById = await productsService.getProductById(Number(id));
    return res.status(200).json(productById);
  } catch (err) {
    return next(err);
  }
};

const createProduct = async (req, res, next) => {
  const token = req.headers.authorization;
  const newProduct = req.body;
  try {
    const createdProduct = await productsService.createProduct(newProduct, token);
    return res.status(201).json(createdProduct);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};

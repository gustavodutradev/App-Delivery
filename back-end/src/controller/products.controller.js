const productsService = require('../service/products.service');

// retorna uma lista com todos os produtos;
const getProducts = async (_req, res, next) => {
  try {
    const allProducts = await productsService.getProducts();
    return res.status(200).json(allProducts);
  } catch (err) {
    return next(err);
  }
};

// retorna um produto especificado pelo id ou um erro caso o id não exista;
const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productById = await productsService.getProductById(Number(id));
    return res.status(200).json(productById);
  } catch (err) {
    return next(err);
  }
};

// cria um novo produto e retorna o mesmo e retorna erros caso os campos estejam faltando;
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

// atualiza um produto pelo id e só retorna um erro caso o id passado não exista;
const updateProduct = async (req, res, next) => {
  const token = req.headers.authorization;
  const product = req.body;
  const { id } = req.params;
  try {
    await productsService.updateProduct(product, id, token);
    return res.status(204).json();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
};

const InvalidParam = require('../errors/invalidParam');
const MissingParam = require('../errors/missingParam');
const NotFound = require('../errors/notFound');

const productNotFound = (product) => {
  if (!product) throw new NotFound('Invalid product id!');
};

const validateName = (productName) => {
  if (!productName) throw new MissingParam('Name is required.');
  if (productName.length < 2) throw new InvalidParam('Name must be at least 2 characters.');
};

const validatePrice = (productPrice) => {
  if (!productPrice) throw new MissingParam('Price is required.');
};

const validateUrl = (productImage) => {
  if (!productImage) throw new MissingParam('Product image is required.');
};

const validateProductFields = (newProduct) => {
  const { name, price, urlImage } = newProduct
  validateName(name);
  validatePrice(price);
  validateUrl(urlImage);
};

module.exports = {
  productNotFound,
  validateProductFields,
};

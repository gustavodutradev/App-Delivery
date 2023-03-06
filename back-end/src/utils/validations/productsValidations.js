const InvalidParam = require('../errors/invalidParam');
const MissingParam = require('../errors/missingParam');
const NotAuthorized = require('../errors/notAuthorized');
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
  const { name, price, urlImage } = newProduct;
  validateName(name);
  validatePrice(price);
  validateUrl(urlImage);
};

const userNotAuthorized = (userRole) => {
  if (userRole !== 'seller') throw new NotAuthorized('Only sellers can register new products.');
};

module.exports = {
  productNotFound,
  validateProductFields,
  userNotAuthorized,
};

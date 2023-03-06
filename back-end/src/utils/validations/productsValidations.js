const NotFound = require('../errors/notFound');

const productNotFound = (product) => {
  if (!product) throw new NotFound('Invalid product id!');
};

module.exports = {
  productNotFound,
};

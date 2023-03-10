const InvalidParam = require('../errors/invalidParam');
const MissingParam = require('../errors/missingParam');

const validateIds = (userId, sellerId) => {
  const missingId = [userId, sellerId].some((id) => !id);

  if (missingId) throw new MissingParam('Fields "userId" and "sellerId" are required.');
};

const validateProducts = (productsList) => {
  if (!productsList) throw new MissingParam('A list of products is required.');

  if (!Array.isArray(productsList)) throw new InvalidParam('Products field must be an array');

  if (productsList.length < 1) throw new InvalidParam('Products field must be an array with at least one product');
};

const validateAddress = (address) => {
  if (!address) throw new MissingParam('Field address is required.');

  if (!address.street) throw new MissingParam('Field street in address object is missing.');

  if (!address.number) throw new MissingParam('Field number in address object is missing.');

  if (typeof address.street !== 'string') throw new InvalidParam('Street field must be a string');

  if (typeof address.number !== 'number') throw new InvalidParam('Number field must be a number');
};

const validateTotalPrice = (totalPrice) => {
  if (!totalPrice) throw new MissingParam('Field totalPrice is required.');
}

const validateFields = (newSale) => {
  const { userId, sellerId, products, address, totalPrice } = newSale;
  validateIds(userId, sellerId);
  validateProducts(products);
  validateAddress(address);
  validateTotalPrice(totalPrice);
};

module.exports = {
  validateFields,
};

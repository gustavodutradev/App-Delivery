const InvalidParam = require('../errors/invalidParam');
const MissingParam = require('../errors/missingParam');

const validateIds = (userId, sellerId) => {
  const missingId = [userId, sellerId].some((id) => !id);

  if (missingId) throw new MissingParam('Fields "userId" and "sellerId" are required.');
};

const validateProducts = (productsList) => {
  if (!productsList) throw new MissingParam('A list of products is required.');

  if (!Array.isArray(productsList)) throw new InvalidParam('Products field must be an array');

  if (productsList.length < 1) {
    throw new InvalidParam('Products field must be an array with at least one product');
  }
};

const validateAddressTypes = ({ street, number }) => {
  if (typeof street !== 'string') throw new InvalidParam('Street field must be a string');

  if (typeof number !== 'number') throw new InvalidParam('Number field must be a number');
};

const validateAddress = (address) => {
  if (!address) throw new MissingParam('Field address is required.');

  if (!address.street) throw new MissingParam('Field street in address object is missing.');

  if (!address.number) throw new MissingParam('Field number in address object is missing.');

  validateAddressTypes({ street: address.street, number: address.number });
};

const validateTotalPrice = (totalPrice) => {
  if (!totalPrice) throw new MissingParam('Field totalPrice is required.');
};

const validateFields = (newSale) => {
  const { userId, sellerId, products, address, totalPrice } = newSale;
  validateIds(userId, sellerId);
  validateProducts(products);
  validateAddress(address);
  validateTotalPrice(totalPrice);
};

const userNotAuthorized = (role) => {
  if (role !== 'seller') throw new InvalidParam('Only sellers can chage this status');
};

const sellerNotAuthorized = (role) => {
  if (role !== 'customer') throw new InvalidParam('Only costumer can change this status');
};

module.exports = {
  validateFields,
  userNotAuthorized,
  sellerNotAuthorized,
};

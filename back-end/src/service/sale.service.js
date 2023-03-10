const {
  User,
  Sale,
  SalesProduct,
  Product,
  sequelize,
} = require('../database/models');
const { verifyToken } = require('../utils/token');
const { checkUserExistence } = require('../utils/validations/loginValidations');
const {
  validateFields,
  userNotAuthorized,
  sellerNotAuthorized,
} = require('../utils/validations/saleValidations');
const loginService = require('./login.service');

const getAllSellers = async (token) => {
  verifyToken(token);
  const sellers = await User.findAll({ where: { role: 'seller' } });
  return sellers;
};

const createSaleObj = (sale) => {
  const { userId, sellerId, address, totalPrice } = sale;
  const now = new Date();
  const utcDate = now.toUTCString();

  const newSale = {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress: address.street,
    deliveryNumber: address.number,
    saleDate: utcDate,
    status: sale.status || 'Pendente',
  };

  return newSale;
};

// deixa um objeto de produtos mais facil de ser consumido pelo front;
const dataPrettier = (products) => products.map((product) => ({
  name: product.name,
  price: product.price,
  quantity: product.SalesProduct.quantity,
}));

// Integra uma sale com products e o seller, e a deixa de facil consumo para o front;
const getSaleById = async (saleId) => {
  const result = await Sale.findByPk(saleId, {
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'role', 'email'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const { totalPrice, saleDate, status, seller } = result;

  const products = dataPrettier(result.products);

  return { saleId, totalPrice, saleDate, status, seller, products };
};

// Cria uma nova sale e as relações desta com os produtos;
const createSale = async (sale, token) => {
  verifyToken(token);
  validateFields(sale);
  const newSale = createSaleObj(sale);
  const { products } = sale;

  const newId = await sequelize.transaction(async (transaction) => {
    const { id: saleId } = await Sale.create(newSale, { transaction });

    const createdSaleProduct = products.map(({ id, quantity }) => SalesProduct
      .create({ saleId, productId: id, quantity }, { transaction }));

    await Promise.all(createdSaleProduct);

    return saleId;
  });
  const result = await getSaleById(newId);
  return result;
};

const getUserOrders = async (userId) => {
  const foundUser = await loginService.findUser(userId);
  checkUserExistence(foundUser);

  const result = await Sale.findAll({
    where: { userId },
  });

  const allOrders = result.map((item) => {
    const { id, totalPrice, saleDate, status } = item;
    return { id, totalPrice, saleDate, status };
  });

  return allOrders;
};

const getSellerOrders = async (sellerId) => {
  const foundUser = await loginService.findUser(sellerId);
  checkUserExistence(foundUser);

  const result = await Sale.findAll({
    where: { sellerId },
  });

  const allOrders = result.map((item) => {
    const { id, totalPrice, saleDate, deliveryAddress, deliveryNumber, status } = item;
    return { id, totalPrice, saleDate, deliveryAddress, deliveryNumber, status };
  });

  return allOrders;
};

// para vendedores
const sellerOrderStatus = async ({ id, status }, token) => {
  const { data: { role } } = verifyToken(token);
  userNotAuthorized(role);
  if (role === 'seller') Sale.update({ status }, { where: { id } });
};

// para usuários
const userOrderStatus = async (id, token) => {
  const { data: { role } } = verifyToken(token);
  sellerNotAuthorized(role);
  if (role === 'customer') Sale.update({ status: 'Entregue' }, { where: { id } });
};

module.exports = {
  getAllSellers,
  createSale,
  getSaleById,
  getUserOrders,
  getSellerOrders,
  sellerOrderStatus,
  userOrderStatus,
};
const {
  User,
  Sale,
  SalesProduct,
  Product,
  sequelize,
} = require('../database/models');
const { verifyToken } = require('../utils/token');

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

const allUserOrders = async (userId) => {
  const result = await Sale.findAll({
    where: { userId },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'role', 'email'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  const allOrders = result.map((item) => {
    const { id, totalPrice, saleDate, status, seller } = item;
    const products = dataPrettier(item.products);

    return { id, totalPrice, saleDate, status, seller, products };
  });

  return allOrders;
};

module.exports = {
  getAllSellers,
  createSale,
  getSaleById,
  allUserOrders,
};
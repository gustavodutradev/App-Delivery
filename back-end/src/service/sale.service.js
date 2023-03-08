const { User, Sale, SalesProduct, sequelize } = require('../database/models');
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

const createSale = async (sale, token) => {
  verifyToken(token);
  const t = await sequelize.transaction();
  const newSale = createSaleObj(sale);
  const { products } = sale;

  try {
    const { id: saleId } = await Sale.create(newSale, { transaction: t });

    const createdSaleProduct = products.map(({ id, quantity }) => SalesProduct
      .create({ saleId, productId: id, quantity }, { transaction: t }));

    await Promise.all(createdSaleProduct);
    await t.commit();

    return saleId;
  } catch (err) {
    await t.rollback();
  }
};

module.exports = {
  getAllSellers,
  createSale,
};
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

const getProductBySale = async (saleId) => {
  const result = await Sale.findByPk(saleId, {
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'role', 'email'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const { totalPrice, saleDate, status, seller } = result;

  const products = result.products.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: product.SalesProduct.quantity,
  }));

  return { saleId, totalPrice, saleDate, status, seller, products };
};

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
  const result = await getProductBySale(newId);
  return result;
};

module.exports = {
  getAllSellers,
  createSale,
};
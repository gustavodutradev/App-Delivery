const { Router } = require('express');
const productsController = require('../../controller/products.controller');

const productRoutes = Router();

productRoutes.get('/', (req, res, next) => productsController.getProducts(req, res, next));

module.exports = productRoutes;
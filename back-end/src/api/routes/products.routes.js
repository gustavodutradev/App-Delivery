const { Router } = require('express');
const productsController = require('../../controller/products.controller');

const productRoutes = Router();

productRoutes.get('/:id', (req, res, next) => productsController.getProductById(req, res, next));
productRoutes.get('/', (req, res, next) => productsController.getProducts(req, res, next));
productRoutes.post('/', (req, res, next) => productsController.createProduct(req, res, next));

module.exports = productRoutes;
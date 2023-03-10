const express = require('express');
const salesController = require('../../controller/sale.controller');

const saleRoutes = express.Router();

saleRoutes.put('/user/:id', (req, res, next) => salesController.customerChangeStatus(req, res, next));
saleRoutes.put('/seller/:id', (req, res, next) => salesController.sellerChangeStatus(req, res, next));
saleRoutes.get('/sellers', (req, res, next) => salesController.getAllSeller(req, res, next));
saleRoutes.get('/:id', (req, res, next) => salesController.getSaleById(req, res, next));
saleRoutes.get('/user/:id', (req, res, next) => salesController.getUserOrders(req, res, next));
saleRoutes.get('/seller/:id', (req, res, next) => salesController.getSellerOrders(req, res, next));
saleRoutes.post('/', (req, res, next) => salesController.createSale(req, res, next));

module.exports = saleRoutes;
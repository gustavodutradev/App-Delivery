const express = require('express');
const salesController = require('../../controller/sale.controller');

const saleRoutes = express.Router();

saleRoutes.get('/sellers', (req, res, next) => salesController.getAllSeller(req, res, next));
saleRoutes.post('/', (req, res, next) => salesController.createSale(req, res, next));

module.exports = saleRoutes;
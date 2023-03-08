const express = require('express');
const salesController = require('../../controller/sale.controller');

const saleRoutes = express.Router();

saleRoutes.get('/sellers', (req, res, next) => salesController.getAllSeller(req, res, next));

module.exports = saleRoutes;
const { Router } = require('express');
const adminController = require('../../controller/admin.controller');

const adminRoutes = Router();

adminRoutes.get('/', (req, res, next) => adminController.allUser(req, res, next));
adminRoutes.post('/', (req, res, next) => adminController.createUser(req, res, next));
adminRoutes.delete('/', (req, res, next) => adminController.deleteUser(req, res, next));

module.exports = adminRoutes;
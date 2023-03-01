const express = require('express');
const loginController = require('../../controller/login.controller');

const loginRoutes = express.Router();

loginRoutes.post('/', (req, res, next) => loginController.loginUser(req, res, next));

module.exports = loginRoutes;
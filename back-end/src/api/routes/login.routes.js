const express = require('express');
const loginController = require('../../controller/login.controller');
const loginRoutes = express.Router();

loginRoutes.post('/', loginController.loginUser);

module.exports = loginRoutes;
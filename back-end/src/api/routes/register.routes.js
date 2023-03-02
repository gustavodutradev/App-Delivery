const express = require('express');
const loginController = require('../../controller/login.controller');

const registerRoutes = express.Router();

registerRoutes.post('/', (req, res, next) => loginController.createUser(req, res, next));

module.exports = registerRoutes;
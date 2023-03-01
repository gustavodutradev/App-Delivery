const express = require('express');
const loginRoutes = require('./login.routes');
const registerRoutes = require('./register.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/register', registerRoutes);

module.exports = routes;
const express = require('express');
const loginRoutes = require('../routes/login.routes');
const registerRoutes = require('../routes/register.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/register', registerRoutes);

module.exports = routes;
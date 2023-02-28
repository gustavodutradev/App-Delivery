const express = require('express');
const loginRoutes = require('../routes/login.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);


module.exports = routes;
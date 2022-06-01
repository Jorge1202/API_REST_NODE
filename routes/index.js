const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  //http://localhost:3000/api/v1/users
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

  //http://localhost:3000/api/v2/users
  //se puede generar unas rutas con diferentes versiones (es usado cuando trabajamos en el versionado)
  // const routerUrl = express.Router();
  // app.use('/api/v2', routerUrl);
  // routerUrl.use('/products', productsRouter);
  // routerUrl.use('/users', usersRouter);
  // routerUrl.use('/categories', categoriesRouter);
}

module.exports = routerApi;

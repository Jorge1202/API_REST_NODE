const { response } = require('express');
const express = require('express');
const router = express.Router();

//instancias
const ProductsService = require('../services/products.service');
const service = new ProductsService();

//http://localhost:3000/products?size=100
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//http://localhost:3000/products?size=100
router.get('/filter', async (req, res) => {
  res.send('el orden importa, primero es, rutas fijas y despues las dinamicas');
});

//http://localhost:3000/products/12
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

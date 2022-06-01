const express = require('express');
const router = express.Router();

//instancias
const ProductsService = require('../services/products');
const service = new ProductsService();

//http://localhost:3000/products?size=100
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

//http://localhost:3000/products?size=100
router.get('/filter', (req, res) => {
  res.send('el orden importa, primero es, rutas fijas y despues las dinamicas');
});

//http://localhost:3000/products/12
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json(product);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.status(200).json(response);
});

module.exports = router;

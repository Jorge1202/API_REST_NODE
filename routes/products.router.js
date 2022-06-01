const express = require('express');
const router = express.Router();

const faker = require('faker');

//http://localhost:3000/products?size=100
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  for (let i = 0; i < size; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//http://localhost:3000/products?size=100
router.get('/filter', (req, res) => {
  res.send('el orden importa, primero es, rutas fijas y despues las dinamicas');
});

//http://localhost:3000/products/12
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id == '999') {
    res.status(404).json({
      message: 'Not found',
    });
  } else {
    res.status(200).json({
      id,
      idname: 2,
      name: 'camisa',
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'patch',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'put',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(id);
});

module.exports = router;

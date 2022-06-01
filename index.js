// traemos a express
const express = require('express');
const faker = require('faker');

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

//http://localhost:3000/products?size=100
app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('el orden importa, primero es, rutas fijas y despues las dinamicas');
});

//http://localhost:3000/products/12
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    idname: 2,
    name: 'camisa',
  });
});

app.get('/categoria/:category/productos/:idProduct', (req, res) => {
  const { category, idProduct } = req.params;
  res.json({
    category,
    idProduct,
    idname: 2,
    name: 'Jorge',
  });
});

//localhost:3000/users
//localhost:3000/users?limit=10&offset=20
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log('http://localhost:' + port);
});

// traemos a express
const express = require('express');

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
app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Jorge',
    },
    {
      id: 2,
      name: 'Jorge',
    },
  ]);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    idname: 2,
    name: 'Jorge',
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

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log('http://localhost:' + port);
});

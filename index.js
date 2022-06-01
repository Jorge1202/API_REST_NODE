// traemos a express
const express = require('express');

//traemos todas los modulos
const routerApi = require('./routes');
const { logErrors, errorHangle } = require('./middlewares/error.handler');

// creamos una aplicación
const app = express();
app.use(express.json());

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

//rutas de la API
routerApi(app);

//el orden de la llamada del error es importante por la llamada funcion next()
app.use(logErrors);
app.use(errorHangle);

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log(`http://localhost:${port}/api`);
});

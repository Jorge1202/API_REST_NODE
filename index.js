// traemos a express
const express = require('express');

//traemos todas los modulos
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHangle,
  boomErrorHangle,
} = require('./middlewares/error.handler');

// creamos una aplicación
const app = express();
app.use(express.json());

//cors
let whitelist = ['http://localhost:3001', 'http://sandbox.com'];
let options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/', (req, res) => {
  res.send('Api de prueba');
});
app.get('/api', (req, res) => {
  res.send('Api REST');
});

//rutas de la API
routerApi(app);

//el orden de la llamada del error es importante por la llamada funcion next()
app.use(logErrors);
app.use(boomErrorHangle);
app.use(errorHangle);

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log(`http://localhost:${port}/api`);
});

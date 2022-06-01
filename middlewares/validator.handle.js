const boom = require('@hapi/boom');

function validateHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // { abortEarly: false } False: define si envia todos los errores de los datos o uno por uno
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validateHandler;

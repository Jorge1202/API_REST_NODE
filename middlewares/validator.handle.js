const boom = require('@hapi/boom');

function validateHandler(schema, property){
  return (req, res, next) =>{
    const data ) req[property]
    const {error} = schema.vadate(data)
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validateHandler

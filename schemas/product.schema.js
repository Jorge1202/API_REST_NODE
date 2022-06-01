const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integet().min(10);

const createProductSchema = Joi.object({
  name: name,
  proce: price,
});

const updateProductSchema = Joi.object({
  name: name,
  proce: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};

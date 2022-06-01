const faker = require('faker');
const boom = require('@hapi/boom'); // https://hapi.dev/module/boom/api/?v=9.1.4   control de errores

class Products {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const size = 100;
    for (let i = 0; i < size; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 500);
    });
  }

  async findOne(id) {
    let product = this.products.find((item) => item.id == id);
    if (!product) {
      throw boom.notFound('product not found');
    }

    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }

    let product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }

    this.products.splice(index, 1);
    return {
      message: 'delete success',
    };
  }
}

module.exports = Products;

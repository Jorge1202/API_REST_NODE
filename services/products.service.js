const faker = require('faker');

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
      });
    }
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      });
    });
  }

  async findOne(id) {
    return this.products.filter((item) => item.id == id);
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
      throw new Error('Product not found');
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
      throw new Error('Product not found');
    }

    this.products.splice(index, 1);
    return {
      message: 'delete success',
    };
  }
}

module.exports = Products;

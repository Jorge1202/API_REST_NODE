const faker = require('faker');

class Products {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
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

  create() {}
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.filter((item) => item.id == id);
  }
  update() {}
  delete() {}
}

module.exports = Products;
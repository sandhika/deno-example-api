import client from "../db/database.js";

class ProductRepo {
   create(product) {
      return client.queryArray
         `INSERT INTO products (name, brand,is_premium,registration_date) VALUES (${product.name}, ${product.brand}, ${product.is_premium},${product.registration_date})`;
   }

   selectAll() {
      return client.queryArray`SELECT * FROM products ORDER BY id`;
   }

   selectById(id) {
      return client.queryArray`SELECT * FROM products WHERE id = ${id}`;
   }

   update(id, product) {
      const latestProduct = this.selectById(id);

      return client.queryArray`UPDATE products SET name = ${product.name !== undefined ? product.name : latestProduct.name}, brand = ${product.brand !== undefined ? product.brand : latestProduct.brand}, is_premium = ${product.is_premium !== undefined ? product.is_premium : latestProduct.is_premium} WHERE id = ${id}`;
   }

   delete(id) {
      return client.queryArray`DELETE FROM products WHERE id = ${id}`;
   }
}

export default new ProductRepo();
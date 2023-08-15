import { Router } from "https://deno.land/x/oak/mod.ts";

import getProducts from "./controllers/products/getProducts.js";
import getProductDetails from "./controllers/products/getProductDetails.js";
import createProduct from "./controllers/products/createProduct.js";
import updateProduct from "./controllers/products/updateProduct.js";
import deleteProduct from "./controllers/products/deleteProduct.js";

const router = new Router();

router
  .get("/products", getProducts)
  .get("/products/:id", getProductDetails)
  .post("/products", createProduct)
  .put("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

export default router;
import { createProduct } from "../../services/productService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid product data" };
    return;
  }

  const body = request.body();
  const {
     name, brand, is_premium
  } = await body.value

  if (!name || !brand) {
    response.status = 422;
    response.body = { msg: "Incorrect product data. Name and brand are required" };
    return;
  }

  const productId = await createProduct({ name, brand, is_premium });

  response.body = { msg: "Product created", productId };
};
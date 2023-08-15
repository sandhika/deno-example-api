import { deleteProduct, getProduct } from "../../services/productService.js";

export default async ({
  params,
  response
}) => {
  const productId = params.id;

  if (!productId) {
    response.status = 400;
    response.body = { msg: "Invalid product id" };
    return;
  }

  const foundProduct = await getProduct(productId);
  if (!foundProduct) {
    response.status = 404;
    response.body = { msg: `Product with ID ${productId} not found` };
    return;
  }

  await deleteProduct(productId);
  response.body = { msg: "Product deleted" };
};
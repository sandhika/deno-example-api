import { updateProduct } from "../../services/productService.js";

export default async ({ params, request, response }) => {
	const productId = params.id;

	if (!productId) {
		response.status = 400;
		response.body = { msg: "Invalid product id" };
		return;
	}

	if (!request.hasBody) {
		response.status = 400;
		response.body = { msg: "Invalid product data" };
		return;
	}

	const body =  request.body();

	const product = await body.value

	await updateProduct(productId, product);

	response.body = { msg: "Product updated" };
};
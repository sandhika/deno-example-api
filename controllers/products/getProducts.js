import { getProducts } from "../../services/productService.js";

export default async ({ response }) => {
	response.body = await getProducts();
};
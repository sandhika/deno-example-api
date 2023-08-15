import productRepo from "../repositories/productRepo.js";

export const getProducts = async () => {
   const products = await productRepo.selectAll();

   return products.rows.map(product => {
      return     products.rowDescription.columns.reduce((acc,el, i) => {
         acc[el.name] = product[i];
         return acc
      },{});
   });
};

export const getProduct = async productId => {
   const products = await productRepo.selectById(productId)
   if(!products || products?.length===0) return null
   return products.rowDescription.columns.reduce((acc,el, i) => {
         [el.name] = products.rows[0][i];
         return acc
      },{});
};

export const createProduct = async productData => {
   const newProduct = {
      name: String(productData.name),
      brand: String(productData.brand),
      is_premium: "is_premium" in productData ? Boolean(productData.is_premium) : false,
      registration_date: new Date()
   };

   await productRepo.create(newProduct);

   return newProduct.id;
};

export const updateProduct = async (productId, productData) => {
   const product = await getProduct(productId);


   if (Object.keys(product).length === 0 && product.constructor === Object) {
      throw new Error("Product not found");
   }

   const updatedProduct = {...product,...productData};

   productRepo.update(productId, updatedProduct);
};

export const deleteProduct = async productId => {
   productRepo.delete(productId);
};
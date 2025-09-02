// import api from "../axios";
// export const editproducts = async (productId, editProducts) => {
//   const response = await api.put(`/products/${productId}`, editProducts, {
//     headers: {
//       "Content-Type": "multipart/form-data", // ✅ important for file upload
//     },
//   });
//   return response.data;
// };


import api from "../axios";

export const editproducts = async (productId, editProducts) => {
  const formData = new FormData();

  // Append fields
  if (editProducts.brand) formData.append("brand", editProducts.brand);
  if (editProducts.model) formData.append("model", editProducts.model);
  if (editProducts.price) formData.append("price", editProducts.price);
  if (editProducts.color) formData.append("color", editProducts.color);

  // Append file if new image is uploaded
  if (editProducts.imageFile) {
    formData.append("productImage", editProducts.imageFile);
  }

  const response = await api.put(`/products/${productId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",

    },
  });

  return response.data;
};

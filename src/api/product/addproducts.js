// // src/api/products.js
// import api from "./axios";

import api from "../axios";

// export const addProduct = async (productData) => {
//   const res = await api.post("/products/Product", productData);
//   return res.data;
// };



export const addProduct = async (productData) => {
  const res = await api.post("/products/Product", productData, {
    headers: {
      "Content-Type": "multipart/form-data", // ✅ important for file upload
    },
  });
  return res.data;
};


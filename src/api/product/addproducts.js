import api from "../axios";

export const addProduct = async (productData) => {
  const res = await api.post("/products/Product", productData, {
    headers: {
      "Content-Type": "multipart/form-data", // ✅ important for file upload
    },
  });
  return res.data;
};



import api from "../axios";

export const deleteproduct = async (productId) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
};

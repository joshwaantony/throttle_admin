import api from "../axios";

export const getProducts = async (category) => {
  const res = await api.get(`/products/categorywise?category=${category}`);
  return res.data || [];
};

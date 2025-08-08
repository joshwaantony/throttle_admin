// src/api/admin.js
import api from './axios';

export const adminLogin = async (payload) => {
  try {
    const response = await api.post('/admin/adminLogin', payload); // No space here
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

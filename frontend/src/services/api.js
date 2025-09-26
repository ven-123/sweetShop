import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data, { headers: getHeaders() });
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data, { headers: getHeaders() });

export const getSweets = () => axios.get(`${API_URL}/sweets`, { headers: getHeaders() });
export const searchSweets = (query) => axios.get(`${API_URL}/sweets/search`, { params: query, headers: getHeaders() });
export const addSweet = (data) => axios.post(`${API_URL}/sweets`, data, { headers: getHeaders() });
export const updateSweet = (id, data) => axios.put(`${API_URL}/sweets/${id}`, data, { headers: getHeaders() });
export const deleteSweet = (id) => axios.delete(`${API_URL}/sweets/${id}`, { headers: getHeaders() });
export const purchaseSweet = (id, data) => axios.post(`${API_URL}/sweets/${id}/purchase`, data, { headers: getHeaders() });
export const restockSweet = (id, data) => axios.post(`${API_URL}/sweets/${id}/restock`, data, { headers: getHeaders() });

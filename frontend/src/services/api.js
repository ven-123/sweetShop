import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const headers = token ? { Authorization: `Bearer ${token}` } : {};

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data, { headers });
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data, { headers });

export const getSweets = () => axios.get(`${API_URL}/sweets`, { headers });
export const searchSweets = (query) => axios.get(`${API_URL}/sweets/search`, { params: query, headers });
export const addSweet = (data) => axios.post(`${API_URL}/sweets`, data, { headers });
export const updateSweet = (id, data) => axios.put(`${API_URL}/sweets/${id}`, data, { headers });
export const deleteSweet = (id) => axios.delete(`${API_URL}/sweets/${id}`, { headers });
export const purchaseSweet = (id, data) => axios.post(`${API_URL}/sweets/${id}/purchase`, data, { headers });
export const restockSweet = (id, data) => axios.post(`${API_URL}/sweets/${id}/restock`, data, { headers });

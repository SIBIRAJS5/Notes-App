import axios from "axios";

const API_URL = "http://localhost:8082/api/users";

export const createUser = (user) => axios.post(API_URL, user);
export const getUsers = () => axios.get(API_URL);
export const getUserByEmail = (email) => axios.get(`${API_URL}/${email}`);
export const updateUser = (email, user) => axios.put(`${API_URL}/${email}`, user);
export const deleteUser = (email) => axios.delete(`${API_URL}/${email}`);

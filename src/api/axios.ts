import axios from "axios";
import { useAuthStore } from "../store/auth.store";

const instance = axios.create({
  baseURL: "http://localhost:3000", // mock API
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;

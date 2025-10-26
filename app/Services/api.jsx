import axios from "axios";

const API_BASE = "http://localhost:8080/api"; // URL base de tu backend

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // permite enviar cookies o cabeceras si es necesario
});

export default api;

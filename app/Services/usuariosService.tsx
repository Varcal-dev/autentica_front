import axios from "axios";

const API_URL = "http://localhost:8080/api/usuarios";

// 🟢 Obtener todos los usuarios
export const getUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 🟢 Crear usuario
export const createUsuario = async (usuario: {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  rol: string;
  estado: string;
  fechaNacimiento: string;
  genero: string;
}) => {
  const response = await axios.post(API_URL, usuario);
  return response.data;
};

// 🟢 Actualizar usuario
export const updateUsuario = async (id: number, usuario: any) => {
  const response = await axios.put(`${API_URL}/${id}`, usuario);
  return response.data;
};

// 🟢 Eliminar usuario
export const deleteUsuario = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

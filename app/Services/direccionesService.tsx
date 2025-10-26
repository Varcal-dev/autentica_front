import axios from "axios";

const API_URL = "http://localhost:8080/api/direcciones";

// 🟢 Listar direcciones de un usuario
export const getDireccionesByUsuario = async (idUsuario: number) => {
  const response = await axios.get(`${API_URL}/${idUsuario}`);
  return response.data;
};

// 🟢 Crear una dirección para un usuario
export const createDireccion = async (idUsuario: number, direccion: {
  nombreContacto: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  departamento: string;
  codigoPostal: string;
  esPrincipal: boolean;
}) => {
  const response = await axios.post(`${API_URL}/${idUsuario}`, direccion);
  return response.data;
};

// 🟢 Eliminar una dirección
export const deleteDireccion = async (idDireccion: number) => {
  await axios.delete(`${API_URL}/${idDireccion}`);
};

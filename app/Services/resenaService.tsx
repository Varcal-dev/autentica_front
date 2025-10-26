import axios from "axios";

const API_URL = "http://localhost:8080/api/resenas";

// 🟢 Crear una reseña
export const crearResena = async (
  idProducto: number,
  idUsuario: number,
  puntuacion: number,
  comentario: string
) => {
  const params = new URLSearchParams({
    idProducto: idProducto.toString(),
    idUsuario: idUsuario.toString(),
    puntuacion: puntuacion.toString(),
    comentario,
  });

  const response = await axios.post(`${API_URL}/crear?${params.toString()}`);
  return response.data;
};

// 🟢 Listar reseñas de un producto
export const getResenasByProducto = async (idProducto: number) => {
  const response = await axios.get(`${API_URL}/producto/${idProducto}`);
  return response.data;
};

// 🟢 Listar reseñas de un usuario
export const getResenasByUsuario = async (idUsuario: number) => {
  const response = await axios.get(`${API_URL}/usuario/${idUsuario}`);
  return response.data;
};

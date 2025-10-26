import axios from "axios";

const API_URL = "http://localhost:8080/api/carrito";

// 🟢 Obtener (o crear) el carrito activo de un usuario
export const getCarritoByUsuario = async (idUsuario: number) => {
  const response = await axios.get(`${API_URL}/${idUsuario}`);
  return response.data;
};

// 🟢 Agregar producto o variante al carrito
export const agregarAlCarrito = async (
  idUsuario: number,
  idProducto: number,
  idVariante?: number,
  cantidad: number = 1
) => {
  const params = new URLSearchParams({
    idUsuario: idUsuario.toString(),
    idProducto: idProducto.toString(),
    cantidad: cantidad.toString(),
  });

  if (idVariante) {
    params.append("idVariante", idVariante.toString());
  }

  const response = await axios.post(`${API_URL}/agregar?${params.toString()}`);
  return response.data;
};

// 🟢 Eliminar un producto específico del carrito
export const eliminarProductoCarrito = async (
  idUsuario: number,
  idDetalle: number
) => {
  await axios.delete(`${API_URL}/${idUsuario}/eliminar/${idDetalle}`);
};

// 🟢 Vaciar completamente el carrito
export const vaciarCarrito = async (idUsuario: number) => {
  await axios.delete(`${API_URL}/${idUsuario}/vaciar`);
};

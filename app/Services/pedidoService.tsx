import axios from "axios";

const API_URL = "http://localhost:8080/api/pedidos";

// 🟢 Crear un nuevo pedido a partir del carrito
export const crearPedido = async (
  idCarrito: number,
  metodoPago: string,
  pedidoData: any
) => {
  const params = new URLSearchParams({
    idCarrito: idCarrito.toString(),
    metodoPago,
  });

  const response = await axios.post(
    `${API_URL}/crear?${params.toString()}`,
    pedidoData
  );
  return response.data;
};

// 🟢 Obtener el historial de pedidos de un usuario
export const getPedidosByUsuario = async (idUsuario: number) => {
  const response = await axios.get(`${API_URL}/usuario/${idUsuario}`);
  return response.data;
};

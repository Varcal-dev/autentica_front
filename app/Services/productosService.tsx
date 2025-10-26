import axios from "axios";

const API_URL = "http://localhost:8080/api/productos";

// 🟢 Listar todos los productos
export const getProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 🟢 Obtener producto por ID
export const getProductoById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// 🟢 Listar productos por categoría
export const getProductosByCategoria = async (idCategoria: number) => {
  const response = await axios.get(`${API_URL}/categoria/${idCategoria}`);
  return response.data;
};

// 🟢 Crear producto
export const createProducto = async (producto: {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  activo: boolean;
  categoria: { idCategoria: number };
}) => {
  const response = await axios.post(API_URL, producto);
  return response.data;
};

// 🟢 Actualizar producto
export const updateProducto = async (id: number, producto: any) => {
  const response = await axios.put(`${API_URL}/${id}`, producto);
  return response.data;
};

// 🟢 Eliminar producto
export const deleteProducto = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

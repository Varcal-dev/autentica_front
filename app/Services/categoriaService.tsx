import axios from "axios";

const API_URL = "http://localhost:8080/api/categorias";

export const getCategorias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCategoriaById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createCategoria = async (categoria: {
  nombre: string;
  descripcion: string;
  estado: boolean;
}) => {
  const response = await axios.post(API_URL, categoria);
  return response.data;
};

export const updateCategoria = async (id: number, categoria: any) => {
  const response = await axios.put(`${API_URL}/${id}`, categoria);
  return response.data;
};

export const deleteCategoria = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

import axios from "axios";

//🟡 Este método es provisional (hasta que implementemos seguridad y tokens).

const API_URL = "http://localhost:8080/api/usuarios";

export interface Usuario {
  idUsuario: number;
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  rol: string;
  estado: string;
  fechaNacimiento: string;
  genero: string;
}

export const login = async (email: string, password: string): Promise<Usuario> => {
  const response = await axios.get<Usuario[]>(API_URL);
  const usuarios = response.data;

  const user = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Credenciales inválidas");

  localStorage.setItem("usuarioAutenticado", JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem("usuarioAutenticado");
};

export const getUsuarioActual = (): Usuario | null => {
  const user = localStorage.getItem("usuarioAutenticado");
  return user ? JSON.parse(user) : null;
};

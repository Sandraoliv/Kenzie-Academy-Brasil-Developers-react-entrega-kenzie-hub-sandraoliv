import { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@TOKEN");
  const userId = localStorage.getItem("@USERID");

  const { reset } = useForm();
  const navigate = useNavigate();

  async function registerUser(data) {
    delete data.passwordConfirm;
    reset();

    try {
      await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      toast.error("Não foi possível efetuar o cadastro!");
      console.error(error);
    }
  }

  async function loginUser(data) {
    reset();
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      toast.success(" Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha iválidos");
    } finally {
      setLoading(false);
    }
  }

  async function getUserProfile() {
    try {
      const id = localStorage.getItem("@USERID");
      setLoading(true);

      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      toast.error("Não foi possível carregar as informações!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      async function userAutoLogin() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          toast.error("Não foi possível carregar as informações!");
          localStorage.removeItem(" @TOKEN ");
          console.error(error);
        }
      }
      userAutoLogin();
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        setLoading,
        setUser,
        getUserProfile,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

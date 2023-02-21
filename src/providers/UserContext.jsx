import { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);

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
      setTechs(response.data.user.techs);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TECHS", JSON.stringify(response.data.user.techs));

      toast.success(" Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha iválidos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userId) {
      async function getUserProfile() {
        try {
          setLoading(true);
          const response = await api.get(`/users/${userId}`);
          setUser(response.data);
          setTechs(response.data);
        } catch (error) {
          toast.error("Não foi possível carregar as informações!");
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getUserProfile();
    }
  }, []);

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
          console.log(error);
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
        loginUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

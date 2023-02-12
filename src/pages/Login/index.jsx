import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import logo from "../../assets/Logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { StyledMain } from "./style.js";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Insira um email válido")
      .required("E-mail obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  })
  .required();

export function Login() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  // useEffect(() => {
  async function loginUser(data) {
    reset();
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);

      setUser(response.data.user);
      console.log(response.data);

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
  // }, []);

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <StyledMain>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginUser)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite a sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="divfooter">
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">
            <button>Cadastrar-se</button>
          </Link>
        </div>
      </StyledMain>
    </>
  );
}

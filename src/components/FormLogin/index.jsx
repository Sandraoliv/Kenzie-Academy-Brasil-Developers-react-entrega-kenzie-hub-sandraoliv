import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { StyledFom } from "./style.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function FormLogin() {
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

  function redirect() {
    navigate("/register");
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

  return (
    <StyledFom onSubmit={handleSubmit(loginUser)}>
      <h1>Login</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digite o seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Crie uma senha"
        register={register("password")}
        error={errors.password}
      />
      <button type="submit">Entrar</button>

      <div className="divfooter">
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => redirect()}>Cadastrar-se</button>
      </div>
    </StyledFom>
  );
}

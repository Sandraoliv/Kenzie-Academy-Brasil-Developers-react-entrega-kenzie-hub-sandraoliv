import { Input } from "../Input";
import { StyledFom } from "./style.js";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

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
        placeholder="Digite sua  senha"
        register={register("password")}
        error={errors.password}
      />
      <button type="submit">Entrar</button>

      <div className="divfooter">
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => navigate("/register")}>Cadastrar-se</button>
      </div>
    </StyledFom>
  );
}

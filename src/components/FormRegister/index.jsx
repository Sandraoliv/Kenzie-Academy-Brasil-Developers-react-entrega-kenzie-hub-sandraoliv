import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { StyledFomRegister } from "./style.js";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export function Formregister() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <StyledFomRegister className="form" onSubmit={handleSubmit(registerUser)}>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          error={errors.name}
        />
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
          placeholder="Digite a sua senha"
          register={register("password")}
          error={errors.password}
        />

        <Input
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme a sua senha"
          register={register("passwordConfirm")}
          error={errors.passwordConfirm}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          error={errors.bio}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          register={register("contact")}
          error={errors.contact}
        />
        <div>
          <label htmlFor="selecione">Selecionar módulo</label>
          <select
            id="selecione"
            placeholder="Selecionar  módulo"
            {...register("course_module")}
          >
            <option>Selecione um módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
          <p>{errors.course_module?.message}</p>
          <button type="submit">Cadastrar</button>
        </div>
      </StyledFomRegister>
    </>
  );
}

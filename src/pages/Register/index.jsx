import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import logo from "../../assets/Logo.svg";
import { StyledMain } from "./styles.js";
import { StyledHeader } from "./styles.js";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required()
      .matches(/.{8}/, "Sua senha deve ter no mínimo 8 dígitos")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos um número!")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\w|_)/, "Deve conter ao menos um caracter especial"),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref(" password")],
        " A confirmação  e senha devem ser idênticos"
      )
      .required("A confirmação de senha é obrigatória"),
    bio: yup.string().required("Este campo é obrigatório"),
    contact: yup.string().required("Este campo é obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  })
  .required();

export function Register() {
  function backDown() {
    navigate(-1);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <button className="headerButton" onClick={backDown}>
          Voltar
        </button>
      </StyledHeader>
      <StyledMain>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
        <form className="form" onSubmit={handleSubmit(registerUser)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>

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
          <div>
            <label htmlFor="passwordConfirm">Confirmar Senha</label>
            <input
              type="password"
              id="passwordConfirm."
              placeholder="Confirme a sua senha"
              {...register("passwordConfirm")}
            />
            <p>{errors.passwordConfirm?.message}</p>
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>
          </div>

          <div>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>
          </div>

          <select {...register("course_module")}>
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
        </form>
      </StyledMain>
    </>
  );
}

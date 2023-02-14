import * as yup from "yup";

export const registerSchema = yup
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

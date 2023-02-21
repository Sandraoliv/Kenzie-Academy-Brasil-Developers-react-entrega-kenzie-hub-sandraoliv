import * as yup from "yup";
export const modalSchema = yup
  .object()
  .shape({
    title: yup.string().required("Este campo é obrigatório"),
  })
  .required();

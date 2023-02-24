import * as yup from "yup";

export const updateModalSchema = yup.object().shape({
  status: yup.string().required("Este campo é obrigatório"),
});

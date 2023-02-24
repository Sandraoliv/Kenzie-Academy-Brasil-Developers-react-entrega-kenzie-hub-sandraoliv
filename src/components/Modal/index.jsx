import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { modalSchema } from "./modal.Schema";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledModal } from "./style";

export function Modal() {
  const { setOpenModal, handleModal, tech, setTech, registerTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  return (
    <>
      <StyledModal>
        <div className="modal">
          <header className="modalHeader">
            <h1>Cadastrar Tecnologia</h1>
            <button onClick={handleModal}>x</button>
          </header>
          <form onSubmit={handleSubmit(registerTech)}>
            <div>
              <Input
                label="Nome"
                id="title"
                type="text"
                register={register("title")}
                error={errors.title}
              />
            </div>

            <div className="select">
              <label htmlFor="">Selecionar status</label>
              <select {...register("status")}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
            <button className="buttonSubmit" type="submit">
              Cadastrar Tecnologia
            </button>
          </form>
        </div>
      </StyledModal>
    </>
  );
}

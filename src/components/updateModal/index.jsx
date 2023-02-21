import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateModalSchema } from "./updateModalSchema";
import { Input } from "../Input";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledUpdateModal } from "./style";

export function UpdateModal() {
  const { updateHandleModal, removeTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateModalSchema),
  });
  return (
    <>
      <StyledUpdateModal>
        <div className="modal">
          <header className="modalHeader">
            <h1>Tecnologia Detalhes</h1>
            <button className="closeModal" onClick={updateHandleModal}>
              x
            </button>
          </header>
          <form onSubmit={handleSubmit(removeTech)}>
            <div>
              <Input
                Label="Nome do projeto"
                id="nome do projeto"
                type="text"
                register={register("title")}
                error={errors.title}
              />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select id="status">
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="divModalFooter">
              <button type="submit" className="updateButton ">
                Salvar alterações
              </button>
              <button type="submit" className="removeButton">
                Excluir
              </button>
            </div>
          </form>
        </div>
      </StyledUpdateModal>
    </>
  );
}

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateModalSchema } from "./updateModalSchema";
import { Input } from "../Input";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledUpdateModal } from "./style";
import { Schema } from "yup";

export function UpdateModal() {
  const {
    updateHandleModal,
    selectedTech,
    removeTech,
    updateTech,
    setOpenUpdateModal,
  } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateModalSchema) });

  function closeModal() {
    setOpenUpdateModal(false);
  }

  function updateSubmit(data) {
    updateTech(data, selectedTech.id);
    closeModal();
  }
  return (
    <>
      <StyledUpdateModal>
        <div className="modal">
          <header className="modalHeader">
            <h1>Tecnologia Detalhes</h1>
            <button className="closeModal" onClick={() => closeModal()}>
              x
            </button>
          </header>
          <form onSubmit={handleSubmit(updateSubmit)}>
            <div>
              <Input
                disabled
                label="Nome do projeto"
                id="title"
                type="text"
                placeholder={selectedTech.title}
              />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select id="status" {...register("status")}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="divModalFooter">
              <button type="submit" className="updateButton ">
                Salvar alterações
              </button>
              <button
                onClick={() => removeTech(selectedTech.id)}
                className="removeButton"
                type="button"
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </StyledUpdateModal>
    </>
  );
}

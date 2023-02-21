import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});
export function TechProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const { reset } = useForm();

  function handleModal() {
    setOpenModal(!openModal);
  }

  function updateHandleModal() {
    setOpenUpdateModal(!openUpdateModal);
  }
  async function registerTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();

      setTechs([...techs, response.data]);

      localStorage.setItem("@TECHS", JSON.stringify(response.data));
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível cadastrar a tecnologia !");
    }
  }

  async function removeTech(tech_Id) {
    try {
      const response = await api.delete(`/users/techs/${tech_Id} `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.filter((tech) => tech.id !== tech_Id);
      setTechs(newTechs);
      toast.success("Tecnologia removida!");
    } catch (error) {
      toast.error("Não foi possível fazer a alteração!");
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        registerTech,
        setOpenModal,
        openModal,
        handleModal,
        techs,
        updateHandleModal,
        setOpenUpdateModal,
        removeTech,
        openUpdateModal,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

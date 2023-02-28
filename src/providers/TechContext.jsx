import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});
export function TechProvider({ children }) {
  const { user, getUserProfile } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const { reset } = useForm();

  function handleModal() {
    setOpenModal(!openModal);
  }

  function updateHandleModal(tech) {
    setOpenUpdateModal(true);
    setSelectedTech(tech);
  }

  async function registerTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();
      delete response.data.user;

      setTechs([...techs, response.data]);
      toast.success("Tecnologia cadastrada com sucesso!");
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível cadastrar a tecnologia !");
    }
  }

  async function removeTech(techId) {
    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.filter((tech) => techId !== tech.id);
      setTechs(newTechs);
      toast.success("Tecnologia removida!");
      setOpenUpdateModal(false);
    } catch (error) {
      toast.error("Não foi possível fazer a remoção!");
      console.error(error);
    }
  }

  async function updateTech(data, techId) {
    try {
      const newData = {
        status: data.status,
      };
      const response = await api.put(`/users/techs/${techId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTech = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, status: data.status };
        } else {
          return tech;
        }
      });
      setTechs(newTech);
      toast.success("Tecnologia atualizada!");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível fazer a alteração!");
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
        selectedTech,
        updateHandleModal,
        setOpenUpdateModal,
        removeTech,
        updateTech,
        openUpdateModal,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

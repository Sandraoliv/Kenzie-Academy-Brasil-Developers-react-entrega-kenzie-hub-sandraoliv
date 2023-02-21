import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { StyledContainer } from "./style";

export function TechsList() {
  const {
    setTechs,
    techs,
    registerTech,
    updateHandleModal,
    setOpenUpdateModal,
    openUpdateModal,
  } = useContext(TechContext);
  const { user, setUser, loginUser } = useContext(UserContext);
  const userTechs = JSON.parse(localStorage.getItem("@TECHS"));

  return (
    <>
      <StyledContainer>
        {userTechs.map((tech) => (
          <li key={tech.id} onClick={updateHandleModal}>
            <h3>{tech.title}</h3>
            <p> {tech.status}</p>
          </li>
        ))}
      </StyledContainer>
    </>
  );
}

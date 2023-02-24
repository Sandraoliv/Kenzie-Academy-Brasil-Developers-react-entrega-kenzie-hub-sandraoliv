import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { StyledContainer } from "./style";

export function TechsList() {
  const { techs, updateHandleModal } = useContext(TechContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledContainer>
        {user && techs.length > 0
          ? techs.map((tech) => (
              <li key={tech.id} onClick={() => updateHandleModal(tech)}>
                <h3>{tech.title}</h3>
                <p> {tech.status}</p>
              </li>
            ))
          : null}
      </StyledContainer>
    </>
  );
}

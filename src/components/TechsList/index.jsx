import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { StyledContainer } from "./style";

export function TechsList() {
  const { techs, updateHandleModal, setTechs } = useContext(TechContext);
  const { user, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    const loadUser = async () => {
      await getUserProfile();
      if (user) {
        setTechs(user.techs);
      }
    };
    loadUser();
  }, []);

  return (
    <>
      <StyledContainer>
        {user && techs.length > 0 ? (
          techs.map((tech) => (
            <li key={tech.id} onClick={() => updateHandleModal(tech)}>
              <h3>{tech.title}</h3>
              <p> {tech.status}</p>
            </li>
          ))
        ) : (
          <></>
        )}
      </StyledContainer>
    </>
  );
}

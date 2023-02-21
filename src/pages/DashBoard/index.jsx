import logo from "../../assets/Logo.svg";
import { StyledMain } from "./style.js";
import { StyledHeader } from "./style.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { StyledSection } from "./styledSection";
import { TechsList } from "../../components/TechsList";
import plus from "../../assets/+.svg";
import { UpdateModal } from "../../components/updateModal";
import { Modal } from "../../components/Modal";

export function DashBoard() {
  const { setUser, user } = useContext(UserContext);
  const { openModal, handleModal, openUpdateModal } = useContext(TechContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
    <>
      {openModal && <Modal />}
      {openUpdateModal && <UpdateModal />}
      <StyledHeader>
        <img src={logo} alt="logo" />
        <button onClick={() => logout()}>Sair</button>
      </StyledHeader>
      <StyledMain>
        <div>
          <h1>Olá , {user.name} </h1>
          <p>{user.course_module}</p>
        </div>
        <StyledSection>
          <div className="divSection">
            <h1>Tecnologias</h1>
            <button onClick={handleModal}>
              <img src={plus} alt="adicionar" />
            </button>
          </div>

          <TechsList />
        </StyledSection>
      </StyledMain>
    </>
  );
}

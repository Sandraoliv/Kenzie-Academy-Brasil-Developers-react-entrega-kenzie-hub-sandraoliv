import logo from "../../assets/Logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./styles.js";
import { StyledHeader } from "./styles.js";
import { Formregister } from "../../components/FormRegister";

export function Register() {
  const navigate = useNavigate();
  function backDown() {
    navigate(-1);
  }

  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <button className="headerButton" onClick={backDown}>
          Voltar
        </button>
      </StyledHeader>

      <StyledMain>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>

        <Formregister />
      </StyledMain>
    </>
  );
}

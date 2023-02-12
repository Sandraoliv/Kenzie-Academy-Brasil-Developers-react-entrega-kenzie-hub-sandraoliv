import logo from "../../assets/Logo.svg";
import { StyledMain } from "./style.js";
import { StyledHeader } from "./style.js";
import { Link } from "react-router-dom";
export function DashBoard() {
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />

        <Link to={"/"}>
          <button>Sair</button>
        </Link>
      </StyledHeader>
      <StyledMain>
        <div>
          <h1>Olá , </h1>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
      </StyledMain>
    </>
  );
}

import logo from "../../assets/Logo.svg";
import { StyledMain } from "./style.js";
import "react-toastify/dist/ReactToastify.css";
import { FormLogin } from "../../components/FormLogin";

export function Login() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <StyledMain>
        <FormLogin />
      </StyledMain>
    </>
  );
}

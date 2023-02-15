import logo from "../../assets/Logo.svg";
import { StyledMain } from "./style.js";
import { StyledHeader } from "./style.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export function DashBoard() {
  const token = localStorage.getItem("@TOKEN");
  const userId = localStorage.getItem("@USERID");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  useEffect(() => {
    async function getUserProfile() {
      try {
        const response = await api.get(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        toast.error("Não foi possível carregar as informações!");
        console.error(error);
      }
    }
    getUserProfile();
  }, []);

  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />

        <button onClick={() => logout()}>Sair</button>
      </StyledHeader>

      <StyledMain>
        <div>
          <h1>Olá , {user.name} </h1>
          <p>{user.course_module}</p>
        </div>
      </StyledMain>
    </>
  );
}

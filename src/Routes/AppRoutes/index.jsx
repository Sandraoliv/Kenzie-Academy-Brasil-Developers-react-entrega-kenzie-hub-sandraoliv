import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoard } from "../../pages/DashBoard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

export function AppRoutes() {
  const token = localStorage.getItem("@TOKEN");
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={token ? <DashBoard /> : <Navigate to="/" />}
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

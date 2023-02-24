import { Routes, Route } from "react-router-dom";
import { DashBoard } from "../../pages/DashBoard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

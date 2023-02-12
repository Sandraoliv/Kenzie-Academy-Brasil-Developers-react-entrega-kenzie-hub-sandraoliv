import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { api } from "./services/api";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globals.js";
import { AppRoutes } from "./Routes/AppRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Empresas from "./Pages/lista-empresas/empresas";
import CadastroEmpresas from "./Pages/cadastro-empresas/CadastroEmpresas";
import Planilha from "./Pages/planilhas/Planilha";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/empresas"
          element={
            <div>
              <Header />
              <Sidebar />
              <div className="main-content">
                <Empresas />
              </div>
            </div>
          }
        />
        <Route
          path="/cadastro-empresas"
          element={
            <div>
              <Header />
              <Sidebar />
              <div className="main-content">
                <CadastroEmpresas />
              </div>
            </div>
          }
        />
        <Route
          path="/planilhas"
          element={
            <div>
              <Header />
              <Sidebar />
              <div className="main-content">
                <Planilha />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Empresas from "./Pages/cadastro-empresas/empresas";
import Sidebar from "./Components/Sidebar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/empresas"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="main-content">
                <Empresas />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
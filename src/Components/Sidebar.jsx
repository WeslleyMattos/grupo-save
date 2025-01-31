import { useState, useEffect, useRef } from "react";
import { Offcanvas, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importando Link
import { FaBars, FaBuilding, FaList, FaFileAlt } from "react-icons/fa"; // Importando ícones
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sidebar.css";

function Sidebar() {
  const [show, setShow] = useState(false);
  const offcanvasRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="menu-button">
        <FaBars size={24} />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="custom-sidebar"
        ref={offcanvasRef}
      >
        <div className="logo-container">
          <img src="/logo.webp" alt="Logo" className="sidebar-logo" />
        </div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grupo Save</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/cadastro-empresas" onClick={handleClose}>
              <FaBuilding className="menu-icon" /> Cadastro de Empresas
            </Nav.Link>
            <Nav.Link as={Link} to="/empresas" onClick={handleClose}>
              <FaList className="menu-icon" /> Lista de Empresas
            </Nav.Link>
            <Nav.Link as={Link} to="/planilhas" onClick={handleClose}>
              <FaFileAlt className="menu-icon" /> Planilhas
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`main-content ${show ? "shift-right" : ""}`}></div>
    </>
  );
}

export default Sidebar;

import { useState } from "react";
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import '../styles/sidebar.css';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="menu-button">
        <FaBars size={24} />
      </Button>

      {/* Menu lateral */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-sidebar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/login" onClick={handleClose}>Login</Nav.Link>
            <Nav.Link href="/cadastro-empresas" onClick={handleClose}>Cadastro de Empresas</Nav.Link>
            <Nav.Link href="/lista-empresas" onClick={handleClose}>Lista de Empresas</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`main-content ${show ? 'shift-right' : ''}`}>
      </div>
    </>
  );
}

export default Sidebar;
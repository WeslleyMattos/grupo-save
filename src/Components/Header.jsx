import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";

function Header() {
  return (
    <Navbar bg="light" variant="light" className="header">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.webp"
            alt="Logo"
            className="header-logo"
          />
        </Navbar.Brand>
        <Navbar.Text className="header-title">Grupo Save</Navbar.Text>
        <Nav className="ml-auto">
          <Nav.Link  className="header-icon">
            <FaBell size={24} />
          </Nav.Link>
          <Nav.Link  className="header-icon">
            <FaUserCircle size={24} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

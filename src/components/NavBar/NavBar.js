import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><div className="logoContainer"><img className="icon" src={`./assets/icon.png`} alt="ProductImage"></img></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#impresoras">Impresoras</NavDropdown.Item>
              <NavDropdown.Item href="#filamentos">Filamentos</NavDropdown.Item>
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#repuestos">Repuestos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#printed">Piezas impresas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#contactUs">Contáctenos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
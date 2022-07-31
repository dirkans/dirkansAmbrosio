import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><div className="logoContainer"><Link to="/"><img className="icon" src={`./assets/icon.png`} alt="ProductImage"></img></Link></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"><Link className="link-down" to='/Products'>Todos los Productos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link className="link-down" to='/printers'>Impresoras</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link className="link-down" to='/filaments'>Filamentos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link className="link-down" to='/accesories'>Accesorios</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link className="link-down" to='/spare'>Repuestos</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"><Link className="link-down" to='/printedparts'>Piezas Impresas</Link></NavDropdown.Item>
</NavDropdown>
          
          
          
          
<Nav.Link><Link className="link" to='/services'>Servicios</Link></Nav.Link>
<Nav.Link><Link className="link" to='/contact'>Contactenos</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link  to='/cart'><CartWidget/></Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
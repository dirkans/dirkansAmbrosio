import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function NavBar() {
    const {productos,setProductos,addCart} = useContext(CartContext);

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><div className="logoContainer"><Link to="/"><img className="icon" src={`./assets/icon.png`} alt="ProductImage"></img></Link></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link className="link-down" to='/Products'>Todos los Productos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="link-down" to='/categories/printers'>Impresoras</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="link-down" to='/categories/filaments'>Filamentos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="link-down" to='/categories/accesories'>Accesorios</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="link-down" to='/categories/spare'>Repuestos</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link className="link-down" to='/categories/printedparts'>Piezas Impresas</Link></NavDropdown.Item>
          </NavDropdown>
          
          
<Nav.Link><Link className="link" to='/services'>Servicios</Link></Nav.Link>
<Nav.Link><Link className="link" to='/contact'>Contactenos</Link></Nav.Link>
          </Nav>
          <Nav>
          
{          productos.length>0 && <CartWidget/>}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
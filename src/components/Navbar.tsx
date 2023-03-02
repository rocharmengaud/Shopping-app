import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '../assets/ShoppingCart';

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        {/* me-auto ici pousse le contenu à droite de la navbar */}
        <Nav className="me-auto">
          <Nav.Link to={'/'} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={'/store'} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={'/about'} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {/* Css in js with style prop */}
        <Button style={{ width: '3rem', height: '3rem', position: 'relative' }} variant="outline-primary" className="rounded-circle">
          <ShoppingCart />
        </Button>
      </Container>
    </NavbarBs>
  );
}

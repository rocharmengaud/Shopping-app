import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ShoppingCartSvg } from '../assets/ShoppingCartSvg';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    // Sticky top so the navbar is always visible
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
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
        {/* If the cart quantity is > 0 then render what's inside */}
        {cartQuantity > 0 && (
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <ShoppingCartSvg />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              // Placing the red circle correctly
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

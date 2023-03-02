import { Offcanvas } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }) {
  const { closeCart } = useShoppingCart();
  return (
    // Opening cart right hand side of the screen
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}

import { NavItem, Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    // Opening cart right hand side of the screen
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0) /* Defaults initial counting to 0 */
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

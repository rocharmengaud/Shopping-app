import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  // Item doesn't exist
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
      {/* margin end auto means that it will push everything right side */}
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
        {/* Little tip for displaying the cross in the button */}
        &times;
      </Button>
    </Stack>
  );
}

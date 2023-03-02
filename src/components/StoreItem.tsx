import { Button, Card } from 'react-bootstrap';
// CURRENCY FORMATTER
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;

  return (
    <Card className="h-100">
      {/* objectFit cover is used to fix the aspect ratio of every image */}
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          {/* Using a currency formatter to display prices better */}
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {/* mt-auto fills all the space */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{
                gap: '.5rem',
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: '.5rem',
                }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

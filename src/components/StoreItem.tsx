import { Card } from 'react-bootstrap';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card>
      {/* objectFit cover is used to fix the aspect ratio of every image */}
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: 'cover' }} />
    </Card>
  );
}

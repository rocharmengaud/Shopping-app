import storeItems from '../data/items.json';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* Here we setup a grid with breakpoints through bootstrap with a gap of 3*/}
      <Row lg={3} md={2} xs={1} className="g-3">
        {storeItems.map((item, index) => (
          <Col key={item.id}>
            {/* Spread operator here to have access to all keys */}
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

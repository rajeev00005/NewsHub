import React from 'react';
import { Col, Card, Placeholder } from 'react-bootstrap';

const ArticleSkeleton = () => (
  <Col md="6" lg="4" className="mb-4">
    <Card>
      <div style={{ height: '200px', background: '#e0e0e0' }} className="w-100 mb-2 rounded-top" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="wave">
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={10} />
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  </Col>
);

export default ArticleSkeleton;

'use client';

import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const CardSection = () => (
  <div className="card-section my-5" data-testid="card-section">
    <h2 className="my-5 text-center" data-testid="card-section-title">
      How It Works
    </h2>
    <Row>
      <Col md={4} className="mb-4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Step 1</CardTitle>
            <CardText>Upload your resume.</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Step 2</CardTitle>
            <CardText>Customize your portfolio.</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Step 3</CardTitle>
            <CardText>Publish and share your portfolio.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default CardSection;
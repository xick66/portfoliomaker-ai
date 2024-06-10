'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';

const GridSection = () => (
  <div className="grid-section my-5" data-testid="grid-section">
    <h2 className="my-5 text-center" data-testid="grid-section-title">
      Our Features
    </h2>
    <Row>
      <Col md={4} className="mb-4">
        <div className="feature-box">
          <h4>AI-Powered</h4>
          <p>Leverage the power of AI to create stunning portfolios.</p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="feature-box">
          <h4>Customizable</h4>
          <p>Personalize your portfolio to match your style.</p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="feature-box">
          <h4>Responsive Design</h4>
          <p>Your portfolio will look great on any device.</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default GridSection;
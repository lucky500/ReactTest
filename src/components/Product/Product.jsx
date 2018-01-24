import React from 'react';
import { Col } from 'reactstrap';

export default props => (
  <Col xs={12} sm={6} md={4} lg={2}>
    <div className="product-card card">
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title h5 pt-2">{props.title}</h4>
      </div>
    </div>
  </Col>
);
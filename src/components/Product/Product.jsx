import React from 'react';
import { Col } from 'reactstrap';

// For purely presentational components that hold no state, you can use what you did, or heres a recommendation...
// And yes, you can use object destructuring inside your functions parameters! Like I did below so you dont have to use the word props.whatever

const Product = ({ image, title }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={2}>
      <div className="product-card card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title h5 pt-2">{title}</h4>
        </div>
      </div>
    </Col>
  )
}

export default Product

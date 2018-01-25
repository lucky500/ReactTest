import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import Product from './Product';
import SearchResultBar from '../SearchResultBar/SearchResultBar';

class ProductList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Row>
          {
            this.props.list.map(item => {
              return <Product {...item} key={item._id} />
            })
          }
        </Row>
      </Container>
    );
  }
}

export default ProductList;

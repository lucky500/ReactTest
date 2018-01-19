import React, { Component } from 'react';
import Product from './Product';
import { Row, Container } from 'reactstrap';
import Data from '../../data/data.json';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
   
    }
    // renderList = renderList.bind(this);
  }

  renderList(product){
    return product.map(function(link) {
      return <Product img={link.image} title={link.title} key={link.id} />
    });
  }

  render(){
    return(
      <Container>
        <Row>
         { this.renderList(Data.product) }
        </Row>
      </Container>
    );
  }
}

export default ProductList;

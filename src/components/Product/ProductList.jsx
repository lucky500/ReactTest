import React, { Component } from 'react';
import Product from './Product';
import { Row, Container } from 'reactstrap';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render(){
    return(
      <Container>
        <Row>
         {this.props.products.map(item => {
            return <Product {...item} key={item.id} />
         })}
        </Row>
      </Container>
    );
  }
}

export default ProductList;

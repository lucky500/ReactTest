import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <Product img="http://via.placeholder.com/200x200" title="Product1"/>
    );
  }
}

export default ProductList;

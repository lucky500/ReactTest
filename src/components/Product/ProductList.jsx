import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import Product from './Product';
import SearchResultBar from '../SearchBar/SearchResultBar';

class ProductList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
         {!this.props.isHidden ? 
            <SearchResultBar 
            value={this.props.value} /> : null }
        <Row className="mt-3">
          {
            this.props.list.map(item => {
              return <Product {...item} key={item.id} />
            })
          }
        </Row>
      </div>
    );
  }
}

export default ProductList;

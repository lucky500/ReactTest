import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import Product from './Product';
import SearchResultBar from '../SearchBar/SearchResultBar';

class ProductList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { hideResultsBar, term, list } = this.props

    return(
      <div>
         {
           hideResultsBar ? null : <SearchResultBar term={term} />
         }
        <Row className="mt-3">
          {
            list.map(item => {
              return <Product {...item} key={item.id} />
            })
          }
        </Row>
      </div>
    );
  }
}

export default ProductList;

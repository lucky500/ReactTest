import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import Product from './Product';
import SearchResultBar from '../SearchResultBar/SearchResultBar';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render(){
    { console.log('isHidden:', this.props.isHidden) }
    return(
      <div>
        {!this.props.isHidden ?
          <SearchResultBar 
          value={this.props.value} /> : null }
        <Container>
          <Row>
            {
              this.props.list.map(item => {
                return <Product {...item} key={item._id} />
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductList;

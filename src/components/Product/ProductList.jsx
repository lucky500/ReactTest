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
    {console.log('list:', this.props.list)}
    // let filteredSearch = this.props.products.filter(
    //   (product) => {
    //     return product.title.indexOf(this.props.value) !== -1;
    //   }
    // )
    return(
      <Container>
        <Row>
         {/*{filteredSearch.map(item => {
            return <Product {...item} key={item.id}/>
         })}*/}
        </Row>
      </Container>
    );
  }
}

export default ProductList;

import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultBar from '../components/SearchResultBar/SearchResultBar';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/Product/ProductList';
// import Data from '../data/data.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value })
  }

  render(){
    return(
      <div className="outer-wrapper">
        <Header />
        <main>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="pl-0 pr-0">
                <SearchBar 
                  handleChange={this.handleChange}
                  value={this.state.value}
                />
                <SearchResultBar 
                  value={this.state.value}
                />
                <Filter />
              </Col>
            </Row>
            <ProductList products={this.props.products} /> 
          </Container>
        </main>
      </div>
    )
  }
}

export default App;


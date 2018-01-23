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
    this.state = { 
      value: '',
      toggleOn: false 
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value })
  }

  handleToggle(){
    this.setState({ 
      toggleOn: !this.state.toggleOn
    });
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
                  handleToggle={this.handleToggle}
                  value={this.state.value}
                  toggleOn={this.state.toggleOn}
                />
                <SearchResultBar 
                  value={this.state.value}
                />
                <Filter />
              </Col>
            </Row>
            <ProductList 
              products={this.props.products} 
              value={this.state.value}
            /> 
          </Container>
        </main>
      </div>
    )
  }
}

export default App;


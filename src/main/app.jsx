import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultBar from '../components/SearchResultBar/SearchResultBar';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/Product/ProductList';

const URL  = 'http://localhost:3035/api/products';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      value: '',
      toggleOn: false, 
      list: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value })
  }

  handleToggle(){
    this.setState({ 
      toggleOn: !this.state.toggleOn
    });
  }

  handleSearch(product){
    axios.get(`${URL}/${product._id}`)
      .then((response) => {
        console.log('onHandleSearch:', response);
      });
  }


  componentDidMount(){
    axios.get(URL)
      .then((response) => {
         console.log(response.data);
      }).catch((error) => {
         console.log(error.response.data);
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
                  handleSearch={this.handleSearch}
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


import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/Product/ProductList';


const URL  = 'http://localhost:3035/api/products';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      value: '',
      toggleOn: false, 
      list: [],
      isHidden: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    
  }


  handleChange(event){
    this.setState({ ...this.state, value: event.target.value })
  }

  handleToggle(){
    this.setState({ 
      toggleOn: !this.state.toggleOn,
    });
  }


  refresh(value=''){
    const search = value ? `?&title__regex=/${value}/&gordonToggle=${this.state.toggleOn}` : '';
    axios.get(`${URL}${search}`)
      .then(response => this.setState({...this.state, value, list: response.data}));
  }


  handleSearch(){
    this.refresh(this.state.value);
    this.setState({
      isHidden: !this.state.isHidden
    })
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
                  isHidden={this.state.isHidden}
                />
              </Col>
            </Row>
            <ProductList         
              list={this.state.list} /> 
          </Container>
        </main>
      </div>
    )
  }
}

export default App;


import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';
import ProductList from '../components/Product/ProductList';
import Data from '../../public/data.json'

const URL  = 'http://localhost:3035/api/products';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      searchedTerm: '',
      toggleOn: false,
      list: [],
      hideResultsBar: true
    }
  }

  // Arrow functions for the win...you never have to worry about binding this again in your constructor, they always
  // stay binded to the correct this...
  handleChange = e => {
    this.setState({ ...this.state, value: e.target.value })
  }

  handleToggle = () => {
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  }

  fetchProducts = (value = '') => {
    // const search = value ? `?&title__regex=/${value}/&gordonToggle=${this.state.toggleOn}` : '';
    axios.get('../../data.json')
      .then(response => this.setState({
        ...this.state,
        value,
        searchedTerm: value,
        list: response.data
      }));
  }

  handleSearch = () => {
    this.fetchProducts(this.state.value);

    // Will always be visible after first search
    if(this.state.hideResultsBar) {
      this.setState({
        hideResultsBar: false
      })
    }
  }


  render() {
    // You can use a Babel technique called object destructuring all over your React Components.
    // You can destructure this.props and this.state
    const {
      value,
      toggleOn,
      list,
      searchedTerm,
      hideResultsBar
    } = this.state

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
                  value={value}
                  toggleOn={toggleOn}

                />
              </Col>
            </Row>
            <ProductList
              list={list}
              term={searchedTerm}
              hideResultsBar={hideResultsBar}
            />
          </Container>
        </main>
      </div>
    )
  }
}

export default App;

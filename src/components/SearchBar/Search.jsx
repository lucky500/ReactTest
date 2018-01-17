import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <InputGroup className="search">
        <FormControl type="text" />
        <InputGroup.Addon>Search</InputGroup.Addon>
      </InputGroup>
    )
  }
}

export default Search;
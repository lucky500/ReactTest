import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Search extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <InputGroup>
          <Input placeholder='Enter Search' />
          <InputGroupAddon className='input-group-append'>
            <span className='input-group-text'>
              <i className="fa fa-search fa-lg fa-flip-horizontal"></i>
            </span>
          </InputGroupAddon>
        </InputGroup>
        
      </div>
    )
  }
}

export default Search;
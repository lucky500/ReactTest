import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Search extends Component {
  constructor(props){
    super(props);
    // this.state = { value: '' }
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event){
  //   this.setState({ value: event.target.value })
  // }

  render(){
    return(
      <div>
        <InputGroup>
          <Input placeholder='Enter Search' 
            onChange={this.props.handleChange}
            value={this.props.value}
            />
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
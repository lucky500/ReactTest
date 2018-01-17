import React, { Component } from 'react';

class GordonToggle extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="gordon-toggle">
        <i className="fa fa-toggle-on fa-2x" aria-hidden="true"></i>
        <h3>Gordon ON</h3>
      </div>
    )
  }
}

export default GordonToggle;
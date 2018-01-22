import React, { Component } from 'react';

class GordonToggle extends Component {
  constructor(props){
    super(props);
    this.state = { on: false }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){
    this.setState({ 
      on: !this.state.on
    });
  }

  render(){
    console.log(this.state.on);
    return(
      <div className="gordon-toggle">
          <i className="fa fa-toggle-on" aria-hidden="true"
            onClick={this.handleToggle}>
          </i>
          <h3>Gordon ON</h3>
      </div>
    )
  }
}

export default GordonToggle;
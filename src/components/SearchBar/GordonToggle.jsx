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
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={this.handleToggle}></span>
          </label>
          <h3>Gordon { this.state.on ? 'ON' : 'OFF' }</h3>
      </div>
    )
  }
}

export default GordonToggle;
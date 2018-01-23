import React, { Component } from 'react';

class GordonToggle extends Component {
  constructor(props){
    super(props);
    // this.state = { toggleOn: false }
    // this.handleToggle = this.handleToggle.bind(this);
  }

  // handleToggle(){
  //   this.setState({ 
  //     toggleOn: !this.state.toggleOn
  //   });
  // }

  render(){
    console.log(this.props.toggleOn);
    return(
      <div className="gordon-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={this.props.handleToggle}></span>
          </label>
          <h3>Gordon { this.props.toggleOn ? 'ON' : 'OFF' }</h3>
      </div>
    )
  }
}

export default GordonToggle;
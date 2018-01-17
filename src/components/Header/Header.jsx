import React from 'react';
import { Navbar } from 'react-bootstrap'
import Logo from '../../main/img/cirrus_logo.png';

export default props =>(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={Logo} alt="logo" className="logo" />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)
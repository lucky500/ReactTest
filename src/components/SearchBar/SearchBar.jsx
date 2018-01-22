import React from 'react';
import Search from './Search';
import GordonToggle from './GordonToggle';

export default props => (
  <div className="search-bar my-3 px-3">
    <Search
      handleChange={props.handleChange}
      value={props.value} />
    <GordonToggle />
  </div>
)
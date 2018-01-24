import React from 'react';
import Search from './Search';
import GordonToggle from './GordonToggle';

export default props => (
  <div className="search-bar my-3 px-3">
    <Search
      handleChange={props.handleChange}
      handleSearch={props.handleSearch}
      value={props.value} />
    <GordonToggle 
      handleToggle={props.handleToggle}
      toggleOn={props.toggleOn} />
  </div>
)
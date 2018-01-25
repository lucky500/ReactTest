import React from 'react';
import Search from './Search';
import GordonToggle from './GordonToggle';
import SearchResultBar from './SearchResultBar';

export default props => (
  <section className="my-3">
    <div className="search-bar px-3">
      <Search
        handleChange={props.handleChange}
        handleSearch={props.handleSearch}
        
        value={props.value} />
      <GordonToggle 
        handleToggle={props.handleToggle}
        toggleOn={props.toggleOn} />
    </div>
    {!props.isHidden ? 
      <SearchResultBar 
      value={props.value} /> : null }
  </section>
)
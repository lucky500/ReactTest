import React from 'react';
import Search from './Search';
import GordonToggle from './GordonToggle';
import SearchResultBar from './SearchResultBar';

export default props => (
  <section>
    <div className="search-bar my-3 px-3">
      <Search
        handleChange={props.handleChange}
        handleSearch={props.handleSearch}
        value={props.value} />
      <GordonToggle 
        handleToggle={props.handleToggle}
        toggleOn={props.toggleOn} />
    </div>
    <SearchResultBar />
  </section>
)
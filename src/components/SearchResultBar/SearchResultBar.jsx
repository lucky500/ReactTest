import React, { Component } from 'react';
// import './SearchResultBar.less';

class SearchResultBar extends Component {
  render(){
    return(
      <div className="search-result-bar py-3 px-3">
        <h1>Searched for XXX</h1>
        <p>Applied the following terms to query x,x,x,x and x.</p>
        <p>Applied the following terms to query x,x,x,x and x.</p>
      </div>
    )
  }
}

export default SearchResultBar;
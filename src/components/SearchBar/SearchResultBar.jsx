import React, { Component } from 'react';

class SearchResultBar extends Component {
  render(){
    const { term } = this.props

    return(
      <div className="search-result-bar py-3 px-3">
        <h1>Searched for {term}</h1>
        <p>Applied the following terms to query x,x,x,x and x.</p>
        <p>Applied the following terms to query x,x,x,x and x.</p>
      </div>
    )
  }
}

export default SearchResultBar;

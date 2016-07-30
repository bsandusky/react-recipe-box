import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="search-bar col-md-4">
      <section id="search">
        <input id="search-input" placeholder="Seach by recipe name" onChange={(event) => props.filterList(event)}/>
      </section>
    </div>
  );
}

export default SearchBar;

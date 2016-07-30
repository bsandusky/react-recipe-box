import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="search-bar col-md-4">
      <section id="search">
        <input id="search-input" placeholder="Search recipes" onChange={(event) => props.filterList(event)}/>
      </section>
    </div>
  );
}

SearchBar.propTypes = {
  filterList: React.PropTypes.func
}

export default SearchBar;

import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchQuery, onSearchQueryChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search-query"></label>
      <input 
        id="search-query"
        type="text"
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder="Search"
      />
      <button type="submit" aria-label="fetch-articles">Submit</button>
    </form>
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;


import React from 'react';

const Search = ({ isDisabled, handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder='Digite o nome de usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search;

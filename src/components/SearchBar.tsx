import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="   검색어를 입력하세요" />
      <button type="submit">검색</button>
    </div>
  );
};

export default SearchBar;

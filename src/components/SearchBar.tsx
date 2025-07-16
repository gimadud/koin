import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="   검색어를 입력하세요" />
      <button type="submit" className="search-button">
        <img src="https://static.koreatech.in/assets/img/search.png" alt="검색" />
      </button>
    </div>
  );
};

export default SearchBar;

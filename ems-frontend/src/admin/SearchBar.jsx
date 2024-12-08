import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  const handleSearchClick = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick} className="search-btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

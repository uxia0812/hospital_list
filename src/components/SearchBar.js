import React from 'react';

const SearchBar = ({ filterText, onFilterTextChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="병원명, 주소, 의사, 태그 검색..."
        className="w-full px-3 py-2 text-sm border rounded-lg"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
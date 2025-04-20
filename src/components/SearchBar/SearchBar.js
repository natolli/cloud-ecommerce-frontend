// src/components/SearchBar/SearchBar.js
import React from "react";
import { SearchContainer, Input } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;

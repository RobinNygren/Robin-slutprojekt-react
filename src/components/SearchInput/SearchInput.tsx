import { SearchInputProps } from "../../types/types";
import React from "react";

const SearchInput: React.FC<SearchInputProps> = ({
  searchType,
  setSearchType,
  searchTerm,
  setSearchTerm,
  searchOptions,
}) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="p-2 bg-bookFlix-colors-background text-bookFlix-colors-secondary border border-bookFlix-colors-accent rounded-md"
        >
          {searchOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="p-2 bg-bookFlix-colors-background text-bookFlix-colors-secondary border border-bookFlix-colors-accent rounded-md"
        />
      </div>
    </div>
  );
};

export default SearchInput;

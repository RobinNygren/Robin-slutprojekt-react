import { SearchFormProps } from "../../types/types";
import SearchInput from "../SearchInput/SearchInput";

const SearchForm: React.FC<SearchFormProps> = ({
  searchType,
  setSearchType,
  searchTerm,
  setSearchTerm,
  searchOptions,
  onSearch,
  onClear,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className="space-y-4"
    >
      <SearchInput
        searchType={searchType}
        setSearchType={setSearchType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchOptions={searchOptions}
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          className="p-2 bg-bookFlix-colors-accent text-white rounded-md"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClear}
          className="p-2 bg-bookFlix-colors-accent text-white rounded-md"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

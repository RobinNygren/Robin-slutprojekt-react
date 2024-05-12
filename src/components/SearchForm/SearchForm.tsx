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
      <button type="submit">Search</button>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </form>
  );
};

export default SearchForm;

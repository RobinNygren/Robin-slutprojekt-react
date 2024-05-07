import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import QuickSearch from "../components/QuickSearch/QuickSearch";

const Search = () => {
  return (
    <>
      <h1>Search</h1>
      <div>
        <p>search here</p>
        <QuickSearch />
        <AdvancedSearch />
      </div>
    </>
  );
};

export default Search;

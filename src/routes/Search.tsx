import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";

const Search = () => {
  return (
    <>
      <div className="min-h-screen bg-bookFlix-colors-background text-bookFlix-colors-secondary p-6">
        <h1 className="text-3xl font-bold text-bookFlix-colors-accent mb-4">
          Search
        </h1>
        <div className="space-y-4">
          <p className="text-bookFlix-colors-detail">Search here:</p>
          <AdvancedSearch />
        </div>
      </div>
    </>
  );
};

export default Search;

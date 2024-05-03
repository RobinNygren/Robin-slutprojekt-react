import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import { Book, ApiResponse } from "../../types/types";

const QuickSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetch<ApiResponse>(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`
  );
  return (
    <div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Quick Search..."
          className="p-1 text-center italic text-bookFlix-colors-primary font-roboto-slab"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-1 rounded-r-md">
          <img src={SearchIcon} alt="Search" className="h-12 w-12" />
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.docs && (
          <ul>
            {data.docs.map((item: Book, index: number) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuickSearch;

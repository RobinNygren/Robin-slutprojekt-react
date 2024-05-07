import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponse, Book, Author } from "../../types/types";
import createURLSearch from "../../utils/createURLSearch";

const AdvancedSearch: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const { data, loading, error } = useFetch<ApiResponse>(
    `https://openlibrary.org/search.json?${query}`
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuery = createURLSearch({ title, author });
    if (newQuery) {
      setQuery(newQuery);
    } else {
      alert("Please enter a title or author to search.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && data.docs && (
        <ul className="mt-4 list-disc">
          {data.docs.map((book: Book, index: number) => (
            <li key={index}>
              {book.title} -{" "}
              {Array.isArray(book.author_name)
                ? book.author_name.join(",")
                : book.author_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedSearch;

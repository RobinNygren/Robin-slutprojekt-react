import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import {
  BookApiResponse,
  AuthorApiResponse,
  Book,
  Author,
} from "../../types/types";
import { Listbox } from "@headlessui/react";
import useSearch from "../../hooks/useSearch";
import BookCard from "../BookCard/BookCard";
import AuthorCard from "../AuthorCard/AuthorCard";

const AdvancedSearch: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchTerm, setSearchTerm, clearSearch } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const initialType = searchParams.get("type") || "title";
  const [searchType, setSearchType] = useState(initialType);
  const [url, setUrl] = useState("");

  const searchOptions = [
    {
      name: "Search by title",
      value: "title",
      url: "https://openlibrary.org/search.json?title=",
    },
    {
      name: "Search Author",
      value: "author",
      url: "https://openlibrary.org/search/authors.json?q=",
    },
  ];

  useEffect(() => {
    if (debouncedSearchTerm) {
      const newUrl =
        searchOptions.find((option) => option.value === searchType)?.url +
        encodeURIComponent(debouncedSearchTerm);
      setUrl(newUrl);
      setSearchParams({ type: searchType, query: debouncedSearchTerm });
    }
  }, [searchType, debouncedSearchTerm, setSearchParams]);

  const {
    data: booksData,
    loading: booksLoading,
    error: booksError,
  } = useFetch<BookApiResponse>(url);

  const {
    data: authorsData,
    loading: authorsLoading,
    error: authorsError,
  } = useFetch<AuthorApiResponse>(url);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <Listbox value={searchType} onChange={setSearchType}>
          <Listbox.Button className="btn btn-block">
            {searchOptions.find((option) => option.value === searchType)?.name}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-60">
            {searchOptions.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option.value}
                as={React.Fragment}
                disabled={option.value === searchType}
              >
                {({ active }) => (
                  <li
                    className={`cursor-pointer select-none relative p-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`}
                  >
                    {option.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <input
          type="text"
          placeholder={
            searchOptions.find((option) => option.value === searchType)?.name
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="">
          Search
        </button>
        <button type="button" onClick={clearSearch} className="">
          Clear
        </button>
      </form>
      {searchType === "title" ? (
        booksLoading ? (
          <div>Loading...</div>
        ) : booksError ? (
          <div>Error: {booksError}</div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {booksData?.docs.map((book: Book, index: number) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )
      ) : authorsLoading ? (
        <div>Loading...</div>
      ) : authorsError ? (
        <div>Error: {authorsError}</div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {authorsData?.docs.map((author: Author, index: number) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;

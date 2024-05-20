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
import useSearch from "../../hooks/useSearch";
import BookCard from "../BookCard/BookCard";
import AuthorCard from "../AuthorCard/AuthorCard";
import ModalManager from "../ModalManager/ModalManager";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";

const AdvancedSearch: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchTerm, setSearchTerm, clearSearch } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const initialType = searchParams.get("type") || "title";
  const [searchType, setSearchType] = useState(initialType);
  const [url, setUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

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
    // useEffect uppdaterar url och searchParams när debouncedSearchTerm eller searchType ändras.
    if (debouncedSearchTerm.trim() !== "") {
      const newUrl =
        searchOptions.find((option) => option.value === searchType)?.url +
        encodeURIComponent(debouncedSearchTerm);
      setUrl(newUrl);
      setSearchParams({ type: searchType, query: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm, searchType, setSearchParams]);

  const onSearch = () => {
    // onSearch funktion uppdaterar URL och sökparametrar när användaren utför en sökning.
    const newUrl =
      searchOptions.find((option) => option.value === searchType)?.url +
      encodeURIComponent(searchTerm);
    setUrl(newUrl);
    setSearchParams({ type: searchType, query: searchTerm });
  };

  const {
    data: booksData,
    loading: booksLoading,
    error: booksError,
  } = useFetch<BookApiResponse>(searchType === "title" ? url : "");

  const {
    data: authorsData,
    loading: authorsLoading,
    error: authorsError,
  } = useFetch<AuthorApiResponse>(searchType === "author" ? url : "");

  const handleItemSelect = (item: Book | Author) => {
    const content =
      searchType === "title" ? (
        <BookCard book={item as Book} addFavoriteButton={true} />
      ) : (
        <AuthorCard author={item as Author} addFavoriteButton={true} />
      );
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div className="bg-bookFlix-colors-background text-bookFlix-colors-secondary p-4 rounded shadow-md">
      <SearchForm
        searchType={searchType}
        setSearchType={setSearchType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchOptions={searchOptions}
        onSearch={onSearch}
        onClear={clearSearch}
      />
      <div className="mt-4">
        {booksLoading || authorsLoading ? (
          <div>Loading...</div>
        ) : booksError || authorsError ? (
          <div>Error: {booksError || authorsError}</div>
        ) : (
          <>
            {searchType === "title" ? (
              <ResultList
                results={booksData?.docs || []}
                type="books"
                onItemClick={handleItemSelect}
                addFavoriteButton={true}
              />
            ) : (
              <ResultList
                results={authorsData?.docs || []}
                type="authors"
                onItemClick={handleItemSelect}
                addFavoriteButton={true}
              />
            )}
          </>
        )}
      </div>
      <ModalManager isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {" "}
        {modalContent}
      </ModalManager>
    </div>
  );
};

export default AdvancedSearch;

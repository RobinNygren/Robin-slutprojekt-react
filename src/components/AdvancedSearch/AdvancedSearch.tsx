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
  const [modalActions, setModalActions] = useState<React.ReactNode>(null);

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

  const currentUrl =
    searchOptions.find((option) => option.value === searchType)?.url +
    encodeURIComponent(debouncedSearchTerm);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      const newUrl =
        searchOptions.find((option) => option.value === searchType)?.url +
        encodeURIComponent(debouncedSearchTerm);
      setUrl(newUrl);
      setSearchParams({ type: searchType, query: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm, searchType, setSearchParams]);

  const onSearch = () => {
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
  } = useFetch<BookApiResponse>(searchType === "title" ? currentUrl : "");

  const {
    data: authorsData,
    loading: authorsLoading,
    error: authorsError,
  } = useFetch<AuthorApiResponse>(searchType === "author" ? currentUrl : "");

  const handleItemSelect = (item: Book | Author) => {
    const itemActions = (
      <>
        <button onClick={() => console.log("Add to favorites")}>
          Add to favorites
        </button>
        <button onClick={() => console.log("Add to as Read")}>
          Add as Read
        </button>
      </>
    );

    const itemContent =
      searchType === "title" ? (
        <BookCard book={item as Book} />
      ) : (
        <AuthorCard author={item as Author} />
      );
    setModalContent(itemContent);
    setModalActions(itemActions);
    setModalOpen(true);
  };

  return (
    <div className="p-4">
      <SearchForm
        searchType={searchType}
        setSearchType={setSearchType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchOptions={searchOptions}
        onSearch={onSearch}
        onClear={clearSearch}
      />
      {searchType === "title" ? (
        <ResultList
          results={booksData?.docs || []}
          type="books"
          onItemClick={handleItemSelect}
        />
      ) : (
        <ResultList
          results={authorsData?.docs || []}
          type="authors"
          onItemClick={handleItemSelect}
        />
      )}
      <ModalManager
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
        actions={modalActions}
      />
    </div>
  );
};

export default AdvancedSearch;

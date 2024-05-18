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
import BookReview from "../BookReview/BookReview";

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
  } = useFetch<BookApiResponse>(searchType === "title" ? url : "");

  const {
    data: authorsData,
    loading: authorsLoading,
    error: authorsError,
  } = useFetch<AuthorApiResponse>(searchType === "author" ? url : "");

  const handleItemSelect = (item: Book | Author) => {
    const content =
      searchType === "title" ? (
        <>
          <BookCard
            book={item as Book}
            /* addFavoriteButton={false}
          removeFavoriteButton={false} */
          />
          <BookReview book={item as Book} onSubmit={handleReviewSubmit} />
        </>
      ) : (
        <AuthorCard
          author={item as Author}
          /* addFavoriteButton={true}
          removeFavoriteButton={true} */
        />
      );
    setModalContent(content);
    setModalOpen(true);
  };

  const handleReviewSubmit = (reviewDetails: {
    rating: number;
    review: string;
    totalPages: number;
  }) => {
    console.log(reviewDetails);
    setModalOpen(false);
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
          addFavoriteButton={true}
        />
      )}
      <ModalManager isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {" "}
        {modalContent}
      </ModalManager>
    </div>
  );
};

export default AdvancedSearch;

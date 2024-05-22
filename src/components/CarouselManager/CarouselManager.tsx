import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { ApiResponse, Book } from "../../types/types";
import BookCard from "../BookCard/BookCard";
import ModalManager from "../ModalManager/ModalManager";
import { mapWorkToBook } from "../../utils/mapWorkToBook";
import useModal from "../../hooks/useModal";

const CarouselManager: React.FC = () => {
  const {
    data: sciFiBooks,
    loading: sciFiBooksLoading,
    error: sciFiBooksError,
  } = useFetch<ApiResponse>(
    "https://openlibrary.org/subjects/sci-fi.json?limit=25"
  );
  const {
    data: loveBooks,
    loading: loveBooksLoading,
    error: loveBooksError,
  } = useFetch<ApiResponse>(
    "https://openlibrary.org/subjects/love.json?limit=25"
  );

  const { modalOpen, selectedItem, openModal, closeModal } = useModal();

  const handleBookClick = (book: Book) => {
    openModal(book);
  };

  const isLoading = sciFiBooksLoading || loveBooksLoading;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {sciFiBooksError ? (
            <p>Error: {sciFiBooksError}</p>
          ) : (
            <Carousel title="Sci-Fi">
              {sciFiBooks && sciFiBooks.works && sciFiBooks.works.length > 0 ? (
                mapWorkToBook(sciFiBooks.works).map((book) => (
                  <div onClick={() => handleBookClick(book)}>
                    <BookCard
                      key={book.key}
                      book={book}
                      addFavoriteButton={true}
                    />
                  </div>
                ))
              ) : (
                <p>No newly added books found.</p>
              )}
            </Carousel>
          )}
          {loveBooksError ? (
            <p>Error: {loveBooksError}</p>
          ) : (
            <Carousel title="Love">
              {loveBooks && loveBooks.works && loveBooks.works.length > 0 ? (
                mapWorkToBook(loveBooks.works).map((book) => (
                  <div onClick={() => handleBookClick(book)}>
                    <BookCard
                      key={book.key}
                      book={book}
                      addFavoriteButton={true}
                    />
                  </div>
                ))
              ) : (
                <p>No top rated books found.</p>
              )}
            </Carousel>
          )}
          {modalOpen && selectedItem && (
            <ModalManager isOpen={modalOpen} onClose={closeModal}>
              <BookCard book={selectedItem as Book} addFavoriteButton={true} />
            </ModalManager>
          )}
        </>
      )}
    </div>
  );
};

export default CarouselManager;

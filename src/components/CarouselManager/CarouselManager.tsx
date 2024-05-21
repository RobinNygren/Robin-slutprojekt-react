import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { ApiResponse, Book, BookDetails } from "../../types/types";
import BookCard from "../BookCard/BookCard";
import ModalManager from "../ModalManager/ModalManager";
import { mapWorkToBook } from "../../utils/mapWorkToBook";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setModalContent(
      <>
        <BookCard book={book} addFavoriteButton={true} />
      </>
    );
    setModalOpen(true);
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
          {modalOpen && selectedBook && (
            <ModalManager
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            >
              {modalContent}
            </ModalManager>
          )}
        </>
      )}
    </div>
  );
};

export default CarouselManager;

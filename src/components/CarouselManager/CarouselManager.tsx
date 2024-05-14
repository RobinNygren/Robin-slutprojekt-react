import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { ApiResponse, Book, Work } from "../../types/types";
import BookCard from "../BookCard/BookCard";
import ModalManager from "../ModalManager/ModalManager";

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

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const renderBookItems = (works: Work[]): Book[] =>
    works.map((work) => ({
      title: work.title,
      cover_i: work.cover_id || 0,
      author_name: work.authors.map((author) => author.name),
      first_publish_year: work.first_publish_year || 0,
      key: work.key,
    }));

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
                renderBookItems(sciFiBooks.works).map((book) => (
                  <div onClick={() => handleBookClick(book)}>
                    <BookCard
                      key={book.key}
                      book={book}
                      /* title={item.title}
                    cover_i={item.cover_i}
                    author_name={item.author_name}
                    first_publish_year={item.first_publish_year} */
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
                renderBookItems(loveBooks.works).map((book) => (
                  <div onClick={() => handleBookClick(book)}>
                    <BookCard
                      key={book.key}
                      book={book}
                      /* title={item.title}
                    cover_i={item.cover_i}
                    author_name={item.author_name}
                    first_publish_year={item.first_publish_year} */
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
              content={<BookCard book={selectedBook} />}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CarouselManager;

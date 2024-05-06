import React from "react";
import Carousel from "../Carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { ApiResponse, Book, Work } from "../../types/types";
import BookCard from "../BookCard/BookCard";

const CarouselManager: React.FC = () => {
  const {
    data: newlyAddedBooks,
    loading: newlyAddedBooksLoading,
    error: newlyAddedBooksError,
  } = useFetch<ApiResponse>(
    "https://openlibrary.org/subjects/sci-fi.json?limit=25"
  );
  const {
    data: topRatedBooks,
    loading: loadingTopRated,
    error: topRatedBooksError,
  } = useFetch<ApiResponse>(
    "https://openlibrary.org/subjects/love.json?limit=25"
  );

  console.log("Newly Added Books Data:", newlyAddedBooks);
  console.log("Top Rated Books Data:", topRatedBooks);

  const renderBookItems = (works: Work[]) =>
    works.map((work) => ({
      title: work.title,
      cover_i: work.cover_id || 0,
      author_name: work.authors[0]?.name || "Unknown Author",
      first_publish_year: work.first_publish_year || 0,
      key: work.key,
    }));

  /* const newlyAddedItems = renderBookItems(newlyAddedBooks?.docs || []);
  const topRatedItems = renderBookItems(topRatedBooks?.docs || []); */

  const isLoading = newlyAddedBooksLoading || loadingTopRated;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {newlyAddedBooksError ? (
            <p>Error: {newlyAddedBooksError}</p>
          ) : (
            <Carousel>
              {newlyAddedBooks &&
              newlyAddedBooks.works &&
              newlyAddedBooks.works.length > 0 ? (
                renderBookItems(newlyAddedBooks.works).map((item) => (
                  <BookCard
                    key={item.key}
                    book={item}
                    title={item.title}
                    cover_i={item.cover_i}
                    author_name={item.author_name}
                    first_publish_year={item.first_publish_year}
                  />
                ))
              ) : (
                <p>No newly added books found.</p>
              )}
            </Carousel>
          )}
          {topRatedBooksError ? (
            <p>Error: {topRatedBooksError}</p>
          ) : (
            <Carousel>
              {topRatedBooks &&
              topRatedBooks.works &&
              topRatedBooks.works.length > 0 ? (
                renderBookItems(topRatedBooks.works).map((item) => (
                  <BookCard
                    key={item.key}
                    book={item}
                    title={item.title}
                    cover_i={item.cover_i}
                    author_name={item.author_name}
                    first_publish_year={item.first_publish_year}
                  />
                ))
              ) : (
                <p>No top rated books found.</p>
              )}
            </Carousel>
          )}
        </>
      )}
    </div>
  );
};

export default CarouselManager;

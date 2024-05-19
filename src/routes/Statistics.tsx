import { useContext, useState } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import BookCard from "../components/BookCard/BookCard";
import ModalManager from "../components/ModalManager/ModalManager";
import BookReview from "../components/BookReview/BookReview";
import { BookDetails } from "../types/types";
import StarRating from "../components/StarRating/StarRating";

const Statistics: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const readBooks = Object.values(state.readBooksDetails).filter(
    (book) => book.read
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null);

  const handleBookClick = (book: BookDetails) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const handleReviewSubmit = (details: {
    rating: number;
    review: string;
    totalPages: number;
  }) => {
    if (selectedBook) {
      dispatch({
        type: "UPDATE_BOOK_REVIEW",
        payload: {
          ...selectedBook,
          rating: details.rating,
          review: details.review,
          totalPages: details.totalPages,
        },
      });
    }
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-bookFlix-colors-background text-bookFlix-colors-secondary p-6">
      <h1 className="text-3xl font-bold text-bookFlix-colors-detail mb-4">
        Statistics
      </h1>
      <h2 className="text-xl mb-2">
        Total books read: {state.statistics.totalBooksRead}
      </h2>
      <h2 className="text-xl mb-4">
        Total pages read: {state.statistics.totalPagesRead}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {readBooks.map((book) => (
          <div
            key={book.key}
            onClick={() => handleBookClick(book)}
            className="cursor-pointer"
          >
            <BookCard book={book} addFavoriteButton={false} />
            {book.review && (
              <div className="p-4 bg-bookFlix-colors-primary rounded-md mt-2">
                <p className="text-lg font-semibold">Your Review:</p>
                <p>{book.review}</p>
                <div className="mt-2">
                  <StarRating count={5} value={book.rating ?? 0} />
                </div>
                <p>Total Pages: {book.totalPages}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {modalOpen && selectedBook && (
        <ModalManager
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          addFavoriteButton={false}
          item={selectedBook}
        >
          <BookReview book={selectedBook} onSubmit={handleReviewSubmit} />
        </ModalManager>
      )}
    </div>
  );
};

export default Statistics;

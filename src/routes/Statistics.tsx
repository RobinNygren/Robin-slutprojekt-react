import { useContext } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import BookCard from "../components/BookCard/BookCard";
import ModalManager from "../components/ModalManager/ModalManager";
import BookReview from "../components/BookReview/BookReview";
import { BookDetails } from "../types/types";
import StarRating from "../components/StarRating/StarRating";
import useModal from "../hooks/useModal";
import {
  calculateAverageLength,
  calculateAverageRating,
  calculateTotalPagesRead,
  calculateTotalRating,
} from "../utils/calculateStatistic";

const Statistics: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const readBooks = Object.values(state.readBooksDetails).filter(
    (book) => book.read
  );

  const totalReadBooks = readBooks.length;
  const totalFavoriteBooks = state.favoriteBooks.length;
  const totalPagesRead = calculateTotalPagesRead(readBooks);
  const averageRating = calculateAverageRating(readBooks);
  const averageLength = calculateAverageLength(readBooks);
  const totalRating = calculateTotalRating(readBooks);

  const { modalOpen, selectedItem, openModal, closeModal } = useModal();

  const handleBookClick = (book: BookDetails) => {
    openModal(book);
  };

  const handleReviewSubmit = (details: {
    rating: number;
    review: string;
    totalPages: number;
  }) => {
    if (selectedItem) {
      dispatch({
        type: "UPDATE_BOOK_REVIEW",
        payload: {
          ...selectedItem,
          rating: details.rating,
          review: details.review,
          totalPages: details.totalPages,
        },
      });
    }
    closeModal();
  };

  return (
    <div className="min-h-screen bg-bookFlix-colors-background text-bookFlix-colors-secondary p-6">
      <h1 className="text-3xl font-bold text-bookFlix-colors-detail mb-4">
        Statistics
      </h1>
      <h2 className="text-xl mb-2">Total books read: {totalReadBooks}</h2>
      <h2 className="text-xl mb-2">
        Total favorite books: {totalFavoriteBooks}
      </h2>
      <h2 className="text-xl mb-4">Total pages read: {totalPagesRead}</h2>
      <div className="mb-4">
        <p className="text-xl mb-2">
          Average rating of read books: {averageRating.toFixed(2)}
        </p>
        <p className="text-xl mb-2">
          Average number of pages of read books: {averageLength.toFixed(2)}
        </p>
        <p className="text-xl mb-2">
          Total rating of read books: {totalRating}
        </p>
      </div>
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
                <p>Total Pages Read: {book.totalPages}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {modalOpen && selectedItem && (
        <ModalManager
          isOpen={modalOpen}
          onClose={closeModal}
          addFavoriteButton={false}
          item={selectedItem}
        >
          <BookReview book={selectedItem} onSubmit={handleReviewSubmit} />
        </ModalManager>
      )}
    </div>
  );
};

export default Statistics;

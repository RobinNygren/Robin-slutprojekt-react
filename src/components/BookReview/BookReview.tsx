import React, { useState } from "react";
import { BookDetails, BookReviewProps } from "../../types/types";
import StarRating from "../StarRating/StarRating";

const BookReview: React.FC<BookReviewProps> = ({ book, onSubmit }) => {
  const [rating, setRating] = useState(book.rating || 0);
  const [review, setReview] = useState(book.review || "");
  const [totalPages, setTotalPages] = useState(book.totalPages || 0);

  const handleSubmit = () => {
    onSubmit({ rating, review, totalPages });
  };
  return (
    <>
      <div className="p-4 space-y-4 bg-bookFlix-colors-background text-bookFlix-colors-secondary">
        <h3 className="text-lg font-semibold">Review and Rate</h3>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Rating
          </label>
          <StarRating count={5} value={rating} onChange={setRating} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Review
          </label>
          <textarea
            className="block w-full p-2 border border-gray-600 rounded-md bg-bookFlix-colors-primary text-bookFlix-colors-secondary"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Total Pages
          </label>
          <input
            type="number"
            className="block w-full p-2 border border-gray-600 rounded-md bg-bookFlix-colors-primary text-bookFlix-colors-secondary"
            value={totalPages}
            onChange={(e) => setTotalPages(parseInt(e.target.value))}
            placeholder="Enter total pages read..."
          />
        </div>
        <button
          className="w-full p-2 text-white bg-bookFlix-colors-accent rounded-md"
          onClick={handleSubmit}
        >
          Submit Review
        </button>
      </div>
    </>
  );
};

export default BookReview;

import { BookDetails } from "../types/types";

export const calculateTotalPagesRead = (books: BookDetails[]): number => {
  return books.reduce((total, book) => total + (book.totalPages || 0), 0);
};

export const calculateAverageRating = (books: BookDetails[]): number => {
  const totalRating = books.reduce(
    (total, book) => total + (book.rating || 0),
    0
  );
  return books.length > 0 ? totalRating / books.length : 0;
};

export const calculateAverageLength = (books: BookDetails[]): number => {
  const totalPagesRead = calculateTotalPagesRead(books);
  return books.length > 0 ? totalPagesRead / books.length : 0;
};

export const calculateTotalRating = (books: BookDetails[]): number => {
  return books.reduce((total, book) => total + (book.rating || 0), 0);
};

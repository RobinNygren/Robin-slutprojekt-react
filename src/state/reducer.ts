import { Action, BookDetails, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case "ADD_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "REMOVE_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (book) => book.key !== action.payload.key
        ),
      };
    case "ADD_FAVORITE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, action.payload],
      };
    case "REMOVE_FAVORITE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter(
          (author) => author.key !== action.payload.key
        ),
      };
    case "SET_BOOK_AS_READ":
      const bookDetails: BookDetails = {
        ...action.payload,
        read: true,
        rating: 0,
        review: "",
        totalPages: 0,
      };
      return {
        ...state,
        readBooks: [...state.readBooks, action.payload],
        readBooksDetails: {
          ...state.readBooksDetails,
          [action.payload.key]: bookDetails,
        },
        statistics: {
          ...state.statistics,
          totalBooksRead: state.statistics.totalBooksRead + 1,
        },
      };

    case "UPDATE_BOOK_REVIEW":
      const updatedBooks = { ...state.readBooksDetails };
      const bookToUpdate = updatedBooks[action.payload.key];
      if (bookToUpdate) {
        updatedBooks[action.payload.key] = {
          ...bookToUpdate,
          rating: action.payload.rating,
          review: action.payload.review,
          totalPages: action.payload.totalPages,
        };
      }
      return {
        ...state,
        readBooksDetails: updatedBooks,
        statistics: {
          ...state.statistics,
          totalPagesRead:
            state.statistics.totalPagesRead + (action.payload.totalPages ?? 0),
        },
      };

    case "SET_MODAL_OPEN":
      return {
        ...state,
        modalOpen: true,
        selectedBook: action.payload,
      };
    case "SET_MODAL_CLOSED":
      return {
        ...state,
        modalOpen: false,
        selectedBook: null,
      };
    default:
      return state;
  }
};

export default reducer;

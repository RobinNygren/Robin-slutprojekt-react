import { Action, GlobalState } from "../types/types";

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
    case "ADD_STATISTICS":
      return {
        ...state,
        statistics: [...state.statistics, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;

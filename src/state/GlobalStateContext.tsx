import { createContext } from "react";
import { GlobalState, Action, Book, Author } from "../types/types";

export const initialState: GlobalState = {
  favoriteBooks: [] as Book[],
  favoriteAuthors: [] as Author[],
  statistics: { totalBooksRead: 0, totalPagesRead: 0 },
  readBooks: [] as Book[],
  readBooksDetails: {},
  modalOpen: false,
  selectedBook: null,
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

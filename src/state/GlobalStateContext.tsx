import { createContext } from "react";
import { GlobalState, Action, Book, Author, ApiResponse } from "../types/types";

export const initialState = {
  favoriteBooks: [] as Book[],
  favoriteAuthors: [] as Author[],
  statistics: [] as ApiResponse[],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

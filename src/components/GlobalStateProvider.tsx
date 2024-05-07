import { useReducer } from "react";
import { GlobalStateContext, initialState } from "../state/GlobalStateContext";
import reducer from "../state/reducer";
import { GlobalStateProviderProp } from "../types/types";

export const GlobalStateProvider = ({ children }: GlobalStateProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

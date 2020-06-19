import React, { useReducer } from "react";

const Context = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setAlbums":
      return { ...state, albums: action.payload };
    case "filterList":
      return { ...state, filterList: action.payload };
    case "setFilterForm":
      return {
        ...state,
        filterForm: { ...state.filterForm, ...action.payload },
      };
    default:
      return state;
  }
}

const initialState = {
  albums: [],
  filterList: [],
  filterForm: {
    value: "",
    option: "category",
  },
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export const ContextConsumer = Context.Consumer;

export default Context;

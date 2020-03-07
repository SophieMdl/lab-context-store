// store.js
import React, { createContext, useReducer } from "react";
import { themes } from "./themeContext";

const initialState = {
  theme: themes.light
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log(action, state, state.theme.themeName);
    switch (action.type) {
      case "switchTheme":
        const newState = {
          ...state,
          theme: state.theme.themeName === "light" ? themes.dark : themes.light
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  console.log(state);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

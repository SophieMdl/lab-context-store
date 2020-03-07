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
    const actions = {
      switchTheme: {
        ...state,
        theme: state.theme.themeName === "light" ? themes.dark : themes.light
      }
    };

    if (actions[action.type]) {
      return actions[action.type];
    }
    throw new Error();
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

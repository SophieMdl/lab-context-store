import React, { useContext } from "react";
import { store } from "./store.js";

const Button = () => {
  const globalStore = useContext(store);
  const { dispatch } = globalStore;

  const switchTheme = () => {
    dispatch({ type: "switchTheme" });
  };

  return <button onClick={() => switchTheme()}>Change theme</button>;
};

export default Button;

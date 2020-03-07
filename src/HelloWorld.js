import React, { useContext } from "react";
import { store } from "./store.js";

const HelloWorld = () => {
  const globalStore = useContext(store);
  const { dispatch } = globalStore;

  const switchTheme = () => {
    dispatch({ type: "switchTheme" });
  };

  const { themeStyle } = globalStore.state.theme;

  return (
    <div className="main" style={themeStyle}>
      <span>Hello World</span>
      <button onClick={() => switchTheme()}>Change theme</button>
    </div>
  );
};

export default HelloWorld;

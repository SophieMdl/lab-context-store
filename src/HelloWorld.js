import React, { useContext } from "react";
import { store } from "./store.js";
import Button from "./Button";

const HelloWorld = () => {
  const globalStore = useContext(store);

  const { themeStyle } = globalStore.state.theme;

  return (
    <div className="main" style={themeStyle}>
      <span>Hello World</span>
      <Button />
    </div>
  );
};

export default HelloWorld;

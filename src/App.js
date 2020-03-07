import React from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import { StateProvider } from "./store.js";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <HelloWorld />
      </StateProvider>
    </div>
  );
}

export default App;

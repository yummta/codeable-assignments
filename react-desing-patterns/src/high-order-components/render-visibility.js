import React from "react";
import widthGetVisibility from "./width-get-visibility";

function App({ isVisible, list }) {
  return (
    <>
      <h1>{isVisible}</h1>
      <ul>{list}</ul>
    </>
  );
}

const AppWithGetVisibility = widthGetVisibility(App);

export default AppWithGetVisibility;

import React from "react";

function RenderVisibility({ isVisible, list }) {
  return (
    <>
      <h1>{isVisible}</h1>
      <ul>{list}</ul>
    </>
  );
}

export default RenderVisibility;

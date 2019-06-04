import React from "react";
import useGetVisibility from "./use-get-visibility";

function RenderVisibility() {
  const { isVisible, list } = useGetVisibility();

  return (
    <>
      <h1>{isVisible}</h1>
      <ul>{list}</ul>
    </>
  );
}

export default RenderVisibility;

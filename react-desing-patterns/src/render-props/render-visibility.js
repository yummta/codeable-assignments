import React from "react";
import GetVisivility from "./get-visibility";

function RenderVisibility() {
  const renderElement = ({ isVisible, list }) => (
    <>
      <h1>{isVisible}</h1>
      <ul>{list}</ul>
    </>
  );

  return <GetVisivility render={renderElement} />;
}

export default RenderVisibility;

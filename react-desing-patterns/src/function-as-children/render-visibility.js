import React from "react";
import GetVisivility from "./get-visibility";

function RenderVisibility() {
  return (
    <GetVisivility>
      {({ isVisible, list }) => (
        <>
          <h1>{isVisible}</h1>
          <ul>{list}</ul>
        </>
      )}
    </GetVisivility>
  );
}

export default RenderVisibility;

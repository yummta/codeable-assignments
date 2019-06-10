import React from "react";
import { render } from "@testing-library/react";
import RenderVisibility from "./render-visibility";

jest.mock("./get-visibility", function({ cb }) {
  return cb({ isVisible: "Visible", list: [<li>Visible - 00:00:66</li>] });
});

test("RenderVisibility test", () => {
  const { asFragment } = render(<RenderVisibility />);

  expect(asFragment()).toMatchSnapshot();
});

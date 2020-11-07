import React from "react";
import { render } from "@testing-library/react";
import { Root } from "./Root";
import { createAppTheme } from "./theme";
import { createAppMenu } from "./menu";

test("renders App without throwing", () => {
  expect(() =>
    render(<Root theme={createAppTheme()} menu={createAppMenu()} />)
  ).not.toThrow();
});

import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { createAppTheme } from "../fixtures/theme";
import { createAppMenu } from "../fixtures/menu";

test("renders App without throwing", () => {
  expect(() =>
    render(<App theme={createAppTheme()} menu={createAppMenu()} />)
  ).not.toThrow();
});

import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { createAppTheme } from "../fixtures/theme";

test("renders App without throwing", () => {
  expect(() => render(<App theme={createAppTheme()} />)).not.toThrow();
});

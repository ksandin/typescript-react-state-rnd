import React from "react";
import { render } from "@testing-library/react";
import { Root } from "./Root";
import { createAppTheme } from "./fixtures/theme";
import { createRouter } from "./createRouter";
import { routes } from "./fixtures/routes";

test("renders App without throwing", () => {
  expect(() =>
    render(
      <Root
        theme={createAppTheme()}
        router={createRouter(routes)}
        routeConfig={routes}
      />
    )
  ).not.toThrow();
});

import React from "react";
import { render } from "@testing-library/react";
import { Root } from "./Root";
import { createAppTheme } from "./fixtures/theme";
import { createRouterForConfig } from "./createRouterForConfig";
import { routes } from "./fixtures/routes";

test("renders App without throwing", () => {
  expect(() => {
    const router = createRouterForConfig(routes);
    router.start();
    render(
      <Root theme={createAppTheme()} router={router} routeConfig={routes} />
    );
    router.stop();
  }).not.toThrow();
});

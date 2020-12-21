import React from "react";
import { render } from "@testing-library/react";
import { Root } from "./apps/root/Root";
import { createAppTheme } from "./apps/root/theme";
import { createRouterForConfig } from "./lib/react-router5-extensions/createRouterForConfig";
import { rootRoutes } from "./rootRoutes";

test("renders Root without throwing", () => {
  expect(() => {
    const router = createRouterForConfig(rootRoutes);
    router.start();
    render(
      <Root theme={createAppTheme()} router={router} routeConfig={rootRoutes} />
    );
    router.stop();
  }).not.toThrow();
});

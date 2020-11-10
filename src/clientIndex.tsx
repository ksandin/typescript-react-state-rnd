import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Root } from "./apps/root/Root";
import { createAppTheme } from "./apps/root/fixtures/theme";
import { createRouterForConfig } from "./apps/root/createRouterForConfig";
import { routes } from "./apps/root/fixtures/routes";
import browserPlugin from "router5-plugin-browser";

const router = createRouterForConfig(routes);
router.usePlugin(browserPlugin());
router.start();

ReactDOM.render(
  <React.StrictMode>
    <Root theme={createAppTheme()} router={router} routeConfig={routes} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import loggerPlugin from "router5-plugin-logger";
import reportWebVitals from "./reportWebVitals";
import { Root } from "./apps/root/Root";
import { createAppTheme } from "./apps/root/fixtures/theme";
import { createRouter } from "./apps/root/createRouter";
import { routes } from "./apps/root/fixtures/routes";

const router = createRouter(routes);
if (process.env.NODE_ENV === "development") {
  router.usePlugin(loggerPlugin);
}

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

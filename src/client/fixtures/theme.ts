import { createMuiTheme } from "@material-ui/core/styles";
import { globalCSS } from "./globalCSS";

export const createAppTheme = () =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": globalCSS,
      },
    },
    palette: {
      type: "dark",
    },
  });

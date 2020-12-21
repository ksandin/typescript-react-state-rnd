import { createMuiTheme } from "@material-ui/core/styles";
import { drawerWidth } from "./drawerWidth";

export const createAppTheme = () =>
  createMuiTheme({
    overrides: {
      MuiDialog: {
        paper: {
          // HACK doesn't look good on small devices, should add breakpoints
          left: drawerWidth / 2,
        },
      },
    },
    palette: {
      type: "dark",
      background: {
        default: "#101021",
      },
    },
  });

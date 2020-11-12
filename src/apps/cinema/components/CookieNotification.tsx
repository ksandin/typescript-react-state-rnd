import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import { Link } from "./Link";

export const CookieNotification = () => {
  const [open, setOpen] = useState(!isCookiesAccepted());
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    acceptCookies();
    setOpen(false);
  };
  return (
    <Snackbar open={open} onClose={handleClose}>
      <CookieAcceptAlert onClose={handleClose} />
    </Snackbar>
  );
};

const CookieAcceptAlert: React.FC<AlertProps> = (props) => (
  <Alert severity="info" {...props}>
    This website uses cookies. You can change your cookie settings in your web
    browser at any time, but we can't guarantee the website works as it should
    when cookies are disabled.{" "}
    <Link routeName="cookie-policy">Read our cookie policy here.</Link>
  </Alert>
);

const isCookiesAccepted = (): boolean =>
  !!localStorage.getItem("cinema-cookies-accepted");

const acceptCookies = () =>
  localStorage.setItem("cinema-cookies-accepted", "yes");

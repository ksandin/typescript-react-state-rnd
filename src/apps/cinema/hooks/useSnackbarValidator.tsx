import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export const useSnackbarValidator = (getError: () => string | undefined) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState<string>();
  const handleClose = () => setOpen(false);
  const validate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newError = getError();
    if (newError) {
      setOpen(true);
      setError(newError);
      // Stops links and parent elements that might have click event handlers
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const snackbar = (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
  return { snackbar, validate };
};

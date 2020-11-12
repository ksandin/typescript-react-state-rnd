import React from "react";
import { Dialog, DialogProps } from "@material-ui/core";
import { MoviePlayer } from "./MoviePlayer";

export type MoviePlayerDialogProps = Omit<DialogProps, "onClose"> & {
  autoPlay?: boolean;
  onClose?: (
    event: {},
    reason: "backdropClick" | "escapeKeyDown" | "close"
  ) => void;
};

export const MoviePlayerDialog: React.FC<MoviePlayerDialogProps> = ({
  onClose = () => {},
  ...props
}) => {
  return (
    <Dialog onClose={onClose} {...props}>
      <MoviePlayer />
    </Dialog>
  );
};

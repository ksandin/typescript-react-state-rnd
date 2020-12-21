import React from "react";
import { Dialog, DialogProps } from "@material-ui/core";
import { MoviePlayer, MoviePlayerProps } from "./MoviePlayer";

export type MoviePlayerDialogProps = Omit<DialogProps, "onClose"> & {
  moviePlayerProps?: MoviePlayerProps;
  onClose?: (
    event: {},
    reason: "backdropClick" | "escapeKeyDown" | "close"
  ) => void;
};

export const MoviePlayerDialog: React.FC<MoviePlayerDialogProps> = ({
  onClose = () => {},
  moviePlayerProps,
  ...props
}) => {
  return (
    <Dialog
      PaperProps={{ style: { overflowY: "hidden" } }}
      maxWidth={false}
      onClose={onClose}
      {...props}
    >
      <MoviePlayer
        muted
        playing
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
        {...moviePlayerProps}
      />
    </Dialog>
  );
};

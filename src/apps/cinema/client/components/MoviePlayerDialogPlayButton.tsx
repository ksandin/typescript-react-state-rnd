import React, { useState } from "react";
import { PlayButton, PlayButtonProps } from "./PlayButton";
import { MoviePlayerDialog, MoviePlayerDialogProps } from "./MoviePlayerDialog";

export type MoviePlayerDialogPlayButtonProps = PlayButtonProps & {
  dialogProps?: Omit<MoviePlayerDialogProps, "open" | "onClose">;
  renderButton?: (playButton: JSX.Element, open: () => void) => JSX.Element;
};

export const MoviePlayerDialogPlayButton: React.FC<MoviePlayerDialogPlayButtonProps> = ({
  renderButton = (el) => el,
  dialogProps,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <>
      <MoviePlayerDialog open={isOpen} onClose={close} {...dialogProps} />
      {renderButton(<PlayButton onClick={open} {...props} />, open)}
    </>
  );
};

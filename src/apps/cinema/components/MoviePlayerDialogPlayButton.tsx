import React, { useState } from "react";
import { PlayButton, PlayButtonProps } from "./PlayButton";
import { MoviePlayerDialog } from "./MoviePlayerDialog";

export type MoviePlayerDialogPlayButtonProps = PlayButtonProps & {
  renderButton?: (playButton: JSX.Element, open: () => void) => JSX.Element;
};

export const MoviePlayerDialogPlayButton: React.FC<MoviePlayerDialogPlayButtonProps> = ({
  renderButton = (el) => el,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <>
      <MoviePlayerDialog open={isOpen} onClose={close} autoPlay />
      {renderButton(<PlayButton onClick={open} {...props} />, open)}
    </>
  );
};

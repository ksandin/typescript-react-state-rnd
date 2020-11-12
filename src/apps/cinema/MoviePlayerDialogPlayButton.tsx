import React, { useState } from "react";
import { PlayButton } from "./PlayButton";
import { MoviePlayerDialog } from "./MoviePlayerDialog";

export type MoviePlayerDialogPlayButtonProps = {};

export const MoviePlayerDialogPlayButton: React.FC<MoviePlayerDialogPlayButtonProps> = () => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <>
      <MoviePlayerDialog open={isOpen} onClose={close} autoPlay />
      <PlayButton onClick={open} />
    </>
  );
};

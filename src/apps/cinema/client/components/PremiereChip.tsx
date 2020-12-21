import React from "react";
import { Chip, ChipProps } from "@material-ui/core";
import { commonDateFormat } from "../functions/commonDateFormat";
import { useNow } from "../hooks/useNow";

export type PremiereProps = ChipProps & {
  date: Date;
};

export const PremiereChip = ({ date, ...props }: PremiereProps) => {
  const now = useNow();
  if (now >= date) {
    return null;
  }
  return (
    <Chip
      label={`Premiere ${commonDateFormat(date)}`}
      color="primary"
      {...props}
    />
  );
};

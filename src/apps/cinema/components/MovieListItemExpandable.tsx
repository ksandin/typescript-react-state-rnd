import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { MovieListItem, MovieListItemProps } from "./MovieListItem";
import { Button } from "@material-ui/core";

export type MovieListItemExpandableProps = MovieListItemProps & {
  expanded?: boolean;
  fixed?: boolean;
};

export const MovieListItemExpandable: React.FC<MovieListItemExpandableProps> = ({
  children,
  expanded: initialExpanded,
  fixed,
  ...props
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const toggle = () => setExpanded(!expanded);
  const toggleIcon = expanded ? <ExpandLess /> : <ExpandMore />;
  const toggleText = expanded ? "Hide shows" : "View shows";
  const showToggle = !fixed;
  return (
    <>
      <MovieListItem {...props}>
        {showToggle && (
          <Button
            variant="contained"
            color="primary"
            endIcon={toggleIcon}
            onClick={toggle}
          >
            {toggleText}
          </Button>
        )}
      </MovieListItem>
      {expanded && children}
    </>
  );
};

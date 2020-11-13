import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { MovieListItem } from "./MovieListItem";
import { Button, Collapse } from "@material-ui/core";

export type MovieListItemExpandableProps = {
  expanded?: boolean;
  fixed?: boolean;
};

export const MovieListItemExpandable: React.FC<MovieListItemExpandableProps> = ({
  children,
  expanded: initialExpanded,
  fixed,
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const toggle = () => setExpanded(!expanded);
  const toggleIcon = expanded ? <ExpandLess /> : <ExpandMore />;
  const toggleText = expanded ? "Hide shows" : "View shows";
  const showToggle = !fixed;
  return (
    <>
      <MovieListItem>
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
      <Collapse in={expanded}>{children}</Collapse>
    </>
  );
};

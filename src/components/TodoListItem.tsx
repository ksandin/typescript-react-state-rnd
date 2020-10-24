import React from "react";
import { Todo } from "../state/Todo";
import {
  Checkbox,
  CheckboxProps,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Label } from "@material-ui/icons";

export type TodoListItemProps = {
  item: Todo;
  onCheckboxChange?: CheckboxProps["onChange"];
};

export const TodoListItem: React.FC<TodoListItemProps> = ({
  item,
  onCheckboxChange,
}) => (
  <ListItem button>
    <ListItemIcon>
      <Label />
    </ListItemIcon>
    <ListItemText primary={item.label} />
    <ListItemSecondaryAction>
      <Checkbox edge="end" onChange={onCheckboxChange} checked={item.done} />
    </ListItemSecondaryAction>
  </ListItem>
);

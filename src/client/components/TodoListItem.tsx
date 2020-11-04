import React, { useCallback } from "react";
import { Todo } from "../../shared/state/Todo";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete, Label } from "@material-ui/icons";
import { toggleTodoDone } from "../../shared/state/toggleTodoDone";

export type TodoListItemProps = {
  item: Todo;
  onUpdate: (newItem: Todo) => void;
  onDelete: (item: Todo) => void;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({
  item,
  onUpdate,
  onDelete,
}) => {
  const emitUpdate = useCallback((newItem: Todo) => onUpdate(newItem), [
    onUpdate,
  ]);
  const emitDelete = useCallback(() => onDelete(item), [item, onDelete]);
  const toggleDone = useCallback(() => emitUpdate(toggleTodoDone(item)), [
    item,
    emitUpdate,
  ]);
  return (
    <ListItem button>
      <ListItemIcon>
        <Label />
      </ListItemIcon>
      <ListItemText primary={item.label} />
      <ListItemSecondaryAction>
        <Checkbox edge="end" onChange={toggleDone} checked={item.done} />
        <IconButton onClick={emitDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

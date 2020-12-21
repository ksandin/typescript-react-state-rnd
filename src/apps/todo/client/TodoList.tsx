import React from "react";
import { List } from "@material-ui/core";
import { Todo } from "../shared/Todo";
import { TodoListItem, TodoListItemProps } from "./TodoListItem";

export type TodoListProps = Pick<TodoListItemProps, "onUpdate" | "onDelete"> & {
  items: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({
  items,
  onUpdate,
  onDelete,
}) => {
  if (!items.length) {
    return null;
  }
  return (
    <List>
      {items.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

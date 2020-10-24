import React from "react";
import { List } from "@material-ui/core";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "../state/Todo";

export type TodoListProps = {
  items: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <TodoListItem key={index} item={item} />
    ))}
  </List>
);

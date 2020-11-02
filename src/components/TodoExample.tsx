import React from "react";
import { TodoList } from "./TodoList";
import { CreateTodoForm } from "./CreateTodoForm";
import { Todo } from "../state/Todo";
import { ActionStatuses } from "../lib/store/ActionStatuses";

export type TodoExampleProps = {
  todos: Todo[];
  statuses?: ActionStatuses<"create" | "update" | "delete">;
  createTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export const TodoExample: React.FC<TodoExampleProps> = ({
  todos,
  statuses,
  createTodo,
  updateTodo,
  deleteTodo,
}) => (
  <>
    <TodoList items={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    <CreateTodoForm
      onCreate={createTodo}
      loading={statuses?.create.status === "pending"}
    />
  </>
);

import React from "react";
import { TodoList } from "./TodoList";
import { CreateTodoForm } from "./CreateTodoForm";
import { Todo } from "../state/Todo";
import { Dispatches } from "../lib/store/Dispatches";

export type TodoExampleProps = {
  todos: Todo[];
  dispatches?: Dispatches<"create" | "update" | "delete">;
  createTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export const TodoExample: React.FC<TodoExampleProps> = ({
  todos,
  dispatches,
  createTodo,
  updateTodo,
  deleteTodo,
}) => (
  <>
    <TodoList items={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    <CreateTodoForm
      onCreate={createTodo}
      loading={dispatches?.create.status === "pending"}
    />
  </>
);

import React, { useEffect } from "react";
import { Todo } from "../shared/Todo";
import { Dispatches } from "../../../lib/store/Dispatches";
import { TodoId } from "../shared/TodoId";
import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";

export type TodoAppProps = {
  todos: Todo[];
  dispatches?: Dispatches<"create" | "update" | "delete">;
  createTodo: (todo: Todo) => void;
  readAllTodos?: () => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: TodoId) => void;
};

export const TodoApp: React.FC<TodoAppProps> = ({
  todos,
  dispatches,
  createTodo,
  readAllTodos,
  updateTodo,
  deleteTodo,
}) => {
  useEffect(() => {
    if (readAllTodos) {
      readAllTodos();
    }
  }, [readAllTodos]);
  return (
    <>
      <TodoList
        items={todos}
        onUpdate={updateTodo}
        onDelete={(todo) => deleteTodo(todo.id)}
      />
      <CreateTodoForm
        onCreate={createTodo}
        loading={dispatches?.create.status === "pending"}
      />
    </>
  );
};

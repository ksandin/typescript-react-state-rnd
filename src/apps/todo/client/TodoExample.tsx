import React, { useEffect } from "react";
import { TodoList } from "./TodoList";
import { CreateTodoForm } from "./CreateTodoForm";
import { Todo } from "../shared/Todo";
import { Dispatches } from "../../../lib/store/Dispatches";
import { TodoId } from "../shared/TodoId";

export type TodoExampleProps = {
  todos: Todo[];
  dispatches?: Dispatches<"create" | "update" | "delete">;
  createTodo: (todo: Todo) => void;
  readAllTodos?: () => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: TodoId) => void;
};

export const TodoExample: React.FC<TodoExampleProps> = ({
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
